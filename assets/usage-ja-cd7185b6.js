import{aZ as n}from"./index-03ab3db8.js";import{b as t,H as l,I as r,c as d,n as o,p as h,s as x,a as j}from"./system-panel-241c304c.js";import"./css-aae66f86.js";const i="https://github.com/HuolalaTech/page-spy-web";function c(s){const e=Object.assign({p:"p",em:"em",strong:"strong",ul:"ul",li:"li",code:"code"},s.components);return n.jsxs(n.Fragment,{children:[n.jsx("img",{src:t,style:{width:"100%"}}),`
`,n.jsx(l,{level:2,slug:"introduction",children:"紹介"}),`
`,n.jsxs(e.p,{children:[n.jsx("b",{children:"PageSpy"})," は、リモートWebプロジェクトのデバッグに使用されるツールです。ネイティブAPIへのラッパーをベースに、ネイティブメソッドの呼び出し時にパラメーターをフィルタリング、変換し、デバッグクライアントが消費できるように整理したフォーマットに変換します。デバッグクライアントは、メッセージデータを受け取り、データを表示するための対話型コンソールのような機能インターフェースを提供します。"]}),`
`,n.jsx(l,{level:2,slug:"when-to-use",children:"いつ使用するか"}),`
`,n.jsx("u",{children:n.jsx(e.p,{children:n.jsxs(e.em,{children:["ローカルでのコンソールデバッグができないシナリオは、すべて ",n.jsx(e.strong,{children:"PageSpy"}),`\r
が活躍できる場面です`]})})}),`
`,n.jsx(e.p,{children:"！一緒に以下のシナリオを見てみましょう："}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"H5、Webviewアプリのローカルデバッグ"}),"：これまで、一部の製品は情報をH5で表示できるパネルを提供していましたが、モバイルデバイスの画面は小さく、操作が不便で、表示がユーザーフレンドリーでなく、情報が切り捨てられるなどの問題がありました。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"リモートワーク、地域を超えた協力"}),"：伝統的なコミュニケーション手段、例えばメール、電話、ビデオ会議などでは、コミュニケーションの効率が低く、障害情報が不十分で、誤解や誤判が生じやすいです。"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ユーザーターミナルで白い画面の問題が発生"}),"：従来の問題の特定方法には、データモニタリング、ログ分析などが含まれており、これらの方法はトラブルシューティング担当者がビジネス要件のシナリオと技術実装を理解する必要があります。"]}),`
`]}),`
`,n.jsx(l,{level:2,slug:"how-to-use",children:"使用方法"}),`
`,n.jsxs(e.p,{children:["データの安全性と利便性を考慮して、完全な",n.jsx("a",{href:`${i}#how-to-use`,target:"\\_blank",children:"デプロイメントガイド"}),"を提供しています。"]}),`
`,n.jsx(e.p,{children:"ローカルデプロイメントが完了すると、「SDK をインジェクト」メニューが表示され、ビジネスプロジェクトに設定と統合する方法を確認できます。"}),`
`,n.jsx(l,{level:2,slug:"feature-overview",children:"機能概要"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["コンソールパネル： ",n.jsx(e.code,{children:"console.<log | info | warn | error>"})," ログメッセージを表示し、コードを実行できます；"]}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:d}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["ネットワークパネル： ",n.jsx(e.code,{children:"fetch"})," | ",n.jsx(e.code,{children:"XMLHttpRequest"})," | ",n.jsx(e.code,{children:"navigator.sendBeacon"})," のネットワークリクエストを表示します；"]}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:o}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"エレメントパネル：現在のページを表示し、HTML ノードツリーを表示します；"}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:h}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["ストレージパネル： ",n.jsx(e.code,{children:"localStorage"})," | ",n.jsx(e.code,{children:"sessionStorage"})," | ",n.jsx(e.code,{children:"cookie"})," | ",n.jsx(e.code,{children:"indexedDB"})," キャッシュデータを表示します；"]}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:x}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"システムパネル：ユーザーエージェント情報を表示し、API の互換性を確認します。"}),`
`]}),`
`,n.jsx(r,{width:"90%",style:{margin:"0 auto"},src:j}),`
`,n.jsx(e.p,{children:"さらに、新しいデータやデータが変更された場合、リアルタイム通知を受け取ります。"}),`
`,n.jsx("p",{style:{marginTop:28},children:n.jsxs(e.p,{children:[n.jsx("a",{href:i,children:"GitHub"})," でPRまたはissueを提出いただければ幸いです。"]})})]})}function m(s={}){const{wrapper:e}=s.components||{};return e?n.jsx(e,Object.assign({},s,{children:n.jsx(c,s)})):c(s)}export{m as default,i as githubUrl};
