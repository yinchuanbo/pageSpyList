import{aZ as e}from"./index-03ab3db8.js";import{b as t,H as l,I as r,c as o,n as d,p as h,s as x,a as j}from"./system-panel-241c304c.js";import"./css-aae66f86.js";const i="https://github.com/HuolalaTech/page-spy-web";function c(s){const n=Object.assign({p:"p",em:"em",strong:"strong",ul:"ul",li:"li",code:"code"},s.components);return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:t,style:{width:"100%"}}),`
`,e.jsx(l,{level:2,slug:"introduction",children:"介绍"}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"PageSpy"})," 是一款用来调试远程 Web 项目的工具。基于对原生 API 的封装，它将调用原生方法时的参数进行过滤、转化，整理成格式规范的消息供调试端消费；调试端收到消息数据，提供类控制台可交互式的功能界面将数据呈现出来。"]}),`
`,e.jsx(l,{level:2,slug:"when-to-use",children:"何时使用？"}),`
`,e.jsxs(n.p,{children:[e.jsx("u",{children:e.jsxs(n.em,{children:["任何无法在本地使用控制台调试的场景，都是 ",e.jsx(n.strong,{children:"PageSpy"})," 可以大显身手的时候"]})}),`\r
！一起来看下面的几个场景案例：`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"本地调试 H5、Webview 应用"}),"：以往有些产品提供了可以在 H5 上查看信息的面板，但移动端屏幕太小操作不便、显示不友好，以及信息被截断等问题；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"远程办公、跨地区协同"}),"：传统沟通方式如邮件、电话、视频会议等，沟通效率不高、故障信息不全面，容易误解误判；"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"用户终端上出现白屏问题"}),"：传统定位问题的方式包括数据监控、日志分析等，这些方式依赖排障人员要理解业务需求场景、技术实现；"]}),`
`]}),`
`,e.jsx(l,{level:2,slug:"how-to-use",children:"如何使用？"}),`
`,e.jsxs(n.p,{children:["为了数据安全和方便您的使用，我们提供完整的、开箱即用的",e.jsx("a",{href:`${i}#如何使用`,target:"\\_blank",children:"部署方案"}),"。"]}),`
`,e.jsxs(n.p,{children:["本地化部署完成后，顶部会出现 ",e.jsx(n.code,{children:"接入SDK"})," 菜单，点击菜单查看如何在业务项目中配置并集成。"]}),`
`,e.jsx(l,{level:2,slug:"feature-overview",children:"功能概览"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Console 面板: 显示 ",e.jsx(n.code,{children:"console.<log | info | warn | error>"})," 日志信息，可以执行代码；"]}),`
`]}),`
`,e.jsx(r,{width:"90%",style:{margin:"0 auto"},src:o}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Network 面板: 显示 ",e.jsx(n.code,{children:"fetch"})," | ",e.jsx(n.code,{children:"XMLHttpRequest"})," | ",e.jsx(n.code,{children:"navigator.sendBeacon"})," 的网络请求；"]}),`
`]}),`
`,e.jsx(r,{width:"90%",style:{margin:"0 auto"},src:d}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Element 面板: 显示当前页面，查看 HTML 节点树；"}),`
`]}),`
`,e.jsx(r,{width:"90%",style:{margin:"0 auto"},src:h}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Storage 面板: 查看 ",e.jsx(n.code,{children:"localStorage"})," | ",e.jsx(n.code,{children:"sessionStorage"})," | ",e.jsx(n.code,{children:"cookie"})," | ",e.jsx(n.code,{children:"indexedDB"})," 缓存数据；"]}),`
`]}),`
`,e.jsx(r,{width:"90%",style:{margin:"0 auto"},src:x}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Systems 面板: 显示 userAgent 信息，查看 api 兼容性。"}),`
`]}),`
`,e.jsx(r,{width:"90%",style:{margin:"0 auto"},src:j}),`
`,e.jsx(n.p,{children:"除此之外，当有新的数据或者数据发生变化的时候会实时的收到通知。"}),`
`,e.jsx("p",{style:{marginTop:28},children:e.jsxs(n.p,{children:["欢迎在 ",e.jsx("a",{href:i,children:"GitHub"})," 上提交 PR 或 issue。"]})})]})}function m(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,Object.assign({},s,{children:e.jsx(c,s)})):c(s)}export{m as default,i as githubUrl};
