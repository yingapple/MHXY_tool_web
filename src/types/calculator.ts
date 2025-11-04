// 计算器类型定义

import { Qualification, QualificationRange } from './pet';

export interface SkillProbability {
  [skillCount: number]: number; // 技能数量 -> 概率
}

export interface ResultTypeProbability {
  mainPet: number;
  subPet: number;
  wild: number;
  special: number;
}

export interface CalculationInput {
  mainPet: {
    name: string;
    skills: string[];
    qualifications: Qualification;
    growth: number;
    level: number;
  };
  subPet: {
    name: string;
    skills: string[];
    qualifications: Qualification;
    growth: number;
    level: number;
  };
  probabilities: {
    wild: number; // 野生概率 (默认10%)
    special: number; // 特殊宠概率 (默认10%)
  };
  costs: {
    mainPetPrice: number;
    subPetPrice: number;
  };
  targetSkillCount?: number; // 目标技能数
  targetMarketPrice?: number; // 目标宠物市场价
}

export interface QualificationPrediction {
  attack: QualificationRangeWithExpected;
  defense: QualificationRangeWithExpected;
  hp: QualificationRangeWithExpected;
  mana: QualificationRangeWithExpected;
  speed: QualificationRangeWithExpected;
}

export interface QualificationRangeWithExpected extends QualificationRange {
  expected: number;
}

export interface CalculationResult {
  // 结果种类概率
  resultTypeProbability: ResultTypeProbability;

  // 技能数量概率分布
  skillProbabilities: SkillProbability;
  expectedSkillCount: number;

  // 资质预测
  qualificationPrediction: QualificationPrediction;

  // 成长预测
  growthPrediction: QualificationRangeWithExpected;

  // 成本收益分析
  costBenefit?: CostBenefitAnalysis;
}

export interface CostBenefitAnalysis {
  singleCost: number; // 单次成本
  handlingFee: number; // 手续费
  targetSkillCount: number; // 目标技能数
  targetProbability: number; // 达到目标的概率
  expectedAttempts: number; // 期望尝试次数
  totalCost: number; // 预计总成本
  marketPrice: number; // 市场价格
  expectedProfit: number; // 期望收益
  profitable: boolean; // 是否有利可图
  recommendation: string; // 建议
}

export interface SimulationResult {
  attemptNumber: number; // 第几次
  resultType: 'mainPet' | 'subPet' | 'wild' | 'special';
  skillCount: number;
  qualifications: Qualification;
  growth: number;
  isTarget: boolean; // 是否达到目标
}

export interface SimulationSummary {
  totalAttempts: number;
  resultTypeCounts: Record<string, number>;
  skillCountDistribution: Record<number, number>;
  bestResult: SimulationResult;
  targetAchieved: boolean;
  achievedAtAttempt: number;
}
