import{_ as s,c as a,o as n,N as l}from"./chunks/framework.fc67cb9d.js";const D=JSON.parse('{"title":"安装及使用","description":"","frontmatter":{},"headers":[],"relativePath":"guide/install.md","lastUpdated":1685603474000}'),p={name:"guide/install.md"},o=l(`<h1 id="安装及使用" tabindex="-1">安装及使用 <a class="header-anchor" href="#安装及使用" aria-label="Permalink to &quot;安装及使用&quot;">​</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>Leo 项目基于 node，请确保已具备较新的 node 环境（&gt;=12.0.0），推荐使用 node 版本管理工具 nvm 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。</p><h2 id="cli-工具安装" tabindex="-1">CLI 工具安装 <a class="header-anchor" href="#cli-工具安装" aria-label="Permalink to &quot;CLI 工具安装&quot;">​</a></h2><p>首先，你需要使用 npm 或者 yarn 全局安装 chao-leo-cli，或者直接使用 npx:</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用 npm 安装 CLI</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chao-leo-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR 使用 yarn 安装 CLI</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chao-leo-cli</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR 安装了 cnpm，使用 cnpm 安装 CLI</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chao-leo-cli</span></span>
<span class="line"></span></code></pre></div><blockquote><p>值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mirror-config-china</span></span>
<span class="line"></span></code></pre></div></blockquote><h2 id="项目初始化" tabindex="-1">项目初始化 <a class="header-anchor" href="#项目初始化" aria-label="Permalink to &quot;项目初始化&quot;">​</a></h2><p>使用命令创建模板项目：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">leo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myApp</span></span>
<span class="line"></span></code></pre></div><p>npm 5.2+ 也可在不全局安装的情况下使用 npx 创建模板项目：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chao-leo-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myApp</span></span>
<span class="line"></span></code></pre></div><p>在创建完项目之后，Leo 会默认开始安装项目所需要的依赖，安装使用的工具按照 yarn &gt; cnpm &gt; npm 顺序进行检测。一般来说，依赖安装会比较顺利，但某些情况下可能会安装失败，这时候你可以在项目目录下自己使用安装命令进行安装：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入项目根目录</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">myApp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 使用 yarn 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR 使用 npm 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR 使用 pnpm 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR 使用 cnpm 安装依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"></span></code></pre></div><h2 id="编译运行" tabindex="-1">编译运行 <a class="header-anchor" href="#编译运行" aria-label="Permalink to &quot;编译运行&quot;">​</a></h2><p>使用 Leo 的 <code>build</code> 命令可以把 Leo 代码编译成不同端的代码，然后在对应的开发工具中查看效果。</p>`,16),e=[o];function t(c,r,i,C,y,A){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{D as __pageData,h as default};