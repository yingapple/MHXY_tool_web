# 梦幻西游炼妖助手

> 专业的梦幻西游炼妖概率计算工具，助你科学炼妖，理性赚金

## 项目简介

梦幻西游炼妖助手是一个为畅玩服玩家打造的专业炼妖工具，提供：

- 🎯 **精确概率计算** - 基于二项分布的数学模型，精确计算技能继承概率
- 💰 **成本收益分析** - 自动计算期望成本和收益，帮你做出理性决策
- ✨ **赐福成本计算** - 计算超级技能赐福成本，优化赐福策略
- 📖 **打书成功率** - 模拟打书过程，计算成功概率
- 🎲 **多次模拟器** - 模拟100次炼妖，查看结果分布

## 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: Vercel
- **SEO**: 内置sitemap、robots.txt、结构化数据

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
npm start
```

## 功能特性

### 炼妖计算器
- 支持自定义主副宠技能和资质
- 精确计算技能数量概率分布
- 资质和成长率预测
- 成本收益分析
- 图表可视化

### 赐福计算器
- 计算超级技能赐福成本
- 支持技能锁定
- 期望次数计算

### 打书计算器
- 不同技能数的打书成功率
- 期望打书次数
- 成本预估

### SEO优化
- 服务端渲染(SSR)
- 自动生成sitemap
- 结构化数据(JSON-LD)
- 响应式设计
- 移动端友好

## 项目结构

```
mhxy_tool_web/
├── src/
│   ├── app/                    # Next.js应用路由
│   │   ├── calculator/         # 炼妖计算器
│   │   ├── blessing/           # 赐福计算器
│   │   ├── book-typing/        # 打书计算器
│   │   ├── guides/             # 攻略页面
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── robots.ts           # robots.txt
│   │   └── sitemap.ts          # sitemap.xml
│   ├── components/             # React组件
│   ├── lib/                    # 核心算法
│   ├── types/                  # TypeScript类型
│   └── data/                   # 数据文件
├── public/                     # 静态资源
└── README.md                   # 项目说明
```

## 版权声明

本站为非官方玩家工具，与网易公司无关。《梦幻西游》游戏版权归网易公司所有。

## License

MIT
