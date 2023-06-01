# 使用 node 16 镜像作为基础镜像
FROM node:16 AS builder

# 设置工作目录
WORKDIR /app

# 复制项目中的所有文件到工作目录
COPY . .

# 设置 npm 镜像为淘宝镜像，加速依赖安装
RUN npm config set registry https://registry.npm.taobao.org

# 安装 pnpm
run npm install -g pnpm

# 创建运行阶段
FROM nginx

# 将构建阶段的构建结果复制到 nginx 中
COPY  /.vitepress/dist/ /usr/share/nginx/html

# 复制 nginx 配置文件
COPY  /nginx.conf /etc/nginx/nginx.conf

# 暴露端口
EXPOSE 80
