'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';

// 注意：由于这是 'use client' 组件，metadata需要在上层设置
// 我们将创建一个单独的metadata文件
import PetSelector from '@/components/calculator/PetSelector';
import ResultDisplay from '@/components/calculator/ResultDisplay';
import ExportButton from '@/components/calculator/ExportButton';
import { calculateSimpleRefinement, SimpleCalculationInput, SimpleCalculationResult } from '@/lib/calculator/simple-probability';

export default function CalculatorPage() {
  const resultRef = useRef<HTMLDivElement>(null);

  const [calculationInput, setCalculationInput] = useState<SimpleCalculationInput>({
    petA: { totalSkillCount: 4, mustHaveSkillCount: 1, specialSkillCount: 0 },
    petB: { totalSkillCount: 5, mustHaveSkillCount: 1, specialSkillCount: 0 },
    duplicateSkillCount: 0,
    wildProb: 0.10,
    specialProb: 0.10,
  });

  // 收益计算输入
  const [profitInput, setProfitInput] = useState({
    petACost: 20,
    petBCost: 20,
    refinementFee: 0, // 不考虑手续费
    targetSkills: 6,
    targetMarketPrice: 500,
  });

  const [result, setResult] = useState<SimpleCalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [showProfitCalculation, setShowProfitCalculation] = useState(false);

  // 辅助函数：安全解析数字输入
  const parseNumberInput = (value: string, defaultValue: number = 0): number => {
    if (value === '') return defaultValue;
    const parsed = parseInt(value);
    return isNaN(parsed) ? defaultValue : parsed;
  };

  const handleCalculate = () => {
    setIsCalculating(true);

    // 添加延迟来创建仪式感
    setTimeout(() => {
      const calculatedResult = calculateSimpleRefinement(calculationInput);
      setResult(calculatedResult);
      setIsCalculating(false);
    }, 800); // 0.8秒延迟
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

      {/* Header - 中国风 */}
      <header className="border-b-4 border-red-700 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 shadow-2xl sticky top-0 z-10 relative" role="banner">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(251,191,36,0.1)_49%,rgba(251,191,36,0.1)_51%,transparent_52%)] bg-[length:20px_20px]" aria-hidden="true"></div>
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-3 hover:scale-105 transition-transform" aria-label="返回首页">
              <Image src="/logo-small.png" alt="梦" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" aria-hidden="true" />
              <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                梦幻西游炼妖助手
              </span>
            </a>
            <nav className="flex gap-2 md:gap-3" role="navigation" aria-label="主导航">
              <a href="/calculator" className="px-2 md:px-3 py-2 bg-amber-500 text-white font-bold rounded-lg shadow-lg border-2 border-yellow-300 text-xs md:text-sm">
                炼妖计算器
              </a>
              <a href="/blessing" className="px-2 md:px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-blue-300 text-xs md:text-sm">
                赐福计算器
              </a>
              <a href="/book-typing" className="px-2 md:px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-purple-300 text-xs md:text-sm">
                打书计算器
              </a>
              <a href="/race-attributes" className="px-2 md:px-3 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-green-300 text-xs md:text-sm">
                种族属性
              </a>
              <a href="/guides" className="px-2 md:px-3 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-red-400 text-xs md:text-sm">
                攻略库
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" role="main">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">炼妖概率计算器</h1>
          <p className="text-amber-700">
            精确计算炼妖结果概率，支持特殊技能保留概率分析
          </p>
        </header>

        {/* 基础概率信息展示 - 移除，改为可编辑区域 */}

        {/* 输入区域 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8" aria-label="宠物选择">
          <PetSelector
            label="召唤兽 A（主宠）"
            value={calculationInput.petA}
            onChange={(petA) => setCalculationInput({ ...calculationInput, petA })}
          />
          <PetSelector
            label="召唤兽 B（副宠）"
            value={calculationInput.petB}
            onChange={(petB) => setCalculationInput({ ...calculationInput, petB })}
          />
        </section>

        {/* 概率设置 - 可折叠 */}
        <section className="mb-8 rounded-xl bg-gradient-to-br from-white to-blue-50 shadow-lg ring-2 ring-blue-300 overflow-hidden" aria-labelledby="probability-settings">
          <button
            onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
            className="w-full flex items-center justify-between p-6 hover:bg-blue-50 transition-colors"
            aria-expanded={showAdvancedSettings}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">⚙️</span>
              <div className="text-left">
                <h2 id="probability-settings" className="text-xl font-bold text-blue-900">高级参数设置</h2>
                <p className="text-xs text-blue-600 mt-1">一般无需修改，点击展开调整</p>
              </div>
            </div>
            <svg
              className={`w-6 h-6 text-blue-600 transition-transform ${showAdvancedSettings ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showAdvancedSettings && (
            <div className="px-8 pb-8 pt-2">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 技能保留概率 - 现在可编辑 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border-2 border-amber-300 shadow-md">
              <label className="block text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>🎯</span>
                技能保留概率 (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={30}
                disabled
                className="w-full rounded-lg border-2 border-amber-400 px-5 py-3 text-xl font-bold text-amber-900 bg-amber-100 cursor-not-allowed"
              />
              <div className="mt-3 p-3 bg-green-100 rounded-lg border border-green-300">
                <p className="text-xs text-green-800 font-semibold">✅ 官方固定值：每个技能有30%概率被继承</p>
              </div>
            </div>

            {/* 重复技能数量 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 border-2 border-purple-300 shadow-md">
              <label className="block text-base font-bold text-purple-900 mb-3 flex items-center gap-2">
                <span>🔄</span>
                重复技能数量
              </label>
              <input
                type="number"
                min="0"
                max={Math.min(calculationInput.petA.totalSkillCount, calculationInput.petB.totalSkillCount)}
                value={calculationInput.duplicateSkillCount}
                onChange={(e) =>
                  setCalculationInput({
                    ...calculationInput,
                    duplicateSkillCount: parseNumberInput(e.target.value, 0),
                  })
                }
                className="w-full rounded-lg border-2 border-purple-300 px-5 py-3 text-xl font-bold text-purple-900 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500 shadow-sm hover:border-purple-400 transition-all"
                placeholder="输入重复技能数（可填0）"
              />
              <p className="text-xs text-purple-700 mt-3 bg-purple-200 px-3 py-2 rounded">💡 两只宠物有几个相同的技能。可以填0表示没有重复技能。</p>
            </div>

            {/* 野生概率 */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-2 border-green-300 shadow-md">
              <label className="block text-base font-bold text-green-900 mb-3 flex items-center gap-2">
                <span>🌿</span>
                野生宠物概率 (%)
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={calculationInput.wildProb * 100}
                onChange={(e) =>
                  setCalculationInput({
                    ...calculationInput,
                    wildProb: (parseInt(e.target.value) || 0) / 100,
                  })
                }
                className="w-full rounded-lg border-2 border-green-300 px-5 py-3 text-xl font-bold text-green-900 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm hover:border-green-400 transition-all"
                placeholder="输入野生概率"
              />
              <div className="mt-3 p-3 bg-yellow-100 rounded-lg border border-yellow-300">
                <p className="text-xs text-yellow-800 font-semibold">⚠️ 推测值：可根据实际情况修改</p>
              </div>
            </div>

            {/* 大海龟概率 */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border-2 border-red-300 shadow-md">
              <label className="block text-base font-bold text-red-900 mb-3 flex items-center gap-2">
                <span>🐢</span>
                大海龟概率 (%) ⚠️
              </label>
              <input
                type="number"
                min="0"
                max="100"
                step="1"
                value={calculationInput.specialProb * 100}
                onChange={(e) =>
                  setCalculationInput({
                    ...calculationInput,
                    specialProb: (parseInt(e.target.value) || 0) / 100,
                  })
                }
                className="w-full rounded-lg border-2 border-red-300 px-5 py-3 text-xl font-bold text-red-900 bg-white focus:border-red-500 focus:ring-2 focus:ring-red-500 shadow-sm hover:border-red-400 transition-all"
                placeholder="输入大海龟概率"
              />
              <div className="mt-3 p-3 bg-red-100 rounded-lg border border-red-400">
                <p className="text-xs text-red-800 font-semibold">⚠️ 推测值：大海龟是最差结果（可修改）</p>
              </div>
            </div>
          </div>

          {/* 实时概率预览 */}
          <div className="mt-6 p-5 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl border-2 border-blue-300">
            <h4 className="text-base font-bold text-blue-900 mb-3">📊 实时概率分布</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white/80 rounded-lg p-3 text-center border border-blue-200">
                <div className="text-xl font-bold text-amber-600">30%</div>
                <div className="text-xs text-amber-700 mt-1">技能保留</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 text-center border border-blue-200">
                <div className="text-xl font-bold text-green-600">{(calculationInput.wildProb * 100).toFixed(0)}%</div>
                <div className="text-xs text-green-700 mt-1">野生宠物</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 text-center border border-blue-200">
                <div className="text-xl font-bold text-red-600">{(calculationInput.specialProb * 100).toFixed(0)}%</div>
                <div className="text-xs text-red-700 mt-1">大海龟 ⚠️</div>
              </div>
              <div className="bg-white/80 rounded-lg p-3 text-center border border-blue-200">
                <div className="text-xl font-bold text-blue-600">{((1 - calculationInput.wildProb - calculationInput.specialProb) * 50).toFixed(0)}%</div>
                <div className="text-xs text-blue-700 mt-1">主/副宠各</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 rounded-lg border-2 border-yellow-300">
              <p className="text-xs text-yellow-800 font-semibold">
                ⚠️ 野生宠物和大海龟是独立的结果类型，不继承任何技能（相当于比0技能还差）
              </p>
            </div>
          </div>
            </div>
          )}
        </section>

        {/* 收益计算输入 - 可折叠 */}
        <section className="mb-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-100 shadow-2xl ring-2 ring-green-400 overflow-hidden" aria-labelledby="profit-calculation">
          <button
            onClick={() => setShowProfitCalculation(!showProfitCalculation)}
            className="w-full flex items-center justify-between p-6 hover:bg-green-100 transition-colors"
            aria-expanded={showProfitCalculation}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl" aria-hidden="true">💰</span>
              <div className="text-left">
                <h2 id="profit-calculation" className="text-xl font-black text-green-900">收益计算（选填）</h2>
                <p className="text-xs text-green-700 mt-1">填写后可以看到"打成就赚XXX万"的激励信息！</p>
              </div>
            </div>
            <svg
              className={`w-6 h-6 text-green-600 transition-transform ${showProfitCalculation ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showProfitCalculation && (
            <div className="px-8 pb-8 pt-2">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 主宠成本 */}
            <div className="bg-white rounded-xl p-5 border-2 border-green-300 shadow-md">
              <label className="block text-base font-bold text-green-900 mb-3 flex items-center gap-2">
                <span>🐉</span>
                主宠成本（万）
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={profitInput.petACost}
                onChange={(e) => setProfitInput({ ...profitInput, petACost: parseNumberInput(e.target.value, 0) })}
                className="w-full rounded-lg border-2 border-green-300 px-5 py-3 text-xl font-bold text-green-900 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm"
                placeholder="可填0"
              />
            </div>

            {/* 副宠成本 */}
            <div className="bg-white rounded-xl p-5 border-2 border-green-300 shadow-md">
              <label className="block text-base font-bold text-green-900 mb-3 flex items-center gap-2">
                <span>🦄</span>
                副宠成本（万）
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={profitInput.petBCost}
                onChange={(e) => setProfitInput({ ...profitInput, petBCost: parseNumberInput(e.target.value, 0) })}
                className="w-full rounded-lg border-2 border-green-300 px-5 py-3 text-xl font-bold text-green-900 bg-white focus:border-green-500 focus:ring-2 focus:ring-green-500 shadow-sm"
                placeholder="可填0"
              />
            </div>

            {/* 目标技能数 */}
            <div className="bg-white rounded-xl p-5 border-2 border-amber-300 shadow-md">
              <label className="block text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>🎯</span>
                目标技能数
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={profitInput.targetSkills}
                onChange={(e) => setProfitInput({ ...profitInput, targetSkills: parseNumberInput(e.target.value, 1) })}
                className="w-full rounded-lg border-2 border-amber-300 px-5 py-3 text-xl font-bold text-amber-900 bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500 shadow-sm"
              />
              <p className="text-xs text-amber-700 mt-2">你想炼出几技能的宝宝？</p>
            </div>

            {/* 目标市场价 */}
            <div className="md:col-span-2 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl p-5 border-4 border-yellow-400 shadow-md">
              <label className="block text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
                <span>🏆</span>
                目标宝宝市场价（万）
              </label>
              <input
                type="number"
                min="0"
                step="50"
                value={profitInput.targetMarketPrice}
                onChange={(e) => setProfitInput({ ...profitInput, targetMarketPrice: parseNumberInput(e.target.value, 0) })}
                className="w-full rounded-lg border-2 border-yellow-400 px-5 py-3 text-2xl font-black text-amber-900 bg-white focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500 shadow-sm"
                placeholder="可填0"
              />
              <p className="text-sm text-amber-800 mt-2 font-bold">⭐ 炼出目标宝宝后能卖多少钱？</p>
            </div>
          </div>

          <div className="mt-5 p-4 bg-yellow-100 rounded-xl border-2 border-yellow-400">
            <p className="text-sm text-yellow-900 font-semibold">
              💡 <span className="font-black">提示：</span>
              单次成本 = {profitInput.petACost + profitInput.petBCost + profitInput.refinementFee} 万。
              如果炼出目标宝宝，利润 = {profitInput.targetMarketPrice - (profitInput.petACost + profitInput.petBCost + profitInput.refinementFee)} 万！
            </p>
          </div>
            </div>
          )}
        </section>

        {/* 计算按钮 */}
        <div className="text-center mb-8" role="region" aria-label="计算操作">
          <button
            onClick={handleCalculate}
            disabled={isCalculating}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-12 py-4 text-xl font-bold text-white shadow-lg transition-all hover:from-amber-500 hover:to-orange-500 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
          >
            {isCalculating ? (
              <>
                <svg className="animate-spin h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                计算中...
              </>
            ) : (
              <>
                <span className="text-2xl">🎲</span>
                开始计算
              </>
            )}
          </button>
        </div>

        {/* 结果显示区域 */}
        {result && (
          <section aria-labelledby="results-heading">
            <h2 id="results-heading" className="sr-only">计算结果</h2>
            <div className="flex justify-center mb-6">
              <ExportButton targetRef={resultRef} />
            </div>
            <div ref={resultRef}>
              <ResultDisplay
                result={result}
                isCalculating={isCalculating}
                calculationInput={calculationInput}
                profitInput={profitInput}
              />
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-white/80 backdrop-blur-sm mt-24" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-amber-700">
            本站为非官方玩家工具，与网易公司无关 | 《梦幻西游》游戏版权归网易公司所有
          </p>
        </div>
      </footer>
    </div>
  );
}
