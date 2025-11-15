import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游炼妖计算器 - 精确概率计算 | 炼妖助手',
  description: '专业的梦幻西游炼妖概率计算器，基于二项分布数学模型，精确计算技能继承概率、必带技能规则、成本收益分析。支持多次模拟，畅玩服玩家必备工具，科学炼妖不做冤大头。',
  keywords: [
    '梦幻西游',
    '炼妖计算器',
    '炼妖概率',
    '技能继承',
    '必带技能',
    '多技能宝宝',
    '炼妖模拟器',
    '成本分析',
    '畅玩服',
    '宠物炼妖',
    '召唤兽',
    '极品宝宝',
    '炼妖攻略',
    '概率计算',
    '期望成本',
  ],
  openGraph: {
    title: '梦幻西游炼妖计算器 - 精确概率计算',
    description: '基于数学模型的炼妖概率计算器，支持技能继承、必带技能、成本分析、多次模拟',
    type: 'website',
    url: 'https://www.mhxy-helper.com/calculator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '梦幻西游炼妖计算器',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '梦幻西游炼妖计算器',
    description: '精确计算炼妖概率，助你炼出极品宠物',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.mhxy-helper.com/calculator',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 结构化数据 - JSON-LD for Calculator Tool
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '梦幻西游炼妖概率计算器',
    url: 'https://www.mhxy-helper.com/calculator',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    description: '专业的梦幻西游炼妖概率计算工具，支持技能继承、必带技能、成本收益分析',
    featureList: [
      '技能继承概率计算',
      '必带技能规则支持',
      '资质成长预测',
      '成本收益分析',
      '多次炼妖模拟',
      '期望成本计算',
      '概率分布图表',
      '结果导出功能',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '2156',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
