'use client';

import { useState } from 'react';
import { calculateBookTyping, BookTypingInput, BookTypingResult } from '@/lib/calculator/book-typing';

export default function BookTypingPage() {
  const [input, setInput] = useState<BookTypingInput>({
    totalSkills: 5,
    targetSkills: 2,
    bookPrice: 80,
    petCurrentPrice: 100,
    petTargetPrice: 300,
  });

  const [result, setResult] = useState<BookTypingResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      const calculatedResult = calculateBookTyping(input);
      setResult(calculatedResult);
      setIsCalculating(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* 中国风装饰背景 */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>

        {/* 祥云 */}
        <svg className="absolute top-1/4 right-0 w-64 h-64 text-amber-300 opacity-20" viewBox="0 0 200 200">
          <path d="M100,30 Q70,20 80,10 T120,15 Q140,10 145,30 T125,55 Q135,70 110,70 T80,60 Q65,70 70,55 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Header */}
      <header className="border-b-4 border-red-700 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 shadow-2xl sticky top-0 z-10 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(251,191,36,0.1)_49%,rgba(251,191,36,0.1)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform">
              <img src="/logo-meng.svg" alt="梦" className="w-10 h-10 md:w-12 md:h-12" />
              <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                梦幻西游炼妖助手
              </h1>
            </a>
            <nav className="flex gap-2 md:gap-3">
              <a href="/calculator" className="px-3 md:px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-yellow-300 text-sm md:text-base">
                炼妖计算器
              </a>
              <a href="/blessing" className="px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-blue-300 text-sm md:text-base">
                赐福计算器
              </a>
              <a href="/book-typing" className="px-3 md:px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-lg border-2 border-purple-300 text-sm md:text-base">
                打书计算器
              </a>
              <a href="/guides" className="px-3 md:px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-red-400 text-sm md:text-base">
                攻略库
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 relative">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-5xl">📖</span>
            <h2 className="text-4xl font-black bg-gradient-to-r from-purple-700 via-pink-600 to-red-700 text-transparent bg-clip-text">
              打书成功率计算器
            </h2>
          </div>
          <p className="text-xl text-purple-800 font-bold">
            精确计算打书概率，展示打成后的暴利收益！
          </p>
        </div>

        {/* 输入区域 */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-white to-purple-50 p-8 shadow-2xl ring-2 ring-purple-300">
          <h3 className="text-2xl font-black text-purple-900 mb-6 flex items-center gap-2">
            <span>⚙️</span>
            打书参数设置
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 总技能数 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border-2 border-blue-300 shadow-md">
              <label className="block text-base font-bold text-blue-900 mb-3 flex items-center gap-2">
                <span>📚</span>
                宝宝总技能数
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={input.totalSkills}
                onChange={(e) => setInput({ ...input, totalSkills: parseInt(e.target.value) || 1 })}
                className="w-full rounded-lg border-2 border-blue-300 px-5 py-3 text-xl font-bold text-blue-900 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 shadow-sm hover:border-blue-400 transition-all"
              />
              <p className="text-xs text-blue-700 mt-2 bg-blue-200 px-3 py-2 rounded">例如：5技能宝宝输入5</p>
            </div>

            {/* 目标技能数 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-2 border-red-300 shadow-md">
              <label className="block text-base font-bold text-red-900 mb-3 flex items-center gap-2">
                <span>🎯</span>
                想打掉的垃圾技能数
              </label>
              <input
                type="number"
                min="1"
                max={input.totalSkills}
                value={input.targetSkills}
                onChange={(e) => setInput({ ...input, targetSkills: parseInt(e.target.value) || 1 })}
                className="w-full rounded-lg border-2 border-red-300 px-5 py-3 text-xl font-bold text-red-900 bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500 shadow-sm hover:border-red-400 transition-all"
              />
              <p className="text-xs text-red-700 mt-2 bg-red-200 px-3 py-2 rounded">想打掉几个技能？例如：2个</p>
            </div>

            {/* 兽决价格 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border-2 border-amber-300 shadow-md">
              <label className="block text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>💎</span>
                高级兽决价格（万）
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={input.bookPrice}
                onChange={(e) => setInput({ ...input, bookPrice: parseInt(e.target.value) || 0 })}
                className="w-full rounded-lg border-2 border-amber-300 px-5 py-3 text-xl font-bold text-amber-900 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500 shadow-sm hover:border-amber-400 transition-all"
              />
              <p className="text-xs text-amber-700 mt-2 bg-amber-200 px-3 py-2 rounded">你想打的高级兽决价格</p>
            </div>

            {/* 当前价格 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-2 border-green-300 shadow-md">
              <label className="block text-base font-bold text-green-900 mb-3 flex items-center gap-2">
                <span>💰</span>
                宝宝当前价格（万）
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={input.petCurrentPrice}
                onChange={(e) => setInput({ ...input, petCurrentPrice: parseInt(e.target.value) || 0 })}
                className="w-full rounded-lg border-2 border-green-300 px-5 py-3 text-xl font-bold text-green-900 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm hover:border-green-400 transition-all"
              />
              <p className="text-xs text-green-700 mt-2 bg-green-200 px-3 py-2 rounded">打书前的市场价</p>
            </div>

            {/* 目标价格 */}
            <div className="md:col-span-2 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-2 border-purple-300 shadow-md">
              <label className="block text-base font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>🏆</span>
                打成后目标价格（万）
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={input.petTargetPrice}
                onChange={(e) => setInput({ ...input, petTargetPrice: parseInt(e.target.value) || 0 })}
                className="w-full rounded-lg border-2 border-purple-300 px-5 py-3 text-xl font-bold text-purple-900 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 shadow-sm hover:border-purple-400 transition-all"
              />
              <p className="text-xs text-purple-700 mt-2 bg-purple-200 px-3 py-2 rounded">⭐ 打成后能卖多少钱？</p>
            </div>
          </div>
        </div>

        {/* 计算按钮 */}
        <div className="text-center mb-8">
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-2xl font-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-110 border-4 border-yellow-300 overflow-hidden disabled:opacity-50"
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_linear_infinite]"></div>
            <span className="relative flex items-center gap-3">
              {isCalculating ? (
                <>
                  <svg className="animate-spin h-7 w-7" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  计算中...
                </>
              ) : (
                <>
                  <span>🔮</span>
                  立即计算收益
                  <span>💰</span>
                </>
              )}
            </span>
          </button>
        </div>

        {/* 结果显示 */}
        {result && (
          <div className="space-y-8 animate-fade-in">
            {/* 核心数据 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-6 shadow-2xl text-white transform hover:scale-105 transition-all">
                <div className="text-5xl mb-3">🎯</div>
                <div className="text-sm font-bold opacity-90">单次成功率</div>
                <div className="text-4xl font-black mt-2">{result.successRatePercent}</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-6 shadow-2xl text-white transform hover:scale-105 transition-all">
                <div className="text-5xl mb-3">📖</div>
                <div className="text-sm font-bold opacity-90">平均需要</div>
                <div className="text-4xl font-black mt-2">{result.expectedAttempts} 本</div>
              </div>

              <div className={`rounded-2xl bg-gradient-to-br p-6 shadow-2xl text-white transform hover:scale-105 transition-all ${
                result.profitIfSuccess > 0 ? 'from-green-500 to-emerald-600' : 'from-red-500 to-red-600'
              }`}>
                <div className="text-5xl mb-3">{result.profitIfSuccess > 0 ? '💰' : '⚠️'}</div>
                <div className="text-sm font-bold opacity-90">打成后利润</div>
                <div className="text-4xl font-black mt-2">
                  {result.profitIfSuccess > 0 ? '+' : ''}{result.profitIfSuccess.toFixed(0)} 万
                </div>
              </div>
            </div>

            {/* 激励文案 */}
            <div className="rounded-2xl bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 p-8 shadow-xl border-4 border-orange-400">
              <h3 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-3">
                <span>🔥</span>
                收益分析
              </h3>

              <div className="space-y-4">
                <div className="p-5 bg-green-50 rounded-xl border-2 border-green-400 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">✨</span>
                    <span className="text-lg font-black text-green-800">最佳情况</span>
                  </div>
                  <p className="text-xl font-bold text-green-700">{result.motivationalText.bestCase}</p>
                </div>

                <div className="p-5 bg-blue-50 rounded-xl border-2 border-blue-400 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">📊</span>
                    <span className="text-lg font-black text-blue-800">平均情况</span>
                  </div>
                  <p className="text-xl font-bold text-blue-700">{result.motivationalText.worstCase}</p>
                </div>

                <div className={`p-5 rounded-xl border-4 shadow-2xl ${
                  result.expectedProfit > 0
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-500'
                    : 'bg-gradient-to-r from-orange-100 to-red-100 border-orange-500'
                }`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{result.expectedProfit > 0 ? '🎊' : '⚡'}</span>
                    <span className="text-xl font-black text-gray-900">建议</span>
                  </div>
                  <p className="text-2xl font-black text-gray-900">{result.motivationalText.recommendation}</p>
                </div>
              </div>
            </div>

            {/* 收益表格 */}
            <div className="rounded-2xl bg-white p-8 shadow-2xl ring-2 ring-purple-300">
              <h3 className="text-2xl font-black text-purple-900 mb-6 flex items-center gap-2">
                <span>📈</span>
                详细收益表（前20次）
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold">尝试次数</th>
                      <th className="px-4 py-3 text-left font-bold">累计成功率</th>
                      <th className="px-4 py-3 text-left font-bold">总成本</th>
                      <th className="px-4 py-3 text-left font-bold">利润</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-200">
                    {result.profitTable.slice(0, 10).map((row, index) => {
                      const isProfit = row.profit > 0;
                      const isHighSuccess = row.cumulativeSuccessRate >= 0.8;

                      return (
                        <tr
                          key={index}
                          className={`hover:bg-purple-50 transition-colors ${
                            isProfit ? 'bg-green-50' : 'bg-red-50'
                          }`}
                        >
                          <td className="px-4 py-3 font-bold text-purple-900">{row.attempts} 本</td>
                          <td className={`px-4 py-3 font-bold ${isHighSuccess ? 'text-green-600' : 'text-purple-700'}`}>
                            {row.cumulativeSuccessRatePercent}
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-700">{row.cost.toFixed(0)} 万</td>
                          <td className={`px-4 py-3 font-black text-xl ${isProfit ? 'text-green-600' : 'text-red-600'}`}>
                            {isProfit ? '+' : ''}{row.profit.toFixed(0)} 万
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                <p className="text-sm text-purple-800 font-semibold">
                  💡 <span className="font-black">提示：</span>绿色行表示打成后盈利，红色行表示亏损。累计成功率表示在N次内至少成功一次的概率。
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t-4 border-red-700 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 mt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-yellow-200 font-semibold">
            本站为非官方玩家工具，与网易公司无关 | 《梦幻西游》游戏版权归网易公司所有
          </p>
        </div>
      </footer>
    </div>
  );
}
