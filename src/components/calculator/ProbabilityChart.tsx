'use client';

import { useEffect, useState } from 'react';

interface SkillProbability {
  skillCount: number;
  probability: number;
  percentage: string;
}

interface ProbabilityChartProps {
  data: SkillProbability[];
  maxValue: number;
  title: string;
  animationDelay?: number;
}

export default function ProbabilityChart({
  data,
  maxValue,
  title,
  animationDelay = 0
}: ProbabilityChartProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), animationDelay);
    return () => clearTimeout(timer);
  }, [animationDelay]);

  // 找到概率最高的项
  const maxProbItem = data.reduce((max, item) =>
    item.probability > max.probability ? item : max
  , data[0]);

  return (
    <div className="relative">
      {/* 标题 */}
      <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center gap-2">
        <span className="text-3xl">📊</span>
        {title}
      </h3>

      {/* 直方图容器 */}
      <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 shadow-xl border-2 border-amber-300">
        {/* Y轴标签 */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-amber-600 font-semibold py-8">
          <span>{(maxValue * 100).toFixed(0)}%</span>
          <span>{(maxValue * 50).toFixed(0)}%</span>
          <span>0%</span>
        </div>

        {/* 图表区域 */}
        <div className="ml-12 mr-4">
          {/* 网格线 */}
          <div className="absolute left-12 right-4 top-8 bottom-16 pointer-events-none">
            {[0, 25, 50, 75, 100].map((percent) => (
              <div
                key={percent}
                className="absolute left-0 right-0 border-t border-amber-200"
                style={{ bottom: `${percent}%` }}
              />
            ))}
          </div>

          {/* 柱状图 */}
          <div className="relative flex items-end justify-around gap-2 h-80">
            {data.map((item, index) => {
              const heightPercent = (item.probability / maxValue) * 100;
              const isHighest = item.skillCount === maxProbItem.skillCount;

              return (
                <div
                  key={item.skillCount}
                  className="flex-1 flex flex-col items-center justify-end group"
                  style={{
                    animation: isVisible ? `barGrow 0.8s ease-out ${index * 0.1}s both` : 'none',
                  }}
                >
                  {/* 概率标签 - 悬浮显示 */}
                  <div className={`
                    mb-2 px-3 py-2 rounded-lg text-sm font-bold whitespace-nowrap
                    transition-all duration-300 transform
                    ${isHighest
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white scale-110 shadow-lg'
                      : 'bg-white text-amber-900 group-hover:scale-105 shadow-md'
                    }
                  `}>
                    <div className="text-center">
                      <div className="text-lg font-black">
                        {(item.probability * 100).toFixed(2)}%
                      </div>
                      {isHighest && (
                        <div className="text-xs opacity-90">最高概率 🔥</div>
                      )}
                    </div>
                  </div>

                  {/* 柱子 */}
                  <div
                    className={`
                      w-full rounded-t-xl relative overflow-hidden
                      transition-all duration-300
                      ${isHighest
                        ? 'ring-4 ring-red-400'
                        : 'group-hover:ring-2 group-hover:ring-amber-400'
                      }
                    `}
                    style={{
                      height: `${heightPercent}%`,
                      minHeight: '10px'
                    }}
                  >
                    {/* 渐变背景 */}
                    <div className={`
                      absolute inset-0
                      ${isHighest
                        ? 'bg-gradient-to-t from-red-500 via-orange-500 to-yellow-400'
                        : 'bg-gradient-to-t from-amber-400 via-orange-400 to-yellow-300'
                      }
                    `}>
                      {/* 光泽效果 */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer" />

                      {/* 粒子效果 */}
                      {isHighest && (
                        <>
                          <div className="absolute top-0 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
                          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
                          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-white rounded-full animate-ping" style={{ animationDelay: '0.6s' }} />
                        </>
                      )}
                    </div>
                  </div>

                  {/* X轴标签 */}
                  <div className={`
                    mt-3 text-center font-bold
                    ${isHighest ? 'text-red-600 scale-110' : 'text-amber-900'}
                  `}>
                    <div className="text-lg">{item.skillCount}</div>
                    <div className="text-xs text-amber-600">技能</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 底部说明 */}
        <div className="mt-6 pt-6 border-t-2 border-amber-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl mb-1">🎯</div>
              <div className="text-sm font-semibold text-amber-900">最可能结果</div>
              <div className="text-xl font-bold text-red-600 mt-1">
                {maxProbItem.skillCount} 技能
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl mb-1">📈</div>
              <div className="text-sm font-semibold text-amber-900">最高概率</div>
              <div className="text-xl font-bold text-orange-600 mt-1">
                {(maxProbItem.probability * 100).toFixed(2)}%
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="text-2xl mb-1">🎲</div>
              <div className="text-sm font-semibold text-amber-900">期望值</div>
              <div className="text-xl font-bold text-amber-600 mt-1">
                {data.reduce((sum, item) => sum + item.skillCount * item.probability, 0).toFixed(2)} 技能
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 动画样式 */}
      <style jsx>{`
        @keyframes barGrow {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
}
