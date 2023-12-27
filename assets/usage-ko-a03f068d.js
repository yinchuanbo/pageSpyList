import{aZ as n}from"./index-03ab3db8.js";import{b as t,H as l,I as r,c as d,n as o,p as h,s as x,a as j}from"./system-panel-241c304c.js";import"./css-aae66f86.js";const i="https://github.com/HuolalaTech/page-spy-web";function c(s){const e=Object.assign({p:"p",em:"em",strong:"strong",ul:"ul",li:"li",code:"code"},s.components);return n.jsxs(n.Fragment,{children:[n.jsx("img",{src:t,style:{width:"100%"}}),`
`,n.jsx(l,{level:2,slug:"introduction",children:"소개"}),`
`,n.jsxs(e.p,{children:[n.jsx("b",{children:"PageSpy"}),"는 원격 웹 프로젝트를 디버그하는 데 사용되는 도구입니다. 네이티브 API를 래핑하여 네이티브 메소드 호출 시 매개 변수를 필터링, 변환하고 디버그 클라이언트가 사용할 수 있도록 깔끔한 형식의 메시지로 정리합니다. 디버그 클라이언트는 메시지 데이터를받아 데이터를 제공하기위한 대화 형 콘솔과 유사한 기능 인터페이스를 제공합니다."]}),`
`,n.jsx(l,{level:2,slug:"when-to-use",children:"사용 시점"}),`
`,n.jsxs(e.p,{children:[n.jsx("u",{children:n.jsxs(e.em,{children:["로컬 콘솔 디버그를 사용할 수없는 시나리오는 모두 ",n.jsx(e.strong,{children:"PageSpy"})," 가 활용 할 수있는 때입니다"]})}),`\r
！함께 아래의 여러 시나리오 케이스를 살펴보겠습니다:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"로컬에서 H5, Webview 애플리케이션 디버깅"})," : 예전에는 일부 제품이 H5에서 정보를 볼 수 있는 패널을 제공했지만, 모바일 화면이 작아서 조작이 불편하며 표시가 친숙하지 않으며 정보가 잘려 나가는 등의 문제가 있었습니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"원격 근무, 지역 간 협업"})," : 전통적인 의사 소통 방식인 이메일, 전화, 비디오 회의 등은 의사 소통 효율이 떨어지고 고장 정보가 완전하지 않아 오해와 오류 판단이 발생하기 쉽습니다."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"사용자 단말기에서 화면이 하얀 문제 발생"})," : 문제의 위치를 찾는 전통적인 방법에는 데이터 모니터링, 로그 분석 등이 포함되어 있으며 이러한 방법은 해결사가 비즈니스 요구 사항 시나리오와 기술 구현을 이해해야 합니다."]}),`
`]}),`
`,n.jsx(l,{level:2,slug:"how-to-use",children:"사용 방법"}),`
`,n.jsxs(e.p,{children:["데이터의 안전성 및 사용 편의성을 고려하여 ",n.jsx("a",{href:`${i}#how-to-use`,target:"\\_blank",children:"배포 가이드"})," 를 제공합니다."]}),`
`,n.jsx(e.p,{children:"로컬 배포가 완료되면 상단에 'SDK 삽입' 메뉴가 표시되고 비즈니스 프로젝트에 구성 및 통합하는 방법을 확인할 수 있습니다."}),`
`,n.jsx(l,{level:2,slug:"feature-overview",children:"기능 개요"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["콘솔 패널: ",n.jsx(e.code,{children:"console.<log | info | warn | error>"})," 로그 메시지를 표시하고 코드를 실행할 수 있습니다."]}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:d}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["네트워크 패널: ",n.jsx(e.code,{children:"fetch"})," | ",n.jsx(e.code,{children:"XMLHttpRequest"})," | ",n.jsx(e.code,{children:"navigator.sendBeacon"})," 네트워크 요청을 표시합니다."]}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:o}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"엘리먼트 패널: 현재 페이지를 표시하고 HTML 노드 트리를 확인합니다."}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:h}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["스토리지 패널: ",n.jsx(e.code,{children:"localStorage"})," | ",n.jsx(e.code,{children:"sessionStorage"})," | ",n.jsx(e.code,{children:"cookie"})," | ",n.jsx(e.code,{children:"indexedDB"})," 캐시 데이터를 확인합니다."]}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:x}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"시스템 패널: 사용자 에이전트 정보를 표시하고 API 호환성을 확인합니다."}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:j}),`
`,n.jsx(e.p,{children:"또한, 새로운 데이터 또는 데이터가 변경되면 실시간 알림을받습니다."}),`
`,n.jsx("p",{style:{marginTop:28},children:n.jsxs(e.p,{children:[n.jsx("a",{href:i,children:"GitHub"})," 에서 PR 또는 이슈를 제출 해 주시기 바랍니다."]})})]})}function m(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,Object.assign({},s,{children:n.jsx(c,s)})):c(s)}export{m as default,i as githubUrl};
