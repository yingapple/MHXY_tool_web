// 多次炼妖模拟器

import { SimulationResult, SimulationSummary, CalculationInput } from '@/types/calculator';
import { Qualification } from '@/types/pet';

/**
 * 随机确定结果种类
 */
function randomResultType(
  wildProb: number,
  specialProb: number
): 'mainPet' | 'subPet' | 'wild' | 'special' {
  const rand = Math.random();
  const mainSubProb = (1 - wildProb - specialProb) / 2;

  if (rand < mainSubProb) return 'mainPet';
  if (rand < mainSubProb * 2) return 'subPet';
  if (rand < mainSubProb * 2 + wildProb) return 'wild';
  return 'special';
}

/**
 * 随机继承技能数量
 */
function randomSkillCount(mainSkills: string[], subSkills: string[], mustHaveCount: number): number {
  const skillPool = Array.from(new Set([...mainSkills, ...subSkills]));
  let count = 0;

  for (const _skill of skillPool) {
    if (Math.random() < 0.3) {
      count++;
    }
  }

  // 加上必带技能
  count += mustHaveCount;

  return count;
}

/**
 * 随机资质
 */
function randomQualifications(mainQual: Qualification, subQual: Qualification): Qualification {
  const result = {} as Qualification;
  const keys: (keyof Qualification)[] = ['attack', 'defense', 'hp', 'mana', 'speed'];

  for (const key of keys) {
    const avg = (mainQual[key] + subQual[key]) / 2;
    const factor = 0.9 + Math.random() * 0.2; // 0.90-1.10
    result[key] = Math.round(avg * factor);
  }

  return result;
}

/**
 * 随机成长
 */
function randomGrowth(mainGrowth: number, subGrowth: number): number {
  const avg = (mainGrowth + subGrowth) / 2;
  const factor = 0.95 + Math.random() * 0.1; // 0.95-1.05
  return parseFloat((avg * factor).toFixed(2));
}

/**
 * 模拟多次炼妖
 *
 * @param attempts - 模拟次数
 * @param input - 炼妖输入参数
 * @param targetSkillCount - 目标技能数
 * @returns 模拟结果汇总
 */
export function simulateRefinement(
  attempts: number,
  input: CalculationInput,
  targetSkillCount: number
): SimulationSummary {
  const results: SimulationResult[] = [];
  const resultTypeCounts: Record<string, number> = {
    mainPet: 0,
    subPet: 0,
    wild: 0,
    special: 0,
  };
  const skillCountDistribution: Record<number, number> = {};

  let bestResult: SimulationResult | null = null;
  let targetAchieved = false;
  let achievedAtAttempt = 0;

  const mustHaveCount = 1; // 简化处理，实际需要根据宠物种族判断

  for (let i = 1; i <= attempts; i++) {
    // 1. 随机确定结果种类
    const resultType = randomResultType(input.probabilities.wild, input.probabilities.special);
    resultTypeCounts[resultType]++;

    // 2. 随机继承技能
    const skillCount = randomSkillCount(
      input.mainPet.skills,
      input.subPet.skills,
      mustHaveCount
    );
    skillCountDistribution[skillCount] = (skillCountDistribution[skillCount] || 0) + 1;

    // 3. 随机资质
    const qualifications = randomQualifications(
      input.mainPet.qualifications,
      input.subPet.qualifications
    );

    // 4. 随机成长
    const growth = randomGrowth(input.mainPet.growth, input.subPet.growth);

    const result: SimulationResult = {
      attemptNumber: i,
      resultType,
      skillCount,
      qualifications,
      growth,
      isTarget: skillCount >= targetSkillCount,
    };

    results.push(result);

    // 检查是否达到目标
    if (result.isTarget && !targetAchieved) {
      targetAchieved = true;
      achievedAtAttempt = i;
    }

    // 更新最佳结果
    if (!bestResult || skillCount > bestResult.skillCount) {
      bestResult = result;
    }
  }

  return {
    totalAttempts: attempts,
    resultTypeCounts,
    skillCountDistribution,
    bestResult: bestResult!,
    targetAchieved,
    achievedAtAttempt,
  };
}
