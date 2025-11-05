/**
 * 简化版炼妖概率计算
 * 只关注技能数量，不关注具体技能名称
 */

export interface SimplePetInput {
  totalSkillCount: number; // 总技能数
  mustHaveSkillCount: number; // 必带技能数
  specialSkillCount: number; // 特殊技能数（可选，用于单独追踪）
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
  // 这里的skillCount是继承的总技能数（不包含必带技能）
  skillProbabilities: SkillCountProbability[];

  // 主宠和副宠的详细概率分布（用于前端显示）
  mainPetSkillDistribution: Map<number, number>; // 技能数 -> 概率
  subPetSkillDistribution: Map<number, number>;  // 技能数 -> 概率

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
 *
 * 正确的计算逻辑：
 * 1. 主宠和副宠的技能池是分开的
 * 2. 每个宠物的每个非必带技能都有30%概率被继承
 * 3. 最终技能数 = 继承的主宠技能数 + 继承的副宠技能数 + 结果宠物的必带技能数
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
  const totalSkillPool = petA.totalSkillCount + petB.totalSkillCount + petA.mustHaveSkillCount + petB.mustHaveSkillCount - duplicateSkillCount;
  const specialSkillPool = petA.specialSkillCount + petB.specialSkillCount;

  // 3. 非必带技能数
  // 注意：totalSkillCount 本身就表示非必带技能数，不需要再减去必带技能数
  const petANonMustHave = petA.totalSkillCount;
  const petBNonMustHave = petB.totalSkillCount;

  // 4. 计算所有可能的技能数组合及其概率
  // 主宠可以继承 0 到 petANonMustHave 个技能
  // 副宠可以继承 0 到 petBNonMustHave 个技能

  // 主宠结果：计算所有可能的(继承主宠技能数, 继承副宠技能数)组合
  const mainPetProbs = new Map<number, number>(); // 最终技能数 -> 概率

  for (let inheritFromA = 0; inheritFromA <= petANonMustHave; inheritFromA++) {
    for (let inheritFromB = 0; inheritFromB <= petBNonMustHave; inheritFromB++) {
      // 主宠继承inheritFromA个技能的概率
      const probA = binomialProbability(petANonMustHave, inheritFromA, 0.3);
      // 副宠继承inheritFromB个技能的概率
      const probB = binomialProbability(petBNonMustHave, inheritFromB, 0.3);
      // 联合概率
      const jointProb = probA * probB;

      // 最终技能数 = 继承的技能 + 主宠必带技能
      const finalSkillCount = inheritFromA + inheritFromB + petA.mustHaveSkillCount;

      mainPetProbs.set(
        finalSkillCount,
        (mainPetProbs.get(finalSkillCount) || 0) + jointProb
      );
    }
  }

  // 副宠结果：同样的逻辑
  const subPetProbs = new Map<number, number>();

  for (let inheritFromA = 0; inheritFromA <= petANonMustHave; inheritFromA++) {
    for (let inheritFromB = 0; inheritFromB <= petBNonMustHave; inheritFromB++) {
      const probA = binomialProbability(petANonMustHave, inheritFromA, 0.3);
      const probB = binomialProbability(petBNonMustHave, inheritFromB, 0.3);
      const jointProb = probA * probB;

      // 最终技能数 = 继承的技能 + 副宠必带技能
      const finalSkillCount = inheritFromA + inheritFromB + petB.mustHaveSkillCount;

      subPetProbs.set(
        finalSkillCount,
        (subPetProbs.get(finalSkillCount) || 0) + jointProb
      );
    }
  }

  // 5. 生成返回数据
  // 找到所有可能的技能数
  const allSkillCounts = new Set<number>();
  mainPetProbs.forEach((_, count) => allSkillCounts.add(count));
  subPetProbs.forEach((_, count) => allSkillCounts.add(count));

  const sortedCounts = Array.from(allSkillCounts).sort((a, b) => a - b);

  // 为了保持接口兼容，我们返回一个基础概率数组
  // 这个数组包含所有可能的继承技能数（0到总数）
  const maxInherited = petANonMustHave + petBNonMustHave;
  const baseSkillProbabilities: SkillCountProbability[] = [];

  // 这里我们存储的是"继承的技能数"的概率分布
  // 前端会根据主副宠分别计算最终技能数
  for (let k = 0; k <= maxInherited; k++) {
    // 计算继承k个技能的所有可能组合的概率
    let totalProb = 0;
    for (let fromA = 0; fromA <= Math.min(k, petANonMustHave); fromA++) {
      const fromB = k - fromA;
      if (fromB >= 0 && fromB <= petBNonMustHave) {
        const probA = binomialProbability(petANonMustHave, fromA, 0.3);
        const probB = binomialProbability(petBNonMustHave, fromB, 0.3);
        totalProb += probA * probB;
      }
    }

    baseSkillProbabilities.push({
      skillCount: k,
      probability: totalProb,
      percentage: (totalProb * 100).toFixed(2) + '%',
    });
  }

  // 6. 计算期望技能数
  let expectedSkillCount = 0;
  mainPetProbs.forEach((prob, skillCount) => {
    expectedSkillCount += skillCount * prob * resultTypes.mainPet;
  });
  subPetProbs.forEach((prob, skillCount) => {
    expectedSkillCount += skillCount * prob * resultTypes.subPet;
  });

  const skillProbabilities = baseSkillProbabilities;

  // 7. 计算特殊技能保留概率分布
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
    mainPetSkillDistribution: mainPetProbs,
    subPetSkillDistribution: subPetProbs,
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
