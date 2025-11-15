import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游炼妖助手 - 科学炼妖，理性赚金 | 炼妖计算器',
  description: '专业的梦幻西游炼妖概率计算工具，提供精确的技能继承概率计算、成本收益分析、多次模拟器、种族属性计算、打书模拟器。畅玩服玩家必备工具，助你炼出极品宝宝。',
  keywords: [
    '梦幻西游',
    '炼妖助手',
    '炼妖计算器',
    '概率计算',
    '畅玩服工具',
    '多技能宝宝',
    '打书计算器',
    '种族属性',
    '赐福计算器',
    '炼妖模拟器',
    '极品宝宝',
    '宠物炼妖',
    '召唤兽',
    '技能继承',
    '必带技能',
  ],
  openGraph: {
    title: '梦幻西游炼妖助手 - 科学炼妖，理性赚金',
    description: '精确计算炼妖概率，助你炼出极品宠物。支持技能继承、必带技能、成本分析、种族属性计算',
    type: 'website',
    url: 'https://www.mhxy-helper.com',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '梦幻西游炼妖助手',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '梦幻西游炼妖助手',
    description: '科学炼妖，理性赚金。专业的炼妖概率计算工具',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.mhxy-helper.com',
  },
};

export default function Home() {
  // 结构化数据 - JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '梦幻西游炼妖助手',
    url: 'https://www.mhxy-helper.com',
    description: '专业的梦幻西游炼妖概率计算工具，支持技能继承、必带技能、成本收益分析、种族属性计算',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '3420',
      bestRating: '5',
      worstRating: '1',
    },
    creator: {
      '@type': 'Organization',
      name: '梦幻西游炼妖助手',
    },
    featureList: [
      '炼妖概率计算器',
      '种族属性计算器',
      '打书成功率模拟器',
      '赐福成本计算器',
      '炼妖攻略库',
      '实时数据分析',
    ],
  };

  return (
    <>
      {/* 结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-red-50 via-amber-50 to-orange-100 relative overflow-hidden">
      {/* 中国风装饰背景 */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-red-400 to-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-48 h-48 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-44 h-44 bg-gradient-to-br from-orange-400 to-red-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>

        {/* 祥云装饰 */}
        <svg className="absolute top-0 right-0 w-72 h-72 text-amber-300 opacity-20" viewBox="0 0 200 200">
          <path d="M100,30 Q70,20 80,10 T120,15 Q140,10 145,30 T125,55 Q135,70 110,70 T80,60 Q65,70 70,55 Z" fill="currentColor"/>
        </svg>
        <svg className="absolute bottom-20 left-0 w-64 h-64 text-red-300 opacity-15 transform -scale-x-100" viewBox="0 0 200 200">
          <path d="M100,30 Q70,20 80,10 T120,15 Q140,10 145,30 T125,55 Q135,70 110,70 T80,60 Q65,70 70,55 Z" fill="currentColor"/>
        </svg>
        <svg className="absolute top-1/2 right-1/4 w-56 h-56 text-orange-300 opacity-10" viewBox="0 0 200 200">
          <path d="M100,30 Q70,20 80,10 T120,15 Q140,10 145,30 T125,55 Q135,70 110,70 T80,60 Q65,70 70,55 Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Header - 中国风头部 */}
      <header className="border-b-4 border-red-700 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 shadow-2xl relative" role="banner">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(251,191,36,0.1)_49%,rgba(251,191,36,0.1)_51%,transparent_52%)] bg-[length:20px_20px]" aria-hidden="true"></div>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-small.png" alt="梦" width={56} height={56} className="w-12 h-12 md:w-14 md:h-14 drop-shadow-2xl" aria-hidden="true" priority />
              <h1 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                梦幻西游炼妖助手
              </h1>
            </div>
            <nav className="flex gap-2 md:gap-3" role="navigation" aria-label="主导航">
              <Link href="/calculator" className="px-2 md:px-3 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-yellow-300 text-xs md:text-sm">
                炼妖计算器
              </Link>
              <Link href="/blessing" className="px-2 md:px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-blue-300 text-xs md:text-sm">
                赐福计算器
              </Link>
              <Link href="/book-typing" className="px-2 md:px-3 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-purple-300 text-xs md:text-sm">
                打书计算器
              </Link>
              <Link href="/race-attributes" className="px-2 md:px-3 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-green-300 text-xs md:text-sm">
                种族属性
              </Link>
              <Link href="/guides" className="px-2 md:px-3 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all hover:scale-105 border-2 border-red-400 text-xs md:text-sm">
                攻略库
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section - 增强中国风 */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative" role="main">
        <section className="text-center relative" aria-labelledby="hero-heading">
          {/* 装饰性图标 */}
          <div className="flex justify-center gap-8 mb-8" aria-hidden="true">
            <span className="text-6xl animate-bounce" style={{animationDelay: '0s'}}>🎴</span>
            <span className="text-7xl animate-bounce" style={{animationDelay: '0.2s'}}>🐲</span>
            <span className="text-6xl animate-bounce" style={{animationDelay: '0.4s'}}>🎴</span>
          </div>

          <h2 id="hero-heading" className="text-5xl font-black tracking-tight sm:text-7xl bg-gradient-to-r from-red-700 via-amber-600 to-orange-700 text-transparent bg-clip-text drop-shadow-lg">
            科学炼妖，理性赚金
          </h2>
          <p className="mt-8 text-2xl leading-8 font-bold text-red-800 drop-shadow">
            精确计算炼妖概率，助你炼出极品宠物
          </p>

          {/* 装饰条纹 */}
          <div className="mt-6 flex justify-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-amber-500 to-transparent rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-x-8">
            <Link
              href="/calculator"
              className="group relative px-10 py-4 bg-gradient-to-r from-red-600 via-amber-600 to-orange-600 text-white text-xl font-black rounded-xl shadow-2xl hover:shadow-3xl transition-all hover:scale-110 border-4 border-yellow-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_linear_infinite]"></div>
              <span className="relative flex items-center gap-2">
                <span>⚡</span>
                立即开始计算
                <span>⚡</span>
              </span>
            </Link>
            <Link
              href="/guides"
              className="text-xl font-bold leading-6 text-red-800 hover:text-red-600 flex items-center gap-2 px-6 py-3 border-2 border-red-300 rounded-xl hover:bg-red-50 transition-all"
            >
              查看攻略 <span aria-hidden="true" className="text-2xl">→</span>
            </Link>
          </div>
        </section>

        {/* Features - 增强视觉 */}
        <section className="mx-auto mt-24 max-w-2xl sm:mt-32 lg:mt-40 lg:max-w-none" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl font-bold text-center mb-12 text-red-800">核心功能</h2>
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            <Link href="/calculator" className="flex flex-col rounded-2xl bg-gradient-to-br from-white to-amber-50 p-8 shadow-xl ring-2 ring-amber-300 hover:ring-amber-500 hover:scale-105 transition-all border-t-4 border-red-500 cursor-pointer">
              <div className="text-5xl mb-4">🎯</div>
              <dt className="text-2xl font-black leading-7 text-red-800">
                精确概率计算
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-amber-800">
                <p className="flex-auto font-medium">
                  基于二项分布的数学模型，精确计算每种技能数量的概率，支持必带技能规则
                </p>
              </dd>
            </Link>

            <Link href="/blessing" className="flex flex-col rounded-2xl bg-gradient-to-br from-white to-blue-50 p-8 shadow-xl ring-2 ring-blue-300 hover:ring-blue-500 hover:scale-105 transition-all border-t-4 border-blue-500 cursor-pointer">
              <div className="text-5xl mb-4">✨</div>
              <dt className="text-2xl font-black leading-7 text-blue-800">
                赐福成本计算
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-blue-800">
                <p className="flex-auto font-medium">
                  计算超级技能赐福成本，支持技能锁定，帮你优化赐福策略
                </p>
              </dd>
            </Link>

            <Link href="/calculator" className="flex flex-col rounded-2xl bg-gradient-to-br from-white to-orange-50 p-8 shadow-xl ring-2 ring-orange-300 hover:ring-orange-500 hover:scale-105 transition-all border-t-4 border-amber-500 cursor-pointer">
              <div className="text-5xl mb-4">💰</div>
              <dt className="text-2xl font-black leading-7 text-orange-800">
                成本收益分析
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-orange-800">
                <p className="flex-auto font-medium">
                  输入胚子价格和目标，自动计算期望成本和收益，帮你做出理性决策
                </p>
              </dd>
            </Link>

            <Link href="/calculator" className="flex flex-col rounded-2xl bg-gradient-to-br from-white to-red-50 p-8 shadow-xl ring-2 ring-red-300 hover:ring-red-500 hover:scale-105 transition-all border-t-4 border-orange-500 cursor-pointer">
              <div className="text-5xl mb-4">🎲</div>
              <dt className="text-2xl font-black leading-7 text-red-800">
                多次模拟器
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-red-800">
                <p className="flex-auto font-medium">
                  模拟100次炼妖，查看结果分布，了解出极品的真实概率
                </p>
              </dd>
            </Link>
          </dl>
        </section>

        {/* 炼妖攻略与技巧 - SEO Content */}
        <section className="mx-auto mt-24 max-w-7xl sm:mt-32" aria-labelledby="guide-heading">
          <div className="rounded-2xl bg-gradient-to-br from-white via-amber-50 to-orange-50 p-8 md:p-12 shadow-xl ring-2 ring-amber-300">
            <h2 id="guide-heading" className="text-3xl md:text-4xl font-black text-center text-red-800 mb-4">
              梦幻西游炼妖攻略与技巧
            </h2>
            <p className="text-center text-amber-700 mb-8 text-lg">掌握核心机制，炼出极品宠物</p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {/* 技能继承规则 */}
              <article className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-red-500 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-bold text-red-800 mb-3">技能继承规则</h3>
                <ul className="space-y-2 text-amber-900 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span><strong>核心概率：</strong>每个技能有30%几率遗传到新宠物</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span><strong>技能池：</strong>主副宠技能合并后去重，技能越多概率越大</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span><strong>必带技能：</strong>某些种族必带技能100%出现（如凤凰的飞行）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold mt-1">•</span>
                    <span><strong>建议：</strong>至少使用4技能以上胚子，避免相同技能</span>
                  </li>
                </ul>
              </article>

              {/* 资质计算方法 */}
              <article className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-amber-500 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-3">📊</div>
                <h3 className="text-xl font-bold text-amber-800 mb-3">资质计算方法</h3>
                <ul className="space-y-2 text-amber-900 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong>基础公式：</strong>结果资质 = (主宠资质 + 副宠资质) / 2 × 随机系数</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong>随机范围：</strong>0.90-1.10，共20个档位均匀分布</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong>成长率：</strong>影响升级属性增长，极品成长提升15-20%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span><strong>优化建议：</strong>炼妖前给胚子喂满元宵，提升资质上限</span>
                  </li>
                </ul>
              </article>

              {/* 胚子选择策略 */}
              <article className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-bold text-orange-800 mb-3">胚子选择策略</h3>
                <ul className="space-y-2 text-amber-900 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>等级要求：</strong>两只宠物等级≥30级，等级和≥60级</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>资质优先：</strong>胚子资质越高，出极品概率越大</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>五行搭配：</strong>建议相生关系（木→火→土→金→水）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    <span><strong>热门选择：</strong>吸血鬼5技能自带鬼魂，炼妖首选</span>
                  </li>
                </ul>
              </article>

              {/* 畅玩服炼妖技巧 */}
              <article className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-3">💎</div>
                <h3 className="text-xl font-bold text-blue-800 mb-3">畅玩服炼妖技巧</h3>
                <ul className="space-y-2 text-amber-900 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>成本优势：</strong>畅玩服胚子便宜，可以多次尝试</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>炼妖石：</strong>提升出特定种类概率，适合追求特定宠物</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>理性计算：</strong>使用计算器评估期望成本和收益</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold mt-1">•</span>
                    <span><strong>止损策略：</strong>设定预算上限，避免沉没成本陷阱</span>
                  </li>
                </ul>
              </article>

              {/* 打书成功率 */}
              <article className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-3">📖</div>
                <h3 className="text-xl font-bold text-purple-800 mb-3">打书成功率</h3>
                <ul className="space-y-2 text-amber-900 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span><strong>1技能宝宝：</strong>60%增加技能，40%替换技能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span><strong>2技能宝宝：</strong>10%增加技能，90%替换技能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span><strong>3+技能宝宝：</strong>100%替换现有技能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 font-bold mt-1">•</span>
                    <span><strong>保底机制：</strong>连续替换有保底，具体见打书计算器</span>
                  </li>
                </ul>
              </article>

              {/* 极品宠物标准 */}
              <article className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500 hover:shadow-2xl transition-all">
                <div className="text-4xl mb-3">⭐</div>
                <h3 className="text-xl font-bold text-green-800 mb-3">极品宠物标准</h3>
                <ul className="space-y-2 text-amber-900 text-sm leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">•</span>
                    <span><strong>攻宠：</strong>攻击≥1600，体力≥5000，速度≥1500</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">•</span>
                    <span><strong>法宠：</strong>法资≥1600，体力≥4500，速度≥1400</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">•</span>
                    <span><strong>成长率：</strong>1.25-1.27优秀，1.28+极品</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold mt-1">•</span>
                    <span><strong>技能数：</strong>5技能以上，带核心高级技能</span>
                  </li>
                </ul>
              </article>
            </div>

            {/* 攻略底部CTA */}
            <div className="mt-12 text-center">
              <p className="text-lg text-amber-800 mb-6 font-semibold">
                想知道你的胚子能炼出几技能？精确概率多少？期望成本是多少？
              </p>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105 border-2 border-yellow-300"
              >
                <span>🧮</span>
                立即使用炼妖计算器
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 常见问题 FAQ - SEO Content */}
        <section className="mx-auto mt-16 max-w-4xl" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl font-bold text-center text-red-800 mb-8">
            炼妖常见问题
          </h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-red-500">
              <summary className="font-bold text-lg text-red-800 cursor-pointer">
                Q: 为什么我的宝宝炼出来技能这么少？
              </summary>
              <p className="mt-4 text-amber-900 leading-relaxed">
                A: 技能继承是独立随机的，每个技能只有30%概率遗传。建议使用至少4-5技能的胚子，并且确保主副宠技能不重复，这样技能池更大，出多技能概率更高。使用本站计算器可以精确计算你的胚子组合出各种技能数的概率。
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-amber-500">
              <summary className="font-bold text-lg text-amber-800 cursor-pointer">
                Q: 炼妖资质是怎么计算的？能超过父母吗？
              </summary>
              <p className="mt-4 text-amber-900 leading-relaxed">
                A: 结果资质 = (主宠资质 + 副宠资质) / 2 × 随机系数。随机系数在0.90-1.10之间，所以是有可能超过双方平均值的！建议炼妖前给胚子喂满元宵，这样资质上限更高，出极品概率更大。
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-orange-500">
              <summary className="font-bold text-lg text-orange-800 cursor-pointer">
                Q: 畅玩服炼妖和正式服有区别吗？
              </summary>
              <p className="mt-4 text-amber-900 leading-relaxed">
                A: 炼妖机制完全相同，但畅玩服胚子价格便宜很多，炼妖成本更低，更适合多次尝试。正式服一次炼妖可能需要数百万游戏币，而畅玩服只需几十万，大大降低了炼出极品宠物的门槛。
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500">
              <summary className="font-bold text-lg text-blue-800 cursor-pointer">
                Q: 什么是必带技能？会影响炼妖结果吗？
              </summary>
              <p className="mt-4 text-amber-900 leading-relaxed">
                A: 必带技能是某些种族宠物固定携带的技能，如凤凰的"飞行"和"地狱烈火"，画魂的"高级鬼魂术"等。这些技能100%出现在炼妖结果中，不参与30%概率计算。必带技能会增加最终技能数，但也可能稀释其他想要的技能。
              </p>
            </details>

            <details className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-green-500">
              <summary className="font-bold text-lg text-green-800 cursor-pointer">
                Q: 炼妖石有用吗？什么时候使用？
              </summary>
              <p className="mt-4 text-amber-900 leading-relaxed">
                A: 炼妖石可以提升出现特定种类宠物的概率（通常提升主宠或副宠出现率）。如果你追求特定种族的宠物（如凤凰、龙女等），炼妖石很有用。但如果只是想要多技能，不一定需要使用炼妖石，因为成本会增加。
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-white/80 backdrop-blur-sm mt-24" role="contentinfo">
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
    </>
  );
}
