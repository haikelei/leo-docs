import{_ as s,c as a,o as n,N as l}from"./chunks/framework.fc67cb9d.js";const w=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[],"relativePath":"community/faq.md","lastUpdated":1685603474000}'),o={name:"community/faq.md"},p=l(`<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h1><h2 id="服务器权限设置" tabindex="-1">服务器权限设置 <a class="header-anchor" href="#服务器权限设置" aria-label="Permalink to &quot;服务器权限设置&quot;">​</a></h2><p><strong>1. 如何授予指定用户对目录及子目录的权限，同时不更改目录的所有者和所有组</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 以宝塔面板举例，在终端中执行</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 设置 ACL 权限，授予 www 用户对 /www/wwwroot 目录的相关权限</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 授权后，该目录新增文件夹和文件，无论所有者是谁，该用户自动享有相关权限</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">acl</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setfacl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">g:www:r-x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">u:www:rwx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">setfacl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Rd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">g:www:r-x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">u:www:rwx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/www/wwwroot</span></span>
<span class="line"></span></code></pre></div>`,4),t=[p];function e(c,r,C,y,i,A){return n(),a("div",null,t)}const d=s(o,[["render",e]]);export{w as __pageData,d as default};
