import{aZ as e}from"./index-03ab3db8.js";import{b as a,H as t,I as o,c as l,n as c,p as d,s as h,a as u}from"./system-panel-241c304c.js";import"./css-aae66f86.js";const i="https://github.com/HuolalaTech/page-spy-web";function r(s){const n=Object.assign({p:"p",em:"em",strong:"strong",ul:"ul",li:"li",code:"code"},s.components);return e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a,style:{width:"100%"}}),`
`,e.jsx(t,{level:2,slug:"introduction",children:"Introduction"}),`
`,e.jsxs(n.p,{children:[e.jsx("b",{children:"PageSpy"}),` is a remote debugging tool for web project. Based on encapsulation\r
of native web APIs, it filters and transforms the parameters of native methods when\r
called, and converts into messages with specific format for consumption by the debugger\r
client. The debugger presents ui in an interactive devtools-like for easy viewing\r
after receives the message data.`]}),`
`,e.jsx(t,{level:2,slug:"when-to-use",children:"When to use?"}),`
`,e.jsx("u",{children:e.jsx(n.p,{children:e.jsxs(n.em,{children:["It's ",e.jsx(n.strong,{children:"PageSpy"}),` show time whenever you can't debug code with local\r
devtools!`]})})}),`
`,e.jsx(n.p,{children:"Let's see the following instances:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Debugging of H5 or webview app locally"}),": in the past, some products provided panels that could display information on H5, but the small screens of mobile devices make it inconvenient for operation, and the display is not user-friendly. Issues such as information being truncated are also common."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Remote work and cross-regional collaboration"}),": traditional communications such as emails, phone calls, and video conferences are inefficient, and fault information is not comprehensive, making it prone to misunderstandings and misjudgments."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"White screen issues on user devices"}),": traditional approaches to troubleshooting, such as data monitoring and log analysis, depend on troubleshooters understanding business requirements and technical implementations."]}),`
`]}),`
`,e.jsx(t,{level:2,slug:"how-to-use",children:"How to use?"}),`
`,e.jsxs(n.p,{children:[`For data security and your convenience, we provide a complete and\r
out-of-box `,e.jsx("a",{href:`${i}#how-to-use`,target:"\\_blank",children:"deployment solution"}),"."]}),`
`,e.jsxs(n.p,{children:["Once the deployment is successful, the ",e.jsx(n.code,{children:"Inject SDK"}),` menu will be at the top, and you can view how to\r
configure and integrate in the business project by click the menu.`]}),`
`,e.jsx(t,{level:2,slug:"feature-overview",children:"Feature overview"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Console Panel: show the ",e.jsx(n.code,{children:"console.<log | info | warn | error>"})," log data, support execute code；"]}),`
`]}),`
`,e.jsx(o,{width:"90%",style:{margin:"0 auto"},src:l}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Network Panel: show the request of ",e.jsx(n.code,{children:"fetch"})," | ",e.jsx(n.code,{children:"XMLHttpRequest"})," | ",e.jsx(n.code,{children:"navigator.sendBeacon"}),";"]}),`
`]}),`
`,e.jsx(o,{width:"90%",style:{margin:"0 auto"},src:c}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Page Panel: show the current pageview and HTML node tree；"}),`
`]}),`
`,e.jsx(o,{width:"90%",style:{margin:"0 auto"},src:d}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Storage Panel: show the cache of ",e.jsx(n.code,{children:"localStorage"})," | ",e.jsx(n.code,{children:"sessionStorage"})," | ",e.jsx(n.code,{children:"cookie"})," | ",e.jsx(n.code,{children:"indexedDB"}),"；"]}),`
`]}),`
`,e.jsx(o,{width:"90%",style:{margin:"0 auto"},src:h}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Systems Panel: show the userAgent info and some APIs compatibility."}),`
`]}),`
`,e.jsx(o,{width:"90%",style:{margin:"0 auto"},src:u}),`
`,e.jsx(n.p,{children:"Besides of above, you will get the realtime notification when there have new data or data changed."}),`
`,e.jsx("p",{style:{marginTop:28},children:e.jsxs(n.p,{children:["Welcome to submit PR or issue on ",e.jsx("a",{href:i,children:"GitHub"}),"."]})})]})}function x(s={}){const{wrapper:n}=s.components||{};return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{x as default,i as githubUrl};
