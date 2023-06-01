import{_ as l,c as n,o as s,N as e,x as t}from"./chunks/framework.fc67cb9d.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"component/live-player.md","lastUpdated":1685603474000}'),a={name:"component/live-player.md"},r=e("",7),d=t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"属性名"),t("th",{style:{"text-align":"center"}},"类型"),t("th",{style:{"text-align":"center"}},"默认值"),t("th",{style:{"text-align":"center"}},"说明"),t("th",{style:{"text-align":"center"}},"平台差异说明")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"id"),t("td",{style:{"text-align":"center"}},"String"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"live-player 属性的唯一标志符"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"src"),t("td",{style:{"text-align":"center"}},"String"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"音视频地址。百度小程序支持 m3u8 格式；微信小程序支持 flv, rtmp 格式"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"mode"),t("td",{style:{"text-align":"center"}},"String"),t("td",{style:{"text-align":"center"}},"live"),t("td",{style:{"text-align":"center"}},"live（直播），RTC（实时通话，该模式时延更低）"),t("td",{style:{"text-align":"center"}},"微信小程序")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"autoplay"),t("td",{style:{"text-align":"center"}},"Boolean"),t("td",{style:{"text-align":"center"}},"false"),t("td",{style:{"text-align":"center"}},"自动播放"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"muted"),t("td",{style:{"text-align":"center"}},"Boolean"),t("td",{style:{"text-align":"center"}},"false"),t("td",{style:{"text-align":"center"}},"是否静音"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"orientation"),t("td",{style:{"text-align":"center"}},"String"),t("td",{style:{"text-align":"center"}},"vertical"),t("td",{style:{"text-align":"center"}},"画面方向，可选值有 vertical，horizontal"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"object-fit"),t("td",{style:{"text-align":"center"}},"String"),t("td",{style:{"text-align":"center"}},"contain"),t("td",{style:{"text-align":"center"}},"填充模式，可选值:contain、fillCrop"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"background-mute"),t("td",{style:{"text-align":"center"}},"Boolean"),t("td",{style:{"text-align":"center"}},"false"),t("td",{style:{"text-align":"center"}},"进入后台时是否静音"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"sound-mode"),t("td",{style:{"text-align":"center"}},"string"),t("td",{style:{"text-align":"center"}},"speaker"),t("td",{style:{"text-align":"center"}},"声音输出方式;可选值speaker、ear"),t("td",{style:{"text-align":"center"}},"微信小程序、QQ小程序1.5.0（仅支持speaker）")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"min-cache"),t("td",{style:{"text-align":"center"}},"Number"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"最小缓冲区，单位s"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"max-cache"),t("td",{style:{"text-align":"center"}},"Number"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"最大缓冲区，单位s"),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"picture-in-picture-mode"),t("td",{style:{"text-align":"center"}},"string/Array"),t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},'设置小窗模式： push, pop，空字符串或通过数组形式设置多种模式（如： ["push", "pop"]）'),t("td",{style:{"text-align":"center"}},"微信小程序（2.10.3）")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"@statechange"),t("td",{style:{"text-align":"center"}},"EventHandle"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"},code:""},"播放状态变化事件，detail ="),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"@netstatus"),t("td",{style:{"text-align":"center"}},"EventHandle"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"},info:""},"网络状态通知，detail ="),t("td",{style:{"text-align":"center"}})]),t("tr",null,[t("td",{style:{"text-align":"center"}},"@fullscreenchange"),t("td",{style:{"text-align":"center"}},"EventHandle"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"全屏变化事件，detail = {direction, fullScreen}。"),t("td",{style:{"text-align":"center"}}," ")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"@audiovolumenotify"),t("td",{style:{"text-align":"center"}},"EventHandle"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"播放音量大小通知，detail = {}"),t("td",{style:{"text-align":"center"}},"微信小程序（2.10.0）")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"@enterpictureinpicture"),t("td",{style:{"text-align":"center"}},"EventHandle"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"播放器进入小窗"),t("td",{style:{"text-align":"center"}},"微信小程序（2.11.0）")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"@leavepictureinpicture"),t("td",{style:{"text-align":"center"}},"EventHandle"),t("td",{style:{"text-align":"center"}}),t("td",{style:{"text-align":"center"}},"播放器退出小窗"),t("td",{style:{"text-align":"center"}},"2.11.0")])])],-1),o=e("",17),p=[r,d,o];function i(c,y,g,x,h,D){return s(),n("div",null,p)}const v=l(a,[["render",i]]);export{u as __pageData,v as default};
