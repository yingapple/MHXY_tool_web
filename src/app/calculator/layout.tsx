import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '炼妖概率计算器 - 精确计算技能继承概率',
  description: '梦幻西游炼妖概率计算器，支持技能继承概率计算、必带技能规则、成本收益分析。基于二项分布数学模型，精确到小数点。畅玩服玩家必备工具。',
  keywords: ['梦幻西游炼妖计算器', '技能继承概率', '炼妖成本分析', '必带技能', '二项分布', '多技能宝宝'],
  openGraph: {
    title: '梦幻西游炼妖概率计算器',
    description: '精确计算技能继承概率，支持必带技能规则和成本分析',
    type: 'website',
  },
  alternates: {
    canonical: 'https://mhxy-helper.com/calculator',
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
    '@type': 'SoftwareApplication',
    name: '梦幻西游炼妖概率计算器',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    description: '精确计算梦幻西游炼妖技能继承概率，支持必带技能规则',
    featureList: [
      '精确概率计算',
      '必带技能支持',
      '成本收益分析',
      '多次模拟器',
    ],
    screenshot: 'https://mhxy-helper.com/calculator-screenshot.jpg',
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
