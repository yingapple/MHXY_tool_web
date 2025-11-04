/**
 * 打书成功率计算器
 *
 * 核心机制：
 * - 打书成功概率 = 目标位置数量 / 总技能数
 * - 例如：5技能宠物，想打掉2个垃圾技能，成功率 = 2/5 = 40%
 */

export interface BookTypingInput {
  totalSkills: number; // 总技能数
  targetSkills: number; // 想打掉的技能数（垃圾技能）
  bookPrice: number; // 高级兽决价格（万）
  petCurrentPrice: number; // 宝宝当前市场价（万）
  petTargetPrice: number; // 打成后市场价（万）
}

export interface BookTypingResult {
  successRate: number; // 单次成功概率 (0-1)
  successRatePercent: string; // 百分比显示
  expectedAttempts: number; // 期望尝试次数
  expectedCost: number; // 期望成本（万）
  profitIfSuccess: number; // 打成后利润（万）
  expectedProfit: number; // 期望利润（万）

  // 多次尝试的收益表
  profitTable: {
    attempts: number; // 尝试次数
    cost: number; // 总成本
    profit: number; // 利润（打成 - 成本）
    cumulativeSuccessRate: number; // 累计成功率
    cumulativeSuccessRatePercent: string; // 累计成功率百分比
  }[];

  // 激励文案
  motivationalText: {
    bestCase: string; // 最佳情况
    worstCase: string; // 最坏情况
    recommendation: string; // 建议
  };
}

/**
 * 计算打书成功率和收益
 */
export function calculateBookTyping(input: BookTypingInput): BookTypingResult {
  const { totalSkills, targetSkills, bookPrice, petCurrentPrice, petTargetPrice } = input;

  // 单次成功概率
  const successRate = targetSkills / totalSkills;
  const successRatePercent = (successRate * 100).toFixed(2) + '%';

  // 期望尝试次数 = 1 / 成功率
  const expectedAttempts = 1 / successRate;

  // 期望成本
  const expectedCost = expectedAttempts * bookPrice;

  // 打成后的利润
  const profitIfSuccess = petTargetPrice - petCurrentPrice;

  // 期望利润 = 打成利润 - 期望成本
  const expectedProfit = profitIfSuccess - expectedCost;

  // 生成多次尝试的收益表（1-20次）
  const profitTable: BookTypingResult['profitTable'] = [];
  for (let attempts = 1; attempts <= 20; attempts++) {
    const cost = attempts * bookPrice;
    const profit = profitIfSuccess - cost;

    // 累计成功率 = 1 - (1 - p)^n
    const cumulativeSuccessRate = 1 - Math.pow(1 - successRate, attempts);
    const cumulativeSuccessRatePercent = (cumulativeSuccessRate * 100).toFixed(2) + '%';

    profitTable.push({
      attempts,
      cost,
      profit,
      cumulativeSuccessRate,
      cumulativeSuccessRatePercent,
    });
  }

  // 生成激励文案
  const motivationalText = generateMotivationalText(
    successRate,
    profitIfSuccess,
    bookPrice,
    expectedCost,
    expectedProfit
  );

  return {
    successRate,
    successRatePercent,
    expectedAttempts: Math.round(expectedAttempts * 10) / 10,
    expectedCost: Math.round(expectedCost * 10) / 10,
    profitIfSuccess,
    expectedProfit: Math.round(expectedProfit * 10) / 10,
    profitTable,
    motivationalText,
  };
}

/**
 * 生成激励文案
 */
function generateMotivationalText(
  successRate: number,
  profitIfSuccess: number,
  bookPrice: number,
  expectedCost: number,
  expectedProfit: number
): BookTypingResult['motivationalText'] {
  // 找出盈利的尝试次数范围
  const breakEvenAttempts = Math.ceil(profitIfSuccess / bookPrice);

  let bestCase = '';
  let worstCase = '';
  let recommendation = '';

  if (successRate >= 0.5) {
    // 成功率 >= 50%
    bestCase = `🎉 成功率${(successRate * 100).toFixed(0)}%，运气好1-2本就能打成，直赚${profitIfSuccess.toFixed(0)}万！`;
    worstCase = `即使运气差点，${Math.ceil(1 / successRate * 1.5)}本内打成的概率也很高。`;
    recommendation = expectedProfit > 0
      ? `💰 期望利润${expectedProfit.toFixed(0)}万，值得尝试！`
      : `⚠️ 期望微亏${Math.abs(expectedProfit).toFixed(0)}万，但${breakEvenAttempts}本内打成就赚！`;
  } else if (successRate >= 0.25) {
    // 成功率 25%-50%
    bestCase = `💎 ${breakEvenAttempts}本内打成就能赚钱，直接利润${profitIfSuccess.toFixed(0)}万！`;
    worstCase = `平均需要${Math.ceil(1 / successRate)}本，期望成本${expectedCost.toFixed(0)}万。`;
    recommendation = expectedProfit > 0
      ? `✅ 期望利润${expectedProfit.toFixed(0)}万，是个不错的选择！`
      : `⚡ 虽然期望亏${Math.abs(expectedProfit).toFixed(0)}万，但运气好能大赚！${breakEvenAttempts}本内打成就盈利！`;
  } else {
    // 成功率 < 25%
    bestCase = `🔥 难度较高，但如果${breakEvenAttempts}本内打成，立赚${profitIfSuccess.toFixed(0)}万！`;
    worstCase = `平均需要${Math.ceil(1 / successRate)}本，总成本${expectedCost.toFixed(0)}万。`;
    recommendation = expectedProfit > 0
      ? `🎲 期望利润${expectedProfit.toFixed(0)}万，适合有信心的玩家！`
      : `❗ 期望亏损${Math.abs(expectedProfit).toFixed(0)}万，风险较大。但运气好的话，${breakEvenAttempts}本内打成就能翻盘！`;
  }

  return {
    bestCase,
    worstCase,
    recommendation,
  };
}

/**
 * 计算炼妖收益（新增功能）
 */
export interface RefinementProfitInput {
  petACost: number; // 主宠成本（万）
  petBCost: number; // 副宠成本（万）
  refinementFee: number; // 手续费（万）
  targetSkills: number; // 目标技能数
  targetProbability: number; // 达到目标的概率
  targetMarketPrice: number; // 目标市场价（万）
}

export interface RefinementProfitResult {
  singleAttemptCost: number; // 单次成本
  expectedAttempts: number; // 期望次数
  expectedCost: number; // 期望总成本
  profitIfSuccess: number; // 打成后利润
  expectedProfit: number; // 期望利润

  // 多次尝试的收益表
  profitTable: {
    attempts: number;
    totalCost: number;
    profit: number;
    cumulativeSuccessRate: number;
    cumulativeSuccessRatePercent: string;
  }[];

  motivationalText: {
    bestCase: string;
    recommendation: string;
  };
}

/**
 * 计算炼妖收益
 */
export function calculateRefinementProfit(input: RefinementProfitInput): RefinementProfitResult {
  const { petACost, petBCost, refinementFee, targetProbability, targetMarketPrice } = input;

  const singleAttemptCost = petACost + petBCost + refinementFee;
  const expectedAttempts = 1 / targetProbability;
  const expectedCost = expectedAttempts * singleAttemptCost;
  const profitIfSuccess = targetMarketPrice - singleAttemptCost;
  const expectedProfit = targetMarketPrice - expectedCost;

  // 生成炼妖收益表（1-15次）
  const profitTable: RefinementProfitResult['profitTable'] = [];
  for (let attempts = 1; attempts <= 15; attempts++) {
    const totalCost = attempts * singleAttemptCost;
    const profit = targetMarketPrice - totalCost;
    const cumulativeSuccessRate = 1 - Math.pow(1 - targetProbability, attempts);
    const cumulativeSuccessRatePercent = (cumulativeSuccessRate * 100).toFixed(2) + '%';

    profitTable.push({
      attempts,
      totalCost,
      profit,
      cumulativeSuccessRate,
      cumulativeSuccessRatePercent,
    });
  }

  const breakEvenAttempts = Math.ceil(targetMarketPrice / singleAttemptCost);

  const motivationalText = {
    bestCase: `🎊 运气好${Math.min(3, breakEvenAttempts)}次内炼出，净赚${(targetMarketPrice - Math.min(3, breakEvenAttempts) * singleAttemptCost).toFixed(0)}万！`,
    recommendation: expectedProfit > 0
      ? `💰 期望利润${expectedProfit.toFixed(0)}万，值得炼！炼出来就值${targetMarketPrice}万！`
      : `⚡ 期望亏${Math.abs(expectedProfit).toFixed(0)}万，但${breakEvenAttempts}次内炼出就盈利！炼出来就值${targetMarketPrice}万！`,
  };

  return {
    singleAttemptCost,
    expectedAttempts: Math.round(expectedAttempts * 10) / 10,
    expectedCost: Math.round(expectedCost * 10) / 10,
    profitIfSuccess,
    expectedProfit: Math.round(expectedProfit * 10) / 10,
    profitTable,
    motivationalText,
  };
}
