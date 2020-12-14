(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(3),r=a(7),c=(a(0),a(181)),o={sidebar_label:"General",hide_title:!0,title:"Wechaty FAQ: General"},i={unversionedId:"faq/general",id:"faq/general",isDocsHomePage:!1,title:"Wechaty FAQ: General",description:"Table of Contents",source:"@site/docs/faq/general.md",slug:"/faq/general",permalink:"/docs/faq/general",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/faq/general.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1607938421,sidebar_label:"General",sidebar:"docs",previous:{title:"Wechaty FAQ",permalink:"/docs/faq/"},next:{title:"Wechaty FAQ: Puppet",permalink:"/docs/faq/puppet"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"General",id:"general",children:[{value:"I can not login with my Wechat account",id:"i-can-not-login-with-my-wechat-account",children:[]},{value:"Does wechaty support Red envelope, transfer money, moment?",id:"does-wechaty-support-red-envelope-transfer-money-moment",children:[]},{value:"Can wechaty send url rich media message?",id:"can-wechaty-send-url-rich-media-message",children:[]},{value:"I don&#39;t know wechaty support for personal account of wechat official account",id:"i-dont-know-wechaty-support-for-personal-account-of-wechat-official-account",children:[]}]}],u={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"General"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#11-i-can-not-login-with-my-wechat-account"}),"Cannot login")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#a"}),"What wechaty cannot do on wechat")))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"Others"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#b"}),"Can wechaty send url rich media message?")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"#c"}),"I don't know wechaty support for personal account of wechat official account?"))))),Object(c.b)("h2",{id:"general"},"General"),Object(c.b)("h3",{id:"i-can-not-login-with-my-wechat-account"},"I can not login with my Wechat account"),Object(c.b)("p",null,"Wechat account that registered after 2017 will not be able to login via Web API. Learn more at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/issues/872"}),"https://github.com/wechaty/wechaty/issues/872")),Object(c.b)("p",null,"Solution: Wechaty support protocols other than Web API, such as pad. Learn more at ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/issues/1296"}),"https://github.com/wechaty/wechaty/issues/1296")),Object(c.b)("h3",{id:"does-wechaty-support-red-envelope-transfer-money-moment"},"Does wechaty support Red envelope, transfer money, moment?"),Object(c.b)("p",null,"Short answer: NO"),Object(c.b)("p",null,"Long answer:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Payment: we won't support this because this related to property security"),Object(c.b)("li",{parentName:"ul"},"@ someone in the room: we will support this in the future in solutions other than Web API."),Object(c.b)("li",{parentName:"ul"},"Send Contact Card: we support this in ipad solution."),Object(c.b)("li",{parentName:"ul"},"Send Share Card: we will support this in the future in solutions other than Web API."),Object(c.b)("li",{parentName:"ul"},"Send Voice: we will support this in the future in solutions other than Web API."),Object(c.b)("li",{parentName:"ul"},"Moment: we haven't decide yet whether to support this function")),Object(c.b)("h3",{id:"can-wechaty-send-url-rich-media-message"},"Can wechaty send url rich media message?"),Object(c.b)("p",null,"Not yet at this moment, will support later"),Object(c.b)("p",null,"Related Issue\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty/issues/718"}),"Add support for send url rich media message")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty/issues/824"}),"can wechaty send share card msg"))),Object(c.b)("h3",{id:"i-dont-know-wechaty-support-for-personal-account-of-wechat-official-account"},"I don't know wechaty support for personal account of wechat official account"),Object(c.b)("p",null,"At this moment, wechaty only support personal account"),Object(c.b)("p",null,"Related Issue:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty/issues/1016"}),"Using wechaty to start a wechatOA account"))))}s.isMDXComponent=!0},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),h=n,m=p["".concat(o,".").concat(h)]||p[h]||b[h]||c;return a?r.a.createElement(m,i(i({ref:t},u),{},{components:a})):r.a.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<c;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);