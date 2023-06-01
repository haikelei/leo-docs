import{_ as t,c as e,o as l,N as a}from"./chunks/framework.fc67cb9d.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/media/live-player-context.md","lastUpdated":1685603474000}'),d={name:"api/media/live-player-context.md"},n=a('<h3 id="uni-createliveplayercontext-liveplayerid-this" tabindex="-1">uni.createLivePlayerContext(livePlayerId, this) <a class="header-anchor" href="#uni-createliveplayercontext-liveplayerid-this" aria-label="Permalink to &quot;uni.createLivePlayerContext(livePlayerId, this)&quot;">​</a></h3><p>创建 live-player 上下文 livePlayerContext 对象。注意是直播的播放而不是推流。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">见下</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td></tr></tbody></table><p>App平台的直播播放，不使用此API，而直接使用video的API。</p><p><strong>参数说明</strong></p><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">说明</th><th style="text-align:center;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:center;">livePlayerId</td><td style="text-align:center;"><code>&lt;live-player&gt;</code> 组件 id</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">this</td><td style="text-align:center;">在自定义组件下，当前组件实例的 this，以操作组件内 <code>&lt;live-player&gt;</code> 组件</td><td style="text-align:center;">微信小程序</td></tr></tbody></table><p><strong>livePlayerContext 对象的方法列表：</strong></p><table><thead><tr><th style="text-align:left;">方法</th><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">play</td><td style="text-align:left;">Object</td><td style="text-align:left;">播放</td></tr><tr><td style="text-align:left;">stop</td><td style="text-align:left;">Object</td><td style="text-align:left;">停止</td></tr><tr><td style="text-align:left;">mute</td><td style="text-align:left;">Object</td><td style="text-align:left;">静音</td></tr><tr><td style="text-align:left;">pause</td><td style="text-align:left;">Object</td><td style="text-align:left;">暂停</td></tr><tr><td style="text-align:left;">resume</td><td style="text-align:left;">Object</td><td style="text-align:left;">恢复</td></tr><tr><td style="text-align:left;">requestFullScreen</td><td style="text-align:left;">Object</td><td style="text-align:left;">进入全屏</td></tr><tr><td style="text-align:left;">exitFullScreen</td><td style="text-align:left;">Object</td><td style="text-align:left;">退出全屏</td></tr></tbody></table><p><strong>requestFullScreen 的 Object 参数列表：</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">direction</td><td style="text-align:left;">Number</td><td style="text-align:left;">是</td><td style="text-align:left;">设置全屏时的方向，有效值为 0（正常竖向）, 90（屏幕逆时针90度）, -90（屏幕顺时针90度）。</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数。</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数。</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）。</td></tr></tbody></table><p><strong>其他方法的 Object 参数列表：</strong></p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h3 id="uni-createlivepushercontext-livepusherid-this" tabindex="-1">uni.createLivePusherContext(livePusherId, this) <a class="header-anchor" href="#uni-createlivepushercontext-livepusherid-this" aria-label="Permalink to &quot;uni.createLivePusherContext(livePusherId, this)&quot;">​</a></h3><p>创建 live-pusher 上下文 livePusherContext 对象。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th></tr></thead><tbody><tr><td style="text-align:center;">见下</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><ul><li>app-nvue 平台 2.2.5+ 支持 uni.createLivePusherContext(livePusherId, this)</li><li>app-nvue 平台 2.2.5以下，需要同时设置组件属性id和ref <code>&lt;live-pusher id=&quot;livepusher1&quot; ref=&quot;livepusher1&quot;&gt;&lt;/live-pusher&gt;</code>，或者直接使用 ref，例如 <code>this.$refs.livepusher1</code></li><li>app-vue 平台，需要编写条件编译代码，使用 <code>plus.video.LivePusher</code>，<a href="https://ask.dcloud.net.cn/article/13416" target="_blank" rel="noreferrer">业务指南</a>、<a href="http://www.html5plus.org/doc/zh_cn/video.html#plus.video.LivePusher" target="_blank" rel="noreferrer">规范文档</a></li></ul><h4 id="livepushercontext" tabindex="-1">livePusherContext <a class="header-anchor" href="#livepushercontext" aria-label="Permalink to &quot;livePusherContext&quot;">​</a></h4><h4 id="start-object" tabindex="-1">start(OBJECT) <a class="header-anchor" href="#start-object" aria-label="Permalink to &quot;start(OBJECT)&quot;">​</a></h4><blockquote><p>开始推流</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="pause-object" tabindex="-1">pause(OBJECT) <a class="header-anchor" href="#pause-object" aria-label="Permalink to &quot;pause(OBJECT)&quot;">​</a></h4><blockquote><p>暂停推流</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="resume-object" tabindex="-1">resume(OBJECT) <a class="header-anchor" href="#resume-object" aria-label="Permalink to &quot;resume(OBJECT)&quot;">​</a></h4><blockquote><p>恢复推流</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="stop-object" tabindex="-1">stop(OBJECT) <a class="header-anchor" href="#stop-object" aria-label="Permalink to &quot;stop(OBJECT)&quot;">​</a></h4><blockquote><p>停止推流</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="switchcamera-object" tabindex="-1">switchCamera(OBJECT) <a class="header-anchor" href="#switchcamera-object" aria-label="Permalink to &quot;switchCamera(OBJECT)&quot;">​</a></h4><blockquote><p>切换前后摄像头</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="snapshot-object" tabindex="-1">snapshot(OBJECT) <a class="header-anchor" href="#snapshot-object" aria-label="Permalink to &quot;snapshot(OBJECT)&quot;">​</a></h4><blockquote><p>快照</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="startpreview-object" tabindex="-1">startPreview(OBJECT) <a class="header-anchor" href="#startpreview-object" aria-label="Permalink to &quot;startPreview(OBJECT)&quot;">​</a></h4><blockquote><p>开启摄像头预览</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table><h4 id="stoppreview-object" tabindex="-1">stopPreview(OBJECT) <a class="header-anchor" href="#stoppreview-object" aria-label="Permalink to &quot;stopPreview(OBJECT)&quot;">​</a></h4><blockquote><p>关闭摄像头预览</p></blockquote><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td></tr></tbody></table>',43),i=[n];function s(r,y,x,h,g,o){return l(),e("div",null,i)}const u=t(d,[["render",s]]);export{f as __pageData,u as default};
