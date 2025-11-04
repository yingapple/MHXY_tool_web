'use client';

import { SimplePetInput } from '@/lib/calculator/simple-probability';

interface PetSelectorProps {
  label: string;
  value: SimplePetInput;
  onChange: (pet: SimplePetInput) => void;
}

export default function PetSelector({ label, value, onChange }: PetSelectorProps) {
  return (
    <div className="rounded-xl bg-gradient-to-br from-white to-amber-50 p-6 shadow-lg ring-2 ring-amber-300 hover:ring-amber-400 transition-all">
      <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center gap-2">
        <span className="text-2xl">🐉</span>
        {label}
      </h3>

      {/* 手动输入 - 加强视觉效果 */}
      <div className="space-y-5">
        <div className="group">
          <label className="block text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span>📚</span>
            非必带技能数
            <span className="text-amber-600 text-xs font-normal ml-2">(不含必带技能，特殊技能包含在内)</span>
          </label>
          <input
            type="number"
            min="0"
            max="20"
            value={value.totalSkillCount}
            onChange={(e) =>
              onChange({ ...value, totalSkillCount: parseInt(e.target.value) || 0 })
            }
            className="w-full rounded-lg border-2 border-amber-300 px-5 py-3 text-lg font-semibold text-amber-900 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500 shadow-sm hover:border-amber-400 transition-all"
            placeholder="输入非必带技能数"
          />
          <p className="text-xs text-amber-700 mt-2 bg-amber-100 px-3 py-1 rounded">
            💡 例如：4技能宝宝有1个必带技能被垫书了，这里填4。特殊技能包含在这4个里面。
          </p>
        </div>

        <div className="group">
          <label className="block text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span>⭐</span>
            必带技能数量
            <span className="text-amber-600 text-xs font-normal ml-2">(如画魂的高级鬼魂术、地狱烈火)</span>
          </label>
          <input
            type="number"
            min="0"
            max={value.totalSkillCount}
            value={value.mustHaveSkillCount}
            onChange={(e) =>
              onChange({ ...value, mustHaveSkillCount: parseInt(e.target.value) || 0 })
            }
            className="w-full rounded-lg border-2 border-amber-300 px-5 py-3 text-lg font-semibold text-amber-900 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500 shadow-sm hover:border-amber-400 transition-all"
            placeholder="输入必带技能数"
          />
          <p className="text-xs text-amber-700 mt-2 bg-amber-100 px-3 py-1 rounded">💡 必带技能100%保留，不参与30%概率计算</p>
        </div>

        <div className="group">
          <label className="block text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
            <span>✨</span>
            特殊技能数量
            <span className="text-amber-600 text-xs font-normal ml-2">(如高级必杀、高级神佑等)</span>
          </label>
          <input
            type="number"
            min="0"
            max={value.totalSkillCount}
            value={value.specialSkillCount}
            onChange={(e) =>
              onChange({ ...value, specialSkillCount: parseInt(e.target.value) || 0 })
            }
            className="w-full rounded-lg border-2 border-purple-300 px-5 py-3 text-lg font-semibold text-purple-900 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 shadow-sm hover:border-purple-400 transition-all"
            placeholder="输入特殊技能数"
          />
          <p className="text-xs text-purple-700 mt-2 bg-purple-100 px-3 py-1 rounded">💡 用于单独计算保留特殊技能的概率</p>
        </div>
      </div>

      {/* 信息展示 - 增强视觉 */}
      <div className="mt-6 p-4 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border-2 border-amber-200 shadow-inner">
        <h4 className="text-sm font-bold text-amber-900 mb-3">📊 技能池统计</h4>
        <div className="text-sm text-amber-900 space-y-2">
          <div className="flex justify-between items-center bg-white/60 px-3 py-2 rounded">
            <span className="font-medium">非必带技能:</span>
            <span className="font-bold text-lg text-amber-700">{value.totalSkillCount} 个</span>
          </div>
          <div className="flex justify-between items-center bg-white/60 px-3 py-2 rounded">
            <span className="font-medium">必带技能:</span>
            <span className="font-bold text-lg text-green-600">{value.mustHaveSkillCount} 个</span>
          </div>
          <div className="flex justify-between items-center bg-white/60 px-3 py-2 rounded">
            <span className="font-medium">特殊技能 (含在非必带中):</span>
            <span className="font-bold text-lg text-purple-600">{value.specialSkillCount} 个</span>
          </div>
          <div className="flex justify-between items-center bg-amber-200 px-3 py-2 rounded border-2 border-amber-400">
            <span className="font-bold">总技能数 (非必带+必带):</span>
            <span className="font-bold text-xl text-amber-800">
              {value.totalSkillCount + value.mustHaveSkillCount} 个
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
