import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游炼妖概率计算完全指南 - 从零学会计算技能保留概率',
  description: '详细讲解梦幻西游炼妖概率计算方法，包括二项分布公式、技能池计算、必带技能处理等核心知识。配合实例，让你彻底理解炼妖数学原理。',
  keywords: '梦幻西游,炼妖概率,概率计算,二项分布,技能保留,炼妖公式,梦幻西游攻略',
};

export default function LianYaoGaiLvPage() {
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
              <Link href="/guides" className="text-amber-700 hover:text-amber-900">
                攻略库
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm text-amber-600">
          <Link href="/" className="hover:text-amber-800">首页</Link>
          {' > '}
          <Link href="/guides" className="hover:text-amber-800">攻略库</Link>
          {' > '}
          <span className="text-amber-900">炼妖概率计算</span>
        </nav>

        {/* Title */}
        <h1 className="text-4xl font-bold text-amber-900 mb-4">
          梦幻西游炼妖概率计算完全指南
        </h1>

        <div className="flex items-center gap-4 text-sm text-amber-600 mb-8">
          <span>📅 2025年1月</span>
          <span>⏱️ 阅读时长：8分钟</span>
          <span>📚 概率计算</span>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg prose-amber max-w-none">
          {/* Introduction */}
          <div className="rounded-xl bg-gradient-to-r from-amber-100 to-orange-100 p-6 mb-8">
            <p className="text-amber-900 font-medium mb-2">
              💡 <strong>本文摘要：</strong>
            </p>
            <p className="text-amber-800">
              本文将深入讲解梦幻西游炼妖概率的计算方法，包括技能保留概率、二项分布公式、必带技能处理等核心知识。
              通过实际案例演示，让你彻底理解炼妖背后的数学原理，从而做出更理性的炼妖决策。
            </p>
          </div>

          {/* Section 1: Basic Rules */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">一、炼妖基础规则</h2>

            <p className="text-amber-800 leading-relaxed mb-4">
              在梦幻西游中，炼妖是指将两只召唤兽（主宠A和副宠B）合成，产生一只新的召唤兽。新宝宝的技能、资质、成长等属性
              都会受到父代宠物的影响。其中，技能继承是最关键的部分。
            </p>

            <h3 className="text-2xl font-semibold text-amber-900 mb-4">核心规则：</h3>

            <div className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-amber-200 mb-6">
              <ul className="space-y-3 text-amber-800">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">1.</span>
                  <span><strong>技能池计算：</strong>技能池 = 主宠技能数 + 副宠技能数 - 重复技能数</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">2.</span>
                  <span><strong>技能保留概率：</strong>每个技能有<span className="text-red-600 font-bold">30%</span>的概率被保留</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">3.</span>
                  <span><strong>必带技能：</strong>种族必带技能（如龙之力）<span className="text-green-600 font-bold">100%保留</span></span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">4.</span>
                  <span><strong>独立性：</strong>每个技能的保留是独立事件，互不影响</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
              <p className="text-amber-900">
                <strong>⚠️ 重要提示：</strong>30%的保留概率是游戏固定机制，无法通过任何方式改变。
                理解这一点是进行炼妖概率计算的基础。
              </p>
            </div>
          </section>

          {/* Section 2: Math Formula */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">二、数学公式：二项分布</h2>

            <p className="text-amber-800 leading-relaxed mb-4">
              炼妖技能继承本质上是一个<strong>二项分布</strong>问题。假设技能池有n个技能，每个技能有30%概率保留，
              那么最终保留k个技能的概率可以用以下公式计算：
            </p>

            <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm mb-6 overflow-x-auto">
              <div className="mb-2">P(k个技能) = C(n, k) × 0.3^k × 0.7^(n-k)</div>
              <div className="text-gray-400 mt-4">其中：</div>
              <div className="text-gray-400">• n = 技能池大小（可继承的技能数）</div>
              <div className="text-gray-400">• k = 最终保留的技能数（0 ≤ k ≤ n）</div>
              <div className="text-gray-400">• C(n, k) = 组合数 = n! / (k! × (n-k)!)</div>
              <div className="text-gray-400">• 0.3 = 技能保留概率</div>
              <div className="text-gray-400">• 0.7 = 技能丢失概率（1 - 0.3）</div>
            </div>

            <h3 className="text-2xl font-semibold text-amber-900 mb-4">期望值公式：</h3>

            <p className="text-amber-800 leading-relaxed mb-4">
              期望技能数（平均能继承几个技能）的计算非常简单：
            </p>

            <div className="bg-gray-900 text-green-400 rounded-lg p-6 font-mono text-sm mb-6">
              <div>E(技能数) = n × 0.3 + 必带技能数</div>
            </div>

            <p className="text-amber-800 leading-relaxed">
              这意味着，如果技能池有10个可继承技能，平均会保留3个（10 × 0.3）。如果种族有1个必带技能，
              那么期望技能数就是3 + 1 = 4个。
            </p>
          </section>

          {/* Section 3: Example */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">三、实例演算</h2>

            <h3 className="text-2xl font-semibold text-amber-900 mb-4">案例：标准炼妖</h3>

            <div className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-amber-200 mb-6">
              <p className="font-semibold text-amber-900 mb-3">输入条件：</p>
              <ul className="space-y-2 text-amber-800 mb-4">
                <li>• 召唤兽A：4技能（1必带，1特殊）</li>
                <li>• 召唤兽B：5技能（1必带，2特殊）</li>
                <li>• 重复技能：2个</li>
              </ul>

              <p className="font-semibold text-amber-900 mb-3">第一步：计算技能池</p>
              <div className="bg-amber-50 rounded p-4 mb-4 font-mono text-sm">
                <div>总技能池 = 4 + 5 - 2 = 7</div>
                <div>必带技能 = max(1, 1) = 1</div>
                <div>可继承技能池 = 7 - 1 = 6</div>
                <div>特殊技能池 = 1 + 2 = 3</div>
              </div>

              <p className="font-semibold text-amber-900 mb-3">第二步：计算各技能数概率</p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-amber-200 text-sm">
                  <thead className="bg-amber-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-amber-900">继承数(k)</th>
                      <th className="px-4 py-2 text-left font-semibold text-amber-900">组合数C(6,k)</th>
                      <th className="px-4 py-2 text-left font-semibold text-amber-900">概率计算</th>
                      <th className="px-4 py-2 text-left font-semibold text-amber-900">结果</th>
                      <th className="px-4 py-2 text-left font-semibold text-amber-900">最终技能数</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    <tr className="bg-white">
                      <td className="px-4 py-2">0</td>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">1 × 0.7^6</td>
                      <td className="px-4 py-2 font-semibold">11.76%</td>
                      <td className="px-4 py-2">1技能</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">6</td>
                      <td className="px-4 py-2">6 × 0.3 × 0.7^5</td>
                      <td className="px-4 py-2 font-semibold">30.25%</td>
                      <td className="px-4 py-2">2技能</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">2</td>
                      <td className="px-4 py-2">15</td>
                      <td className="px-4 py-2">15 × 0.3^2 × 0.7^4</td>
                      <td className="px-4 py-2 font-semibold text-green-600">32.41%</td>
                      <td className="px-4 py-2 font-bold text-green-600">3技能 ⭐</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="px-4 py-2">3</td>
                      <td className="px-4 py-2">20</td>
                      <td className="px-4 py-2">20 × 0.3^3 × 0.7^3</td>
                      <td className="px-4 py-2 font-semibold">18.52%</td>
                      <td className="px-4 py-2">4技能</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">4</td>
                      <td className="px-4 py-2">15</td>
                      <td className="px-4 py-2">15 × 0.3^4 × 0.7^2</td>
                      <td className="px-4 py-2 font-semibold">5.95%</td>
                      <td className="px-4 py-2">5技能</td>
                    </tr>
                    <tr className="bg-amber-50">
                      <td className="px-4 py-2">5</td>
                      <td className="px-4 py-2">6</td>
                      <td className="px-4 py-2">6 × 0.3^5 × 0.7</td>
                      <td className="px-4 py-2 font-semibold">1.02%</td>
                      <td className="px-4 py-2">6技能</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">6</td>
                      <td className="px-4 py-2">1</td>
                      <td className="px-4 py-2">1 × 0.3^6</td>
                      <td className="px-4 py-2 font-semibold">0.07%</td>
                      <td className="px-4 py-2">7技能</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 font-semibold text-amber-900">期望技能数：</p>
              <div className="bg-amber-50 rounded p-4 font-mono text-sm">
                E = 6 × 0.3 + 1 = 2.8个技能
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <p className="text-green-900">
                <strong>✅ 结论：</strong>这个炼妖组合最可能出3技能（32.41%概率），平均能出2.8技能。
                如果目标是4技能以上，概率只有25.5%，需要炼约4次才能出1只。
              </p>
            </div>
          </section>

          {/* Section 4: Special Skills */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">四、特殊技能概率计算</h2>

            <p className="text-amber-800 leading-relaxed mb-4">
              所有技能的保留机制完全相同，都是30%概率。
              如果你想单独追踪某些重要技能，可以在"特殊技能数量"中填写。
            </p>

            <p className="text-amber-800 leading-relaxed mb-4">
              以上面的案例为例，特殊技能池 = 1 + 2 = 3个，使用同样的二项分布公式：
            </p>

            <div className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-purple-200 mb-6">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-purple-200 text-sm">
                  <thead className="bg-purple-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-purple-900">保留特殊技能数</th>
                      <th className="px-4 py-2 text-left font-semibold text-purple-900">概率</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-purple-100">
                    <tr className="bg-white">
                      <td className="px-4 py-2">0个</td>
                      <td className="px-4 py-2">34.3%</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="px-4 py-2 font-bold">1个 ⭐</td>
                      <td className="px-4 py-2 font-bold text-purple-600">44.1%</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2">2个</td>
                      <td className="px-4 py-2">18.9%</td>
                    </tr>
                    <tr className="bg-purple-50">
                      <td className="px-4 py-2">3个</td>
                      <td className="px-4 py-2">2.7%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4 font-semibold text-purple-900">期望特殊技能数：</p>
              <div className="bg-purple-50 rounded p-4 font-mono text-sm">
                E = 3 × 0.3 = 0.9个
              </div>
            </div>
          </section>

          {/* Section 5: Tips */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">五、实用技巧</h2>

            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-amber-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">1. 使用炼妖计算器</h3>
                <p className="text-amber-800">
                  手工计算二项分布概率非常繁琐且容易出错。建议使用
                  <Link href="/calculator" className="text-amber-600 hover:text-amber-700 font-semibold"> 炼妖计算器 </Link>
                  快速得出精确结果，节省时间。
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-amber-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">2. 关注期望值</h3>
                <p className="text-amber-800">
                  期望技能数 = 技能池 × 0.3 + 必带技能数。这个公式简单却非常有用，可以快速评估炼妖价值。
                  如果期望值低于3，通常不建议炼妖。
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-amber-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">3. 设定合理目标</h3>
                <p className="text-amber-800">
                  不要盲目追求极品。如果某个目标概率低于10%，意味着平均需要炼10次以上。
                  根据自己的预算，设定现实的目标更明智。
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm ring-1 ring-amber-200">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">4. 理性看待运气</h3>
                <p className="text-amber-800">
                  概率只是长期平均值。短期内你可能连续失败或连续成功，这都是正常的。
                  不要因为几次失败就质疑概率，也不要因为一次成功就过度乐观。
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">立即使用炼妖计算器</h3>
            <p className="text-amber-50 mb-6">
              无需手工计算，一键得出精确概率分布
            </p>
            <Link
              href="/calculator"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              开始计算
            </Link>
          </div>
        </div>
      </article>

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
