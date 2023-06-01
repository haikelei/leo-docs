import{_ as l,c as s,o as n,N as e,x as t}from"./chunks/framework.fc67cb9d.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/system/contact.md","lastUpdated":1685603474000}'),a={name:"api/system/contact.md"},d=e('<h3 id="uni-addphonecontact-object" tabindex="-1">uni.addPhoneContact(OBJECT) <a class="header-anchor" href="#uni-addphonecontact-object" aria-label="Permalink to &quot;uni.addPhoneContact(OBJECT)&quot;">​</a></h3><p>调用后，用户可以选择将该表单以“新增联系人”或“添加到已有联系人”的方式（APP端目前没有选择步骤，将直接写入），写入手机系统通讯录，完成手机通讯录联系人和联系方式的增加。</p><p>App平台提供了更多通讯录相关API，包括读取联系人，详见：<a href="https://www.html5plus.org/doc/zh_cn/contacts.html" target="_blank" rel="noreferrer">https://www.html5plus.org/doc/zh_cn/contacts.html</a></p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>OBJECT 参数说明</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">photoFilePath</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">头像本地文件路径</td></tr><tr><td style="text-align:left;">nickName</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">昵称</td></tr><tr><td style="text-align:left;">lastName</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">姓氏</td></tr><tr><td style="text-align:left;">middleName</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">中间名</td></tr><tr><td style="text-align:left;">firstName</td><td style="text-align:left;">String</td><td style="text-align:left;">是</td><td style="text-align:left;">名字</td></tr><tr><td style="text-align:left;">remark</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">备注</td></tr><tr><td style="text-align:left;">mobilePhoneNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">手机号</td></tr><tr><td style="text-align:left;">weChatNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">微信号</td></tr><tr><td style="text-align:left;">addressCountry</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">联系地址国家</td></tr><tr><td style="text-align:left;">addressState</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">联系地址省份</td></tr><tr><td style="text-align:left;">addressCity</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">联系地址城市</td></tr><tr><td style="text-align:left;">addressStreet</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">联系地址街道</td></tr><tr><td style="text-align:left;">addressPostalCode</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">联系地址邮政编码</td></tr><tr><td style="text-align:left;">organization</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">公司</td></tr><tr><td style="text-align:left;">title</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">职位</td></tr><tr><td style="text-align:left;">workFaxNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">工作传真</td></tr><tr><td style="text-align:left;">workPhoneNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">工作电话</td></tr><tr><td style="text-align:left;">hostNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">公司电话</td></tr><tr><td style="text-align:left;">email</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">电子邮件</td></tr><tr><td style="text-align:left;">url</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">网站</td></tr><tr><td style="text-align:left;">workAddressCountry</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">工作地址国家</td></tr><tr><td style="text-align:left;">workAddressState</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">工作地址省份</td></tr><tr><td style="text-align:left;">workAddressCity</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">工作地址城市</td></tr><tr><td style="text-align:left;">workAddressStreet</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">工作地址街道</td></tr><tr><td style="text-align:left;">workAddressPostalCode</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">工作地址邮政编码</td></tr><tr><td style="text-align:left;">homeFaxNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">住宅传真</td></tr><tr><td style="text-align:left;">homePhoneNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">住宅电话</td></tr><tr><td style="text-align:left;">homeAddressCountry</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">住宅地址国家</td></tr><tr><td style="text-align:left;">homeAddressState</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">住宅地址省份</td></tr><tr><td style="text-align:left;">homeAddressCity</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">住宅地址城市</td></tr><tr><td style="text-align:left;">homeAddressStreet</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">住宅地址街道</td></tr><tr><td style="text-align:left;">homeAddressPostalCode</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">住宅地址邮政编码</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><p><strong>回调结果</strong></p>',8),r=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"回调类型"),t("th",{style:{"text-align":"left"}},"errMsg"),t("th",{style:{"text-align":"left"}},"说明")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"success"),t("td",{style:{"text-align":"left"}},"ok"),t("td",{style:{"text-align":"left"}},"添加成功")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"cancel"),t("td",{style:{"text-align":"left"}},"fail cancel"),t("td",{style:{"text-align":"left"}},"用户取消操作")]),t("tr",null,[t("td",{style:{"text-align":"left"}},"fail"),t("td",{style:{"text-align":"left"},detail:""},"fail $"),t("td",{style:{"text-align":"left"}},"调用失败，detail 加上详细信息。")])])],-1),o=e(`<p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addPhoneContact</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">nickName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">昵称</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">lastName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">姓</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">firstName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">名</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">remark</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">备注</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">mobilePhoneNumber</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">114</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#F07178;">weChatNumber</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wx123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">success</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">		</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fail</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p><strong>注意</strong></p><ul><li>手机OS对通讯录访问有严格的权限限制和要求。在小程序中使用时，需注意微信等小程序载体本身已经获得了手机端的授权许可。App端获取通讯录相关权限，参考<a href="https://ext.dcloud.net.cn/plugin?id=594" target="_blank" rel="noreferrer">https://ext.dcloud.net.cn/plugin?id=594</a></li><li>打包App时，云打包则需要在manifest中配置权限和模块，离线打包需自行在原生工程中配置。</li></ul>`,4),i=[d,r,o];function y(p,g,c,x,f,D){return n(),s("div",null,i)}const C=l(a,[["render",y]]);export{A as __pageData,C as default};
