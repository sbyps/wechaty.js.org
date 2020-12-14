(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{160:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return n})),a.d(e,"metadata",(function(){return p})),a.d(e,"rightToc",(function(){return O})),a.d(e,"default",(function(){return l}));var b=a(3),r=a(7),c=(a(0),a(181)),n={title:"Wechaty Puppet"},p={unversionedId:"introduction/puppet",id:"introduction/puppet",isDocsHomePage:!1,title:"Wechaty Puppet",description:"\x3c!--",source:"@site/docs/introduction/puppet.md",slug:"/introduction/puppet",permalink:"/docs/introduction/puppet",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/introduction/puppet.md",version:"current",lastUpdatedBy:"Huan",lastUpdatedAt:1607938421,sidebar:"docs",previous:{title:"Multi-language Support",permalink:"/docs/introduction/multi-language"},next:{title:"Concepts",permalink:"/docs/introduction/concepts"}},O=[{value:"2. Wechaty Puppet List",id:"2-wechaty-puppet-list",children:[{value:"2.1. For Puppet User",id:"21-for-puppet-user",children:[]},{value:"2.2. For Puppet Builder",id:"22-for-puppet-builder",children:[]}]},{value:"3. Wechaty Puppet Compatibility",id:"3-wechaty-puppet-compatibility",children:[{value:"Puppet Comparison",id:"puppet-comparison",children:[]}]},{value:"4. Learn More",id:"4-learn-more",children:[]}],j={rightToc:O};function l(t){var e=t.components,n=Object(r.a)(t,["components"]);return Object(c.b)("wrapper",Object(b.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The term ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty/wiki/Puppet"}),"Puppet")," in Wechaty is an Abstract Class for implementing protocol plugins. The plugins are the component that helps Wechaty to control the Wechat","(","that's the reason we call it puppet",")","."),Object(c.b)("p",null,"The plugins are named ",Object(c.b)("inlineCode",{parentName:"p"},"PuppetXXX"),", like ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet-puppeteer"}),"PuppetPuppeteer")," is using the ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/GoogleChrome/puppeteer"}),"google puppeteer")," to control the ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://wx.qq.com"}),"WeChat Web API")," via a chrome browser, ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/lijiarui/wechaty-puppet-padchat"}),"PuppetPadchat")," is using the WebSocket protocol to connect with a Protocol Server for controlling the iPad Wechat program. More detail you could go ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet/wiki"}),"Puppet in wiki"),"."),Object(c.b)("p",null,"For a deeper understanding of the Puppet in Wechaty, you can read its source code if you like at ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts"}),"https://github.com/wechaty/wechaty-puppet/blob/master/src/puppet.ts")),Object(c.b)("p",null,Object(c.b)("img",{alt:"Puppet Structure",src:a(213).default})),Object(c.b)("h2",{id:"2-wechaty-puppet-list"},"2. Wechaty Puppet List"),Object(c.b)("h3",{id:"21-for-puppet-user"},"2.1. For Puppet User"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Protocol"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Puppet Provider"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"Environment Variable"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Web"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet-puppeteer"}),"PuppetPuppeteer")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-puppeteer"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Windows"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/juzibot/wxwork-tester"}),"PuppetWxwork")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-hostie"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Web"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet-wechat4u"}),"PuppetWechat4u")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-wechat4u"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iPad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/puppet-services"}),"PuppetRock")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-hostie"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iPad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/puppet-services"}),"PuppetPadLocal")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-hostie"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Windows"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/puppet-services"}),"PuppetDonut")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-hostie"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iPad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("del",{parentName:"td"},"PuppetPadpro")," ",Object(c.b)("strong",{parentName:"td"},"DEPRECATED")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-padpro"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iPad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("del",{parentName:"td"},"PuppetPadchat")," ",Object(c.b)("strong",{parentName:"td"},"DEPRECATED")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-padchat"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"iPad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("del",{parentName:"td"},"PuppetPadplus")," ",Object(c.b)("strong",{parentName:"td"},"DEPRECATED")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-padplus"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"Mac"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("del",{parentName:"td"},"PuppetMacpro")," ",Object(c.b)("strong",{parentName:"td"},"DEPRECATED")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"export WECHATY_PUPPET=wechaty-puppet-macpro"))))),Object(c.b)("h3",{id:"22-for-puppet-builder"},"2.2. For Puppet Builder"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Wechaty Puppet"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Backend Protocol"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Npm Name"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Npm Version"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Stage"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet"}),"Puppet")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Abstract Base Class"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet.svg",alt:"Puppet"})),"   ",Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet?activeTab=versions"}),Object(c.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet/next.svg",alt:"npm (tag)"})))),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Release-green.svg",alt:"Stage:Release"})))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://github.com/wechaty/wechaty-puppet-mock"}),"PuppetMock")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"Mocking"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"wechaty-puppet-mock"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("img",Object(b.a)({parentName:"td"},{src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"PuppetMock"})),"   ",Object(c.b)("a",Object(b.a)({parentName:"td"},{href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"}),Object(c.b)("img",Object(b.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"})))),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("img",Object(b.a)({parentName:"td"},{src:"https://img.shields.io/badge/Stage-Release-green.svg",alt:"Stage:Release"})))))),Object(c.b)("h2",{id:"3-wechaty-puppet-compatibility"},"3. Wechaty Puppet Compatibility"),Object(c.b)("h3",{id:"puppet-comparison"},"Puppet Comparison"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"Puppet"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"donut"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"padplus"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"wxwork"),Object(c.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"rock"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u652f\u6301\u8d26\u53f7"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u4e2a\u4eba\u5fae\u4fe1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u4e2a\u4eba\u5fae\u4fe1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u4f01\u4e1a\u5fae\u4fe1"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u4e2a\u4eba\u5fae\u4fe1")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"<\u6d88\u606f>")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6536\u53d1\u6587\u672c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6536\u53d1\u4e2a\u4eba\u540d\u7247"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6536\u53d1\u56fe\u6587\u94fe\u63a5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53d1\u9001\u56fe\u7247\u3001\u6587\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705\uff08\u5bf9\u5185\u5bb9\u6709\u5927\u5c0f\u9650\u5236\uff0c20M\u4ee5\u4e0b\uff09"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705\uff08\u8f83\u6162\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u6536\u56fe\u7247\u3001\u6587\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705\uff08\u5bf9\u5185\u5bb9\u6709\u5927\u5c0f\u9650\u5236\uff0c25M\u4ee5\u4e0b\uff09"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53d1\u9001\u89c6\u9891"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705\uff08\u8f83\u6162\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u6536\u89c6\u9891"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53d1\u9001\u5c0f\u7a0b\u5e8f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u6536\u52a8\u56fe"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53d1\u9001\u52a8\u56fe"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705\uff08\u4ee5\u6587\u4ef6\u5f62\u5f0f\u53d1\u9001\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u63a5\u6536\u8bed\u97f3\u6d88\u606f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53d1\u9001\u8bed\u97f3\u6d88\u606f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u6587\u672c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u56fe\u7247"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u56fe\u6587\u94fe\u63a5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u97f3\u9891"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u89c6\u9891"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u6587\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u52a8\u56fe"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8f6c\u53d1\u5c0f\u7a0b\u5e8f"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"<\u7fa4\u7ec4>")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u521b\u5efa\u7fa4\u804a"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8bbe\u7f6e\u7fa4\u516c\u544a"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u83b7\u53d6\u7fa4\u516c\u544a"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7fa4\u4e8c\u7ef4\u7801"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u62c9\u4eba\u8fdb\u7fa4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8e22\u4eba\u51fa\u7fa4"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u9000\u51fa\u7fa4\u804a"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6539\u7fa4\u540d\u79f0"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5165\u7fa4\u4e8b\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u79bb\u7fa4\u4e8b\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7fa4\u540d\u79f0\u53d8\u66f4\u4e8b\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"@\u7fa4\u6210\u5458"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7fa4\u5217\u8868"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7fa4\u6210\u5458\u5217\u8868"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u7fa4\u8be6\u60c5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"<\u8054\u7cfb\u4eba>")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4fee\u6539\u5907\u6ce8"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6dfb\u52a0\u597d\u53cb"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u81ea\u52a8\u901a\u8fc7\u597d\u53cb"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u597d\u53cb\u5217\u8868"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u597d\u53cb\u8be6\u60c5"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(c.b)("strong",{parentName:"td"},"<\u5176\u4ed6>")),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u767b\u5f55\u4e8b\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u626b\u7801\u72b6\u6001"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u767b\u51fa\u4e8b\u4ef6"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4e3b\u52a8\u9000\u51fa\u767b\u5f55"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u274c"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2705")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4f9d\u8d56\u534f\u8bae"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Windows"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"iPad"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"Windows"),Object(c.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"iPad")))),Object(c.b)("h2",{id:"4-learn-more"},"4. Learn More"),Object(c.b)("p",null,"Learn more about Wechaty Puppet at ",Object(c.b)("a",Object(b.a)({parentName:"p"},{href:"https://github.com/wechaty/wechaty-puppet/wiki"}),"https://github.com/wechaty/wechaty-puppet/wiki")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Contact Puppet Creators & Get Puppet Token: ",Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wechaty/puppet-services"}),"https://github.com/wechaty/puppet-services")),Object(c.b)("li",{parentName:"ul"},"Repository: ",Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty-puppet"}),"https://github.com/wechaty/wechaty-puppet")),Object(c.b)("li",{parentName:"ul"},"Documentation: ",Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html"}),"https://wechaty.github.io/wechaty-puppet/typedoc/classes/puppet.html")),Object(c.b)("li",{parentName:"ul"},"Puppet Development Guide: ",Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty-puppet/wiki/Development"}),"https://github.com/wechaty/wechaty-puppet/wiki/Development")),Object(c.b)("li",{parentName:"ul"},"Puppet Related Links: ",Object(c.b)("a",Object(b.a)({parentName:"li"},{href:"https://github.com/wechaty/wechaty-puppet/wiki/Links"}),"https://github.com/wechaty/wechaty-puppet/wiki/Links"))))}l.isMDXComponent=!0},181:function(t,e,a){"use strict";a.d(e,"a",(function(){return i})),a.d(e,"b",(function(){return N}));var b=a(0),r=a.n(b);function c(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(t);e&&(b=b.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,b)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){c(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function O(t,e){if(null==t)return{};var a,b,r=function(t,e){if(null==t)return{};var a,b,r={},c=Object.keys(t);for(b=0;b<c.length;b++)a=c[b],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(b=0;b<c.length;b++)a=c[b],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var j=r.a.createContext({}),l=function(t){var e=r.a.useContext(j),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},i=function(t){var e=l(t.components);return r.a.createElement(j.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var a=t.components,b=t.mdxType,c=t.originalType,n=t.parentName,j=O(t,["components","mdxType","originalType","parentName"]),i=l(a),d=b,N=i["".concat(n,".").concat(d)]||i[d]||m[d]||c;return a?r.a.createElement(N,p(p({ref:e},j),{},{components:a})):r.a.createElement(N,p({ref:e},j))}));function N(t,e){var a=arguments,b=e&&e.mdxType;if("string"==typeof t||b){var c=a.length,n=new Array(c);n[0]=d;var p={};for(var O in e)hasOwnProperty.call(e,O)&&(p[O]=e[O]);p.originalType=t,p.mdxType="string"==typeof t?t:b,n[1]=p;for(var j=2;j<c;j++)n[j]=a[j];return r.a.createElement.apply(null,n)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},213:function(t,e,a){"use strict";a.r(e),e.default=a.p+"assets/images/architecture-ef4e78c0bf9d9b359328f3de8751ebb1.png"}}]);