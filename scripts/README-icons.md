# 网站图标使用说明

## 已生成的图标文件

本项目已自动生成以下优化压缩的图标文件：

### 主要图标
- `logo.png` (512x512) - 主图标，用于页面展示
- `logo-small.png` (64x64) - 小尺寸图标，用于导航栏等
- `favicon.ico` (32x32) - 浏览器标签页图标

### 移动端图标
- `apple-touch-icon.png` (180x180) - iOS主屏幕图标

### PWA图标 (多尺寸)
- `icon-16x16.png`
- `icon-32x32.png`
- `icon-48x48.png`
- `icon-64x64.png`
- `icon-128x128.png`
- `icon-192x192.png`
- `icon-256x256.png`
- `icon-384x384.png`
- `icon-512x512.png`

### 社交分享图
- `og-image.png` (1200x630) - Open Graph分享图，用于微信、Twitter等社交平台

## 如何在代码中使用

### 1. 在React组件中使用

```tsx
import Image from 'next/image';

// 使用主图标
<Image src="/logo.png" alt="Logo" width={512} height={512} />

// 使用小图标
<Image src="/logo-small.png" alt="Logo" width={64} height={64} />
```

### 2. 在CSS中使用

```css
.header-logo {
  background-image: url('/logo-small.png');
  width: 64px;
  height: 64px;
}
```

### 3. 图标已自动配置

以下配置已在 `src/app/layout.tsx` 中自动配置：
- Favicon (浏览器标签图标)
- Apple Touch Icon (iOS图标)
- Open Graph图片 (社交分享)
- PWA Manifest (渐进式Web应用)

## 重新生成图标

如果需要更换图标源文件，运行：

```bash
# 1. 将新图片放到指定位置
# 2. 修改 scripts/compress-icon.js 中的 inputPath
# 3. 运行脚本
node scripts/compress-icon.js
```

## 图标优化细节

- 格式: PNG (支持透明背景)
- 压缩: 高质量压缩 (quality: 85-90)
- 裁剪: 中心裁剪，保持宽高比
- 文件大小: 已优化，favicon.ico仅3KB

## 注意事项

1. **不要直接修改 public/ 下的图标文件**，而应修改源文件并重新运行脚本
2. **清除浏览器缓存** - 更新图标后需要强制刷新 (Cmd/Ctrl + Shift + R)
3. **CDN缓存** - 部署到生产环境后，CDN可能会缓存旧图标，需要等待或手动清除
