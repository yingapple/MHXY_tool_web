'use client';

import { useEffect, useState } from 'react';

interface SkillProbability {
  skillCount: number;
  probability: number;
  percentage: string;
}

interface DualProbabilityChartProps {
  mainPetSkillDistribution: Map<number, number>; // 主宠技能数分布
  subPetSkillDistribution: Map<number, number>;  // 副宠技能数分布
  mainPetProb: number; // 主宠出现概率（如40%）
  subPetProb: number;  // 副宠出现概率（如40%）
  mergeMode: boolean;
  animationDelay?: number;
}

export default function DualProbabilityChart({
  mainPetSkillDistribution,
  subPetSkillDistribution,
  mainPetProb,
  subPetProb,
  mergeMode,
  animationDelay = 0
}: DualProbabilityChartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  // 计算显示数据
  // 重要：mainPetSkillDistribution 和 subPetSkillDistribution 中存储的是条件概率
  // 例如：mainPetSkillDistribution.get(1) = 0.49 表示"如果出现主宠，有49%概率是1技能"
  // 总概率 = 条件概率 × 出现该结果的概率
  // 例如：主宠1技能的总概率 = 0.49 × 0.4 = 19.6%

  const allSkillCounts = new Set<number>();
  mainPetSkillDistribution.forEach((_, count) => allSkillCounts.add(count));
  subPetSkillDistribution.forEach((_, count) => allSkillCounts.add(count));

  const sortedSkillCounts = Array.from(allSkillCounts).sort((a, b) => a - b);

  const displayData = sortedSkillCounts.map(skillCount => {
    // 条件概率
    const mainCondProb = mainPetSkillDistribution.get(skillCount) || 0;
    const subCondProb = subPetSkillDistribution.get(skillCount) || 0;

    // 总概率 = 条件概率 × 结果概率
    const mainTotalProb = mainCondProb * mainPetProb;
    const subTotalProb = subCondProb * subPetProb;

    return {
      skillCount,
      mainProb: mergeMode ? 0 : mainTotalProb,
      subProb: mergeMode ? 0 : subTotalProb,
      totalProb: mainTotalProb + subTotalProb
    };
  });

  // 找到最高概率
  const maxProb = Math.max(...displayData.map(item => item.totalProb), 0);
  const maxItem = displayData.find(item => item.totalProb === maxProb) || displayData[0] || { skillCount: 0, mainProb: 0, subProb: 0, totalProb: 0 };

  // 如果没有数据，显示提示
  if (displayData.length === 0) {
    return (
      <div className="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-300 text-center">
        <div className="text-4xl mb-3">⚠️</div>
        <div className="text-lg font-bold text-yellow-800 mb-2">暂无数据</div>
        <div className="text-sm text-yellow-700">请先输入宠物技能信息并计算</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 标题 */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-amber-900 mb-2 flex items-center justify-center gap-2">
          <span className="text-3xl">📊</span>
          技能数量概率分布
        </h3>
        <p className="text-sm text-amber-600">
          {mergeMode ? '合并主副宠概率统计' : '主宠和副宠分别统计'}
        </p>
      </div>

      {/* 直方图 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
        <div className="space-y-5">
          {displayData.map((item, index) => {
            const isHighest = item.totalProb === maxProb && item.totalProb > 0;

            return (
              <div
                key={item.skillCount}
                className="group"
                style={{
                  animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.08}s both` : 'none',
                }}
              >
                {/* 行容器 */}
                <div className="flex items-center gap-4">
                  {/* 技能数标签 */}
                  <div className={`flex-shrink-0 w-24 text-right ${isHighest ? 'text-orange-600' : 'text-amber-900'}`}>
                    <span className={`text-lg font-bold ${isHighest ? 'text-2xl' : ''}`}>
                      {item.skillCount} 技能
                    </span>
                  </div>

                  {/* 进度条区域 */}
                  <div className="flex-1 relative">
                    {mergeMode ? (
                      /* 合并模式：单条 */
                      <div className="h-12 bg-amber-50 rounded-lg overflow-hidden border border-amber-200">
                        <div
                          className={`h-full relative transition-all duration-1000 ease-out ${
                            isHighest
                              ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400'
                              : 'bg-gradient-to-r from-amber-400 to-amber-300'
                          }`}
                          style={{
                            width: isVisible ? `${(item.totalProb / maxProb) * 100}%` : '0%',
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
                          {isHighest && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-white font-black text-sm drop-shadow-lg">
                                🔥 最高概率
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      /* 非合并模式：双条（上下） */
                      <div className="space-y-1">
                        {/* 主宠 */}
                        <div className="relative">
                          <div className="h-5 bg-blue-50 rounded overflow-hidden border border-blue-200">
                            <div
                              className="h-full relative transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 to-blue-400"
                              style={{
                                width: isVisible ? `${(item.mainProb / maxProb) * 100}%` : '0%',
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
                            </div>
                          </div>
                          <span className="absolute left-2 top-0 text-xs text-blue-700 font-semibold">主宠</span>
                        </div>

                        {/* 副宠 */}
                        <div className="relative">
                          <div className="h-5 bg-green-50 rounded overflow-hidden border border-green-200">
                            <div
                              className="h-full relative transition-all duration-1000 ease-out bg-gradient-to-r from-green-500 to-green-400"
                              style={{
                                width: isVisible ? `${(item.subProb / maxProb) * 100}%` : '0%',
                              }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent" />
                            </div>
                          </div>
                          <span className="absolute left-2 top-0 text-xs text-green-700 font-semibold">副宠</span>
                        </div>
                      </div>
                    )}

                    {/* 悬浮提示 */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-bold pointer-events-none z-10">
                      {mergeMode ? (
                        <>{(item.totalProb * 100).toFixed(3)}%</>
                      ) : (
                        <>
                          主: {(item.mainProb * 100).toFixed(2)}%<br />
                          副: {(item.subProb * 100).toFixed(2)}%
                        </>
                      )}
                    </div>
                  </div>

                  {/* 概率值 */}
                  <div className={`flex-shrink-0 w-20 text-left ${isHighest ? 'text-orange-600' : 'text-amber-700'}`}>
                    <span className={`font-bold ${isHighest ? 'text-xl' : 'text-lg'}`}>
                      {(item.totalProb * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 底部统计卡片 */}
        <div className="mt-8 pt-6 border-t-2 border-amber-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 最可能结果 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border-2 border-orange-300">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <div className="text-xs text-orange-700 font-semibold mb-1">最可能结果</div>
                  <div className="text-2xl font-black text-orange-600">
                    {maxItem.skillCount} 技能
                  </div>
                </div>
              </div>
            </div>

            {/* 最高概率 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border-2 border-amber-300">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📈</div>
                <div>
                  <div className="text-xs text-amber-700 font-semibold mb-1">最高概率</div>
                  <div className="text-2xl font-black text-amber-600">
                    {(maxProb * 100).toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>

            {/* 期望值 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border-2 border-blue-300">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🎲</div>
                <div>
                  <div className="text-xs text-blue-700 font-semibold mb-1">期望技能数</div>
                  <div className="text-2xl font-black text-blue-600">
                    {displayData.reduce((sum, item) => sum + item.skillCount * item.totalProb, 0).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 图例（非合并模式） */}
        {!mergeMode && (
          <div className="mt-6 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-blue-400 rounded"></div>
              <span className="text-blue-700 font-semibold">主宠 ({(mainPetProb * 100).toFixed(0)}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-green-400 rounded"></div>
              <span className="text-green-700 font-semibold">副宠 ({(subPetProb * 100).toFixed(0)}%)</span>
            </div>
          </div>
        )}
      </div>

      {/* 动画样式 */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
