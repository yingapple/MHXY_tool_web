# Vercel 自动部署故障排查指南

## 问题描述
推送到 GitHub 后，Vercel 没有自动触发部署。

---

## 🔍 排查清单

### 1. 检查 Vercel Git 集成

访问: **Vercel Dashboard → 项目 → Settings → Git**

#### 需要确认的配置：

✅ **Connected Git Repository**
- 应该显示: `yingapple/MHXY_tool_web`
- 如果显示 "Not connected"，需要重新连接

✅ **Production Branch**
- 应该设置为: `main`
- 确保与你推送的分支一致

✅ **Automatic Deployments**
- 应该是: **Enabled (默认开启)**
- 如果显示 "Paused" 或 "Disabled"，需要启用

---

### 2. 检查 GitHub Webhook

#### 方法1: 在 GitHub 仓库检查

1. 访问: https://github.com/yingapple/MHXY_tool_web/settings/hooks
2. 应该看到一个 Vercel 的 Webhook
3. Webhook URL 格式: `https://api.vercel.com/v1/integrations/deploy/...`

#### Webhook 状态检查：
- ✅ 绿色勾号 = 正常工作
- ⚠️ 黄色感叹号 = 有警告
- ❌ 红色叉号 = 失败

#### 如果没有 Webhook 或状态异常：
1. 点击该 Webhook
2. 查看 "Recent Deliveries"
3. 检查最近的推送事件是否成功发送

---

### 3. 手动触发部署

如果自动部署失败，可以手动触发：

#### 方法1: Vercel Dashboard
1. 访问: https://vercel.com/dashboard
2. 选择项目 `mhxy_tool_web`
3. 点击 "Deployments" 标签
4. 点击右上角 **"Redeploy"** 或 **"Deploy"**
5. 选择 `main` 分支
6. 点击 "Deploy"

#### 方法2: 使用 Vercel CLI
```bash
# 安装 Vercel CLI (如果还没有)
npm i -g vercel

# 登录
vercel login

# 手动部署
vercel --prod
```

---

### 4. 检查构建日志

1. 访问 Vercel Dashboard → Deployments
2. 查看最新的部署记录
3. 如果有失败的部署，点击查看详细日志

**常见错误**:
- ❌ Build 失败: 检查 `npm run build` 是否成功
- ❌ 安装依赖失败: 检查 `package.json` 是否正确
- ❌ 环境变量缺失: 在 Settings → Environment Variables 添加

---

### 5. 重新连接 GitHub 仓库（终极方案）

如果以上都不行，尝试重新连接：

1. **断开连接**:
   - Vercel Dashboard → Settings → Git
   - 点击 "Disconnect"

2. **重新连接**:
   - 点击 "Connect Git Repository"
   - 选择 GitHub
   - 授权 Vercel 访问
   - 选择仓库 `yingapple/MHXY_tool_web`
   - 配置:
     - Framework Preset: **Next.js**
     - Root Directory: `./` (默认)
     - Build Command: `npm run build` (默认)
     - Output Directory: `.next` (默认)
   - 点击 "Deploy"

---

## 🚀 快速修复方案

### 方案A: 手动触发一次部署

1. Vercel Dashboard → 项目 → Deployments
2. 点击 "Redeploy" 按钮
3. 选择 `main` 分支最新的 commit
4. 点击 "Deploy"

这会立即部署，不影响后续的自动部署。

### 方案B: 推送一个空提交触发

```bash
git commit --allow-empty -m "Trigger Vercel deployment"
git push
```

这会创建一个空提交来触发 Webhook。

### 方案C: 检查 Vercel 项目是否暂停

有时项目会因为长时间未活动而暂停：

1. Vercel Dashboard → Settings → General
2. 检查 "Project Status"
3. 如果是 "Paused"，点击 "Resume"

---

## 📋 验证部署成功

### 1. 检查部署状态
```bash
# 访问部署的网站
curl -I https://www.mhxy-helper.com

# 检查验证码是否存在
curl -s https://www.mhxy-helper.com | grep "google-site-verification"
curl -s https://www.mhxy-helper.com | grep "baidu-site-verification"
```

### 2. 检查 301 重定向
```bash
curl -I https://mhxy-helper.com
# 应该看到:
# HTTP/2 301
# location: https://www.mhxy-helper.com/
```

### 3. 检查 Sitemap
```bash
curl https://www.mhxy-helper.com/sitemap.xml
# 应该看到 XML 格式的 sitemap
```

---

## 🔧 常见问题 FAQ

### Q1: 为什么推送后没有立即部署？
A:
- Vercel 通常在 **10-30 秒**内检测到推送
- GitHub Webhook 可能有延迟
- 高峰期可能需要排队

### Q2: 如何查看部署是否在进行中？
A:
1. Vercel Dashboard → Deployments
2. 状态标识:
   - 🟡 Building = 正在构建
   - 🟢 Ready = 部署成功
   - 🔴 Error = 构建失败
   - ⚪ Queued = 排队中

### Q3: 部署失败了怎么办？
A:
1. 点击失败的部署查看日志
2. 找到错误信息（通常在最后几行）
3. 本地运行 `npm run build` 复现错误
4. 修复后重新推送

### Q4: 如何强制重新部署？
A:
- 方法1: Dashboard → Deployments → Redeploy
- 方法2: `git commit --allow-empty -m "force deploy" && git push`
- 方法3: `vercel --prod`

### Q5: 部署成功但网站没更新？
A:
- 可能是 CDN 缓存，等待 5-10 分钟
- 或强制刷新浏览器缓存: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)
- 检查是否部署到了 Production 环境

---

## 📞 联系 Vercel 支持

如果以上方法都无效：

1. **查看 Vercel 状态页**:
   - https://www.vercel-status.com
   - 检查是否有系统故障

2. **联系支持**:
   - Vercel Dashboard → Help
   - 或访问: https://vercel.com/support

---

**最后更新**: 2025-01-05
**问题状态**: 待解决
