# 百度 SEO 提交指南（无备案号版本）

## 问题说明

由于网站使用海外服务器且无备案号，百度站长平台**不支持 Sitemap 提交**。

但是，你可以使用以下方法让百度收录你的网站：

---

## 📋 方法1: 手动提交 URL（推荐，最简单）

### 步骤1: 访问百度站长平台

1. 登录: https://ziyuan.baidu.com
2. 进入 "普通收录" → "资源提交" → "手动提交"

### 步骤2: 复制 URL 列表

从下面复制所有 URL（已为你生成好）：

```
https://www.mhxy-helper.com/
https://www.mhxy-helper.com/calculator
https://www.mhxy-helper.com/book-typing
https://www.mhxy-helper.com/blessing
https://www.mhxy-helper.com/guides
https://www.mhxy-helper.com/guides/lianyao-gailvjisuan
https://www.mhxy-helper.com/guides/paizi-xuanze
https://www.mhxy-helper.com/guides/wuxing-xuanze
https://www.mhxy-helper.com/guides/dashu-jiqiao
```

### 步骤3: 粘贴并提交

1. 将上面的 URL 列表粘贴到"手动提交"框中
2. 点击 "提交"
3. 完成！

**限制**:
- 每次最多提交 20 条 URL
- 每天最多提交 500 条（免费账号）

---

## 🚀 方法2: API 主动推送（推荐，可自动化）

### 优势
- ✅ 可以自动化
- ✅ 提交速度快
- ✅ 每天配额更高（根据网站质量，最多 10000 条/天）

### 步骤1: 获取推送接口

1. 访问: https://ziyuan.baidu.com/linksubmit/index
2. 选择你的网站
3. 点击 "普通收录" → "API 提交"
4. 复制接口调用地址，格式如下:
   ```
   http://data.zz.baidu.com/urls?site=https://www.mhxy-helper.com&token=YOUR_TOKEN
   ```
5. 记下你的 **token**

### 步骤2: 使用脚本自动提交

#### 方法A: 使用我已经为你准备的脚本

1. 打开文件: [scripts/submit-to-baidu.sh](scripts/submit-to-baidu.sh)
2. 将 `YOUR_TOKEN_HERE` 替换为你的真实 token
3. 运行脚本:
   ```bash
   chmod +x scripts/submit-to-baidu.sh
   ./scripts/submit-to-baidu.sh
   ```

#### 方法B: 手动使用 curl 命令

```bash
curl -H 'Content-Type:text/plain' \
  --data-binary @public/urls.txt \
  "http://data.zz.baidu.com/urls?site=https://www.mhxy-helper.com&token=YOUR_TOKEN"
```

**替换**:
- `YOUR_TOKEN` 为你的真实 token

#### 成功响应示例:
```json
{
  "remain": 4999950,
  "success": 9,
  "not_same_site": [],
  "not_valid": []
}
```

**字段说明**:
- `success`: 成功提交的 URL 数量
- `remain`: 今天剩余的可提交配额

---

## 📝 方法3: 普通收录 - 自动提交

### 安装百度自动推送代码

在你的网站 HTML 中添加以下代码（已自动包含在 layout.tsx 中）:

```html
<script>
(function(){
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  } else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();
</script>
```

**工作原理**:
- 用户访问页面时，自动向百度推送当前 URL
- 无需手动操作
- 适合新增内容的快速收录

---

## 🎯 综合推荐策略

### 第一次提交（立即执行）
1. **手动提交所有 URL**（方法1）
   - 复制上面的 9 条 URL
   - 手动提交到百度站长平台

2. **配置 API 主动推送**（方法2）
   - 获取 token
   - 运行自动推送脚本
   - 验证提交成功

### 日常维护
1. **每次新增页面/文章**:
   - 方法A: 手动提交新 URL
   - 方法B: 运行 API 推送脚本（更新 urls.txt 后）

2. **自动推送代码**:
   - 已包含在网站中，用户访问时自动推送

---

## 📊 URL 列表文件

**文件位置**: [public/urls.txt](public/urls.txt)

**当前包含的 URL**:
- 首页
- 炼妖计算器
- 打书计算器
- 祝福计算器
- 攻略列表页
- 4 篇指南文章

**更新方法**:
每次新增页面后，手动编辑 `public/urls.txt`，添加新的 URL。

---

## ⚠️ 百度收录注意事项

### 1. 收录速度
- **新站**: 可能需要 1-4 周才能开始收录
- **已有流量的站**: 1-7 天

### 2. 加快收录的方法
- ✅ 定期更新高质量内容
- ✅ 增加外链（论坛、贴吧发帖）
- ✅ 每天主动推送新内容
- ✅ 提升网站加载速度

### 3. 检查收录情况
在百度搜索:
```
site:www.mhxy-helper.com
```

如果显示结果，说明已被收录。

### 4. 常见问题

**Q: 提交后多久能被收录？**
A: 通常 1-7 天，新站可能更久。

**Q: 为什么提交了但搜不到？**
A:
- 百度可能抓取了但还未放出（审核期）
- 网站质量较低，被判定为低质量内容
- 使用 `site:` 命令检查是否真的未收录

**Q: 无备案号会影响排名吗？**
A:
- 可能会影响，但不是决定性因素
- 重点还是内容质量和用户体验
- 建议长期运营，积累权重

---

## 🔗 相关资源

- **百度站长平台**: https://ziyuan.baidu.com
- **百度搜索资源平台帮助**: https://ziyuan.baidu.com/college/index
- **URL 列表**: [public/urls.txt](public/urls.txt)
- **自动推送脚本**: [scripts/submit-to-baidu.sh](scripts/submit-to-baidu.sh)

---

## ✅ 快速执行清单

部署网站后，立即执行:

- [ ] 在百度站长平台验证网站所有权（已完成 meta 标签）
- [ ] 手动提交 9 条 URL（复制上面的列表）
- [ ] 获取百度推送 API token
- [ ] 配置自动推送脚本
- [ ] 运行脚本，验证提交成功
- [ ] 每周检查收录情况（`site:www.mhxy-helper.com`）

---

**最后更新**: 2025-01-05
**维护者**: Claude & 用户
