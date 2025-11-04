/**
 * 梦幻西游赐福系统概率计算
 */

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
 * 赐福计算参数
 */
export interface BlessingParams {
  petSkillCount: number; // 召唤兽可赐福的技能数量
  lockedSkills: number; // 锁定的技能数量（0-3）
  baseCost: number; // 基础赐福成本（梦幻币）
}

/**
 * 赐福计算结果
 */
export interface BlessingResult {
  // 基础信息
  totalSuperSkills: number; // 全服超级技能总数（固定43个）
  petSkillCount: number; // 召唤兽可赐福技能数
  lockedSkills: number;
  remainingSlots: number; // 剩余需要随机的位置

  // 成本信息
  singleAttemptCost: number; // 单次赐福成本（仙露丸子数量）
  singleAttemptPrice: number; // 单次赐福成本（梦幻币）

  // 概率信息
  probability: number; // 单次成功概率
  expectedAttempts: number; // 期望尝试次数
  totalExpectedCost: number; // 期望总成本（仙露丸子）
  totalExpectedPrice: number; // 期望总成本（梦幻币）

  // 不同尝试次数的成功概率
  probabilityDistribution: {
    attempts: number;
    cumulativeProbability: number; // 累积成功概率
    cost: number; // 成本（仙露丸子）
    price: number; // 成本（梦幻币）
  }[];

  // 建议
  recommendation: string;
  riskLevel: 'low' | 'medium' | 'high' | 'extreme';
}

/**
 * 计算锁定技能的成本
 * 规则: 锁定n个技能，成本 = 5^n 个仙露丸子
 */
function calculateLockCost(lockedSkills: number): number {
  if (lockedSkills === 0) return 1;
  return Math.pow(5, lockedSkills); // 5^n
}

/**
 * 计算赐福成功概率 (四赐福)
 *
 * 规则：
 * - 全服共43个超级技能
 * - 每次赐福随机抽取4个超级技能
 * - 目标：抽到的4个技能都在召唤兽的可赐福技能列表中（四赐福）
 * - 锁定技能：已锁定的技能不参与随机，剩余位置继续随机
 *
 * 概率计算：
 * - 不锁定：P = C(M, 4) / C(43, 4)
 *   其中M是召唤兽可赐福技能数
 *
 * - 锁定K个：P = C(M-K, 4-K) / C(43-K, 4-K)
 *   其中M是召唤兽可赐福技能数，K是锁定数
 *   前提：锁定的K个技能必须都在召唤兽的可赐福技能中
 */
function calculateProbability(
  petSkillCount: number,
  lockedSkills: number
): number {
  const TOTAL_SUPER_SKILLS = 43; // 全服超级技能总数

  // 剩余需要随机的位置
  const remainingSlots = 4 - lockedSkills;

  // 剩余可选的技能数（假设锁定的技能都是宠物技能）
  const remainingPetSkills = petSkillCount - lockedSkills;

  // 如果已经锁定了4个，必定成功（全都是宠物技能）
  if (remainingSlots === 0) {
    return 1.0;
  }

  // 如果剩余的宠物技能数 < 剩余需要抽取的位置数，概率为0
  if (remainingPetSkills < remainingSlots) {
    return 0;
  }

  // 计算概率
  // P = C(剩余宠物技能数, 剩余位置数) / C(剩余全服技能数, 剩余位置数)
  const remainingTotalSkills = TOTAL_SUPER_SKILLS - lockedSkills;

  const numerator = combination(remainingPetSkills, remainingSlots);
  const denominator = combination(remainingTotalSkills, remainingSlots);

  if (denominator === 0) return 0;

  return numerator / denominator;
}

/**
 * 计算累积概率分布
 * P(在N次内成功) = 1 - (1 - p)^N
 */
function calculateCumulativeProbability(
  singleProbability: number,
  attempts: number
): number {
  return 1 - Math.pow(1 - singleProbability, attempts);
}

/**
 * 计算赐福成本和概率
 */
export function calculateBlessing(params: BlessingParams): BlessingResult {
  const { petSkillCount, lockedSkills, baseCost } = params;
  const TOTAL_SUPER_SKILLS = 43; // 全服超级技能总数（固定）

  // 参数验证
  if (petSkillCount < 4 || petSkillCount > 43) {
    throw new Error('召唤兽可赐福技能数必须在4-43之间');
  }

  if (lockedSkills < 0 || lockedSkills > 3) {
    throw new Error('锁定技能数必须在0-3之间');
  }

  if (lockedSkills >= 4) {
    throw new Error('锁定技能数不能达到4个（已经满了）');
  }

  // 计算单次成本
  const singleAttemptCost = calculateLockCost(lockedSkills);
  const singleAttemptPrice = singleAttemptCost * baseCost;

  // 计算概率
  const probability = calculateProbability(petSkillCount, lockedSkills);

  // 期望尝试次数
  const expectedAttempts =
    probability > 0 ? Math.ceil(1 / probability) : Infinity;

  // 期望总成本
  const totalExpectedCost =
    expectedAttempts !== Infinity ? expectedAttempts * singleAttemptCost : 0;
  const totalExpectedPrice =
    expectedAttempts !== Infinity ? expectedAttempts * singleAttemptPrice : 0;

  // 计算不同尝试次数的概率分布
  const probabilityDistribution = [];
  const attemptsToShow = [1, 5, 10, 20, 50, 100, 200, 500, 1000];

  for (const attempts of attemptsToShow) {
    const cumulativeProb = calculateCumulativeProbability(probability, attempts);
    probabilityDistribution.push({
      attempts,
      cumulativeProbability: cumulativeProb,
      cost: attempts * singleAttemptCost,
      price: attempts * singleAttemptPrice,
    });

    // 如果累积概率已经超过99.9%，后面的就不计算了
    if (cumulativeProb > 0.999) break;
  }

  // 风险等级评估
  let riskLevel: 'low' | 'medium' | 'high' | 'extreme';
  if (probability > 0.1) {
    riskLevel = 'low';
  } else if (probability > 0.01) {
    riskLevel = 'medium';
  } else if (probability > 0.001) {
    riskLevel = 'high';
  } else {
    riskLevel = 'extreme';
  }

  // 生成建议
  let recommendation = '';
  if (probability === 0) {
    recommendation = '❌ 无法实现！锁定技能数过多或参数设置不合理';
  } else if (riskLevel === 'extreme') {
    recommendation =
      '⚠️ 极高风险！成功概率极低，建议重新考虑目标或策略';
  } else if (riskLevel === 'high') {
    recommendation =
      '⚠️ 高风险！期望成本较高，建议先刷到部分技能再锁定';
  } else if (riskLevel === 'medium') {
    recommendation = '💰 中等成本，有一定风险，谨慎决策';
  } else {
    recommendation = '✅ 成本合理，成功概率较高，可以尝试';
  }

  return {
    totalSuperSkills: TOTAL_SUPER_SKILLS,
    petSkillCount,
    lockedSkills,
    remainingSlots: 4 - lockedSkills,
    singleAttemptCost,
    singleAttemptPrice,
    probability,
    expectedAttempts:
      expectedAttempts === Infinity ? 0 : expectedAttempts,
    totalExpectedCost:
      totalExpectedCost === Infinity ? 0 : totalExpectedCost,
    totalExpectedPrice:
      totalExpectedPrice === Infinity ? 0 : totalExpectedPrice,
    probabilityDistribution,
    recommendation,
    riskLevel,
  };
}

/**
 * 格式化数字（添加千分位分隔符）
 */
export function formatNumber(num: number): string {
  if (num === 0 || !isFinite(num)) return '无法计算';
  return num.toLocaleString('zh-CN');
}

/**
 * 格式化概率（百分比）
 */
export function formatProbability(prob: number): string {
  if (prob === 0) return '0%';
  if (prob >= 0.01) {
    return (prob * 100).toFixed(2) + '%';
  } else {
    return (prob * 100).toFixed(4) + '%';
  }
}
