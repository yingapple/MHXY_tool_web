import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游种族属性计算器 - 人族魔族仙族属性转化 | 炼妖助手',
  description: '专业的梦幻西游种族属性计算器，精确计算人族、魔族、仙族的属性转化。输入体质、魔力、力量、耐力、敏捷，自动计算气血、魔法、伤害、防御、速度、灵力。畅玩服玩家必备工具。',
  keywords: [
    '梦幻西游',
    '种族属性',
    '属性计算器',
    '人族魔族仙族',
    '属性转化',
    '气血计算',
    '伤害计算',
    '防御计算',
    '速度计算',
    '灵力计算',
    '畅玩服',
    '加点模拟器',
    '角色属性',
    '体质魔力力量',
    '耐力敏捷',
  ],
  openGraph: {
    title: '梦幻西游种族属性计算器 - 精确计算属性转化',
    description: '输入基础属性，自动计算战斗属性。支持人族、魔族、仙族三大种族，基于官方公式。',
    type: 'website',
    url: 'https://www.mhxy-helper.com/race-attributes',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '梦幻西游种族属性计算器',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '梦幻西游种族属性计算器',
    description: '精确计算人族、魔族、仙族的属性转化',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.mhxy-helper.com/race-attributes',
  },
};

export default function RaceAttributesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 结构化数据 - JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '梦幻西游种族属性计算器',
    url: 'https://www.mhxy-helper.com/race-attributes',
    description: '专业的梦幻西游种族属性计算器，精确计算人族、魔族、仙族的属性转化',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    featureList: [
      '人族属性计算',
      '魔族属性计算',
      '仙族属性计算',
      '气血计算',
      '魔法计算',
      '伤害计算',
      '防御计算',
      '速度计算',
      '灵力计算',
      '三族对比',
      '实时计算',
    ],
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
