# 安装及使用
## 安装
Leo 项目基于 node，请确保已具备较新的 node 环境（>=12.0.0），推荐使用 node 版本管理工具 nvm 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。
## CLI 工具安装
首先，你需要使用 npm 或者 yarn 全局安装 @leo/cli，或者直接使用 npx:
```shell
# 使用 npm 安装 CLI
$ npm install -g @leo/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @leo/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @leo/cli
```
> 值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。
> 
> ```shell
>$ npm install -g mirror-config-china
>```
## 项目初始化
使用命令创建模板项目：
```shell
$ leo init myApp
```
npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目：
```shell
$ npx @leo/cli init myApp
```
在创建完项目之后，Leo 会默认开始安装项目所需要的依赖，安装使用的工具按照 yarn > cnpm > npm 顺序进行检测。一般来说，依赖安装会比较顺利，但某些情况下可能会安装失败，这时候你可以在项目目录下自己使用安装命令进行安装：
```shell
# 进入项目根目录
$ cd myApp

# 使用 yarn 安装依赖
$ yarn

# OR 使用 npm 安装依赖
$ npm install

# OR 使用 pnpm 安装依赖
$ pnpm install

# OR 使用 cnpm 安装依赖
$ cnpm install
```
## 编译运行
使用 Leo 的 `build` 命令可以把 Leo 代码编译成不同端的代码，然后在对应的开发工具中查看效果。
