#!/bin/bash

# 百度主动推送脚本
# 使用方法:
# 1. 在百度站长平台获取 token
# 2. 替换下面的 YOUR_TOKEN_HERE
# 3. chmod +x scripts/submit-to-baidu.sh
# 4. ./scripts/submit-to-baidu.sh

# 配置
BAIDU_TOKEN="YOUR_TOKEN_HERE"  # 替换为你的百度 token
SITE="https://www.mhxy-helper.com"
URLS_FILE="public/urls.txt"

# 颜色输出
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo "开始提交 URL 到百度..."
echo "站点: ${SITE}"
echo "URL 文件: ${URLS_FILE}"
echo ""

# 检查 urls.txt 是否存在
if [ ! -f "${URLS_FILE}" ]; then
  echo -e "${RED}错误: ${URLS_FILE} 不存在${NC}"
  exit 1
fi

# 检查 token 是否已配置
if [ "${BAIDU_TOKEN}" = "YOUR_TOKEN_HERE" ]; then
  echo -e "${RED}错误: 请先配置百度 token${NC}"
  echo "在百度站长平台获取: 普通收录 → API 提交"
  exit 1
fi

# 提交到百度
response=$(curl -s -H 'Content-Type:text/plain' \
  --data-binary @"${URLS_FILE}" \
  "http://data.zz.baidu.com/urls?site=${SITE}&token=${BAIDU_TOKEN}")

# 检查响应
if echo "${response}" | grep -q '"success"'; then
  echo -e "${GREEN}✅ 提交成功！${NC}"
  echo "${response}" | python3 -m json.tool 2>/dev/null || echo "${response}"
else
  echo -e "${RED}❌ 提交失败！${NC}"
  echo "${response}"
  exit 1
fi
