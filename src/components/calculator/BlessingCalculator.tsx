'use client';

import { useState } from 'react';
import {
  calculateBlessing,
  formatNumber,
  formatProbability,
  type BlessingResult,
} from '@/lib/calculator/blessing';

export default function BlessingCalculator() {
  // 表单状态
  const [petSkillCount, setPetSkillCount] = useState<number>(10); // 召唤兽可赐福技能数
  const [lockedSkills, setLockedSkills] = useState<number>(0);
  const [baseCost, setBaseCost] = useState<number>(800000); // 默认80万梦幻币

  const TOTAL_SUPER_SKILLS = 43; // 全服超级技能总数（固定）

  // 计算结果
  const [result, setResult] = useState<BlessingResult | null>(null);
  const [error, setError] = useState<string>('');

  // 处理计算
  const handleCalculate = () => {
    try {
      setError('');
      const calculationResult = calculateBlessing({
        petSkillCount,
        lockedSkills,
        baseCost,
      });
      setResult(calculationResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : '计算出错');
      setResult(null);
    }
  };

  // 风险等级对应的颜色
  const getRiskColor = (
    riskLevel: 'low' | 'medium' | 'high' | 'extreme'
  ) => {
    const colors = {
      low: 'text-green-600 bg-green-50',
      medium: 'text-yellow-600 bg-yellow-50',
      high: 'text-orange-600 bg-orange-50',
      extreme: 'text-red-600 bg-red-50',
    };
    return colors[riskLevel];
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* 输入表单 */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">
          赐福参数设置
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 全服超级技能总数 - 固定显示 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              全服超级技能总数
              <span className="text-green-600 text-xs ml-2 font-bold">
                ✓ 官方数据
              </span>
            </label>
            <div className="w-full px-4 py-2 border-2 border-green-300 rounded-lg bg-green-50 text-green-900 font-bold text-lg">
              {TOTAL_SUPER_SKILLS} 个
            </div>
            <p className="text-xs text-green-600 mt-1">
              《天命之路》资料片共43个超级技能
            </p>
          </div>

          {/* 召唤兽可赐福技能数 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              召唤兽可赐福技能数
              <span className="text-blue-500 text-xs ml-2">
                (宠物已有的超级技能数量)
              </span>
            </label>
            <input
              type="number"
              min="4"
              max="43"
              value={petSkillCount}
              onChange={(e) => setPetSkillCount(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              宠物身上有多少个超级技能可以被赐福
            </p>
          </div>

          {/* 单次赐福成本 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              单个仙露丸子价格（梦幻币）
            </label>
            <input
              type="number"
              min="0"
              step="10000"
              value={baseCost}
              onChange={(e) => setBaseCost(Number(e.target.value))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              当前服务器仙露丸子的市场价格
            </p>
          </div>

          {/* 目标：四赐福 */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              赐福目标
              <span className="text-purple-600 text-xs ml-2 font-bold">
                固定目标: 四赐福
              </span>
            </label>
            <div className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg bg-purple-50">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎯</div>
                <div className="flex-1">
                  <div className="font-bold text-purple-900 text-lg">
                    目标: 抽到的4个技能全部来自宠物的可赐福技能池
                  </div>
                  <div className="text-sm text-purple-700 mt-1">
                    这是最理想的赐福结果，俗称"四赐福"，技能100%触发
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 锁定技能数 */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              锁定已有技能数量
              <span className="text-red-500 text-xs ml-2">
                (成本呈指数增长!)
              </span>
            </label>
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setLockedSkills(num)}
                  className={`flex-1 py-3 rounded-lg font-medium transition-all ${
                    lockedSkills === num
                      ? 'bg-red-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  锁定 {num}
                  {num > 0 && (
                    <span className="text-xs block">
                      ({Math.pow(5, num)}个丸子)
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              锁定技能不参与随机，但成本呈5倍指数增长 (5^n)
            </p>
          </div>
        </div>

        {/* 计算按钮 */}
        <div className="mt-6">
          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-lg font-bold text-lg hover:from-amber-600 hover:to-orange-600 transition-all shadow-md hover:shadow-lg"
          >
            开始计算
          </button>
        </div>

        {/* 错误提示 */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            ❌ {error}
          </div>
        )}
      </div>

      {/* 计算结果 */}
      {result && (
        <div className="space-y-6">
          {/* 核心数据卡片 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">
              计算结果
            </h2>

            {/* 风险等级和建议 */}
            <div
              className={`p-4 rounded-lg mb-6 ${getRiskColor(result.riskLevel)}`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">
                  {result.riskLevel === 'low' && '✅'}
                  {result.riskLevel === 'medium' && '💰'}
                  {result.riskLevel === 'high' && '⚠️'}
                  {result.riskLevel === 'extreme' && '❌'}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg mb-1">
                    {result.riskLevel === 'low' && '低风险'}
                    {result.riskLevel === 'medium' && '中等风险'}
                    {result.riskLevel === 'high' && '高风险'}
                    {result.riskLevel === 'extreme' && '极高风险'}
                  </div>
                  <div>{result.recommendation}</div>
                </div>
              </div>
            </div>

            {/* 核心数据网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">单次成功概率</div>
                <div className="text-2xl font-bold text-blue-900">
                  {formatProbability(result.probability)}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                <div className="text-sm text-green-600 mb-1">期望尝试次数</div>
                <div className="text-2xl font-bold text-green-900">
                  {formatNumber(result.expectedAttempts)} 次
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg">
                <div className="text-sm text-amber-600 mb-1">
                  单次赐福成本
                </div>
                <div className="text-2xl font-bold text-amber-900">
                  {formatNumber(result.singleAttemptCost)} 个
                </div>
                <div className="text-xs text-amber-600 mt-1">
                  {formatNumber(result.singleAttemptPrice)} 币
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-lg">
                <div className="text-sm text-red-600 mb-1">期望总成本</div>
                <div className="text-2xl font-bold text-red-900">
                  {formatNumber(result.totalExpectedCost)} 个
                </div>
                <div className="text-xs text-red-600 mt-1">
                  {formatNumber(result.totalExpectedPrice)} 币
                </div>
              </div>
            </div>
          </div>

          {/* 概率分布表格 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-4">
              不同尝试次数的成功概率
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-amber-50">
                    <th className="px-4 py-3 text-left text-sm font-medium text-amber-900">
                      尝试次数
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-amber-900">
                      累积成功概率
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-amber-900">
                      需要仙露丸子
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-amber-900">
                      总成本（梦幻币）
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-amber-900">
                      概率评价
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {result.probabilityDistribution.map((item, index) => {
                    const probPercent = item.cumulativeProbability * 100;
                    let evaluation = '';
                    let rowColor = '';

                    if (probPercent >= 90) {
                      evaluation = '✅ 非常可能';
                      rowColor = 'bg-green-50';
                    } else if (probPercent >= 70) {
                      evaluation = '👍 比较可能';
                      rowColor = 'bg-blue-50';
                    } else if (probPercent >= 50) {
                      evaluation = '🤔 有一定希望';
                      rowColor = 'bg-yellow-50';
                    } else if (probPercent >= 30) {
                      evaluation = '😐 希望较小';
                      rowColor = 'bg-orange-50';
                    } else {
                      evaluation = '😔 希望很小';
                      rowColor = 'bg-red-50';
                    }

                    return (
                      <tr key={index} className={rowColor}>
                        <td className="px-4 py-3 font-medium">
                          {item.attempts} 次
                        </td>
                        <td className="px-4 py-3 font-bold text-blue-600">
                          {formatProbability(item.cumulativeProbability)}
                        </td>
                        <td className="px-4 py-3">
                          {formatNumber(item.cost)} 个
                        </td>
                        <td className="px-4 py-3 text-red-600 font-medium">
                          {formatNumber(item.price)}
                        </td>
                        <td className="px-4 py-3">{evaluation}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* 可视化图表区域 (未来扩展) */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-amber-900 mb-4">
              💡 优化建议
            </h3>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="text-xl">📊</div>
                <div>
                  <div className="font-medium text-blue-900">成本分析</div>
                  <div className="text-sm text-blue-700">
                    {lockedSkills === 0 && (
                      <>
                        不锁定技能的期望成本为{' '}
                        <strong>
                          {formatNumber(result.totalExpectedPrice)}
                        </strong>{' '}
                        梦幻币（约 {formatNumber(result.totalExpectedCost)} 个仙露丸子），
                        建议准备{' '}
                        <strong>
                          {formatNumber(result.totalExpectedPrice * 1.5)}
                        </strong>{' '}
                        梦幻币以应对运气不佳的情况。
                      </>
                    )}
                    {lockedSkills > 0 && (
                      <>
                        锁定 {lockedSkills} 个技能后，单次成本增加到{' '}
                        <strong>{result.singleAttemptCost}</strong>{' '}
                        个仙露丸子 (= {formatNumber(result.singleAttemptPrice)} 梦幻币)。
                        虽然单次贵，但成功概率大幅提升！
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <div className="text-xl">💰</div>
                <div>
                  <div className="font-medium text-green-900">策略建议</div>
                  <div className="text-sm text-green-700">
                    {result.petSkillCount >= 20 && lockedSkills === 0 && (
                      <>
                        你的宠物有 {result.petSkillCount} 个可赐福技能，概率较高！
                        可以先不锁定尝试几次，如果出了1-2个满意的技能再考虑锁定。
                      </>
                    )}
                    {result.petSkillCount < 10 && lockedSkills === 0 && (
                      <>
                        宠物只有 {result.petSkillCount} 个可赐福技能，不锁定概率很低。
                        建议先刷到部分满意技能后，再锁定继续刷。
                      </>
                    )}
                    {lockedSkills >= 2 && (
                      <>
                        锁定 {lockedSkills} 个技能成本很高，但成功概率显著提升！
                        确保锁定的技能都是你想要的。
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg">
                <div className="text-xl">⚠️</div>
                <div>
                  <div className="font-medium text-amber-900">风险提示</div>
                  <div className="text-sm text-amber-700">
                    期望成本是理论平均值，实际消耗可能更高或更低。建议根据自身经济情况，设定一个止损线，避免过度投入。
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
