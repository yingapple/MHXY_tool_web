'use client';

import { SimpleCalculationResult } from '@/lib/calculator/simple-probability';
import { calculateRefinementProfit, RefinementProfitResult } from '@/lib/calculator/book-typing';
import { useEffect, useState } from 'react';
import DualProbabilityChart from './DualProbabilityChart';

interface ResultDisplayProps {
  result: SimpleCalculationResult;
  isCalculating: boolean;
  calculationInput: {
    petA: { mustHaveSkillCount: number };
    petB: { mustHaveSkillCount: number };
  };
  profitInput?: {
    petACost: number;
    petBCost: number;
    refinementFee: number;
    targetSkills: number;
    targetMarketPrice: number;
  };
}

export default function ResultDisplay({ result, isCalculating, calculationInput, profitInput }: ResultDisplayProps) {
  const [showResult, setShowResult] = useState(false);
  const [mergeMode, setMergeMode] = useState(false); // 合并模式：合并主副宠相同技能数

  // 计算收益
  const targetProb = profitInput ? result.skillProbabilities.find(
    (item) => item.skillCount === profitInput.targetSkills
  ) : null;

  const profitResult: RefinementProfitResult | null = profitInput && targetProb ?
    calculateRefinementProfit({
      petACost: profitInput.petACost,
      petBCost: profitInput.petBCost,
      refinementFee: profitInput.refinementFee,
      targetSkills: profitInput.targetSkills,
      targetProbability: targetProb.probability,
      targetMarketPrice: profitInput.targetMarketPrice,
    }) : null;

  useEffect(() => {
    if (!isCalculating) {
      // 重置动画
      setShowResult(false);
      // 触发新的动画
      const timer = setTimeout(() => setShowResult(true), 100);
      return () => clearTimeout(timer);
    }
  }, [isCalculating, result]);


  return (
    <div
      className={`transition-all duration-700 ${
        showResult ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* 仪式感标题 */}
      <div className="text-center mb-8">
        <div className="inline-block">
          <div className="text-4xl mb-2 animate-bounce">🎉</div>
          <h3 className="text-2xl font-bold text-amber-900 mb-2">计算结果</h3>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto" />
        </div>
      </div>

      {/* 期望值卡片 - 突出显示 */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-400 via-orange-400 to-red-400 p-1 shadow-2xl">
        <div className="rounded-2xl bg-white p-8">
          <div className="text-center">
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2 animate-pulse">
              {result.expectedSkillCount}
            </div>
            <div className="text-lg font-semibold text-amber-900">期望技能数</div>
            <div className="text-sm text-amber-600 mt-1">平均能继承的技能数量</div>
          </div>
        </div>
      </div>

      {/* 收益激励卡片 */}
      {profitResult && (
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 p-8 shadow-2xl border-4 border-orange-400 animate-fade-in">
          <h3 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-3">
            <span>🔥</span>
            收益分析 - 炼出来就值{profitInput!.targetMarketPrice}万！
          </h3>

          {/* 核心数据卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-2xl text-white">
              <div className="text-4xl mb-2">🎯</div>
              <div className="text-sm font-bold opacity-90">单次出{profitInput!.targetSkills}技能概率</div>
              <div className="text-3xl font-black mt-2">{targetProb ? (targetProb.probability * 100).toFixed(1) : '0.0'}%</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 shadow-2xl text-white">
              <div className="text-4xl mb-2">🎲</div>
              <div className="text-sm font-bold opacity-90">平均需要炼</div>
              <div className="text-3xl font-black mt-2">{profitResult.expectedAttempts} 次</div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-6 shadow-2xl text-white">
              <div className="text-4xl mb-2">💎</div>
              <div className="text-sm font-bold opacity-90">炼出来就值</div>
              <div className="text-3xl font-black mt-2">{profitInput!.targetMarketPrice} 万</div>
            </div>
          </div>

          {/* 激励文案 */}
          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl border-4 border-green-400 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">🎊</span>
                <span className="text-2xl font-black text-green-800">最佳情况</span>
              </div>
              <p className="text-2xl font-black text-green-700">{profitResult.motivationalText.bestCase}</p>
            </div>

            <div className={`p-6 rounded-xl border-4 shadow-2xl ${
              profitResult.expectedProfit > 0
                ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500'
                : 'bg-gradient-to-r from-orange-100 to-red-100 border-orange-500'
            }`}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl">{profitResult.expectedProfit > 0 ? '✅' : '⚡'}</span>
                <span className="text-2xl font-black text-gray-900">建议</span>
              </div>
              <p className="text-2xl font-black text-gray-900">{profitResult.motivationalText.recommendation}</p>
            </div>
          </div>

          {/* 收益表格 */}
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl">
            <h4 className="text-xl font-black text-purple-900 mb-4 flex items-center gap-2">
              <span>📊</span>
              详细收益表（前10次）- 炼出{profitInput!.targetSkills}技能就值{profitInput!.targetMarketPrice}万
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold">炼妖次数</th>
                    <th className="px-4 py-3 text-left font-bold">累计炼出概率</th>
                    <th className="px-4 py-3 text-left font-bold">累计成本</th>
                    <th className="px-4 py-3 text-left font-bold">净利润</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-200">
                  {profitResult.profitTable.slice(0, 10).map((row, index) => {
                    const isProfit = row.profit > 0;
                    const isHighSuccess = row.cumulativeSuccessRate >= 0.8;

                    return (
                      <tr
                        key={index}
                        className={`hover:bg-purple-50 transition-colors ${
                          isProfit ? 'bg-green-50' : 'bg-red-50'
                        }`}
                      >
                        <td className="px-4 py-3 font-bold text-purple-900">{row.attempts} 次</td>
                        <td className={`px-4 py-3 font-bold ${isHighSuccess ? 'text-green-600' : 'text-purple-700'}`}>
                          {row.cumulativeSuccessRatePercent}
                        </td>
                        <td className="px-4 py-3 font-semibold text-gray-700">{row.totalCost.toFixed(0)} 万</td>
                        <td className={`px-4 py-3 font-black text-xl ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                          {isProfit ? '+' : ''}{row.profit.toFixed(0)} 万
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
              <p className="text-sm text-purple-800 font-semibold">
                💡 <span className="font-black">提示：</span>绿色行表示炼出后盈利，红色行表示亏损。"累计炼出概率"表示在N次内至少炼出一次{profitInput!.targetSkills}技能的概率。净利润 = {profitInput!.targetMarketPrice}万 - 累计成本。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 基础信息 */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-200">
        <h4 className="text-lg font-semibold text-amber-900 mb-4">📋 技能池信息</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">{result.baseInfo.totalSkillPool}</div>
            <div className="text-sm text-amber-700 mt-1">总技能池</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">{result.baseInfo.mustHaveSkillCount}</div>
            <div className="text-sm text-amber-700 mt-1">必带技能</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">{(result.baseInfo.skillRetentionRate * 100).toFixed(0)}%</div>
            <div className="text-sm text-amber-700 mt-1">保留概率</div>
          </div>
        </div>
      </div>

      {/* 技能数量概率分布 - 现代化直方图 */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={() => setMergeMode(!mergeMode)}
            className={`px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg ${
              mergeMode
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-xl'
                : 'bg-white text-amber-700 hover:bg-amber-50 ring-2 ring-amber-300 hover:ring-amber-400'
            }`}
          >
            {mergeMode ? '✓ 合并模式（主副宠合计）' : '📊 切换到合并模式'}
          </button>
        </div>
        {mergeMode && (
          <div className="mb-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-2 border-blue-300">
            <p className="text-sm text-blue-800 font-semibold">
              💡 <span className="font-black">合并模式说明：</span>
              不区分主宠或副宠，只看技能数量。例如：主宠7技能和副宠7技能的概率会合并计算。
            </p>
          </div>
        )}

        <DualProbabilityChart
          mainPetSkillDistribution={result.mainPetSkillDistribution}
          subPetSkillDistribution={result.subPetSkillDistribution}
          mainPetProb={result.resultTypes.mainPet}
          subPetProb={result.resultTypes.subPet}
          mergeMode={mergeMode}
          animationDelay={200}
        />
      </div>



      {/* 行动建议 */}
      <div className="rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 p-6 shadow-sm">
        <h4 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
          <span className="text-2xl">💡</span>
          炼妖建议
        </h4>
        <ul className="space-y-2 text-amber-800">
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>
              查看上方直方图了解各技能数量的概率分布
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>
              平均期望技能数为 <span className="font-semibold text-amber-900">{result.expectedSkillCount}</span>，
              建议炼妖 <span className="font-semibold text-amber-900">10-20次</span> 来获得理想结果
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>
              有 <span className="font-semibold text-amber-900">
                {((result.resultTypes.mainPet + result.resultTypes.subPet) * 100).toFixed(1)}%
              </span> 的概率出现主副宠种类
            </span>
          </li>
        </ul>
      </div>

      {/* CSS动画 */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
