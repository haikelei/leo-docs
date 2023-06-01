import{_ as l,c as s,o as n,N as e,x as t}from"./chunks/framework.fc67cb9d.js";const D=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/file/file.md","lastUpdated":1685603474000}'),a={name:"api/file/file.md"},o=e('<h3 id="uni-savefile-object-savefile" tabindex="-1">uni.saveFile(OBJECT) @savefile <a class="header-anchor" href="#uni-savefile-object-savefile" aria-label="Permalink to &quot;uni.saveFile(OBJECT) @savefile&quot;">​</a></h3><p>保存文件到本地。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>注意：saveFile 会把临时文件移动，因此调用成功后传入的 tempFilePath 将不可用</strong></p><blockquote><p><em>微信小程序已停止维护<a href="https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.saveFile.html" target="_blank" rel="noreferrer">wx.saveFile(Object object)</a>接口，建议使用<a href="https://uniapp.dcloud.io/api/file/getFileSystemManager.html" target="_blank" rel="noreferrer">FileSystemManager</a>对象中的方法。</em></p></blockquote><p><strong>OBJECT 参数说明：</strong></p>',7),p=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"参数名"),t("th",{style:{"text-align":"left"}},"类型"),t("th",{style:{"text-align":"left"}},"必填"),t("th",{style:{"text-align":"left"}},"说明")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"tempFilePath"),t("td",{style:{"text-align":"left"}},"String"),t("td",{style:{"text-align":"left"}},"是"),t("td",{style:{"text-align":"left"}},"需要保存的文件的临时路径")]),t("tr",{"savedFilePath:":"",文件的保存路径:""},[t("td",{style:{"text-align":"left"}},"success"),t("td",{style:{"text-align":"left"}},"Function"),t("td",{style:{"text-align":"left"}},"否"),t("td",{style:{"text-align":"left"}},"返回文件的保存路径，res =")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"fail"),t("td",{style:{"text-align":"left"}},"Function"),t("td",{style:{"text-align":"left"}},"否"),t("td",{style:{"text-align":"left"}},"接口调用失败的回调函数")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"complete"),t("td",{style:{"text-align":"left"}},"Function"),t("td",{style:{"text-align":"left"}},"否"),t("td",{style:{"text-align":"left"}},"接口调用结束的回调函数（调用成功、失败都会执行）")])])],-1),r=e(`<p><strong>success 返回参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">savedFilePath</td><td style="text-align:left;">文件的保存路径</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">chooseImage</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempFilePaths</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tempFilePaths</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">saveFile</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      tempFilePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempFilePaths</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">savedFilePath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">savedFilePath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-getsavedfilelist-object-getsavedfilelist" tabindex="-1">uni.getSavedFileList(OBJECT) @getsavedfilelist <a class="header-anchor" href="#uni-getsavedfilelist-object-getsavedfilelist" aria-label="Permalink to &quot;uni.getSavedFileList(OBJECT) @getsavedfilelist&quot;">​</a></h3><p>获取本地已保存的文件列表。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><blockquote><p><em>微信小程序已停止维护<a href="https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileList.html" target="_blank" rel="noreferrer">wx.getSavedFileList(Object object)</a>接口，建议使用<a href="https://uniapp.dcloud.io/api/file/getFileSystemManager.html" target="_blank" rel="noreferrer">FileSystemManager</a>对象中的方法。</em></p></blockquote><p><strong>OBJECT 参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数，返回结果见 success 返回参数说明</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>success 返回参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">errMsg</td><td style="text-align:left;">String</td><td style="text-align:left;">接口调用结果</td></tr><tr><td style="text-align:left;">fileList</td><td style="text-align:left;">Array&lt;Object&gt;</td><td style="text-align:left;">文件列表</td></tr></tbody></table><p><strong>fileList 中的项目说明：</strong></p><table><thead><tr><th style="text-align:left;">键</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">filePath</td><td style="text-align:left;">String</td><td style="text-align:left;">文件的本地路径</td></tr><tr><td style="text-align:left;">createTime</td><td style="text-align:left;">Number</td><td style="text-align:left;">文件的保存时的时间戳，从 <code>1970/01/01 08:00:00</code> 到该时刻的秒数。</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">Number</td><td style="text-align:left;">文件大小，以字节为单位。</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSavedFileList</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fileList</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-getsavedfileinfo-object-getsavedfileinfo" tabindex="-1">uni.getSavedFileInfo(OBJECT) @getsavedfileinfo <a class="header-anchor" href="#uni-getsavedfileinfo-object-getsavedfileinfo" aria-label="Permalink to &quot;uni.getSavedFileInfo(OBJECT) @getsavedfileinfo&quot;">​</a></h3><p>获取本地文件的文件信息。此接口只能用于获取已保存到本地的文件。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><blockquote><p><em>微信小程序已停止维护<a href="https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getSavedFileInfo.html" target="_blank" rel="noreferrer">wx.getSavedFileInfo(Object object)</a>接口，建议使用<a href="https://uniapp.dcloud.io/api/file/getFileSystemManager.html" target="_blank" rel="noreferrer">FileSystemManager</a>对象中的方法。</em></p></blockquote><p><strong>OBJECT 参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">filePath</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">文件路径</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数，返回结果见 success 返回参数说明</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>success 返回参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">errMsg</td><td style="text-align:left;">String</td><td style="text-align:left;">接口调用结果</td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">Number</td><td style="text-align:left;">文件大小，以字节为单位。</td></tr><tr><td style="text-align:left;">createTime</td><td style="text-align:left;">Number</td><td style="text-align:left;">文件保存时的时间戳，从 <code>1970/01/01 08:00:00</code> 到该时刻的秒数。</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSavedFileInfo</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">filePath</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unifile://somefile</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">//仅做示例用，非真正的文件路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">createTime</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-removesavedfile-object-removesavedfile" tabindex="-1">uni.removeSavedFile(OBJECT) @removesavedfile <a class="header-anchor" href="#uni-removesavedfile-object-removesavedfile" aria-label="Permalink to &quot;uni.removeSavedFile(OBJECT) @removesavedfile&quot;">​</a></h3><p>删除本地存储的文件。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><blockquote><p><em>微信小程序已停止维护<a href="https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.removeSavedFile.html" target="_blank" rel="noreferrer">wx.removeSavedFile(Object object)</a>接口，建议使用<a href="https://uniapp.dcloud.io/api/file/getFileSystemManager.html" target="_blank" rel="noreferrer">FileSystemManager</a>对象中的方法。</em></p></blockquote><p><strong>OBJECT 参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">filePath</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">需要删除的文件路径</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getSavedFileList</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fileList</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">removeSavedFile</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        filePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">fileList</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">filePath</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#82AAFF;">complete</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-getfileinfo-object-getfileinfo" tabindex="-1">uni.getFileInfo(OBJECT) @getfileinfo <a class="header-anchor" href="#uni-getfileinfo-object-getfileinfo" aria-label="Permalink to &quot;uni.getFileInfo(OBJECT) @getfileinfo&quot;">​</a></h3><p>获取文件信息</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><blockquote><p><em>微信小程序已停止维护<a href="https://developers.weixin.qq.com/miniprogram/dev/api/file/wx.getFileInfo.html" target="_blank" rel="noreferrer">wx.getFileInfo(Object object)</a>接口，建议使用<a href="https://uniapp.dcloud.io/api/file/getFileSystemManager.html" target="_blank" rel="noreferrer">FileSystemManager</a>对象中的方法。</em></p></blockquote><p><strong>OBJECT 参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">默认值</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">filePath</td><td style="text-align:left;">String</td><td style="text-align:left;"></td><td style="text-align:left;">是</td><td style="text-align:left;">本地文件路径</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">digestAlgorithm</td><td style="text-align:left;">String</td><td style="text-align:left;">md5</td><td style="text-align:left;">否</td><td style="text-align:left;">计算文件摘要的算法，可取值 md5、sha1。</td><td style="text-align:left;">微信小程序、京东小程序、App 2.9.0+</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;"></td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td><td style="text-align:left;"> </td></tr></tbody></table><p><strong>success 返回参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">errMsg</td><td style="text-align:left;">String</td><td style="text-align:left;">接口调用结果</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">Number</td><td style="text-align:left;">文件大小，以字节为单位。</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">digest</td><td style="text-align:left;">String</td><td style="text-align:left;">按照传入的 digestAlgorithm 计算得出的的文件摘要</td><td style="text-align:left;">微信小程序、京东小程序、App 2.9.0+</td></tr></tbody></table><h3 id="uni-opendocument-object-opendocument" tabindex="-1">uni.openDocument(OBJECT) @opendocument <a class="header-anchor" href="#uni-opendocument-object-opendocument" aria-label="Permalink to &quot;uni.openDocument(OBJECT) @opendocument&quot;">​</a></h3><p>新开页面打开文档，支持格式：doc, xls, ppt, pdf, docx, xlsx, pptx。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><p><strong>OBJECT 参数说明：</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">filePath</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">文件路径，可通过 downFile 获得</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fileType</td><td style="text-align:left;">String</td><td style="text-align:left;">支付宝小程序必填，其他平台非必填</td><td style="text-align:left;">文件类型，指定文件类型打开文件，有效值 doc, xls, ppt, pdf, docx, xlsx, pptx，支付宝小程序仅支持pdf</td><td style="text-align:left;">微信小程序、支付宝小程序、京东小程序</td></tr><tr><td style="text-align:left;">showMenu</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">右上角是否有可以转发分享的功能</td><td style="text-align:left;">微信小程序</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td><td style="text-align:left;">微信小程序、京东小程序</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td><td style="text-align:left;"> </td></tr></tbody></table><p><strong>示例代码：</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">downloadFile</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://example.com/somefile.pdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">filePath</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tempFilePath</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">openDocument</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      filePath</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">filePath</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      showMenu</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">打开文档成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>平台差异</strong></p><table><thead><tr><th style="text-align:left;">平台</th><th style="text-align:left;">打开方式</th></tr></thead><tbody><tr><td style="text-align:left;">小程序</td><td style="text-align:left;">在小程序的入口应用内打开</td></tr><tr><td style="text-align:left;">App iOS</td><td style="text-align:left;">在当前应用内打开</td></tr><tr><td style="text-align:left;">App Android</td><td style="text-align:left;">调用系统相关应用打开，无相关应用则不能打开</td></tr><tr><td style="text-align:left;">H5</td><td style="text-align:left;">使用浏览器打开，当前浏览器不支持则不能打开</td></tr></tbody></table><p><strong>Tips</strong></p><ul><li>App端，io操作还可以用更强大的plus.io API。<a href="https://www.html5plus.org/doc/zh_cn/io.html" target="_blank" rel="noreferrer">https://www.html5plus.org/doc/zh_cn/io.html</a></li><li>App端，打开各种格式的文件，如office、pdf等，还可以用更强大的三方插件，详见<a href="https://ext.dcloud.net.cn/search?q=pdf" target="_blank" rel="noreferrer">插件市场</a></li><li>选择文件上传，uni-app有自带的api：<a href="https://uniapp.dcloud.io/api/media/image?id=chooseimage" target="_blank" rel="noreferrer">uni.chooseImage</a>和<a href="https://uniapp.dcloud.io/api/media/video?id=choosevideo" target="_blank" rel="noreferrer">uni.chooseVideo</a>。App端如需选择非媒体文件，可在插件市场搜索<a href="https://ext.dcloud.net.cn/search?q=%E6%96%87%E4%BB%B6%E9%80%89%E6%8B%A9" target="_blank" rel="noreferrer">文件选择</a>，其中Android端可以使用Native.js，无需原生插件，而iOS端需要原生插件。</li></ul>`,58),i=[o,p,r];function c(y,d,g,F,f,x){return n(),s("div",null,i)}const A=l(a,[["render",c]]);export{D as __pageData,A as default};