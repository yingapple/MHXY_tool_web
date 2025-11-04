# 部署指南

本文档详细说明如何将项目部署到GitHub和Vercel，以及如何配置自定义域名。

---

## 第一步：推送代码到GitHub

### 1. 在GitHub上创建新仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 `+` → `New repository`
3. 填写仓库信息：
   - **Repository name**: `mhxy_tool_web` (或你喜欢的名称)
   - **Description**: `梦幻西游炼妖助手 - 专业的炼妖概率计算工具`
   - **Visibility**: 选择 `Public` (公开) 或 `Private` (私有)
   - **不要勾选** "Initialize this repository with a README"
4. 点击 `Create repository`

### 2. 关联远程仓库并推送

复制GitHub显示的仓库URL（例如：`https://github.com/YOUR_USERNAME/mhxy_tool_web.git`）

在项目目录中执行：

```bash
# 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/mhxy_tool_web.git

# 推送代码
git push -u origin main
```

如果遇到认证问题，可能需要：
- 使用 [Personal Access Token](https://github.com/settings/tokens) 代替密码
- 或配置 SSH key

推送成功后，访问 `https://github.com/YOUR_USERNAME/mhxy_tool_web` 可以看到代码。

---

## 第二步：部署到Vercel

### 方法1: 通过GitHub自动部署（推荐）

1. **访问Vercel**
   - 打开 [Vercel](https://vercel.com)
   - 点击 `Sign Up` 或 `Log In`
   - 选择 `Continue with GitHub` 使用GitHub账号登录

2. **导入项目**
   - 登录后，点击 `Add New...` → `Project`
   - 在 "Import Git Repository" 中找到你的 `mhxy_tool_web` 仓库
   - 点击 `Import`

3. **配置项目**
   - **Project Name**: 可以使用默认的或自定义（例如：`mhxy-helper`）
   - **Framework Preset**: 自动检测为 `Next.js`
   - **Root Directory**: `./` (默认)
   - **Build Command**: `npm run build` (默认)
   - **Output Directory**: `.next` (默认)
   - **Environment Variables**: 暂时不需要

4. **部署**
   - 点击 `Deploy`
   - 等待2-3分钟，Vercel会自动构建和部署
   - 部署成功后，会显示一个临时域名（例如：`mhxy-helper.vercel.app`）

5. **访问网站**
   - 点击临时域名即可访问你的网站
   - 每次推送到GitHub的main分支，Vercel都会自动重新部署

### 方法2: 通过Vercel CLI部署

```bash
# 安装Vercel CLI
npm install -g vercel

# 登录Vercel
vercel login

# 部署
vercel

# 部署到生产环境
vercel --prod
```

---

## 第三步：配置自定义域名

### 1. 购买域名

可以从以下域名注册商购买：
- [Namesilo](https://www.namesilo.com) - 价格便宜，支持支付宝
- [GoDaddy](https://www.godaddy.com) - 国际知名
- [阿里云](https://wanwang.aliyun.com) - 国内用户方便
- [腾讯云](https://dnspod.cloud.tencent.com) - 国内用户方便

推荐域名：
- `mhxy-helper.com`
- `mhxy-tool.com`
- `lianyao-helper.com`

### 2. 在Vercel添加自定义域名

1. **进入项目设置**
   - 登录 [Vercel Dashboard](https://vercel.com/dashboard)
   - 选择你的项目 `mhxy_tool_web`
   - 点击 `Settings` → `Domains`

2. **添加域名**
   - 在 "Add Domain" 输入框中输入你的域名（例如：`mhxy-helper.com`）
   - 点击 `Add`

3. **配置DNS记录**
   
   Vercel会提示你配置DNS记录，有两种方式：

   #### 方式A: A记录（推荐）
   
   在你的域名注册商的DNS管理面板中添加：
   
   ```
   Type: A
   Name: @ (或留空，代表根域名)
   Value: 76.76.21.21
   TTL: 3600 (或默认)
   ```
   
   如果需要www子域名：
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

   #### 方式B: CNAME记录
   
   ```
   Type: CNAME
   Name: @ (或留空)
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

4. **等待DNS生效**
   - DNS配置通常需要10分钟到48小时生效
   - Vercel会自动检测DNS状态
   - 生效后，域名旁边会显示绿色的 ✓

5. **自动HTTPS**
   - Vercel会自动为你的域名申请和配置SSL证书
   - 通常在DNS生效后5-10分钟内完成
   - 你的网站会自动启用HTTPS

### 3. 常见域名注册商DNS配置指南

#### Namesilo

1. 登录 [Namesilo](https://www.namesilo.com)
2. 点击 `Domain Manager`
3. 找到你的域名，点击蓝色的地球图标（Manage DNS）
4. 删除所有默认的A记录和CNAME记录
5. 添加新记录：
   ```
   Type: A
   Hostname: (留空)
   IPv4 Address: 76.76.21.21
   TTL: 3600
   ```
6. 点击 `Submit` 保存

#### 阿里云

1. 登录 [阿里云控制台](https://dns.console.aliyun.com)
2. 点击 `域名解析`
3. 找到你的域名，点击 `解析设置`
4. 点击 `添加记录`
5. 填写：
   ```
   记录类型: A
   主机记录: @
   记录值: 76.76.21.21
   TTL: 600
   ```
6. 点击 `确定`

#### GoDaddy

1. 登录 [GoDaddy](https://www.godaddy.com)
2. 点击 `My Products` → `DNS`
3. 找到你的域名，点击 `Manage DNS`
4. 找到 `A` 记录，点击编辑（铅笔图标）
5. 修改：
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 1 Hour
   ```
6. 点击 `Save`

### 4. 验证域名配置

#### 使用在线工具验证DNS
- [DNS Checker](https://dnschecker.org) - 全球DNS传播检查
- [What's My DNS](https://www.whatsmydns.net) - 多地DNS查询

#### 使用命令行验证

```bash
# Mac/Linux
dig mhxy-helper.com

# Windows
nslookup mhxy-helper.com

# 期望输出包含：
# mhxy-helper.com.  IN  A  76.76.21.21
```

---

## 第四步：配置CDN加速（可选，适用于中国用户）

由于Vercel在中国大陆访问速度较慢，建议配置CloudFlare CDN。

### 1. 注册CloudFlare

1. 访问 [CloudFlare](https://www.cloudflare.com)
2. 点击 `Sign Up` 注册账号
3. 登录后，点击 `Add a Site`

### 2. 添加网站

1. 输入你的域名（例如：`mhxy-helper.com`）
2. 点击 `Add site`
3. 选择 `Free` 计划
4. 点击 `Continue`

### 3. 导入DNS记录

1. CloudFlare会自动扫描你现有的DNS记录
2. 确保有以下记录：
   ```
   Type: A
   Name: @
   IPv4 address: 76.76.21.21
   Proxy status: Proxied (橙色云朵图标)
   ```
3. 点击 `Continue`

### 4. 更换域名服务器

1. CloudFlare会提供两个域名服务器（nameservers），例如：
   ```
   carter.ns.cloudflare.com
   elsa.ns.cloudflare.com
   ```

2. 登录你的域名注册商，找到"域名服务器"或"Nameservers"设置
3. 将默认的域名服务器替换为CloudFlare提供的
4. 保存更改

5. 返回CloudFlare，点击 `Done, check nameservers`
6. 等待域名服务器生效（通常1-24小时）

### 5. 优化CloudFlare设置

生效后，在CloudFlare控制台进行以下优化：

#### SSL/TLS设置
- 进入 `SSL/TLS` → `Overview`
- 将加密模式设置为 `Full` 或 `Full (strict)`

#### 速度优化
- 进入 `Speed` → `Optimization`
- 启用 `Auto Minify` (CSS, JavaScript, HTML)
- 启用 `Brotli` 压缩

#### 缓存设置
- 进入 `Caching` → `Configuration`
- 将 `Browser Cache TTL` 设置为 `4 hours` 或 `8 hours`

---

## 第五步：SEO优化配置

### 1. Google Search Console

1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 点击 `Add Property` → 输入你的域名
3. 选择验证方式：
   - **DNS验证**：添加TXT记录到DNS
   - **HTML文件验证**：上传验证文件到网站根目录
4. 验证成功后，提交sitemap：
   - URL: `https://mhxy-helper.com/sitemap.xml`

### 2. 百度站长平台

1. 访问 [百度站长平台](https://ziyuan.baidu.com)
2. 注册并登录
3. 添加网站 → 输入你的域名
4. 验证网站所有权（文件验证或HTML标签验证）
5. 提交sitemap：
   - URL: `https://mhxy-helper.com/sitemap.xml`

### 3. Google Analytics（可选）

1. 访问 [Google Analytics](https://analytics.google.com)
2. 创建账号和属性
3. 获取测量ID（例如：`G-XXXXXXXXXX`）
4. 在项目中配置Google Analytics
5. 重新部署项目

---

## 常见问题 FAQ

### Q1: 域名配置后多久生效？

A: 通常10分钟到2小时，最长48小时。可以使用 `dig` 或 `nslookup` 命令检查DNS是否已更新。

### Q2: Vercel部署失败怎么办？

A: 
1. 检查 Vercel Dashboard 中的部署日志
2. 确保 `package.json` 中的依赖都已正确安装
3. 尝试在本地运行 `npm run build` 检查是否有错误

### Q3: 网站在中国访问很慢怎么办？

A: 配置CloudFlare CDN，启用 "中国网络优化"（需要企业版或备案）。或者使用国内CDN服务商（如阿里云CDN、腾讯云CDN）。

### Q4: 如何更新网站内容？

A: 
```bash
# 修改代码后
git add .
git commit -m "更新内容"
git push origin main

# Vercel会自动检测并重新部署
```

### Q5: 域名可以用中文吗？

A: 可以，但需要使用Punycode编码（例如：`梦幻西游.com` → `xn--9kq967l94xd7a.com`）。不推荐，因为不利于SEO。

### Q6: 如何设置多个域名指向同一个网站？

A: 在Vercel的 `Domains` 设置中，添加多个域名。Vercel会自动处理301重定向到主域名。

---

## 部署检查清单

完成部署后，检查以下项目：

- [ ] 代码已推送到GitHub
- [ ] Vercel部署成功，可以通过临时域名访问
- [ ] 自定义域名已配置，DNS已生效
- [ ] HTTPS已自动配置，证书有效
- [ ] 网站在桌面端和移动端都能正常访问
- [ ] `/sitemap.xml` 可以正常访问
- [ ] `/robots.txt` 可以正常访问
- [ ] Google Search Console已添加网站
- [ ] 百度站长平台已添加网站
- [ ] CloudFlare CDN已配置（可选）
- [ ] 网站性能测试通过（可使用 [PageSpeed Insights](https://pagespeed.web.dev)）

---

## 下一步

1. 监控网站访问数据（Google Analytics、百度统计）
2. 定期更新宠物和技能数据
3. 根据用户反馈优化功能
4. 考虑添加Google AdSense广告变现
5. 扩展更多实用工具（装备鉴定、五开赚钱等）

---

**祝你部署成功！🎉**

如有问题，欢迎提交 [GitHub Issue](https://github.com/YOUR_USERNAME/mhxy_tool_web/issues)
