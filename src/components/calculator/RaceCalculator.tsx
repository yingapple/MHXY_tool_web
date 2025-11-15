'use client';

import { useState, useMemo, memo } from 'react';
import {
  RACE_FORMULAS,
  calculateDerivedStats,
  getInitialAttributes,
  getRaceDescription,
  type PrimaryAttributes,
  type DerivedStats,
} from '@/lib/calculator/race-attributes';

const PrimaryAttributeInput = memo(({
  label,
  emoji,
  value,
  onChange,
}: {
  label: string;
  emoji: string;
  value: number;
  onChange: (value: number) => void;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      onChange(0);
      return;
    }
    const parsed = parseInt(val);
    if (!isNaN(parsed) && parsed >= 0) {
      onChange(parsed);
    }
  };

  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-lg border-2 border-amber-200 hover:border-amber-400 transition-all">
      <span className="text-2xl">{emoji}</span>
      <div className="flex-1">
        <div className="text-sm font-bold text-amber-800">{label}</div>
      </div>
      <input
        type="number"
        min="0"
        value={value || ''}
        onChange={handleInputChange}
        placeholder="0"
        className="w-24 px-3 py-2 border-2 border-amber-300 rounded-lg focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none text-center font-bold text-lg"
      />
    </div>
  );
});

PrimaryAttributeInput.displayName = 'PrimaryAttributeInput';

const DerivedStatDisplay = memo(({
  label,
  emoji,
  value,
  formula,
}: {
  label: string;
  emoji: string;
  value: number;
  formula: string;
}) => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border-2 border-green-300 shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{emoji}</span>
        <span className="font-bold text-green-800">{label}</span>
      </div>
      <div className="text-3xl font-black text-green-700 mb-1">
        {value}
      </div>
      <div className="text-xs text-green-600">
        {formula}
      </div>
    </div>
  );
});

DerivedStatDisplay.displayName = 'DerivedStatDisplay';

export default function RaceCalculator() {
  const [selectedRace, setSelectedRace] = useState('人族');
  const [primaryAttributes, setPrimaryAttributes] = useState<PrimaryAttributes>(
    getInitialAttributes('人族')
  );

  const currentRaceFormula = useMemo(
    () => RACE_FORMULAS.find(r => r.name === selectedRace) || RACE_FORMULAS[0],
    [selectedRace]
  );

  const derivedStats = useMemo((): DerivedStats => {
    return calculateDerivedStats(selectedRace, primaryAttributes);
  }, [selectedRace, primaryAttributes]);

  const handleRaceChange = (race: string) => {
    setSelectedRace(race);
    // 切换种族时，重置为该种族的初始属性
    setPrimaryAttributes(getInitialAttributes(race));
  };

  const handleAttributeChange = (attribute: keyof PrimaryAttributes, value: number) => {
    setPrimaryAttributes(prev => ({
      ...prev,
      [attribute]: value,
    }));
  };

  const handleReset = () => {
    setPrimaryAttributes(getInitialAttributes(selectedRace));
  };

  // 获取公式显示文本
  const getFormulaText = (stat: keyof DerivedStats): string => {
    switch (stat) {
      case 'hp':
        return `体质 × ${currentRaceFormula.hp.multiplier} + ${currentRaceFormula.hp.base}`;
      case 'mp':
        return `魔力 × ${currentRaceFormula.mp.multiplier} + ${currentRaceFormula.mp.base}`;
      case 'damage':
        return `力量 × ${currentRaceFormula.damage.multiplier} + ${currentRaceFormula.damage.base}`;
      case 'defense':
        return `耐力 × ${currentRaceFormula.defense.multiplier}`;
      case 'speed':
        return '体质×0.1 + 力量×0.1 + 耐力×0.1 + 敏捷×0.7';
      case 'spiritualPower':
        return '体质×0.3 + 魔力×0.7 + 力量×0.4 + 耐力×0.2';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      {/* 种族选择器 */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-300 shadow-lg">
        <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
          <span className="text-2xl">🎭</span>
          选择种族
        </h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {RACE_FORMULAS.map(race => (
            <button
              key={race.name}
              onClick={() => handleRaceChange(race.name)}
              className={`p-4 rounded-xl font-bold text-lg transition-all border-2 ${
                selectedRace === race.name
                  ? `${race.color} ring-4 ring-red-400 scale-105 shadow-xl`
                  : 'bg-white border-gray-300 hover:border-amber-400 hover:scale-102'
              }`}
            >
              {race.name}
            </button>
          ))}
        </div>
        <div className="bg-white p-4 rounded-lg border border-amber-300">
          <p className="text-amber-800 font-semibold">
            {getRaceDescription(selectedRace)}
          </p>
        </div>
      </div>

      {/* 主属性输入区 */}
      <div className="bg-gradient-to-br from-white to-amber-50 rounded-xl p-6 border-2 border-amber-300 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-red-800 flex items-center gap-2">
            <span className="text-2xl">📝</span>
            输入基础属性点
          </h3>
          <button
            onClick={handleReset}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-gray-400 text-sm"
          >
            重置为初始值
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <PrimaryAttributeInput
            label="体质"
            emoji="💪"
            value={primaryAttributes.stamina}
            onChange={value => handleAttributeChange('stamina', value)}
          />
          <PrimaryAttributeInput
            label="魔力"
            emoji="✨"
            value={primaryAttributes.magic}
            onChange={value => handleAttributeChange('magic', value)}
          />
          <PrimaryAttributeInput
            label="力量"
            emoji="⚔️"
            value={primaryAttributes.strength}
            onChange={value => handleAttributeChange('strength', value)}
          />
          <PrimaryAttributeInput
            label="耐力"
            emoji="🛡️"
            value={primaryAttributes.endurance}
            onChange={value => handleAttributeChange('endurance', value)}
          />
          <PrimaryAttributeInput
            label="敏捷"
            emoji="⚡"
            value={primaryAttributes.agility}
            onChange={value => handleAttributeChange('agility', value)}
          />
        </div>
      </div>

      {/* 派生属性显示区 */}
      <div className="bg-gradient-to-br from-white to-green-50 rounded-xl p-6 border-2 border-green-300 shadow-lg">
        <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
          <span className="text-2xl">📊</span>
          计算结果 - 实际战斗属性
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <DerivedStatDisplay
            label="气血"
            emoji="❤️"
            value={derivedStats.hp}
            formula={getFormulaText('hp')}
          />
          <DerivedStatDisplay
            label="魔法"
            emoji="💎"
            value={derivedStats.mp}
            formula={getFormulaText('mp')}
          />
          <DerivedStatDisplay
            label="伤害"
            emoji="🗡️"
            value={derivedStats.damage}
            formula={getFormulaText('damage')}
          />
          <DerivedStatDisplay
            label="防御"
            emoji="🛡️"
            value={derivedStats.defense}
            formula={getFormulaText('defense')}
          />
          <DerivedStatDisplay
            label="速度"
            emoji="⚡"
            value={derivedStats.speed}
            formula={getFormulaText('speed')}
          />
          <DerivedStatDisplay
            label="灵力"
            emoji="✨"
            value={derivedStats.spiritualPower}
            formula={getFormulaText('spiritualPower')}
          />
        </div>
      </div>

      {/* 种族对比表 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-300 shadow-lg">
        <h4 className="text-lg font-bold text-blue-800 mb-4 flex items-center gap-2">
          <span className="text-xl">📋</span>
          三族属性转化公式对比
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg border border-blue-200">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-3 text-left font-bold text-blue-900">属性</th>
                <th className="px-4 py-3 text-center font-bold text-yellow-800">人族</th>
                <th className="px-4 py-3 text-center font-bold text-purple-800">魔族</th>
                <th className="px-4 py-3 text-center font-bold text-blue-800">仙族</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-t border-blue-100">
                <td className="px-4 py-3 font-bold text-blue-900">气血</td>
                <td className="px-4 py-3 text-center">体质×5 + 100</td>
                <td className="px-4 py-3 text-center bg-purple-50">体质×6 + 100</td>
                <td className="px-4 py-3 text-center">体质×4.5 + 100</td>
              </tr>
              <tr className="border-t border-blue-100">
                <td className="px-4 py-3 font-bold text-blue-900">魔法</td>
                <td className="px-4 py-3 text-center">魔力×3 + 80</td>
                <td className="px-4 py-3 text-center">魔力×2.5 + 80</td>
                <td className="px-4 py-3 text-center bg-blue-50">魔力×3.5 + 80</td>
              </tr>
              <tr className="border-t border-blue-100">
                <td className="px-4 py-3 font-bold text-blue-900">伤害</td>
                <td className="px-4 py-3 text-center">力量×0.7 + 34</td>
                <td className="px-4 py-3 text-center bg-purple-50">力量×0.8 + 34</td>
                <td className="px-4 py-3 text-center">力量×0.6 + 40</td>
              </tr>
              <tr className="border-t border-blue-100">
                <td className="px-4 py-3 font-bold text-blue-900">防御</td>
                <td className="px-4 py-3 text-center">耐力×1.5</td>
                <td className="px-4 py-3 text-center">耐力×1.3</td>
                <td className="px-4 py-3 text-center bg-blue-50">耐力×1.6</td>
              </tr>
              <tr className="border-t border-blue-100">
                <td className="px-4 py-3 font-bold text-blue-900">速度</td>
                <td className="px-4 py-3 text-center text-gray-600 text-xs" colSpan={3}>
                  三族统一：体质×0.1 + 力量×0.1 + 耐力×0.1 + 敏捷×0.7
                </td>
              </tr>
              <tr className="border-t border-blue-100">
                <td className="px-4 py-3 font-bold text-blue-900">灵力</td>
                <td className="px-4 py-3 text-center text-gray-600 text-xs" colSpan={3}>
                  三族统一：体质×0.3 + 魔力×0.7 + 力量×0.4 + 耐力×0.2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 使用提示 */}
      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-6 border-2 border-amber-300 shadow-lg">
        <h4 className="text-lg font-bold text-amber-800 mb-3 flex items-center gap-2">
          <span className="text-xl">💡</span>
          使用说明
        </h4>
        <ul className="space-y-2 text-sm text-amber-900">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold mt-1">•</span>
            <span>输入您角色的基础属性点（体质、魔力、力量、耐力、敏捷）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold mt-1">•</span>
            <span>系统会根据您选择的种族，自动计算实际的战斗属性（气血、魔法、伤害、防御、速度、灵力）</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold mt-1">•</span>
            <span>不同种族的属性转化公式不同，魔族适合物理输出，仙族适合法系职业，人族较为平衡</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 font-bold mt-1">•</span>
            <span>切换种族时会自动重置为该种族的初始属性值</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
