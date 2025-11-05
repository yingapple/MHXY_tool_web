import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游打书技巧详解 - 前排书后排书顺序攻略 | 梦幻西游炼妖助手',
  description: '详细解析梦幻西游打书技巧，包括前排书后排书概念、打书顺序、技能冲突规避、打书位置选择等实用经验，助你提升打书成功率。',
  keywords: ['梦幻西游', '打书技巧', '前排书', '后排书', '打书顺序', '技能冲突', '打书攻略'],
};

export default function DashuJiqiaoPage() {
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
              <span className="text-6xl">📖</span>
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-700 via-pink-600 to-red-700 text-transparent bg-clip-text">
                梦幻西游打书技巧详解
              </h1>
            </div>
            <p className="text-xl text-purple-800 font-bold">前排书后排书？打书顺序？看完这篇你就懂了</p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl space-y-8">
            {/* 引言 */}
            <section className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                打书是梦幻西游中最烧钱也最考验技术的玩法之一。很多玩家抱怨"为什么我打了10本书都没成功？"、"为什么技能总是顶掉我想要的？"
                本文将深入解析打书机制，分享实战经验，帮你少走弯路，少花冤枉钱！
              </p>
            </section>

            {/* 第一部分：打书基础 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>📚</span>
                一、打书基础知识
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">1.1 打书的三种结果</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-3">
                      <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                      <div>
                        <strong className="text-green-700">覆盖：</strong>新技能替换掉原有技能（这是我们想要的结果）
                        <p className="text-sm text-gray-600 mt-1">示例：4技能宝宝[连击 必杀 偷袭 防御]，打掉防御换成强力</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-amber-600 font-bold text-xl flex-shrink-0">↑</span>
                      <div>
                        <strong className="text-amber-700">插入：</strong>新技能插入，技能数+1（小概率事件）
                        <p className="text-sm text-gray-600 mt-1">示例：4技能宝宝打书后变成5技能</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xl flex-shrink-0">✗</span>
                      <div>
                        <strong className="text-red-700">跳位：</strong>技能位置发生变化，可能顶掉核心技能（最危险）
                        <p className="text-sm text-gray-600 mt-1">示例：想打掉防御，结果把连击顶掉了</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 border-l-4 border-amber-500">
                  <h3 className="text-xl font-bold text-amber-900 mb-3">1.2 打书成功率（官方数据）</h3>
                  <div className="space-y-2 text-gray-800">
                    <p>• <strong className="text-green-600">1技能宝宝：</strong>60%增加技能，40%替换技能</p>
                    <p>• <strong className="text-amber-600">2技能宝宝：</strong>10%增加技能，90%替换技能</p>
                    <p>• <strong className="text-red-600">3技能及以上：</strong>100%替换现有技能</p>
                    <p className="text-sm text-gray-600 mt-3 bg-white px-4 py-2 rounded">
                      💡 <strong>保底机制：</strong>连续替换有保底，1技能连续3次必增加，2技能连续19次必增加
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 第二部分：前排书后排书 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>🎯</span>
                二、前排书 VS 后排书
              </h2>

              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-300">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">什么是前排书和后排书？</h3>
                  <p className="text-gray-800 mb-4">
                    梦幻西游中的每个技能都有一个<strong className="text-purple-600">"技能编号"</strong>，编号小的叫<strong className="text-blue-600">前排书</strong>，编号大的叫<strong className="text-red-600">后排书</strong>。
                    打书时，技能会根据编号自动排序。
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-blue-100 rounded-lg p-4 border-2 border-blue-400">
                      <h4 className="font-bold text-blue-900 mb-2">🔵 常见前排书</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• 高级鬼魂术</li>
                        <li>• 高级神佑复生</li>
                        <li>• 高级强力</li>
                        <li>• 高级必杀</li>
                        <li>• 高级连击</li>
                      </ul>
                    </div>
                    <div className="bg-red-100 rounded-lg p-4 border-2 border-red-400">
                      <h4 className="font-bold text-red-900 mb-2">🔴 常见后排书</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• 高级感知</li>
                        <li>• 高级偷袭</li>
                        <li>• 高级夜战</li>
                        <li>• 防御</li>
                        <li>• 幸运</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-900 mb-3">为什么前后排很重要？</h3>
                  <p className="text-gray-800 mb-4">
                    因为技能冲突！如果新打的技能与现有技能冲突，可能会发生<strong className="text-red-600">"跳位"</strong>现象，导致你想保留的技能被顶掉。
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="font-bold text-gray-900 mb-2">⚠️ 常见技能冲突示例：</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <span className="text-red-600">连击 ⚔️ 必杀</span> - 只能存在一个</li>
                      <li>• <span className="text-red-600">偷袭 ⚔️ 夜战</span> - 只能存在一个</li>
                      <li>• <span className="text-red-600">强力 ⚔️ 勇敢</span> - 只能存在一个</li>
                      <li>• <span className="text-red-600">高级XX ⚔️ 低级XX</span> - 低级会被顶掉</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 第三部分：打书顺序 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>🔄</span>
                三、打书顺序技巧（重点！）
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-xl p-6 border-4 border-orange-400">
                  <h3 className="text-2xl font-black text-red-900 mb-4">✨ 黄金法则</h3>
                  <p className="text-xl font-bold text-gray-900">
                    先打<span className="text-blue-600">前排书</span>，后打<span className="text-red-600">后排书</span>！
                  </p>
                  <p className="text-gray-800 mt-4">
                    原因：前排书编号小，会占据宝宝的前几个技能位。如果先打后排书，再打前排书时，前排书会"挤"到前面，可能导致后排书被顶掉。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border-2 border-gray-300 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📋 推荐打书顺序（以4技能攻宠为例）</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-500">
                      <span className="text-2xl font-black text-blue-600">1</span>
                      <div>
                        <p className="font-bold text-blue-900">高级必杀（前排）</p>
                        <p className="text-sm text-gray-600">编号靠前，优先打</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border-l-4 border-purple-500">
                      <span className="text-2xl font-black text-purple-600">2</span>
                      <div>
                        <p className="font-bold text-purple-900">高级连击（前排）</p>
                        <p className="text-sm text-gray-600">与必杀冲突，但我们都要保留</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border-l-4 border-green-500">
                      <span className="text-2xl font-black text-green-600">3</span>
                      <div>
                        <p className="font-bold text-green-900">高级强力（中排）</p>
                        <p className="text-sm text-gray-600">编号中等，接着打</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-red-50 to-red-100 rounded-lg border-l-4 border-red-500">
                      <span className="text-2xl font-black text-red-600">4</span>
                      <div>
                        <p className="font-bold text-red-900">高级偷袭（后排）</p>
                        <p className="text-sm text-gray-600">编号靠后，最后打</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-amber-50 rounded-lg border-2 border-amber-400">
                    <p className="text-sm text-amber-900">
                      <strong>💡 为什么这样打？</strong><br />
                      因为高级偷袭编号大，如果先打，后面打高级必杀时，必杀会"插队"到前面，可能把偷袭顶掉。
                      按从前到后的顺序打，每个技能都能稳定在自己的位置。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 第四部分：实战经验 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>💡</span>
                四、实战经验与玄学
              </h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-6 border-2 border-purple-300">
                  <h3 className="text-lg font-bold text-purple-900 mb-3">🎲 玩家流传的"玄学"技巧</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    注意：以下是玩家经验总结，并非官方机制，仅供参考，最终还是看概率！
                  </p>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>时间玄学：</strong>有玩家认为晚上8-10点打书成功率高（人多时段），也有人认为凌晨人少时成功率高</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>位置玄学：</strong>在建邺城、长安城的宠物仙子处打书，不同NPC成功率不同（纯心理暗示）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>连打玄学：</strong>连续打多只宝宝，如果一直失败，换一只宝宝试试</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span><strong>炼妖后打书：</strong>有玩家认为刚炼出来的宝宝立即打书成功率高（未验证）</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-lg font-bold text-green-900 mb-3">✅ 真正有效的技巧</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>了解技能冲突：</strong>提前查看技能冲突表，避免打冲突技能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>掌握打书顺序：</strong>严格按照前排→后排的顺序打书</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>预算充足：</strong>准备足够的兽决，平均需要打4-10本（看技能数）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>止损策略：</strong>设定上限，如果打了15本还没成功，考虑放弃</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold">✓</span>
                      <span><strong>使用计算器：</strong>用打书计算器评估成本和收益，理性决策</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-100 rounded-xl p-6 border-l-4 border-red-500">
                  <h3 className="text-lg font-bold text-red-900 mb-3">⚠️ 常见误区</h3>
                  <ul className="space-y-3 text-gray-800">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>误区1：</strong>打书位置会影响成功率 → <span className="text-green-600 font-bold">错！</span>纯概率，位置无影响</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>误区2：</strong>高级书一定能顶掉低级书 → <span className="text-green-600 font-bold">错！</span>仍需概率判定</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>误区3：</strong>资质好的宝宝打书成功率高 → <span className="text-green-600 font-bold">错！</span>资质与打书无关</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600 font-bold">✗</span>
                      <span><strong>误区4：</strong>必须在特定NPC处打书 → <span className="text-green-600 font-bold">错！</span>任何宠物仙子都一样</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 第五部分：成本分析 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>💰</span>
                五、打书成本分析
              </h2>

              <div className="bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 rounded-xl p-6 border-4 border-amber-400">
                <h3 className="text-xl font-bold text-amber-900 mb-4">💸 打书到底要花多少钱？</h3>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-4 border-2 border-blue-300">
                    <h4 className="font-bold text-blue-900 mb-2">4技能宝宝打1个垃圾技能</h4>
                    <p className="text-sm text-gray-700">• 成功率：25% (1/4)</p>
                    <p className="text-sm text-gray-700">• 平均需要：4本</p>
                    <p className="text-sm text-gray-700">• 如果兽决80万/本：320万</p>
                    <p className="text-sm text-green-600 font-bold mt-2">✅ 1-2本就成：很赚！</p>
                    <p className="text-sm text-red-600 font-bold">❌ 10本以上：大亏！</p>
                  </div>

                  <div className="bg-white rounded-lg p-4 border-2 border-purple-300">
                    <h4 className="font-bold text-purple-900 mb-2">5技能宝宝打2个垃圾技能</h4>
                    <p className="text-sm text-gray-700">• 成功率：40% (2/5)</p>
                    <p className="text-sm text-gray-700">• 平均需要：2.5本</p>
                    <p className="text-sm text-gray-700">• 如果兽决80万/本：200万</p>
                    <p className="text-sm text-green-600 font-bold mt-2">✅ 成功率更高！</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-red-50 rounded-lg border-2 border-red-400">
                  <p className="text-red-900 font-bold">
                    ⚠️ <strong>重要提醒：</strong>打书是概率游戏，有人1本成功，有人20本还没成功！
                    建议使用<Link href="/book-typing" className="text-blue-600 underline hover:text-blue-800">打书计算器</Link>评估风险，设定止损线！
                  </p>
                </div>
              </div>
            </section>

            {/* 总结 */}
            <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 rounded-2xl p-8 border-4 border-purple-400 shadow-2xl">
              <h2 className="text-3xl font-black text-center text-purple-900 mb-6">
                🎯 打书成功秘诀
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-green-800 text-lg mb-2">✅ 必做的事</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✓ 提前查技能冲突表</li>
                    <li>✓ 严格按顺序打书</li>
                    <li>✓ 准备充足预算</li>
                    <li>✓ 使用计算器评估</li>
                    <li>✓ 设定止损线</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-red-800 text-lg mb-2">❌ 不要做的事</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>✗ 盲目相信玄学</li>
                    <li>✗ 打冲突技能</li>
                    <li>✗ 顺序混乱打书</li>
                    <li>✗ 上头无限打</li>
                    <li>✗ 不计算成本</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/book-typing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span>🧮</span>
                  使用打书计算器
                  <span>→</span>
                </Link>
              </div>
            </section>

            {/* 返回按钮 */}
            <div className="text-center pt-8">
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 text-lg font-bold text-purple-700 hover:text-purple-900 transition-colors"
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
