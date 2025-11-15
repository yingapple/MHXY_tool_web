'use client';

import Image from 'next/image';
import Link from 'next/link';
import RaceCalculator from '@/components/calculator/RaceCalculator';

export default function RaceAttributesPage() {
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
            <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform" aria-label="返回首页">
              <Image src="/logo-small.png" alt="梦" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" aria-hidden="true" />
              <span className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                梦幻西游炼妖助手
              </span>
            </Link>
            <nav className="flex gap-2 md:gap-3" role="navigation" aria-label="主导航">
              <Link href="/calculator" className="px-3 md:px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-yellow-300 text-sm md:text-base">
                炼妖计算器
              </Link>
              <Link href="/blessing" className="px-3 md:px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-blue-300 text-sm md:text-base">
                赐福计算器
              </Link>
              <Link href="/book-typing" className="px-3 md:px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-purple-300 text-sm md:text-base">
                打书计算器
              </Link>
              <Link href="/race-attributes" className="px-3 md:px-4 py-2 bg-green-600 text-white font-bold rounded-lg shadow-lg border-2 border-green-400 text-sm md:text-base">
                种族属性
              </Link>
              <Link href="/guides" className="px-3 md:px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-red-400 text-sm md:text-base">
                攻略库
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" role="main">
        {/* 页面标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-600 to-orange-700 drop-shadow-lg mb-4">
            种族属性计算器
          </h1>
          <p className="text-lg text-amber-800 font-semibold">
            精确计算人族、魔族、仙族的属性加成
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
            <div className="h-1 w-16 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* 计算器主体 */}
        <RaceCalculator />

        {/* SEO内容 */}
        <section className="mt-12 bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-xl p-8 border-2 border-amber-300 shadow-lg">
          <h2 className="text-2xl font-bold text-red-800 mb-4">梦幻西游种族属性详解</h2>

          <div className="space-y-6 text-amber-900">
            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">什么是种族属性？</h3>
              <p className="leading-relaxed">
                在梦幻西游中，角色的种族（人族、魔族、仙族）会影响属性点的增长效率。不同种族对同样的属性点投入，
                会获得不同的属性加成。了解种族属性机制可以帮助你更好地规划角色培养方向。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">三大种族特点</h3>
              <div className="grid md:grid-cols-3 gap-4 mt-3">
                <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-300">
                  <h4 className="font-bold text-yellow-800 mb-2">👨 人族</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 体力成长优秀（1.5倍）</li>
                    <li>• 伤力成长适中（0.7倍）</li>
                    <li>• 适合平衡型角色</li>
                    <li>• 生存能力强</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                  <h4 className="font-bold text-purple-800 mb-2">👹 魔族</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 法力成长最高（0.77倍）</li>
                    <li>• 体力成长良好（1.4倍）</li>
                    <li>• 适合法系输出</li>
                    <li>• 法术伤害高</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                  <h4 className="font-bold text-blue-800 mb-2">🧚 仙族</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 体力成长最高（1.6倍）</li>
                    <li>• 伤力上限最高（3.5点）</li>
                    <li>• 适合物理输出</li>
                    <li>• 生存和输出兼备</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">如何使用计算器？</h3>
              <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                <li>选择你的角色种族（人族/魔族/仙族）</li>
                <li>在对应属性的输入框中填写你想要投入的属性点数</li>
                <li>系统会自动计算实际获得的属性值（点数 × 比例，不超过上限）</li>
                <li>绿色数值表示已达到该属性上限，蓝色表示还有成长空间</li>
                <li>使用"一键满上限"可快速填充达到所有属性上限所需的点数</li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-bold text-amber-800 mb-2">属性加点建议</h3>
              <ul className="space-y-2 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span><strong>物理输出角色：</strong>优先提升伤力和敏捷，保证输出和速度</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span><strong>法系输出角色：</strong>重点加法力，兼顾体力确保生存</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span><strong>辅助封系角色：</strong>敏捷和体力双修，确保先手和生存</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold mt-1">•</span>
                  <span><strong>注意属性上限：</strong>超过上限的点数不会带来额外收益</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 相关工具推荐 */}
        <section className="mt-8">
          <h3 className="text-2xl font-bold text-center text-red-800 mb-6">相关工具推荐</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/calculator" className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border-2 border-amber-300 hover:border-amber-500 transition-all hover:scale-105 shadow-lg">
              <div className="text-4xl mb-2">🎯</div>
              <div className="font-bold text-amber-900">炼妖计算器</div>
              <div className="text-sm text-amber-700 mt-1">精确计算炼妖概率</div>
            </Link>
            <Link href="/blessing" className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border-2 border-blue-300 hover:border-blue-500 transition-all hover:scale-105 shadow-lg">
              <div className="text-4xl mb-2">✨</div>
              <div className="font-bold text-blue-900">赐福计算器</div>
              <div className="text-sm text-blue-700 mt-1">计算赐福成本收益</div>
            </Link>
            <Link href="/book-typing" className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-300 hover:border-purple-500 transition-all hover:scale-105 shadow-lg">
              <div className="text-4xl mb-2">📖</div>
              <div className="font-bold text-purple-900">打书计算器</div>
              <div className="text-sm text-purple-700 mt-1">计算打书成功率</div>
            </Link>
            <Link href="/guides" className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-xl border-2 border-red-300 hover:border-red-500 transition-all hover:scale-105 shadow-lg">
              <div className="text-4xl mb-2">📚</div>
              <div className="font-bold text-red-900">攻略库</div>
              <div className="text-sm text-red-700 mt-1">查看更多游戏攻略</div>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-white/80 backdrop-blur-sm mt-16" role="contentinfo">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-amber-700">
            本站为非官方玩家工具，与网易公司无关 | 《梦幻西游》游戏版权归网易公司所有
          </p>
          <p className="text-center text-xs text-amber-600 mt-2">
            数据来源于玩家社区公开分享的信息，仅供参考
          </p>
        </div>
      </footer>
    </div>
  );
}
