// 概率计算核心算法

import {
  SkillProbability,
  ResultTypeProbability,
  CalculationInput,
  CalculationResult,
  QualificationPrediction,
  QualificationRangeWithExpected,
  CostBenefitAnalysis,
} from '@/types/calculator';
import { Qualification } from '@/types/pet';

/**
 * 计算组合数 C(n, k) = n! / (k! * (n-k)!)
 */
export function combination(n: number, k: number): number {
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
 *
 * @param n - 试验次数(技能池大小)
 * @param k - 成功次数(继承的技能数)
 * @param p - 成功概率(0.3)
 */
export function binomialProbability(n: number, k: number, p: number): number {
  const combValue = combination(n, k);
  const probSuccess = Math.pow(p, k);
  const probFailure = Math.pow(1 - p, n - k);

  return combValue * probSuccess * probFailure;
}

/**
 * 计算技能继承的概率分布
 *
 * @param mainPetSkills - 主宠技能列表
 * @param subPetSkills - 副宠技能列表
 * @param mustHaveSkills - 必带技能列表
 * @returns 技能数量概率分布
 */
export function calculateSkillProbability(
  mainPetSkills: string[],
  subPetSkills: string[],
  mustHaveSkills: string[]
): SkillProbability {
  // 1. 合并技能池(去重)
  const skillPool = Array.from(new Set([...mainPetSkills, ...subPetSkills]));

  // 2. 移除必带技能(单独计算)
  const inheritableSkills = skillPool.filter((skill) => !mustHaveSkills.includes(skill));

  // 3. 计算每种技能数量的概率
  const n = inheritableSkills.length;
  const p = 0.3; // 30%保留概率
  const probabilities: SkillProbability = {};

  for (let k = 0; k <= n; k++) {
    const inheritedCount = k;
    const finalCount = inheritedCount + mustHaveSkills.length;
    const probability = binomialProbability(n, k, p);

    probabilities[finalCount] = probability;
  }

  return probabilities;
}

/**
 * 计算期望技能数
 */
export function calculateExpectedSkillCount(skillProbabilities: SkillProbability): number {
  let expected = 0;
  for (const [skillCount, probability] of Object.entries(skillProbabilities)) {
    expected += parseInt(skillCount) * probability;
  }
  return parseFloat(expected.toFixed(2));
}

/**
 * 计算结果宠物种类的概率分布
 *
 * @param wildProb - 野生概率(用户可调)
 * @param specialProb - 特殊宠概率(用户可调)
 * @returns 各种结果的概率
 */
export function calculateResultTypeProbability(
  wildProb: number = 0.1,
  specialProb: number = 0.1
): ResultTypeProbability {
  const remaining = 1 - wildProb - specialProb;

  return {
    mainPet: remaining / 2,
    subPet: remaining / 2,
    wild: wildProb,
    special: specialProb,
  };
}

/**
 * 计算资质的预测范围
 *
 * @param mainQual - 主宠资质
 * @param subQual - 副宠资质
 * @returns 预测的资质范围
 */
export function calculateQualificationRange(
  mainQual: Qualification,
  subQual: Qualification
): QualificationPrediction {
  const result = {} as QualificationPrediction;

  const keys: (keyof Qualification)[] = ['attack', 'defense', 'hp', 'mana', 'speed'];

  for (const key of keys) {
    const avg = (mainQual[key] + subQual[key]) / 2;

    result[key] = {
      min: Math.floor(avg * 0.9),
      max: Math.ceil(avg * 1.1),
      expected: Math.round(avg),
    };
  }

  return result;
}

/**
 * 计算成长率的预测范围
 */
export function calculateGrowthRange(
  mainGrowth: number,
  subGrowth: number
): QualificationRangeWithExpected {
  const avg = (mainGrowth + subGrowth) / 2;

  return {
    min: parseFloat((avg * 0.95).toFixed(2)),
    max: parseFloat((avg * 1.05).toFixed(2)),
    expected: parseFloat(avg.toFixed(2)),
  };
}

/**
 * 计算手续费
 */
export function calculateHandlingFee(mainPetLevel: number, subPetLevel: number): number {
  return (mainPetLevel + subPetLevel) * 500;
}

/**
 * 计算成本收益分析
 *
 * @param mainPetPrice - 主宠价格
 * @param subPetPrice - 副宠价格
 * @param handlingFee - 手续费
 * @param targetSkillCount - 目标技能数
 * @param skillProbabilities - 技能数量概率分布
 * @param marketPrice - 目标宠物市场价格
 */
export function calculateCostBenefit(
  mainPetPrice: number,
  subPetPrice: number,
  handlingFee: number,
  targetSkillCount: number,
  skillProbabilities: SkillProbability,
  marketPrice: number
): CostBenefitAnalysis {
  const singleCost = mainPetPrice + subPetPrice + handlingFee;

  // 计算达到目标技能数的累计概率(>=目标)
  let targetProbability = 0;
  for (const [skillCount, probability] of Object.entries(skillProbabilities)) {
    if (parseInt(skillCount) >= targetSkillCount) {
      targetProbability += probability;
    }
  }

  // 期望尝试次数 = 1 / 概率 (几何分布)
  const expectedAttempts =
    targetProbability > 0 ? Math.ceil(1 / targetProbability) : Infinity;

  const totalCost = singleCost * expectedAttempts;
  const expectedProfit = marketPrice - totalCost;
  const profitable = expectedProfit > 0;

  let recommendation = '';
  if (targetProbability < 0.01) {
    recommendation = '⚠️ 目标过高，成功概率极低，建议降低目标技能数';
  } else if (!profitable) {
    recommendation = '❌ 预期亏损，不建议炼妖。考虑提高胚子质量或降低目标';
  } else if (expectedProfit > totalCost * 0.5) {
    recommendation = '✅ 高收益项目！值得尝试';
  } else {
    recommendation = '💰 有利可图，但收益率一般，谨慎决策';
  }

  return {
    singleCost,
    handlingFee,
    targetSkillCount,
    targetProbability,
    expectedAttempts: expectedAttempts === Infinity ? 0 : expectedAttempts,
    totalCost: totalCost === Infinity ? 0 : totalCost,
    marketPrice,
    expectedProfit: expectedProfit === -Infinity ? -Infinity : expectedProfit,
    profitable,
    recommendation,
  };
}

/**
 * 完整的炼妖概率计算
 */
export function calculateRefinement(input: CalculationInput): CalculationResult {
  // 1. 计算结果种类概率
  const resultTypeProbability = calculateResultTypeProbability(
    input.probabilities.wild,
    input.probabilities.special
  );

  // 2. 获取必带技能 (简化版，实际需要根据结果种类判断)
  // 这里假设主宠的必带技能
  const mustHaveSkills: string[] = []; // TODO: 从宠物数据库获取

  // 3. 计算技能继承概率
  const skillProbabilities = calculateSkillProbability(
    input.mainPet.skills,
    input.subPet.skills,
    mustHaveSkills
  );

  // 4. 计算期望技能数
  const expectedSkillCount = calculateExpectedSkillCount(skillProbabilities);

  // 5. 计算资质预测
  const qualificationPrediction = calculateQualificationRange(
    input.mainPet.qualifications,
    input.subPet.qualifications
  );

  // 6. 计算成长预测
  const growthPrediction = calculateGrowthRange(input.mainPet.growth, input.subPet.growth);

  // 7. 计算手续费
  const handlingFee = calculateHandlingFee(input.mainPet.level, input.subPet.level);

  // 8. 计算成本收益(如果提供了目标)
  let costBenefit: CostBenefitAnalysis | undefined;
  if (input.targetSkillCount && input.targetMarketPrice) {
    costBenefit = calculateCostBenefit(
      input.costs.mainPetPrice,
      input.costs.subPetPrice,
      handlingFee,
      input.targetSkillCount,
      skillProbabilities,
      input.targetMarketPrice
    );
  }

  return {
    resultTypeProbability,
    skillProbabilities,
    expectedSkillCount,
    qualificationPrediction,
    growthPrediction,
    costBenefit,
  };
}
