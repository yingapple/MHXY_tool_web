import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游宠物胚子选择攻略 - 资质成长怎么看？如何选择炼妖胚子 | 梦幻西游炼妖助手',
  description: '详解梦幻西游宠物资质成长的查看方法、胚子好坏判断标准、炼妖胚子选择技巧，教你避开陷阱，选出性价比最高的胚子。',
  keywords: ['梦幻西游', '宠物胚子', '资质成长', '胚子选择', '炼妖胚子', '宠物资质', '成长率'],
};

export default function PaiziXuanzePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-amber-50 to-orange-100">
      {/* Header */}
      <header className="border-b-4 border-red-700 bg-gradient-to-r from-red-800 via-amber-700 to-red-800 shadow-2xl">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo-small.png" alt="梦" width={48} height={48} className="w-10 h-10 md:w-12 md:h-12" />
              <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-100 to-yellow-200">
                梦幻西游炼妖助手
              </h1>
            </Link>
            <nav className="flex gap-2 md:gap-3">
              <Link href="/calculator" className="px-3 md:px-4 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all text-sm md:text-base">
                炼妖计算器
              </Link>
              <Link href="/guides" className="px-3 md:px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all text-sm md:text-base">
                攻略库
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          {/* 标题 */}
          <div className="text-center mb-12">
            <div className="flex justify-center items-center gap-4 mb-4">
              <span className="text-6xl">🔍</span>
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-700 via-purple-600 to-pink-700 text-transparent bg-clip-text">
                梦幻西游胚子选择攻略
              </h1>
            </div>
            <p className="text-xl text-blue-800 font-bold">资质成长怎么看？教你避开奸商陷阱，选出极品胚子！</p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl space-y-8">
            {/* 引言 */}
            <section className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                "这个宝宝资质好吗？"、"为什么我的胚子炼出来那么垃圾？"、"奸商卖的胚子是不是喂满了元宵？"
                这些是炼妖玩家最关心的问题。本文将手把手教你如何鉴别胚子好坏，避开常见陷阱，选出性价比最高的炼妖胚子！
              </p>
            </section>

            {/* 第一部分：资质基础 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>📊</span>
                一、宠物资质基础知识
              </h2>

              <div className="space-y-6">
                {/* 什么是资质 */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-100 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">1.1 什么是资质？</h3>
                  <p className="text-gray-800 mb-4">
                    资质是宠物的<strong className="text-blue-600">天赋上限</strong>，决定了宠物升级时属性的成长幅度。
                    同样等级的宠物，资质越高，属性越强！
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border-2 border-red-300">
                      <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                        <span>⚔️</span>
                        攻击资质
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">影响物理攻击伤害</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>垃圾：</span><span className="text-red-600 font-bold">≤1200</span>
                        </div>
                        <div className="flex justify-between">
                          <span>一般：</span><span className="text-amber-600 font-bold">1200-1400</span>
                        </div>
                        <div className="flex justify-between">
                          <span>优秀：</span><span className="text-blue-600 font-bold">1400-1600</span>
                        </div>
                        <div className="flex justify-between">
                          <span>极品：</span><span className="text-green-600 font-bold">≥1600</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
                        <span>🛡️</span>
                        防御资质
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">影响物理防御能力</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>垃圾：</span><span className="text-red-600 font-bold">≤1000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>一般：</span><span className="text-amber-600 font-bold">1000-1200</span>
                        </div>
                        <div className="flex justify-between">
                          <span>优秀：</span><span className="text-blue-600 font-bold">1200-1400</span>
                        </div>
                        <div className="flex justify-between">
                          <span>极品：</span><span className="text-green-600 font-bold">≥1400</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-green-300">
                      <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                        <span>❤️</span>
                        体力资质
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">影响HP上限（最重要！）</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>垃圾：</span><span className="text-red-600 font-bold">≤4000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>一般：</span><span className="text-amber-600 font-bold">4000-4500</span>
                        </div>
                        <div className="flex justify-between">
                          <span>优秀：</span><span className="text-blue-600 font-bold">4500-5000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>极品：</span><span className="text-green-600 font-bold">≥5000</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                      <h4 className="font-bold text-purple-800 mb-2 flex items-center gap-2">
                        <span>✨</span>
                        法力资质
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">影响法术伤害和MP</p>
                      <div className="space-y-1 text-xs">
                        <div className="flex justify-between">
                          <span>垃圾：</span><span className="text-red-600 font-bold">≤2000</span>
                        </div>
                        <div className="flex justify-between">
                          <span>一般：</span><span className="text-amber-600 font-bold">2000-2400</span>
                        </div>
                        <div className="flex justify-between">
                          <span>优秀：</span><span className="text-blue-600 font-bold">2400-2800</span>
                        </div>
                        <div className="flex justify-between">
                          <span>极品：</span><span className="text-green-600 font-bold">≥2800</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-yellow-300 md:col-span-2">
                      <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                        <span>⚡</span>
                        速度资质
                      </h4>
                      <p className="text-sm text-gray-700 mb-2">影响出手顺序（PK重要）</p>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>垃圾：</span><span className="text-red-600 font-bold">≤1200</span>
                          </div>
                          <div className="flex justify-between">
                            <span>一般：</span><span className="text-amber-600 font-bold">1200-1400</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between">
                            <span>优秀：</span><span className="text-blue-600 font-bold">1400-1500</span>
                          </div>
                          <div className="flex justify-between">
                            <span>极品：</span><span className="text-green-600 font-bold">≥1500</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-100 rounded-lg border-2 border-blue-400">
                    <p className="text-sm text-blue-900 font-semibold">
                      💡 <strong>重点提示：</strong>攻宠看<strong className="text-red-600">攻击+体力+速度</strong>；
                      法宠看<strong className="text-purple-600">法力+体力+速度</strong>；
                      肉盾看<strong className="text-green-600">体力+防御</strong>。
                    </p>
                  </div>
                </div>

                {/* 什么是成长 */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-100 rounded-xl p-6 border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">1.2 什么是成长率？</h3>
                  <p className="text-gray-800 mb-4">
                    成长率决定宠物<strong className="text-amber-600">升级时属性的增长幅度</strong>。
                    即使资质相同，成长率高的宠物在满级时属性会比成长率低的高出<strong className="text-red-600">15-20%</strong>！
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-red-500">
                      <span className="text-2xl">💀</span>
                      <div className="flex-1">
                        <span className="font-bold text-red-700">1.00-1.15 垃圾成长</span>
                        <p className="text-xs text-gray-600">极不推荐，即使资质高也别要</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-amber-500">
                      <span className="text-2xl">📦</span>
                      <div className="flex-1">
                        <span className="font-bold text-amber-700">1.16-1.20 一般成长</span>
                        <p className="text-xs text-gray-600">可用，但不适合长期培养</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-blue-500">
                      <span className="text-2xl">📈</span>
                      <div className="flex-1">
                        <span className="font-bold text-blue-700">1.21-1.24 良好成长</span>
                        <p className="text-xs text-gray-600">可以接受，适合平民玩家</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-green-500">
                      <span className="text-2xl">✨</span>
                      <div className="flex-1">
                        <span className="font-bold text-green-700">1.25-1.27 优秀成长</span>
                        <p className="text-xs text-gray-600">值得培养，性价比高</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-purple-500">
                      <span className="text-2xl">👑</span>
                      <div className="flex-1">
                        <span className="font-bold text-purple-700">1.28+ 极品成长</span>
                        <p className="text-xs text-gray-600">稀有！遇到就买，价格贵也值</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-amber-100 rounded-lg border-2 border-amber-400">
                    <p className="text-sm text-amber-900 font-semibold">
                      🔥 <strong>黄金法则：</strong><span className="text-red-600 font-black">优先成长，其次资质！</span>
                      1.28成长+1400攻资 &gt; 1.20成长+1600攻资。因为资质可以吃元宵提升，成长改不了！
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 第二部分：如何查看资质 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>👀</span>
                二、如何查看宠物资质？
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6 border-2 border-green-400">
                  <h3 className="text-xl font-bold text-green-900 mb-4">2.1 查看方法</h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2">步骤1: 打开宠物栏</h4>
                      <p className="text-sm text-gray-800">
                        按<kbd className="px-2 py-1 bg-gray-200 rounded text-xs font-mono">Alt+P</kbd>或点击界面下方的宠物图标
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-2">步骤2: 查看宠物详情</h4>
                      <p className="text-sm text-gray-800">
                        点击宠物头像，在右侧可以看到<strong className="text-purple-600">"资质"</strong>和<strong className="text-purple-600">"成长"</strong>两项
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2">步骤3: 判断好坏</h4>
                      <p className="text-sm text-gray-800">
                        对照本文的资质成长评级表，判断宠物是否值得作为胚子
                      </p>
                    </div>
                  </div>
                </div>

                {/* 奸商陷阱 */}
                <div className="bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 rounded-xl p-6 border-4 border-red-500">
                  <h3 className="text-2xl font-black text-red-900 mb-4">⚠️ 2.2 奸商陷阱（重要！）</h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-5 border-2 border-red-400">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🚨</span>
                        <h4 className="font-bold text-red-900 text-lg">陷阱1: 资质丹喂满的"假极品"</h4>
                      </div>
                      <p className="text-gray-800 mb-3">
                        有些奸商会先给宠物<strong className="text-red-600">喂满资质丹</strong>（攻+150、体+300等），
                        然后把原本垃圾资质的宠物包装成"极品"高价卖出。
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg border-2 border-red-300">
                        <p className="text-sm text-red-900 font-semibold mb-2">
                          🔍 <strong>识别方法：</strong>
                        </p>
                        <ul className="text-sm text-gray-800 space-y-1">
                          <li>• 查看宠物是否有<strong className="text-red-600">"已使用资质丹"</strong>标记</li>
                          <li>• 对比该种族的<strong className="text-blue-600">基础资质范围</strong>（可在图鉴查询）</li>
                          <li>• 如果资质<strong className="text-red-600">刚好在上限</strong>，很可能喂满了</li>
                          <li>• 价格异常便宜的"极品"，90%是陷阱</li>
                        </ul>
                      </div>
                      <div className="mt-3 p-3 bg-green-100 rounded border-2 border-green-400">
                        <p className="text-sm text-green-900 font-semibold">
                          ✅ <strong>正确做法：</strong>优先购买<strong className="text-green-600">未喂资质丹</strong>的宠物，
                          这样你可以自己评估提升空间，而不是被奸商收智商税！
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-5 border-2 border-amber-400">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">💸</span>
                        <h4 className="font-bold text-amber-900 text-lg">陷阱2: 高资质低成长的"水货"</h4>
                      </div>
                      <p className="text-gray-800 mb-3">
                        有些宠物资质看起来很高（例如攻资1550），但成长只有<strong className="text-red-600">1.12</strong>。
                        这种宠物在满级时的实际属性<strong className="text-red-600">远不如</strong>成长1.26、资质1450的宠物！
                      </p>
                      <div className="bg-amber-50 p-4 rounded-lg border-2 border-amber-300">
                        <p className="text-sm text-amber-900 font-semibold mb-2">
                          💡 <strong>案例对比：</strong>
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm">
                          <div className="p-3 bg-red-100 rounded border-l-4 border-red-500">
                            <p className="font-bold text-red-800 mb-1">❌ 水货宝宝</p>
                            <p>攻资：1550</p>
                            <p>成长：1.12</p>
                            <p className="text-red-600 font-bold mt-2">满级攻击：约1200</p>
                          </div>
                          <div className="p-3 bg-green-100 rounded border-l-4 border-green-500">
                            <p className="font-bold text-green-800 mb-1">✅ 真极品</p>
                            <p>攻资：1450</p>
                            <p>成长：1.26</p>
                            <p className="text-green-600 font-bold mt-2">满级攻击：约1380</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 p-3 bg-green-100 rounded border-2 border-green-400">
                        <p className="text-sm text-green-900 font-semibold">
                          ✅ <strong>正确做法：</strong><span className="text-red-600 font-black">宁要高成长低资质，不要低成长高资质！</span>
                          成长是无法改变的，资质可以吃元宵提升。
                        </p>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-5 border-2 border-purple-400">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🎭</span>
                        <h4 className="font-bold text-purple-900 text-lg">陷阱3: 技能多资质差的"鸡肋"</h4>
                      </div>
                      <p className="text-gray-800 mb-3">
                        有些胚子有<strong className="text-purple-600">5-6个技能</strong>，看起来很诱人，
                        但资质全红（低于平均值）、成长也一般。这种宠物<strong className="text-red-600">不适合长期培养</strong>。
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                        <p className="text-sm text-purple-900 font-semibold mb-2">
                          🤔 <strong>要不要买？</strong>
                        </p>
                        <ul className="text-sm text-gray-800 space-y-2">
                          <li className="flex items-start gap-2">
                            <span className="text-green-600 font-bold">✓</span>
                            <span><strong>适合：</strong>短期过渡、任务宠、练级宠</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">✗</span>
                            <span><strong>不适合：</strong>打书、精修、PK、长期使用</span>
                          </li>
                        </ul>
                      </div>
                      <div className="mt-3 p-3 bg-purple-100 rounded border-2 border-purple-400">
                        <p className="text-sm text-purple-900 font-semibold">
                          💡 <strong>平衡选择：</strong>炼妖用的胚子，建议<strong className="text-green-600">成长≥1.22、主资质≥平均值、技能≥4个</strong>。
                          三者兼顾，才是性价比最高的选择！
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第三部分：胚子选择标准 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>🎯</span>
                三、炼妖胚子选择标准
              </h2>

              <div className="space-y-6">
                {/* 攻宠胚子 */}
                <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-6 border-2 border-red-400">
                  <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
                    <span>⚔️</span>
                    3.1 攻宠胚子选择标准
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                      <h4 className="font-bold text-red-800 mb-2">👑 极品胚子（土豪选择）</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>攻击资质：</strong>≥1500</li>
                        <li>• <strong>体力资质：</strong>≥4800</li>
                        <li>• <strong>速度资质：</strong>≥1450</li>
                        <li>• <strong>成长率：</strong>≥1.26</li>
                        <li>• <strong>技能数：</strong>≥5个</li>
                        <li className="text-red-600 font-bold">💰 参考价格：150-300万（畅玩服）</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 mb-2">✨ 优秀胚子（推荐！）</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>攻击资质：</strong>1400-1500</li>
                        <li>• <strong>体力资质：</strong>4500-4800</li>
                        <li>• <strong>速度资质：</strong>1350-1450</li>
                        <li>• <strong>成长率：</strong>1.22-1.26</li>
                        <li>• <strong>技能数：</strong>4-5个</li>
                        <li className="text-blue-600 font-bold">💰 参考价格：50-100万（畅玩服）</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-800 mb-2">💚 合格胚子（平民选择）</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>攻击资质：</strong>1300-1400</li>
                        <li>• <strong>体力资质：</strong>4200-4500</li>
                        <li>• <strong>速度资质：</strong>1250-1350</li>
                        <li>• <strong>成长率：</strong>1.18-1.22</li>
                        <li>• <strong>技能数：</strong>4个</li>
                        <li className="text-green-600 font-bold">💰 参考价格：20-40万（畅玩服）</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-gray-400">
                      <h4 className="font-bold text-gray-800 mb-2">❌ 不推荐（浪费钱）</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• 攻击资质 &lt;1300 或 体力资质 &lt;4000</li>
                        <li>• 成长率 &lt;1.18</li>
                        <li>• 技能数 &lt;4个</li>
                        <li className="text-red-600 font-bold">⚠️ 这种胚子炼出来大概率垃圾，不如不炼</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 法宠胚子 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 border-2 border-purple-400">
                  <h3 className="text-xl font-bold text-purple-900 mb-4 flex items-center gap-2">
                    <span>✨</span>
                    3.2 法宠胚子选择标准
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-800 mb-2">👑 极品胚子</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>法力资质：</strong>≥2600</li>
                        <li>• <strong>体力资质：</strong>≥4500</li>
                        <li>• <strong>速度资质：</strong>≥1400</li>
                        <li>• <strong>成长率：</strong>≥1.25</li>
                        <li>• <strong>技能数：</strong>≥5个（含法术技能）</li>
                        <li className="text-purple-600 font-bold">💰 参考价格：120-250万</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 mb-2">✨ 优秀胚子（推荐！）</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>法力资质：</strong>2400-2600</li>
                        <li>• <strong>体力资质：</strong>4200-4500</li>
                        <li>• <strong>速度资质：</strong>1300-1400</li>
                        <li>• <strong>成长率：</strong>1.20-1.25</li>
                        <li>• <strong>技能数：</strong>4-5个</li>
                        <li className="text-blue-600 font-bold">💰 参考价格：40-80万</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-800 mb-2">💚 合格胚子</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>法力资质：</strong>2200-2400</li>
                        <li>• <strong>体力资质：</strong>3800-4200</li>
                        <li>• <strong>速度资质：</strong>1200-1300</li>
                        <li>• <strong>成长率：</strong>1.16-1.20</li>
                        <li>• <strong>技能数：</strong>4个</li>
                        <li className="text-green-600 font-bold">💰 参考价格：15-30万</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 血宠胚子 */}
                <div className="bg-gradient-to-br from-green-50 to-teal-100 rounded-xl p-6 border-2 border-green-400">
                  <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                    <span>🛡️</span>
                    3.3 血宠/肉盾胚子选择标准
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-800 mb-2">👑 极品胚子</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>体力资质：</strong>≥5200</li>
                        <li>• <strong>防御资质：</strong>≥1400</li>
                        <li>• <strong>速度资质：</strong>不重要（可忽略）</li>
                        <li>• <strong>成长率：</strong>≥1.24</li>
                        <li>• <strong>技能数：</strong>≥4个（含防御技能）</li>
                        <li className="text-green-600 font-bold">💰 参考价格：80-150万</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 mb-2">✨ 优秀胚子</h4>
                      <ul className="text-sm text-gray-800 space-y-1">
                        <li>• <strong>体力资质：</strong>4800-5200</li>
                        <li>• <strong>防御资质：</strong>1200-1400</li>
                        <li>• <strong>成长率：</strong>1.20-1.24</li>
                        <li>• <strong>技能数：</strong>4个</li>
                        <li className="text-blue-600 font-bold">💰 参考价格：30-60万</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第四部分：购买建议 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>💡</span>
                四、购买胚子的实战建议
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-xl p-6 border-4 border-orange-400">
                  <h3 className="text-2xl font-black text-orange-900 mb-6">🏆 黄金法则</h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                        <span>1️⃣</span>
                        成长优先于资质
                      </h4>
                      <p className="text-sm text-gray-800">
                        宁选1.26成长+1400资质，不选1.18成长+1550资质。因为<strong className="text-red-600">成长无法改变，资质可以吃元宵</strong>。
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <span>2️⃣</span>
                        避免喂满资质丹的胚子
                      </h4>
                      <p className="text-sm text-gray-800">
                        优先买<strong className="text-blue-600">未喂资质丹</strong>的胚子，有提升空间才值钱。
                        喂满的胚子通常是奸商把垃圾包装成"极品"。
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
                      <h4 className="font-bold text-purple-900 mb-2 flex items-center gap-2">
                        <span>3️⃣</span>
                        主资质达标，次资质可妥协
                      </h4>
                      <p className="text-sm text-gray-800">
                        攻宠主看<strong className="text-red-600">攻击+体力+速度</strong>，防御、法力可以低一点。
                        法宠主看<strong className="text-purple-600">法力+体力+速度</strong>，攻击、防御无所谓。
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-5 border-l-4 border-amber-500">
                      <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                        <span>4️⃣</span>
                        技能数量适中即可
                      </h4>
                      <p className="text-sm text-gray-800">
                        <strong className="text-green-600">4-5技能</strong>是最佳选择。
                        3技能太少，6技能以上通常资质成长差，不划算。
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
                      <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                        <span>5️⃣</span>
                        预算有限时，降低次要标准
                      </h4>
                      <p className="text-sm text-gray-800">
                        如果预算紧张，可以在<strong className="text-amber-600">资质</strong>上妥协（但不能太差），
                        但<strong className="text-red-600">成长率</strong>一定要≥1.20！
                      </p>
                    </div>
                  </div>
                </div>

                {/* 购买渠道 */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-100 rounded-xl p-6 border-2 border-blue-400">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">📍 推荐购买渠道</h3>

                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <h4 className="font-bold text-green-800 mb-2">✅ 藏宝阁（最安全）</h4>
                      <p className="text-sm text-gray-800">
                        官方平台，可以详细查看资质成长，不怕被骗。缺点是价格稍高。
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="font-bold text-blue-800 mb-2">⚖️ 摆摊（价格适中）</h4>
                      <p className="text-sm text-gray-800">
                        长安、建邺的宠物摆摊区。优点是可以讲价，缺点是需要自己鉴别。
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
                      <h4 className="font-bold text-amber-800 mb-2">💬 世界喊话（最便宜）</h4>
                      <p className="text-sm text-gray-800">
                        有时能淘到好货。但<strong className="text-red-600">一定要当面验货</strong>，查清楚资质成长再交易！
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-red-500">
                      <h4 className="font-bold text-red-800 mb-2">❌ 私聊陌生人（极易被骗）</h4>
                      <p className="text-sm text-gray-800">
                        主动私聊你"便宜卖胚子"的90%是骗子，要么是垃圾货，要么是钓鱼诈骗。<strong className="text-red-600">直接拉黑</strong>！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 总结 */}
            <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 rounded-2xl p-8 border-4 border-purple-400 shadow-2xl">
              <h2 className="text-3xl font-black text-center text-purple-900 mb-6">
                🎯 胚子选择终极清单
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-lg p-5">
                  <h3 className="font-bold text-green-800 text-lg mb-3">✅ 必须检查</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✓ 成长率 ≥1.20</li>
                    <li>✓ 主资质达标</li>
                    <li>✓ 技能数 ≥4个</li>
                    <li>✓ 未喂满资质丹</li>
                    <li>✓ 五行可调整</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-5">
                  <h3 className="font-bold text-red-800 text-lg mb-3">❌ 绝对避免</h3>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>✗ 成长率 &lt;1.18</li>
                    <li>✗ 主资质全红</li>
                    <li>✗ 技能数 &lt;4个</li>
                    <li>✗ 喂满资质丹的"极品"</li>
                    <li>✗ 价格异常便宜</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-lg p-5 border-2 border-orange-400">
                <p className="text-center text-lg font-black text-orange-900 mb-3">
                  🏆 记住这句话：成长&gt;资质&gt;技能数！
                </p>
                <p className="text-center text-sm text-gray-800">
                  选好胚子后，别忘了使用<Link href="/calculator" className="text-blue-600 underline hover:text-blue-800 font-bold">炼妖计算器</Link>
                  计算成功概率和期望成本，理性炼妖，科学赚金！
                </p>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span>🧮</span>
                  开始精准炼妖
                  <span>→</span>
                </Link>
              </div>
            </section>

            {/* 返回按钮 */}
            <div className="text-center pt-8">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 text-lg font-bold text-blue-700 hover:text-blue-900 transition-colors"
              >
                <span>←</span>
                返回攻略库
              </Link>
            </div>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-200 bg-white/80 mt-24">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-amber-700">
            本站为非官方玩家工具，与网易公司无关 | 《梦幻西游》游戏版权归网易公司所有
          </p>
        </div>
      </footer>
    </div>
  );
}
