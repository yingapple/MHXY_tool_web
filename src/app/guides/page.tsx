import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游炼妖攻略大全 - 概率计算与技巧分享 | 梦幻西游炼妖助手',
  description: '提供梦幻西游炼妖概率计算、炼妖技巧、特殊技能保留等全方位攻略。帮助玩家理性炼妖，提高炼妖成功率。',
  keywords: '梦幻西游,炼妖攻略,炼妖概率,炼妖计算器,特殊技能,梦幻西游畅玩服',
};

const guides = [
  {
    id: 'lianyao-gailvjisuan',
    title: '梦幻西游炼妖概率计算完全指南',
    description: '深入解析炼妖概率公式，学会用数学方法计算技能保留概率，提高炼妖成功率',
    category: '概率计算',
    readTime: '8分钟',
    keywords: ['炼妖概率', '二项分布', '技能保留', '数学公式'],
    icon: '🎯',
  },
  {
    id: 'dashu-jiqiao',
    title: '梦幻西游打书技巧详解 - 前排书后排书完全攻略',
    description: '详细解析打书顺序、技能冲突、前排书后排书概念，教你避开打书陷阱，提升成功率',
    category: '打书攻略',
    readTime: '12分钟',
    keywords: ['打书技巧', '前排书', '后排书', '技能冲突'],
    icon: '📖',
  },
  {
    id: 'wuxing-xuanze',
    title: '宠物五行相生相克详解 - 炼妖五行选择攻略',
    description: '深入解析五行系统对炼妖的影响，五行相生出极品？五行相克出海龟？真相在这里',
    category: '五行系统',
    readTime: '10分钟',
    keywords: ['五行相生', '五行相克', '炼妖五行', '五行搭配'],
    icon: '🔮',
  },
  {
    id: 'paizi-xuanze',
    title: '宠物胚子选择攻略 - 资质成长怎么看？',
    description: '教你鉴别胚子好坏，避开奸商陷阱，选出性价比最高的炼妖胚子，成长>资质>技能数',
    category: '胚子选择',
    readTime: '15分钟',
    keywords: ['胚子选择', '资质成长', '宠物资质', '炼妖胚子'],
    icon: '🔍',
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="border-b border-amber-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-amber-900">
              <Link href="/">梦幻西游炼妖助手</Link>
            </h1>
            <nav className="flex gap-6">
              <Link href="/calculator" className="text-amber-700 hover:text-amber-900">
                炼妖计算器
              </Link>
              <Link href="/guides" className="text-amber-900 font-semibold border-b-2 border-amber-600">
                攻略库
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-amber-900 mb-2">炼妖攻略库</h2>
          <p className="text-amber-700">
            深度攻略，助你成为炼妖大师
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.id}`}
              className="group block rounded-xl bg-white p-6 shadow-sm ring-1 ring-amber-200 hover:shadow-lg hover:ring-amber-300 transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  {guide.category}
                </span>
                <span className="text-sm text-amber-600">{guide.readTime}</span>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{guide.icon}</span>
                <h3 className="text-xl font-semibold text-amber-900 group-hover:text-amber-700 transition-colors">
                  {guide.title}
                </h3>
              </div>

              <p className="text-amber-700 mb-4 text-sm">
                {guide.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {guide.keywords.map((keyword, index) => (
                  <span
                    key={index}
                    className="inline-block rounded bg-amber-50 px-2 py-1 text-xs text-amber-600"
                  >
                    #{keyword}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex items-center text-sm font-medium text-amber-600 group-hover:text-amber-700">
                阅读全文
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 rounded-xl bg-white p-8 shadow-sm ring-1 ring-amber-200">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">关于梦幻西游炼妖</h2>

          <div className="prose prose-amber max-w-none">
            <p className="text-amber-800 leading-relaxed mb-4">
              炼妖是《梦幻西游》中最重要的宠物培养系统之一。通过将两只召唤兽合成，玩家有机会获得技能更多、资质更好的宝宝。
              然而，炼妖系统涉及复杂的概率计算，许多玩家在炼妖过程中因为不了解概率规则而浪费大量金币。
            </p>

            <h3 className="text-xl font-semibold text-amber-900 mt-6 mb-3">炼妖核心规则</h3>
            <ul className="list-disc list-inside text-amber-800 space-y-2 mb-4">
              <li>每个技能有30%的概率被保留到下一代</li>
              <li>必带技能100%保留（如龙族的龙之力）</li>
              <li>特殊技能（高级必杀、高级神佑等）同样遵循30%保留概率</li>
              <li>野生宠物和特殊宠物（大海龟/泡泡）有固定出现概率</li>
              <li>主宠和副宠各有40%概率成为结果种类</li>
            </ul>

            <h3 className="text-xl font-semibold text-amber-900 mt-6 mb-3">为什么需要炼妖计算器？</h3>
            <p className="text-amber-800 leading-relaxed mb-4">
              炼妖概率计算涉及复杂的数学公式（二项分布），手工计算非常繁琐且容易出错。使用炼妖计算器可以：
            </p>
            <ul className="list-disc list-inside text-amber-800 space-y-2">
              <li>快速得出各种技能数量的精确概率</li>
              <li>了解期望技能数，合理评估炼妖价值</li>
              <li>计算特殊技能保留概率，优化炼妖方案</li>
              <li>根据胚子价格和目标，制定合理的炼妖预算</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-white/80 backdrop-blur-sm mt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-amber-700">
            本站为非官方玩家工具，与网易公司无关 | 《梦幻西游》游戏版权归网易公司所有
          </p>
        </div>
      </footer>
    </div>
  );
}
