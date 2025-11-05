const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputPath = '/Users/yingapple/Downloads/1762250280450.jpg';
const publicDir = path.join(__dirname, '../public');

// 确保 public 目录存在
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function compressAndGenerateIcons() {
  try {
    console.log('🎨 开始处理图标...\n');

    // 1. 生成主图标 (压缩版)
    console.log('📦 生成主图标 logo.png (512x512)...');
    await sharp(inputPath)
      .resize(512, 512, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(path.join(publicDir, 'logo.png'));

    // 2. 生成 favicon.ico (32x32)
    console.log('📦 生成 favicon.ico (32x32)...');
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'cover',
        position: 'center'
      })
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));

    // 3. 生成 apple-touch-icon.png (180x180)
    console.log('📦 生成 apple-touch-icon.png (180x180)...');
    await sharp(inputPath)
      .resize(180, 180, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 90 })
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    // 4. 生成不同尺寸的 icon
    const sizes = [16, 32, 48, 64, 128, 192, 256, 384, 512];

    console.log('📦 生成多尺寸图标...');
    for (const size of sizes) {
      await sharp(inputPath)
        .resize(size, size, {
          fit: 'cover',
          position: 'center'
        })
        .png({ quality: 90 })
        .toFile(path.join(publicDir, `icon-${size}x${size}.png`));
      console.log(`  ✅ icon-${size}x${size}.png`);
    }

    // 5. 生成 Open Graph 图片 (1200x630)
    console.log('📦 生成 Open Graph 图片 og-image.png (1200x630)...');
    await sharp(inputPath)
      .resize(1200, 630, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 85 })
      .toFile(path.join(publicDir, 'og-image.png'));

    // 6. 生成小图标用于页面展示
    console.log('📦 生成小图标 logo-small.png (64x64)...');
    await sharp(inputPath)
      .resize(64, 64, {
        fit: 'cover',
        position: 'center'
      })
      .png({ quality: 90 })
      .toFile(path.join(publicDir, 'logo-small.png'));

    console.log('\n✨ 所有图标已生成完成！');
    console.log('\n生成的文件:');
    console.log('  - logo.png (主图标, 512x512)');
    console.log('  - logo-small.png (小图标, 64x64)');
    console.log('  - favicon.ico (浏览器图标, 32x32)');
    console.log('  - apple-touch-icon.png (iOS图标, 180x180)');
    console.log('  - icon-{size}x{size}.png (多尺寸图标)');
    console.log('  - og-image.png (社交媒体分享图, 1200x630)');

  } catch (error) {
    console.error('❌ 处理图片时出错:', error);
    process.exit(1);
  }
}

compressAndGenerateIcons();
