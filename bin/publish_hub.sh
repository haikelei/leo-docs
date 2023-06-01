#!/bin/bash

PROJECT_NAME="leo-docs"
# 从 package.json 中读取版本号
VERSION=$(node -p "require('./package.json').version")
echo "版本号: $VERSION"

# 构建应用
#npm run docs:build &&

# 构建 Docker 镜像
docker build -t ${PROJECT_NAME} . &&
echo "Docker镜像本地构建完成,开始上传"

# 打标签并上传到 Docker Hub
TAG_NAME="haikelei/${PROJECT_NAME}:${VERSION}-$(date '+%Y%m%d-%H%M%S')"
docker tag ${PROJECT_NAME} $TAG_NAME
docker push $TAG_NAME &&

# 同时打 latest 标签
docker tag ${PROJECT_NAME} haikelei/${PROJECT_NAME}:latest
docker push haikelei/${PROJECT_NAME}:latest &&

echo "Docker 镜像已上传，标签为 $TAG_NAME 和 latest"

echo "开始调用webhook"
curl -X POST http://47.98.130.100:8080/generic-webhook-trigger/invoke?token=leodocs
echo "webhook调用结束"
