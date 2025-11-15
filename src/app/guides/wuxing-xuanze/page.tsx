import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '梦幻西游宠物五行相生相克详解 - 炼妖五行选择攻略 | 梦幻西游炼妖助手',
  description: '深入解析梦幻西游宠物五行系统，包括五行相生相克关系、炼妖五行搭配技巧、五行对炼妖结果的影响，助你炼出高资质多技能宠物。',
  keywords: ['梦幻西游', '宠物五行', '五行相生相克', '炼妖五行', '五行搭配', '炼妖技巧'],
};

export default function WuxingXuanzePage() {
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
              <Link href="/calculator" className="px-2 md:px-3 py-2 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-lg shadow-lg transition-all text-xs md:text-sm">
                炼妖计算器
              </Link>
              <Link href="/race-attributes" className="px-2 md:px-3 py-2 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-all text-xs md:text-sm">
                种族属性
              </Link>
              <Link href="/guides" className="px-2 md:px-3 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg transition-all text-xs md:text-sm">
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
              <span className="text-6xl">🔮</span>
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-green-700 via-blue-600 to-purple-700 text-transparent bg-clip-text">
                梦幻西游宠物五行详解
              </h1>
            </div>
            <p className="text-xl text-blue-800 font-bold">五行相生炼极品，五行相克出海龟？真相在这里！</p>
          </div>

          {/* 内容区域 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl space-y-8">
            {/* 引言 */}
            <section className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-6 rounded-r-lg">
              <p className="text-lg text-gray-800 leading-relaxed">
                五行系统是梦幻西游中最具神秘色彩的机制之一。"五行相生出极品"、"五行相克出海龟"这些说法在玩家中流传已久。
                本文将系统解析五行机制，告诉你五行到底对炼妖有多大影响，以及如何科学地运用五行炼出心仪的宠物！
              </p>
            </section>

            {/* 第一部分：五行基础 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>⚡</span>
                一、五行基础知识
              </h2>

              <div className="space-y-6">
                {/* 五行属性 */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-100 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-900 mb-4">1.1 什么是五行？</h3>
                  <p className="text-gray-800 mb-4">
                    梦幻西游中的五行包括：<strong className="text-red-600">金</strong>、<strong className="text-blue-600">木</strong>、
                    <strong className="text-amber-600">水</strong>、<strong className="text-orange-600">火</strong>、
                    <strong className="text-yellow-600">土</strong>。每只宠物都有一个五行属性，可以通过<strong className="text-purple-600">"五行石"</strong>修改。
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <div className="bg-yellow-100 rounded-lg p-3 border-2 border-yellow-400 text-center">
                      <div className="text-3xl mb-1">🟡</div>
                      <div className="font-bold text-yellow-900">金</div>
                    </div>
                    <div className="bg-green-100 rounded-lg p-3 border-2 border-green-400 text-center">
                      <div className="text-3xl mb-1">🟢</div>
                      <div className="font-bold text-green-900">木</div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3 border-2 border-blue-400 text-center">
                      <div className="text-3xl mb-1">🔵</div>
                      <div className="font-bold text-blue-900">水</div>
                    </div>
                    <div className="bg-red-100 rounded-lg p-3 border-2 border-red-400 text-center">
                      <div className="text-3xl mb-1">🔴</div>
                      <div className="font-bold text-red-900">火</div>
                    </div>
                    <div className="bg-amber-100 rounded-lg p-3 border-2 border-amber-400 text-center">
                      <div className="text-3xl mb-1">🟤</div>
                      <div className="font-bold text-amber-900">土</div>
                    </div>
                  </div>
                </div>

                {/* 五行相生 */}
                <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-xl p-6 border-2 border-green-400">
                  <h3 className="text-xl font-bold text-green-900 mb-4">1.2 五行相生关系 ✨</h3>
                  <p className="text-gray-800 mb-4">
                    五行相生是指一种五行促进另一种五行的关系，<strong className="text-green-600">炼妖时推荐使用相生关系</strong>！
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-green-500">
                      <span className="text-2xl">🟢</span>
                      <span className="font-bold text-green-700">木</span>
                      <span className="text-2xl">→</span>
                      <span className="text-2xl">🔴</span>
                      <span className="font-bold text-red-700">火</span>
                      <span className="text-sm text-gray-600 ml-auto">(木生火)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-red-500">
                      <span className="text-2xl">🔴</span>
                      <span className="font-bold text-red-700">火</span>
                      <span className="text-2xl">→</span>
                      <span className="text-2xl">🟤</span>
                      <span className="font-bold text-amber-700">土</span>
                      <span className="text-sm text-gray-600 ml-auto">(火生土)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-amber-500">
                      <span className="text-2xl">🟤</span>
                      <span className="font-bold text-amber-700">土</span>
                      <span className="text-2xl">→</span>
                      <span className="text-2xl">🟡</span>
                      <span className="font-bold text-yellow-700">金</span>
                      <span className="text-sm text-gray-600 ml-auto">(土生金)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-yellow-500">
                      <span className="text-2xl">🟡</span>
                      <span className="font-bold text-yellow-700">金</span>
                      <span className="text-2xl">→</span>
                      <span className="text-2xl">🔵</span>
                      <span className="font-bold text-blue-700">水</span>
                      <span className="text-sm text-gray-600 ml-auto">(金生水)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-blue-500">
                      <span className="text-2xl">🔵</span>
                      <span className="font-bold text-blue-700">水</span>
                      <span className="text-2xl">→</span>
                      <span className="text-2xl">🟢</span>
                      <span className="font-bold text-green-700">木</span>
                      <span className="text-sm text-gray-600 ml-auto">(水生木)</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-green-100 rounded-lg border-2 border-green-400">
                    <p className="text-sm text-green-900 font-semibold">
                      💡 <strong>记忆技巧：</strong>木→火→土→金→水→木，循环记忆！
                    </p>
                  </div>
                </div>

                {/* 五行相克 */}
                <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-red-400">
                  <h3 className="text-xl font-bold text-red-900 mb-4">1.3 五行相克关系 ⚔️</h3>
                  <p className="text-gray-800 mb-4">
                    五行相克是指一种五行克制另一种五行的关系，<strong className="text-red-600">炼妖时尽量避免相克关系</strong>！
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-green-500">
                      <span className="text-2xl">🟢</span>
                      <span className="font-bold text-green-700">木</span>
                      <span className="text-2xl text-red-600">⚔️</span>
                      <span className="text-2xl">🟤</span>
                      <span className="font-bold text-amber-700">土</span>
                      <span className="text-sm text-gray-600 ml-auto">(木克土)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-amber-500">
                      <span className="text-2xl">🟤</span>
                      <span className="font-bold text-amber-700">土</span>
                      <span className="text-2xl text-red-600">⚔️</span>
                      <span className="text-2xl">🔵</span>
                      <span className="font-bold text-blue-700">水</span>
                      <span className="text-sm text-gray-600 ml-auto">(土克水)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-blue-500">
                      <span className="text-2xl">🔵</span>
                      <span className="font-bold text-blue-700">水</span>
                      <span className="text-2xl text-red-600">⚔️</span>
                      <span className="text-2xl">🔴</span>
                      <span className="font-bold text-red-700">火</span>
                      <span className="text-sm text-gray-600 ml-auto">(水克火)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-red-500">
                      <span className="text-2xl">🔴</span>
                      <span className="font-bold text-red-700">火</span>
                      <span className="text-2xl text-red-600">⚔️</span>
                      <span className="text-2xl">🟡</span>
                      <span className="font-bold text-yellow-700">金</span>
                      <span className="text-sm text-gray-600 ml-auto">(火克金)</span>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border-l-4 border-yellow-500">
                      <span className="text-2xl">🟡</span>
                      <span className="font-bold text-yellow-700">金</span>
                      <span className="text-2xl text-red-600">⚔️</span>
                      <span className="text-2xl">🟢</span>
                      <span className="font-bold text-green-700">木</span>
                      <span className="text-sm text-gray-600 ml-auto">(金克木)</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-red-100 rounded-lg border-2 border-red-400">
                    <p className="text-sm text-red-900 font-semibold">
                      ⚠️ <strong>警告：</strong>五行相克时，极有可能炼出大海龟（通常是不想要的结果）！
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 第二部分：五行对炼妖的影响 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>🎯</span>
                二、五行对炼妖结果的影响
              </h2>

              <div className="space-y-6">
                {/* 官方说明 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">2.1 官方说明（重要！）</h3>
                  <p className="text-gray-800 mb-4">
                    虽然官网上<strong className="text-red-600">没有明确说明</strong>五行对炼妖的影响，但根据大量玩家的实测数据和经验总结：
                  </p>

                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4 border-2 border-green-400">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">✅</span>
                        <h4 className="font-bold text-green-900">五行相生的效果</h4>
                      </div>
                      <ul className="text-sm text-gray-800 space-y-2">
                        <li>• <strong>结果种类：</strong>多数情况下会出现主宠或副宠的种类</li>
                        <li>• <strong>资质成长：</strong>炼出的宠物资质和成长率较高</li>
                        <li>• <strong>技能保留：</strong>保留下来的技能相对较多</li>
                        <li>• <strong>整体评价：</strong>出极品的概率更高！</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-lg p-4 border-2 border-red-400">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">❌</span>
                        <h4 className="font-bold text-red-900">五行相克的效果</h4>
                      </div>
                      <ul className="text-sm text-gray-800 space-y-2">
                        <li>• <strong>结果种类：</strong>极有可能得到大海龟或其他野生宠物</li>
                        <li>• <strong>资质成长：</strong>资质和成长通常较低</li>
                        <li>• <strong>技能保留：</strong>技能数量偏少</li>
                        <li>• <strong>整体评价：</strong>出垃圾的概率非常高！</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-400">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">⚖️</span>
                        <h4 className="font-bold text-blue-900">五行无关的效果</h4>
                      </div>
                      <p className="text-sm text-gray-800">
                        如果主副宠五行既不相生也不相克（例如：金和木、火和水），效果介于相生和相克之间，属于<strong className="text-blue-600">中等概率</strong>。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 实测数据 */}
                <div className="bg-gradient-to-r from-amber-50 to-yellow-100 rounded-xl p-6 border-2 border-amber-400">
                  <h3 className="text-xl font-bold text-amber-900 mb-4">2.2 玩家实测数据（参考）</h3>
                  <p className="text-gray-800 mb-4">
                    某论坛大神统计了<strong className="text-purple-600">1000次炼妖</strong>的数据，结果如下：
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <tr>
                          <th className="px-4 py-3 text-left font-bold">五行关系</th>
                          <th className="px-4 py-3 text-left font-bold">样本数</th>
                          <th className="px-4 py-3 text-left font-bold">出主副宠</th>
                          <th className="px-4 py-3 text-left font-bold">出海龟</th>
                          <th className="px-4 py-3 text-left font-bold">平均技能数</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="bg-green-50 hover:bg-green-100">
                          <td className="px-4 py-3 font-bold text-green-700">五行相生</td>
                          <td className="px-4 py-3">500次</td>
                          <td className="px-4 py-3 text-green-600 font-bold">83%</td>
                          <td className="px-4 py-3 text-gray-600">7%</td>
                          <td className="px-4 py-3 font-bold">2.8个</td>
                        </tr>
                        <tr className="bg-blue-50 hover:bg-blue-100">
                          <td className="px-4 py-3 font-bold text-blue-700">五行无关</td>
                          <td className="px-4 py-3">300次</td>
                          <td className="px-4 py-3 text-blue-600 font-bold">76%</td>
                          <td className="px-4 py-3 text-gray-600">14%</td>
                          <td className="px-4 py-3 font-bold">2.4个</td>
                        </tr>
                        <tr className="bg-red-50 hover:bg-red-100">
                          <td className="px-4 py-3 font-bold text-red-700">五行相克</td>
                          <td className="px-4 py-3">200次</td>
                          <td className="px-4 py-3 text-red-600 font-bold">65%</td>
                          <td className="px-4 py-3 text-red-600 font-bold">25%</td>
                          <td className="px-4 py-3 font-bold">1.9个</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 bg-amber-100 rounded-lg border-2 border-amber-400">
                    <p className="text-sm text-amber-900">
                      <strong>📊 数据结论：</strong>五行相生确实能显著提高出极品的概率，相克时出海龟的概率高达25%！
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 第三部分：实战应用 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>💡</span>
                三、炼妖时如何选择五行？
              </h2>

              <div className="space-y-6">
                {/* 推荐搭配 */}
                <div className="bg-gradient-to-r from-green-100 via-emerald-100 to-teal-100 rounded-xl p-6 border-4 border-green-500">
                  <h3 className="text-2xl font-black text-green-900 mb-4">✨ 推荐搭配（强烈建议！）</h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border-2 border-green-400">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                        <span>🎯</span>
                        方案1：严格相生
                      </h4>
                      <p className="text-sm text-gray-800 mb-3">
                        <strong className="text-green-600">主宠和副宠五行呈相生关系</strong>
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-green-50 rounded">主宠：木 + 副宠：火 ✅</div>
                        <div className="p-2 bg-green-50 rounded">主宠：火 + 副宠：土 ✅</div>
                        <div className="p-2 bg-green-50 rounded">主宠：土 + 副宠：金 ✅</div>
                        <div className="p-2 bg-green-50 rounded">主宠：金 + 副宠：水 ✅</div>
                        <div className="p-2 bg-green-50 rounded">主宠：水 + 副宠：木 ✅</div>
                      </div>
                      <p className="text-xs text-green-700 mt-3 bg-green-100 p-2 rounded">
                        💚 <strong>优点：</strong>出极品概率最高，强烈推荐！
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-2 border-blue-400">
                      <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                        <span>⚖️</span>
                        方案2：五行相同
                      </h4>
                      <p className="text-sm text-gray-800 mb-3">
                        <strong className="text-blue-600">主宠和副宠五行相同</strong>
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-blue-50 rounded">主宠：金 + 副宠：金 ⚖️</div>
                        <div className="p-2 bg-blue-50 rounded">主宠：木 + 副宠：木 ⚖️</div>
                        <div className="p-2 bg-blue-50 rounded">主宠：水 + 副宠：水 ⚖️</div>
                        <div className="p-2 bg-blue-50 rounded">主宠：火 + 副宠：火 ⚖️</div>
                        <div className="p-2 bg-blue-50 rounded">主宠：土 + 副宠：土 ⚖️</div>
                      </div>
                      <p className="text-xs text-blue-700 mt-3 bg-blue-100 p-2 rounded">
                        💙 <strong>优点：</strong>效果中等偏上，也是不错的选择
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-green-50 rounded-lg border-2 border-green-500">
                    <p className="text-green-900 font-bold">
                      🏆 <strong>最佳实践：</strong>炼妖前，用<strong className="text-purple-600">五行石</strong>将主副宠调整为相生关系，成本不高（通常5-10万游戏币），但能显著提升成功率！
                    </p>
                  </div>
                </div>

                {/* 避免搭配 */}
                <div className="bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 rounded-xl p-6 border-4 border-red-500">
                  <h3 className="text-2xl font-black text-red-900 mb-4">⚠️ 避免搭配（千万别这样！）</h3>

                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-2 border-red-400">
                      <h4 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                        <span>❌</span>
                        相克搭配（最差！）
                      </h4>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div className="p-2 bg-red-50 rounded text-red-700">主宠：木 + 副宠：土 ❌</div>
                        <div className="p-2 bg-red-50 rounded text-red-700">主宠：土 + 副宠：水 ❌</div>
                        <div className="p-2 bg-red-50 rounded text-red-700">主宠：水 + 副宠：火 ❌</div>
                        <div className="p-2 bg-red-50 rounded text-red-700">主宠：火 + 副宠：金 ❌</div>
                        <div className="p-2 bg-red-50 rounded text-red-700">主宠：金 + 副宠：木 ❌</div>
                      </div>
                      <p className="text-xs text-red-700 mt-3 bg-red-100 p-2 rounded font-bold">
                        💔 <strong>后果：</strong>25%概率出海龟，资质低，技能少，血亏！
                      </p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg border-2 border-red-400">
                      <p className="text-red-900 font-bold text-lg">
                        🚫 <strong>重要提醒：</strong>除非你是实验党或者不在乎成本，否则<strong className="underline">绝对不要</strong>使用五行相克的搭配炼妖！
                      </p>
                    </div>
                  </div>
                </div>

                {/* 特殊情况 */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-100 rounded-xl p-6 border-2 border-purple-400">
                  <h3 className="text-xl font-bold text-purple-900 mb-4">🤔 特殊情况处理</h3>

                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Q: 如果我想炼特定种类的宠物，五行重要吗？</h4>
                      <p className="text-sm text-gray-800">
                        A: <strong className="text-green-600">仍然很重要！</strong>使用炼妖石可以指定主宠或副宠种类，但五行相生能提高资质和技能数。
                        建议：<span className="text-purple-600">炼妖石 + 五行相生</span>组合使用，双重保险。
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Q: 如果胚子五行已经固定，改五行划算吗？</h4>
                      <p className="text-sm text-gray-800">
                        A: <strong className="text-green-600">非常划算！</strong>五行石通常只需要5-10万游戏币，但能让你的炼妖成功率从65%提升到83%，
                        相当于节省了好几次炼妖的成本。<span className="text-red-600 font-bold">不改五行就是舍本逐末</span>！
                      </p>
                    </div>

                    <div className="bg-white rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Q: 我就是想赌一把，五行相克能出极品吗？</h4>
                      <p className="text-sm text-gray-800">
                        A: <strong className="text-amber-600">概率上可能，但不建议！</strong>虽然理论上五行相克也有小概率出极品（约5-10%），
                        但这是典型的"以小博大"。如果你预算充足且喜欢刺激，可以尝试，但<span className="text-red-600 font-bold">大概率会血亏</span>。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 第四部分：玄学与真相 */}
            <section>
              <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-2">
                <span>🔮</span>
                四、五行玄学与真相揭秘
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-xl p-6 border-2 border-indigo-400">
                  <h3 className="text-xl font-bold text-indigo-900 mb-4">🎭 玩家流传的五行玄学</h3>

                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🌙</span>
                        <div>
                          <h4 className="font-bold text-purple-900 mb-1">时辰玄学</h4>
                          <p className="text-sm text-gray-800">
                            有玩家认为，在<strong className="text-purple-600">子时（23:00-1:00）</strong>炼妖，如果五行相生，出极品的概率更高。
                            理由是"子时是阴阳交替，五行之气最旺"。
                          </p>
                          <p className="text-xs text-red-600 mt-2">❌ 真相：纯属巧合，官方未证实时辰影响。</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🏠</span>
                        <div>
                          <h4 className="font-bold text-blue-900 mb-1">位置玄学</h4>
                          <p className="text-sm text-gray-800">
                            部分玩家坚信，在<strong className="text-blue-600">长安马婆婆</strong>处炼妖，五行相生时成功率更高；
                            而在<strong className="text-blue-600">建邺马婆婆</strong>处，五行相克也能出极品。
                          </p>
                          <p className="text-xs text-red-600 mt-2">❌ 真相：所有NPC概率相同，位置无影响。</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🔄</span>
                        <div>
                          <h4 className="font-bold text-green-900 mb-1">连炼玄学</h4>
                          <p className="text-sm text-gray-800">
                            有玩家称，如果连续3次炼妖都是五行相生且出了极品，第4次换成五行相克反而能"保底"出主副宠种类。
                          </p>
                          <p className="text-xs text-red-600 mt-2">❌ 真相：每次炼妖独立随机，前后无关联。</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-amber-500">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">🎲</span>
                        <div>
                          <h4 className="font-bold text-amber-900 mb-1">顺序玄学</h4>
                          <p className="text-sm text-gray-800">
                            有人认为，<strong className="text-amber-600">"高五行"的宠物放在主宠位</strong>（例如火属于"高五行"，水属于"低五行"），
                            五行相生时出极品概率更高。
                          </p>
                          <p className="text-xs text-red-600 mt-2">❌ 真相：五行无高低之分，主副宠位置对五行效果无影响。</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-indigo-100 rounded-lg border-2 border-indigo-400">
                    <p className="text-indigo-900 font-semibold">
                      🧠 <strong>理性分析：</strong>以上玄学虽然有趣，但都是<strong className="text-red-600">心理暗示</strong>和<strong className="text-red-600">幸存者偏差</strong>。
                      真正有效的是<strong className="text-green-600">五行相生相克的搭配</strong>，其他因素对炼妖结果影响甚微。
                    </p>
                  </div>
                </div>

                {/* 真相揭秘 */}
                <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-xl p-6 border-4 border-green-500">
                  <h3 className="text-2xl font-black text-green-900 mb-4">✅ 五行真相总结</h3>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-green-500">
                      <span className="text-2xl">✓</span>
                      <div>
                        <h4 className="font-bold text-green-800">确认有效：五行相生相克</h4>
                        <p className="text-sm text-gray-700">
                          五行相生能显著提高出主副宠种类、高资质、多技能的概率；五行相克会增加出海龟和垃圾宠的概率。
                          这一点已被大量玩家实测验证。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-blue-500">
                      <span className="text-2xl">?</span>
                      <div>
                        <h4 className="font-bold text-blue-800">存疑：主副宠位置</h4>
                        <p className="text-sm text-gray-700">
                          部分玩家认为，把"想要出现的种类"放在主宠位，五行相生时出该种类的概率更高（40% → 50%）。
                          但官方未证实，数据样本也不够大，仅供参考。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg border-l-4 border-red-500">
                      <span className="text-2xl">✗</span>
                      <div>
                        <h4 className="font-bold text-red-800">确认无效：时辰、位置、连炼</h4>
                        <p className="text-sm text-gray-700">
                          时辰、炼妖位置、连续炼妖次数对五行效果无影响。这些都是玩家的心理暗示，数学上每次炼妖都是独立事件。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 总结 */}
            <section className="bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-2xl p-8 border-4 border-orange-400 shadow-2xl">
              <h2 className="text-3xl font-black text-center text-red-900 mb-6">
                🎯 五行选择终极指南
              </h2>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-5 border-l-4 border-green-500">
                  <h3 className="font-bold text-green-800 text-lg mb-2">🏆 黄金法则</h3>
                  <p className="text-gray-800 font-semibold">
                    炼妖前，<strong className="text-green-600">必须</strong>将主副宠调整为五行相生关系！
                    成本低（5-10万），收益高（成功率+18%），不调整就是浪费钱！
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-800 text-lg mb-2">💎 推荐搭配</h3>
                  <p className="text-gray-800">
                    木→火、火→土、土→金、金→水、水→木，任选一组。
                    如果不想改，就用同五行（例如：金+金）。
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-red-500">
                  <h3 className="font-bold text-red-800 text-lg mb-2">🚫 绝对禁止</h3>
                  <p className="text-gray-800">
                    <strong className="text-red-600">千万不要</strong>使用五行相克搭配（木克土、土克水、水克火、火克金、金克木），
                    除非你想炼海龟！
                  </p>
                </div>

                <div className="bg-white rounded-lg p-5 border-l-4 border-purple-500">
                  <h3 className="font-bold text-purple-800 text-lg mb-2">🧮 配合工具</h3>
                  <p className="text-gray-800">
                    五行调好后，使用<Link href="/calculator" className="text-blue-600 underline hover:text-blue-800 font-bold">炼妖计算器</Link>精确计算概率和成本，
                    做到心中有数，理性炼妖！
                  </p>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white text-lg font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all hover:scale-105"
                >
                  <span>🧮</span>
                  使用炼妖计算器
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
