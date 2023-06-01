import{_ as t,c as e,o as l,N as n}from"./chunks/framework.fc67cb9d.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/location/location-change.md","lastUpdated":1685603474000}'),a={name:"api/location/location-change.md"},s=n(`<h3 id="uni-onlocationchange-function-callback" tabindex="-1">uni.onLocationChange(FUNCTION CALLBACK) <a class="header-anchor" href="#uni-onlocationchange-function-callback" aria-label="Permalink to &quot;uni.onLocationChange(FUNCTION CALLBACK)&quot;">​</a></h3><p>监听实时地理位置变化事件，需结合 <code>uni.startLocationUpdate</code> 或 <code>uni.startLocationUpdateBackground</code> 使用。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>FUNCTION CALLBACK 参数</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">latitude</td><td style="text-align:left;">Number</td><td style="text-align:left;">纬度，范围为 -90~90，负数表示南纬。</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">longitude</td><td style="text-align:left;">Number</td><td style="text-align:left;">经度，范围为 -180~180，负数表示西经。</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">speed</td><td style="text-align:left;">Number</td><td style="text-align:left;">速度 (m/s)</td><td style="text-align:left;">H5不支持</td></tr><tr><td style="text-align:left;">accuracy</td><td style="text-align:left;">number</td><td style="text-align:left;">位置的精确度</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">altitude</td><td style="text-align:left;">number</td><td style="text-align:left;">高度 (m)</td><td style="text-align:left;">H5不支持</td></tr><tr><td style="text-align:left;">verticalAccuracy</td><td style="text-align:left;">number</td><td style="text-align:left;">垂直精度 (m)</td><td style="text-align:left;">字节小程序、快手小程序 Android 无法获取，返回 0</td></tr><tr><td style="text-align:left;">horizontalAccuracy</td><td style="text-align:left;">number</td><td style="text-align:left;">水平精度 (m)</td><td style="text-align:left;">字节小程序不支持</td></tr><tr><td style="text-align:left;">city</td><td style="text-align:left;">string</td><td style="text-align:left;">定位到的城市信息</td><td style="text-align:left;">百度小程序、字节小程序（iOS 不支持）</td></tr><tr><td style="text-align:left;">cityCode</td><td style="text-align:left;">String</td><td style="text-align:left;">城市编码</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">city</td><td style="text-align:left;">String</td><td style="text-align:left;">城市名称</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">country</td><td style="text-align:left;">String</td><td style="text-align:left;">国家</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">countryCode</td><td style="text-align:left;">String</td><td style="text-align:left;">国家代码</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">province</td><td style="text-align:left;">String</td><td style="text-align:left;">省份</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">streetNumber</td><td style="text-align:left;">String</td><td style="text-align:left;">街道号码</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">district</td><td style="text-align:left;">String</td><td style="text-align:left;">区</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">isFullAccuracy</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">是不是精确定位信息</td><td style="text-align:left;">百度小程序</td></tr><tr><td style="text-align:left;">altitudeAccuracy</td><td style="text-align:left;">Number</td><td style="text-align:left;">海拔的精确度信息</td><td style="text-align:left;">App</td></tr></tbody></table><p><strong>注意</strong></p><ul><li>该方法会持续监听地理位置信息的变化，建议在不需要监听地理位置信息变化后，直接调用 <code>uni.stopLocationUpdate</code> 方法取消监听。</li><li><code>微信小程序</code>若使用该接口，需要在 app.json 中进行声明，否则将无法正常使用该接口，<a href="https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.onLocationChange.html" target="_blank" rel="noreferrer">详情</a></li><li><code>字节小程序</code>调用此 API 需要申请高精度权限，具体信息见<a href="https://developer.open-douyin.com/docs/resource/zh-CN/mini-app/operation/platform-capabilities/high-progress-targeting/gaojingdu/" target="_blank" rel="noreferrer">高精度定位运营规范</a>。</li></ul><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onLocationChange</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">纬度：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">latitude</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">	</span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">经度：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">longitude</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-offlocationchange-function-callback" tabindex="-1">uni.offLocationChange(FUNCTION CALLBACK) <a class="header-anchor" href="#uni-offlocationchange-function-callback" aria-label="Permalink to &quot;uni.offLocationChange(FUNCTION CALLBACK)&quot;">​</a></h3><p>关闭监听实时位置变化，前后台都停止消息接收。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>注意：App端及H5端callback参数为必填。</strong></p><p><strong>FUNCTION CALLBACK 参数</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">latitude</td><td style="text-align:left;">number</td><td style="text-align:left;">纬度，范围 [-90, 90]，负数表示南纬</td><td style="text-align:left;">快手小程序</td></tr><tr><td style="text-align:left;">longitude</td><td style="text-align:left;">number</td><td style="text-align:left;">经度，范围 [-180, 180]，负数表示西经</td><td style="text-align:left;">快手小程序</td></tr><tr><td style="text-align:left;">speed</td><td style="text-align:left;">number</td><td style="text-align:left;">速度 (m/s)</td><td style="text-align:left;">快手小程序</td></tr><tr><td style="text-align:left;">accuracy</td><td style="text-align:left;">number</td><td style="text-align:left;">位置的精确度</td><td style="text-align:left;">快手小程序</td></tr><tr><td style="text-align:left;">altitude</td><td style="text-align:left;">number</td><td style="text-align:left;">高度 (m)</td><td style="text-align:left;">快手小程序</td></tr><tr><td style="text-align:left;">verticalAccuracy</td><td style="text-align:left;">number</td><td style="text-align:left;">垂直精度 (m)（Android 无法获取，返回 0）</td><td style="text-align:left;">快手小程序</td></tr><tr><td style="text-align:left;">horizontalAccuracy</td><td style="text-align:left;">number</td><td style="text-align:left;">水平精度 (m)</td><td style="text-align:left;">快手小程序</td></tr></tbody></table><h3 id="uni-onlocationchangeerror-function-callback" tabindex="-1">uni.onLocationChangeError(FUNCTION CALLBACK) <a class="header-anchor" href="#uni-onlocationchangeerror-function-callback" aria-label="Permalink to &quot;uni.onLocationChangeError(FUNCTION CALLBACK)&quot;">​</a></h3><p>监听持续定位接口返回失败时触发。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>FUNCTION CALLBACK 参数</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th><th style="text-align:left;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">errCode</td><td style="text-align:left;">Number</td><td style="text-align:left;">错误</td><td style="text-align:left;">微信小程序</td></tr><tr><td style="text-align:left;">errMsg</td><td style="text-align:left;">String</td><td style="text-align:left;">错误信息</td><td style="text-align:left;">字节小程序</td></tr></tbody></table><h3 id="uni-offlocationchangeerror-function-callback" tabindex="-1">uni.offLocationChangeError(FUNCTION CALLBACK) <a class="header-anchor" href="#uni-offlocationchangeerror-function-callback" aria-label="Permalink to &quot;uni.offLocationChangeError(FUNCTION CALLBACK)&quot;">​</a></h3><p>取消注册位置更新错误回调。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>注意：App端及H5端callback参数为必填。</strong></p><p><strong>FUNCTION CALLBACK 参数</strong></p><p>无返回值。</p><h3 id="uni-startlocationupdate-object" tabindex="-1">uni.startLocationUpdate(OBJECT) <a class="header-anchor" href="#uni-startlocationupdate-object" aria-label="Permalink to &quot;uni.startLocationUpdate(OBJECT)&quot;">​</a></h3><p>开启小程序进入前台时接收位置消息。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>OBJECT 参数</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:center;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">指定坐标系类型，可以是 wgs84 或 gcj02</td><td style="text-align:center;">微信小程序、字节小程序</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">needFullAccuracy</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">否</td><td style="text-align:left;">针对 iOS14/Android12 及以上的新特性，其他情况本参数忽略。默认情况宿主是精确定位就返回精确定位信息。传入 true 会强制使用精确定位信息，iOS14/Android12 及以上如果没有精确定位权限，会弹出精确定位授权弹框。</td><td style="text-align:center;">百度小程序</td></tr></tbody></table><p><strong>示例</strong></p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">uni</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">startLocationUpdate</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">success</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">res</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">开启小程序接收位置消息成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fail</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">err</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">error</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">开启小程序接收位置消息失败：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">complete</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">msg</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">调用开启小程序接收位置消息 API 完成</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="uni-stoplocationupdate-object" tabindex="-1">uni.stopLocationUpdate(OBJECT) <a class="header-anchor" href="#uni-stoplocationupdate-object" aria-label="Permalink to &quot;uni.stopLocationUpdate(OBJECT)&quot;">​</a></h3><p>关闭监听实时位置变化，前后台都停止消息接收。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√（3.6.8+）</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>OBJECT 参数</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:center;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="uni-startlocationupdatebackground-object" tabindex="-1">uni.startLocationUpdateBackground(OBJECT) <a class="header-anchor" href="#uni-startlocationupdatebackground-object" aria-label="Permalink to &quot;uni.startLocationUpdateBackground(OBJECT)&quot;">​</a></h3><p>开始监听实时地理位置信息变化事件，小程序进入前后台时均接收实时地理位置信息。</p><p><strong>平台差异说明</strong></p><table><thead><tr><th style="text-align:center;">App</th><th style="text-align:center;">H5</th><th style="text-align:center;">微信小程序</th><th style="text-align:center;">支付宝小程序</th><th style="text-align:center;">百度小程序</th><th style="text-align:center;">字节跳动小程序、飞书小程序</th><th style="text-align:center;">QQ小程序</th><th style="text-align:center;">快手小程序</th><th style="text-align:center;">京东小程序</th></tr></thead><tbody><tr><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">x</td><td style="text-align:center;">√</td><td style="text-align:center;">x</td></tr></tbody></table><p><strong>OBJECT 参数</strong></p><table><thead><tr><th style="text-align:left;">参数名</th><th style="text-align:left;">类型</th><th style="text-align:left;">必填</th><th style="text-align:left;">说明</th><th style="text-align:center;">平台差异说明</th></tr></thead><tbody><tr><td style="text-align:left;">type</td><td style="text-align:left;">String</td><td style="text-align:left;">否</td><td style="text-align:left;">指定坐标系类型，可以是 wgs84 或 gcj02</td><td style="text-align:center;">微信小程序、字节小程序</td></tr><tr><td style="text-align:left;">success</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用成功的回调函数</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">fail</td><td style="text-align:left;">Function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用失败的回调函数</td><td style="text-align:center;"></td></tr><tr><td style="text-align:left;">complete</td><td style="text-align:left;">function</td><td style="text-align:left;">否</td><td style="text-align:left;">接口调用结束的回调函数（调用成功、失败都会执行）</td><td style="text-align:center;"></td></tr></tbody></table><h3 id="三方定位和地图服务收费说明" tabindex="-1">三方定位和地图服务收费说明 <a class="header-anchor" href="#三方定位和地图服务收费说明" aria-label="Permalink to &quot;三方定位和地图服务收费说明&quot;">​</a></h3><p>使用三方定位或者地图服务，需向服务提供商（如：高德地图、百度地图、腾讯地图、谷歌地图）申请商业授权和缴纳费用（5万/年）。</p><p>DCloud为开发者争取了福利，可优惠获取高德的商业授权。如有需求请发邮件到<code>bd@dcloud.io</code>（注明你的公司名称、应用介绍、HBuilder账户）；你也可以直接通过<code>uni-im</code>发起在线咨询，在线咨询地址：<a href="https://im.dcloud.net.cn/#/?user_id=b9839630-a479-11ea-b772-0f6ad6cf835c" target="_blank" rel="noreferrer">DCloud地图服务专员</a>。</p><p>详见：<a href="https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic" target="_blank" rel="noreferrer">https://uniapp.dcloud.net.cn/tutorial/app-geolocation.html#lic</a></p>`,54),d=[s];function r(i,o,c,y,g,p){return l(),e("div",null,d)}const f=t(a,[["render",r]]);export{h as __pageData,f as default};
