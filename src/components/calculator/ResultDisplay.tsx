'use client';

import { SimpleCalculationResult } from '@/lib/calculator/simple-probability';
import { calculateRefinementProfit, RefinementProfitResult } from '@/lib/calculator/book-typing';
import { useEffect, useState } from 'react';

interface ResultDisplayProps {
  result: SimpleCalculationResult;
  isCalculating: boolean;
  profitInput?: {
    petACost: number;
    petBCost: number;
    refinementFee: number;
    targetSkills: number;
    targetMarketPrice: number;
  };
}

export default function ResultDisplay({ result, isCalculating, profitInput }: ResultDisplayProps) {
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

  // 处理技能概率数据：根据模式决定是否合并
  const processedSkillProbabilities = mergeMode
    ? (() => {
        // 合并模式：不区分主副宠，只看技能数
        // 合并公式：P(n技能) = P(主宠n技能) × P(主宠) + P(副宠n技能) × P(副宠)
        // 由于主副宠技能池相同，概率分布相同，所以：
        // P(n技能) = P(n技能原始) × (P(主宠) + P(副宠))
        const mainSubProb = result.resultTypes.mainPet + result.resultTypes.subPet;

        return result.skillProbabilities.map((item) => ({
          ...item,
          probability: item.probability * mainSubProb,
          percentage: (item.probability * mainSubProb * 100).toFixed(2) + '%',
        }));
      })()
    : result.skillProbabilities;

  // 安全地获取最高概率的技能数（防止空数组错误）
  const mostLikelySkillResult = processedSkillProbabilities.length > 0
    ? processedSkillProbabilities.reduce((max, item) =>
        item.probability > max.probability ? item : max
      )
    : { skillCount: 0, probability: 0, percentage: '0%' };

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-2 animate-pulse">
                {result.expectedSkillCount}
              </div>
              <div className="text-lg font-semibold text-amber-900">期望技能数</div>
              <div className="text-sm text-amber-600 mt-1">平均能继承的技能数量</div>
            </div>

            {result.baseInfo.specialSkillPool > 0 && (
              <div className="text-center">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2 animate-pulse">
                  {result.expectedSpecialSkillCount}
                </div>
                <div className="text-lg font-semibold text-amber-900">期望特殊技能数</div>
                <div className="text-sm text-amber-600 mt-1">平均能继承的特殊技能</div>
              </div>
            )}
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">{result.baseInfo.totalSkillPool}</div>
            <div className="text-sm text-amber-700 mt-1">总技能池</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">{result.baseInfo.mustHaveSkillCount}</div>
            <div className="text-sm text-amber-700 mt-1">必带技能</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">{result.baseInfo.specialSkillPool}</div>
            <div className="text-sm text-amber-700 mt-1">特殊技能池</div>
          </div>
          <div className="bg-amber-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-amber-600">{(result.baseInfo.skillRetentionRate * 100).toFixed(0)}%</div>
            <div className="text-sm text-amber-700 mt-1">保留概率</div>
          </div>
        </div>
      </div>

      {/* 技能数量概率分布 */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-200">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-amber-900">🎲 技能数量概率分布</h4>
          <button
            onClick={() => setMergeMode(!mergeMode)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              mergeMode
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
            }`}
          >
            {mergeMode ? '✓ 合并模式' : '分开显示'}
          </button>
        </div>
        {mergeMode && (
          <div className="mb-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              💡 <span className="font-semibold">合并模式：</span>
              不区分主宠或副宠，只看技能数量。例如：主宠7技能和副宠7技能的概率会合并计算。
            </p>
          </div>
        )}
        <div className="space-y-3">
          {processedSkillProbabilities.map((item, index) => (
            <div
              key={index}
              className="group hover:scale-[1.02] transition-transform"
              style={{
                animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-sm font-semibold text-amber-900 w-20">
                  {item.skillCount} 技能
                </span>
                <div className="flex-1 bg-amber-100 rounded-full h-8 overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-3"
                    style={{
                      width: `${Math.max(item.probability * 100, 2)}%`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <span className="text-sm font-bold text-white drop-shadow">
                      {item.percentage}
                    </span>
                  </div>
                </div>
                <span className="text-sm text-amber-600 w-16 text-right">
                  {(item.probability * 100).toFixed(2)}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 最高概率提示 */}
        <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-2 border-amber-300">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌟</span>
            <div>
              <div className="font-semibold text-amber-900">
                最有可能的结果: {mostLikelySkillResult.skillCount} 技能
              </div>
              <div className="text-sm text-amber-700">
                概率: {mostLikelySkillResult.percentage}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 特殊技能概率分布 */}
      {result.baseInfo.specialSkillPool > 0 && (
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-purple-200">
          <h4 className="text-lg font-semibold text-purple-900 mb-4">✨ 特殊技能保留概率</h4>
          <div className="space-y-3">
            {result.specialSkillProbabilities.map((item, index) => (
              <div
                key={index}
                className="group hover:scale-[1.02] transition-transform"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1 + 0.5}s both`,
                }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-sm font-semibold text-purple-900 w-20">
                    {item.specialSkillCount} 特殊
                  </span>
                  <div className="flex-1 bg-purple-100 rounded-full h-8 overflow-hidden relative">
                    <div
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end px-3"
                      style={{
                        width: `${Math.max(item.probability * 100, 2)}%`,
                        animationDelay: `${index * 0.1 + 0.5}s`,
                      }}
                    >
                      <span className="text-sm font-bold text-white drop-shadow">
                        {item.percentage}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-purple-600 w-16 text-right">
                    {(item.probability * 100).toFixed(2)}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 特殊技能说明 */}
          <div className="mt-4 p-3 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-800">
              💡 <span className="font-semibold">提示:</span>
              特殊技能（如高级必杀、高级神佑复生）的保留概率同样为30%，这里显示的是最终保留特殊技能的数量分布。
            </p>
          </div>
        </div>
      )}

      {/* 结果种类分布 */}
      <div className="mb-8 rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-200">
        <h4 className="text-lg font-semibold text-amber-900 mb-4">🎭 结果种类概率</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl mb-2">🦁</div>
            <div className="text-2xl font-bold text-blue-600">
              {(result.resultTypes.mainPet * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-blue-700 mt-1">主宠种类</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl mb-2">🐉</div>
            <div className="text-2xl font-bold text-green-600">
              {(result.resultTypes.subPet * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-green-700 mt-1">副宠种类</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
            <div className="text-3xl mb-2">🐺</div>
            <div className="text-2xl font-bold text-gray-600">
              {(result.resultTypes.wild * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-700 mt-1">野生宠物</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl mb-2">🐢</div>
            <div className="text-2xl font-bold text-purple-600">
              {(result.resultTypes.special * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-purple-700 mt-1">特殊宠物</div>
          </div>
        </div>
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
              根据概率分布，你最有可能炼出 <span className="font-semibold text-amber-900">
                {mostLikelySkillResult.skillCount} 技能
              </span> 的宝宝
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-600 mt-0.5">•</span>
            <span>
              平均期望技能数为 <span className="font-semibold text-amber-900">{result.expectedSkillCount}</span>，
              建议炼妖 <span className="font-semibold text-amber-900">10-20次</span> 来获得理想结果
            </span>
          </li>
          {result.expectedSpecialSkillCount > 0.5 && (
            <li className="flex items-start gap-2">
              <span className="text-purple-600 mt-0.5">•</span>
              <span>
                平均能保留 <span className="font-semibold text-purple-900">{result.expectedSpecialSkillCount.toFixed(1)}</span> 个特殊技能，
                这是个不错的炼妖组合！
              </span>
            </li>
          )}
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
