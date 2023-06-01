## 自助部署文档

1. 构建docker镜像,启动容器,如下:

```
docker build -t leo-docs .
docker run -d -p 5090:80 leo-docs
```

2. 配置宿主机nginx

```
location /leo-docs/ {
    proxy_pass http://localhost:5090/;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Connection "";
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
```

## 添加文档

```
# 添加
git subtree add -P vitepress-docs/ https://ghproxy.com/https://github.com/mouyong/vitepress-doc-website.git master

# 拉取更新
git subtree pull -P vitepress-docs/ https://ghproxy.com/https://github.com/mouyong/vitepress-doc-website.git master

# 安装依赖
cd vitepress-docs/
yarn install

# 编写文档
yarn docs:dev

# 生成静态文件
yarn docs:build
```

## 子目录部署

`nginx` 配置
```
location /docs/ {
  try_files $uri $uri/ $uri.html;
}
```
