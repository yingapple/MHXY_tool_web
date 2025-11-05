/**
 * 简化版炼妖概率计算
 * 只关注技能数量，不关注具体技能名称
 */

export interface SimplePetInput {
  totalSkillCount: number; // 总技能数
  mustHaveSkillCount: number; // 必带技能数
  specialSkillCount: number; // 特殊技能数（如高级必杀、高级神佑等）
}

export interface SimpleCalculationInput {
  petA: SimplePetInput;
  petB: SimplePetInput;
  duplicateSkillCount: number; // 重复技能数
  wildProb: number; // 野生概率 (默认10%)
  specialProb: number; // 特殊宠概率(大海龟/泡泡) (默认10%)
}

export interface SkillCountProbability {
  skillCount: number;
  probability: number;
  percentage: string; // 百分比字符串，如 "36.0%"
}

export interface SpecialSkillProbability {
  specialSkillCount: number; // 保留的特殊技能数量
  probability: number;
  percentage: string;
}

export interface SimpleCalculationResult {
  // 结果种类概率
  resultTypes: {
    mainPet: number; // 40%
    subPet: number; // 40%
    wild: number; // 10%
    special: number; // 10%
  };

  // 技能数量概率分布 (数组形式，方便图表展示)
  skillProbabilities: SkillCountProbability[];

  // 特殊技能保留概率分布 (新增)
  specialSkillProbabilities: SpecialSkillProbability[];

  // 期望技能数
  expectedSkillCount: number;

  // 期望特殊技能数
  expectedSpecialSkillCount: number;

  // 基础概率信息
  baseInfo: {
    skillRetentionRate: number; // 技能保留概率 (30%)
    totalSkillPool: number; // 总技能池大小
    specialSkillPool: number; // 特殊技能池大小
    mustHaveSkillCount: number; // 必带技能数
  };
}

/**
 * 计算组合数 C(n, k) = n! / (k! * (n-k)!)
 */
function combination(n: number, k: number): number {
  if (k > n) return 0;
  if (k === 0 || k === n) return 1;

  let result = 1;
  for (let i = 1; i <= k; i++) {
    result = (result * (n - i + 1)) / i;
  }

  return result;
}

/**
 * 计算二项分布概率
 * P(X = k) = C(n, k) * p^k * (1-p)^(n-k)
 */
function binomialProbability(n: number, k: number, p: number): number {
  if (n === 0) return k === 0 ? 1 : 0; // 特殊情况：没有技能池
  const combValue = combination(n, k);
  const probSuccess = Math.pow(p, k);
  const probFailure = Math.pow(1 - p, n - k);

  return combValue * probSuccess * probFailure;
}

/**
 * 简化版炼妖概率计算
 */
export function calculateSimpleRefinement(input: SimpleCalculationInput): SimpleCalculationResult {
  const { petA, petB, duplicateSkillCount, wildProb, specialProb } = input;

  // 1. 计算结果种类概率
  const remaining = 1 - wildProb - specialProb;
  const resultTypes = {
    mainPet: remaining / 2,
    subPet: remaining / 2,
    wild: wildProb,
    special: specialProb,
  };

  // 2. 计算技能池大小
  // 技能池 = petA总技能数 + petB总技能数 - 重复技能数
  const totalSkillPool = petA.totalSkillCount + petB.totalSkillCount - duplicateSkillCount;

  // 3. 计算特殊技能池大小（假设特殊技能不重复）
  const specialSkillPool = petA.specialSkillCount + petB.specialSkillCount;

  // 4. 计算非必带技能池（所有非必带技能都可能被继承）
  // 注意：主副宠必带技能包含在totalSkillPool中，需要分别计算
  const petANonMustHave = petA.totalSkillCount - petA.mustHaveSkillCount;
  const petBNonMustHave = petB.totalSkillCount - petB.mustHaveSkillCount;

  // 总的非必带技能池（去除重复）
  // 这里简化处理：假设重复技能主要是非必带技能
  const totalNonMustHavePool = petANonMustHave + petBNonMustHave - duplicateSkillCount;

  // 5. 为每种结果类型分别计算技能数量概率
  const skillProbabilitiesMap = new Map<number, number>(); // skillCount -> totalProbability
  let expectedSkillCount = 0;

  // 5.1 主宠结果（40%概率）
  for (let k = 0; k <= totalNonMustHavePool; k++) {
    const inheritProb = binomialProbability(totalNonMustHavePool, k, 0.3);
    const finalSkillCount = k + petA.mustHaveSkillCount; // 继承技能 + 主宠必带技能
    const totalProb = inheritProb * resultTypes.mainPet;

    skillProbabilitiesMap.set(
      finalSkillCount,
      (skillProbabilitiesMap.get(finalSkillCount) || 0) + totalProb
    );
    expectedSkillCount += finalSkillCount * totalProb;
  }

  // 5.2 副宠结果（40%概率）
  for (let k = 0; k <= totalNonMustHavePool; k++) {
    const inheritProb = binomialProbability(totalNonMustHavePool, k, 0.3);
    const finalSkillCount = k + petB.mustHaveSkillCount; // 继承技能 + 副宠必带技能
    const totalProb = inheritProb * resultTypes.subPet;

    skillProbabilitiesMap.set(
      finalSkillCount,
      (skillProbabilitiesMap.get(finalSkillCount) || 0) + totalProb
    );
    expectedSkillCount += finalSkillCount * totalProb;
  }

  // 5.3 野生宠物结果（10%概率，不继承技能）
  // 野生宠物是独立的结果类型，不参与技能继承

  // 5.4 特殊宠物结果（10%概率，不继承技能）
  // 特殊宠物（大海龟/泡泡）是独立的结果类型，不参与技能继承

  // 转换为数组并排序
  const skillProbabilities: SkillCountProbability[] = Array.from(skillProbabilitiesMap.entries())
    .map(([skillCount, probability]) => ({
      skillCount,
      probability,
      percentage: (probability * 100).toFixed(2) + '%',
    }))
    .sort((a, b) => a.skillCount - b.skillCount);

  // 安全检查：确保至少有一个概率条目（防止空数组错误）
  if (skillProbabilities.length === 0) {
    // 如果技能池为空，至少返回必带技能的概率
    const minSkillCount = Math.max(petA.mustHaveSkillCount, petB.mustHaveSkillCount);
    skillProbabilities.push({
      skillCount: minSkillCount,
      probability: resultTypes.mainPet + resultTypes.subPet, // 主宠或副宠的总概率
      percentage: ((resultTypes.mainPet + resultTypes.subPet) * 100).toFixed(2) + '%',
    });
  }

  // 6. 计算特殊技能保留概率分布
  const specialSkillProbabilities: SpecialSkillProbability[] = [];
  let expectedSpecialSkillCount = 0;

  // 遍历所有可能的特殊技能保留数量
  for (let k = 0; k <= specialSkillPool; k++) {
    const probability = binomialProbability(specialSkillPool, k, 0.3);

    specialSkillProbabilities.push({
      specialSkillCount: k,
      probability,
      percentage: (probability * 100).toFixed(2) + '%',
    });

    expectedSpecialSkillCount += k * probability;
  }

  return {
    resultTypes,
    skillProbabilities,
    specialSkillProbabilities,
    expectedSkillCount: parseFloat(expectedSkillCount.toFixed(2)),
    expectedSpecialSkillCount: parseFloat(expectedSpecialSkillCount.toFixed(2)),
    baseInfo: {
      skillRetentionRate: 0.3,
      totalSkillPool,
      specialSkillPool,
      mustHaveSkillCount: Math.max(petA.mustHaveSkillCount, petB.mustHaveSkillCount), // 显示最大值作为参考
    },
  };
}

/**
 * 批量模拟炼妖（蒙特卡洛模拟）
 */
export function simulateMultipleRefinements(
  input: SimpleCalculationInput,
  attemptCount: number = 100
): {
  results: { attemptNumber: number; resultType: string; skillCount: number }[];
  summary: {
    resultTypeCounts: Record<string, number>;
    skillCountDistribution: Record<number, number>;
    averageSkillCount: number;
  };
} {
  const results: { attemptNumber: number; resultType: string; skillCount: number }[] = [];
  const resultTypeCounts: Record<string, number> = {
    mainPet: 0,
    subPet: 0,
    wild: 0,
    special: 0,
  };
  const skillCountDistribution: Record<number, number> = {};
  let totalSkillCount = 0;

  const { petA, petB, duplicateSkillCount, wildProb, specialProb } = input;
  const totalSkillPool = petA.totalSkillCount + petB.totalSkillCount - duplicateSkillCount;
  const mustHaveSkillsInPool = Math.max(petA.mustHaveSkillCount, petB.mustHaveSkillCount);
  const nonMustHaveSkillPool = totalSkillPool - mustHaveSkillsInPool;

  for (let i = 1; i <= attemptCount; i++) {
    // 1. 随机确定结果种类
    const rand = Math.random();
    const remaining = 1 - wildProb - specialProb;
    let resultType: string;

    if (rand < remaining / 2) {
      resultType = 'mainPet';
    } else if (rand < remaining) {
      resultType = 'subPet';
    } else if (rand < remaining + wildProb) {
      resultType = 'wild';
    } else {
      resultType = 'special';
    }

    resultTypeCounts[resultType]++;

    // 2. 随机继承技能
    let inheritedNonMustHaveSkills = 0;
    for (let j = 0; j < nonMustHaveSkillPool; j++) {
      if (Math.random() < 0.3) {
        inheritedNonMustHaveSkills++;
      }
    }

    const skillCount = inheritedNonMustHaveSkills + mustHaveSkillsInPool;
    skillCountDistribution[skillCount] = (skillCountDistribution[skillCount] || 0) + 1;
    totalSkillCount += skillCount;

    results.push({
      attemptNumber: i,
      resultType,
      skillCount,
    });
  }

  return {
    results,
    summary: {
      resultTypeCounts,
      skillCountDistribution,
      averageSkillCount: parseFloat((totalSkillCount / attemptCount).toFixed(2)),
    },
  };
}
