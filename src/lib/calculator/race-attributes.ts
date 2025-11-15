/**
 * 梦幻西游种族属性计算工具
 *
 * 基于种族三大种族（人族、魔族、仙族）的属性加成计算
 * 输入：体质、魔力、力量、耐力、敏捷
 * 输出：气血、魔法、伤害、防御、速度、灵力
 */

export interface PrimaryAttributes {
  stamina: number;      // 体质
  magic: number;        // 魔力
  strength: number;     // 力量
  endurance: number;    // 耐力
  agility: number;      // 敏捷
}

export interface DerivedStats {
  hp: number;           // 气血
  mp: number;           // 魔法
  damage: number;       // 伤害
  defense: number;      // 防御
  speed: number;        // 速度
  spiritualPower: number; // 灵力
}

export interface RaceFormulas {
  name: string;
  color: string;
  // 气血公式：体质 × a + b
  hp: { multiplier: number; base: number };
  // 魔法公式：魔力 × a + b
  mp: { multiplier: number; base: number };
  // 伤害公式：力量 × a + b
  damage: { multiplier: number; base: number };
  // 防御公式：耐力 × a
  defense: { multiplier: number };
  // 速度公式：体质×0.1 + 力量×0.1 + 耐力×0.1 + 敏捷×0.7 (三族统一)
  // 灵力公式：体质×0.3 + 魔力×0.7 + 力量×0.4 + 耐力×0.2 (三族统一)
}

export const RACE_FORMULAS: RaceFormulas[] = [
  {
    name: '人族',
    color: 'bg-yellow-100 border-yellow-400',
    hp: { multiplier: 5, base: 100 },
    mp: { multiplier: 3, base: 80 },
    damage: { multiplier: 0.7, base: 34 },
    defense: { multiplier: 1.5 },
  },
  {
    name: '魔族',
    color: 'bg-purple-100 border-purple-400',
    hp: { multiplier: 6, base: 100 },
    mp: { multiplier: 2.5, base: 80 },
    damage: { multiplier: 0.8, base: 34 },
    defense: { multiplier: 1.3 },
  },
  {
    name: '仙族',
    color: 'bg-blue-100 border-blue-400',
    hp: { multiplier: 4.5, base: 100 },
    mp: { multiplier: 3.5, base: 80 },
    damage: { multiplier: 0.6, base: 40 },
    defense: { multiplier: 1.6 },
  },
];

/**
 * 计算派生属性
 */
export function calculateDerivedStats(
  race: string,
  primary: PrimaryAttributes
): DerivedStats {
  const raceFormula = RACE_FORMULAS.find(r => r.name === race);

  if (!raceFormula) {
    throw new Error('Invalid race');
  }

  // 气血 = 体质 × multiplier + base
  const hp = primary.stamina * raceFormula.hp.multiplier + raceFormula.hp.base;

  // 魔法 = 魔力 × multiplier + base
  const mp = primary.magic * raceFormula.mp.multiplier + raceFormula.mp.base;

  // 伤害 = 力量 × multiplier + base
  const damage = primary.strength * raceFormula.damage.multiplier + raceFormula.damage.base;

  // 防御 = 耐力 × multiplier
  const defense = primary.endurance * raceFormula.defense.multiplier;

  // 速度 = 体质×0.1 + 力量×0.1 + 耐力×0.1 + 敏捷×0.7 (三族统一)
  const speed =
    primary.stamina * 0.1 +
    primary.strength * 0.1 +
    primary.endurance * 0.1 +
    primary.agility * 0.7;

  // 灵力 = 体质×0.3 + 魔力×0.7 + 力量×0.4 + 耐力×0.2 (三族统一)
  const spiritualPower =
    primary.stamina * 0.3 +
    primary.magic * 0.7 +
    primary.strength * 0.4 +
    primary.endurance * 0.2;

  return {
    hp: parseFloat(hp.toFixed(1)),
    mp: parseFloat(mp.toFixed(1)),
    damage: parseFloat(damage.toFixed(1)),
    defense: parseFloat(defense.toFixed(1)),
    speed: parseFloat(speed.toFixed(1)),
    spiritualPower: parseFloat(spiritualPower.toFixed(1)),
  };
}

/**
 * 获取初始属性
 */
export function getInitialAttributes(race: string): PrimaryAttributes {
  switch (race) {
    case '人族':
      return { stamina: 10, magic: 10, strength: 10, endurance: 10, agility: 10 };
    case '魔族':
      return { stamina: 12, magic: 11, strength: 11, endurance: 8, agility: 8 };
    case '仙族':
      return { stamina: 12, magic: 5, strength: 11, endurance: 12, agility: 10 };
    default:
      return { stamina: 10, magic: 10, strength: 10, endurance: 10, agility: 10 };
  }
}

/**
 * 获取种族特点描述
 */
export function getRaceDescription(race: string): string {
  switch (race) {
    case '人族':
      return '属性较为平衡，适合各种玩法';
    case '魔族':
      return '气血、伤害成长强，防御较弱，适合物理输出';
    case '仙族':
      return '魔法、防御、灵力成长强，适合法系职业';
    default:
      return '';
  }
}
