import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mhxy-helper.com'), // TODO: 部署后替换为实际域名
  title: {
    default: '梦幻西游炼妖助手 - 精确概率计算 | 炼妖计算器',
    template: '%s | 梦幻西游炼妖助手'
  },
  description: '专业的梦幻西游炼妖概率计算器，支持技能继承、必带技能、成本收益分析。畅玩服玩家必备工具，科学炼妖不做冤大头。',
  keywords: ['梦幻西游', '炼妖计算器', '炼妖概率', '畅玩服', '多技能', '成本分析', '打书计算器', '梦幻西游工具'],
  authors: [{ name: '梦幻西游炼妖助手' }],
  creator: '梦幻西游炼妖助手',
  publisher: '梦幻西游炼妖助手',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://mhxy-helper.com',
    title: '梦幻西游炼妖助手 - 精确概率计算',
    description: '专业的梦幻西游炼妖概率计算器，支持技能继承、必带技能、成本收益分析。',
    siteName: '梦幻西游炼妖助手',
    images: [
      {
        url: '/og-image.jpg', // TODO: 需要创建这个图片
        width: 1200,
        height: 630,
        alt: '梦幻西游炼妖助手',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '梦幻西游炼妖助手 - 精确概率计算',
    description: '专业的梦幻西游炼妖概率计算器，畅玩服玩家必备工具',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // TODO: 部署后添加
    // google: 'your-google-verification-code',
    // baidu: 'your-baidu-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* 百度统计 - TODO: 部署后添加真实ID */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var _hmt = _hmt || [];
                (function() {
                  var hm = document.createElement("script");
                  hm.src = "https://hm.baidu.com/hm.js?YOUR_BAIDU_ID";
                  var s = document.getElementsByTagName("script")[0];
                  s.parentNode.insertBefore(hm, s);
                })();
              `
            }}
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
