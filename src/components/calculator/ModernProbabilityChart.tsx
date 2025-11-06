'use client';

import { useEffect, useState } from 'react';

interface SkillProbability {
  skillCount: number;
  probability: number;
  percentage: string;
}

interface ModernProbabilityChartProps {
  data: SkillProbability[];
  animationDelay?: number;
}

export default function ModernProbabilityChart({
  data,
  animationDelay = 0
}: ModernProbabilityChartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  // 找到概率最高的项
  const maxProbItem = data.reduce((max, item) =>
    item.probability > max.probability ? item : max
  , data[0]);

  // 计算最大概率用于缩放
  const maxProb = Math.max(...data.map(item => item.probability));

  return (
    <div className="space-y-6">
      {/* 标题 */}
      <div className="text-center">
        <h3 className="text-2xl font-bold text-amber-900 mb-2 flex items-center justify-center gap-2">
          <span className="text-3xl">📊</span>
          技能数量概率分布
        </h3>
        <p className="text-sm text-amber-600">各技能数量出现的概率统计</p>
      </div>

      {/* 简洁的直方图 */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-200">
        <div className="space-y-4">
          {data.map((item, index) => {
            const isHighest = item.skillCount === maxProbItem.skillCount;
            const widthPercent = (item.probability / maxProb) * 100;

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
                  <div className={`
                    flex-shrink-0 w-24 text-right
                    ${isHighest ? 'text-orange-600' : 'text-amber-900'}
                  `}>
                    <span className={`
                      text-lg font-bold
                      ${isHighest ? 'text-2xl' : ''}
                    `}>
                      {item.skillCount} 技能
                    </span>
                  </div>

                  {/* 进度条 */}
                  <div className="flex-1 relative">
                    <div className="h-12 bg-amber-50 rounded-lg overflow-hidden border border-amber-200">
                      <div
                        className={`
                          h-full relative
                          transition-all duration-1000 ease-out
                          ${isHighest
                            ? 'bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400'
                            : 'bg-gradient-to-r from-amber-400 to-amber-300'
                          }
                        `}
                        style={{
                          width: isVisible ? `${widthPercent}%` : '0%',
                        }}
                      >
                        {/* 光泽效果 */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent" />

                        {/* 最高概率标记 */}
                        {isHighest && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white font-black text-sm drop-shadow-lg">
                              🔥 最高概率
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* 悬浮时显示详细概率 */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white px-3 py-1 rounded-lg text-xs font-bold pointer-events-none z-10">
                      {(item.probability * 100).toFixed(3)}%
                    </div>
                  </div>

                  {/* 概率值 */}
                  <div className={`
                    flex-shrink-0 w-20 text-left
                    ${isHighest ? 'text-orange-600' : 'text-amber-700'}
                  `}>
                    <span className={`
                      font-bold
                      ${isHighest ? 'text-xl' : 'text-lg'}
                    `}>
                      {(item.probability * 100).toFixed(2)}%
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
                    {maxProbItem.skillCount} 技能
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
                    {(maxProbItem.probability * 100).toFixed(2)}%
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
                    {data.reduce((sum, item) => sum + item.skillCount * item.probability, 0).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
