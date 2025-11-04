import { Metadata } from 'next';
import BlessingCalculator from '@/components/calculator/BlessingCalculator';

export const metadata: Metadata = {
  title: '梦幻西游赐福计算器 - 超级技能赐福成本计算 | 炼妖助手',
  description: '专业的梦幻西游召唤兽赐福计算器，支持技能锁定、成本分析、期望计算。帮助玩家科学计算赐福成本，避免浪费。',
  keywords: '梦幻西游,赐福计算器,超级技能,仙露丸子,锁定技能,成本分析',
};

export default function BlessingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
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
      </div>
    </main>
  );
}
