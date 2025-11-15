import { Metadata } from 'next';
import Image from 'next/image';
import BlessingCalculator from '@/components/calculator/BlessingCalculator';

export const metadata: Metadata = {
  title: '梦幻西游赐福计算器 - 超级技能赐福成本计算 | 炼妖助手',
  description: '专业的梦幻西游召唤兽赐福计算器，支持技能锁定、成本分析、期望计算。帮助玩家科学计算赐福成本，避免浪费。',
  keywords: '梦幻西游,赐福计算器,超级技能,仙露丸子,锁定技能,成本分析',
};

export default function BlessingPage() {
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
              <a href="/calculator" className="px-2 md:px-3 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-yellow-300 text-xs md:text-sm">
                炼妖计算器
              </a>
              <a href="/blessing" className="px-2 md:px-3 py-2 bg-blue-600 text-white font-bold rounded-lg shadow-lg border-2 border-blue-300 text-xs md:text-sm">
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

      <main className="container mx-auto px-4 py-8">
        {/* 页面标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-amber-900 mb-2">
            梦幻西游赐福计算器
          </h1>
          <p className="text-amber-700">
            科学计算赐福成本，理性追求超级技能
          </p>
        </div>

        {/* 计算器主体 */}
        <BlessingCalculator />

        {/* 说明文档 */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-4">
            赐福系统规则说明
          </h2>

          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-bold text-lg mb-2">基础规则</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>全服共有 <strong>43个超级技能</strong>（《天命之路》资料片）</li>
                <li>每次赐福随机抽取 <strong>4个超级技能</strong></li>
                <li>基础赐福消耗 <strong>1个仙露丸子</strong></li>
                <li>赐福后宠物会增加 <strong>90天时间锁</strong></li>
                <li>可保留原有赐福结果（但不返还材料）</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">四赐福目标</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>目标</strong>: 抽到的4个技能全部来自召唤兽已有的可赐福技能</li>
                <li><strong>优势</strong>: 四赐福的超级技能在战斗中100%触发</li>
                <li><strong>难度</strong>: 概率取决于召唤兽可赐福技能数量</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">锁定技能规则 (成本呈指数增长!)</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>锁定 <strong>0个技能</strong>: 1个仙露丸子</li>
                <li>锁定 <strong>1个技能</strong>: 5个仙露丸子 (5^1)</li>
                <li>锁定 <strong>2个技能</strong>: 25个仙露丸子 (5^2)</li>
                <li>锁定 <strong>3个技能</strong>: 125个仙露丸子 (5^3)</li>
                <li>锁定技能 <strong>不参与随机</strong>，保证保留</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">概率计算公式</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>不锁定: P = C(M, 4) / C(43, 4)</li>
                <li>锁定K个: P = C(M-K, 4-K) / C(43-K, 4-K)</li>
                <li>M = 召唤兽可赐福技能数，K = 锁定技能数</li>
                <li>期望次数 = 1 / 单次成功概率</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2 text-amber-900">
                💡 优化建议
              </h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>如果目标技能稀有，建议先刷到1-2个再锁定</li>
                <li>锁定3个技能成本极高，谨慎决策</li>
                <li>计算期望成本时，考虑仙露丸子的市场价格</li>
                <li>赐福前确保有足够的梦幻币和材料储备</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
