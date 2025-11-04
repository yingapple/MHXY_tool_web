// 宠物类型定义

export interface Qualification {
  attack: number;
  defense: number;
  hp: number;
  mana: number;
  speed: number;
}

export interface QualificationRange {
  min: number;
  max: number;
}

export interface Pet {
  id: string;
  name: string;
  level: number;
  race: string; // 种族 (龙族、凤族等)

  // 资质范围
  qualifications: {
    attack: QualificationRange;
    defense: QualificationRange;
    hp: QualificationRange;
    mana: QualificationRange;
    speed: QualificationRange;
  };

  // 成长范围
  growth: QualificationRange;

  // 技能列表
  skills: string[];

  // 必带技能
  mustHaveSkills: string[];
}

export interface PetInput {
  pet: Pet;
  qualifications: Qualification;
  growth: number;
  skills: string[];
}
