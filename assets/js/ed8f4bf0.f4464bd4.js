"use strict";(self.webpackChunkmitchell_dictionary=self.webpackChunkmitchell_dictionary||[]).push([[7191],{4579:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var l=r(5893),s=r(1151);const i={},c="\ud2b8\ub9ac \uc21c\ud68c",d={id:"data-structure/tree-traverse",title:"\ud2b8\ub9ac \uc21c\ud68c",description:"\ubaa8\ub4e0 \ub178\ub4dc\ub97c \ud55c\ubc88\uc529 \ubc29\ubb38\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. \ud06c\uac8c \ub450\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc21c\ud68c\ud560 \uc218 \uc788\ub2e4.",source:"@site/docs/data-structure/tree-traverse.md",sourceDirName:"data-structure",slug:"/data-structure/tree-traverse",permalink:"/mitchell-dictionary/docs/data-structure/tree-traverse",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},t={},h=[{value:"BFS",id:"bfs",level:2},{value:"DFS - InOrder",id:"dfs---inorder",level:3},{value:"DFS - PreOrder",id:"dfs---preorder",level:3},{value:"DFS - PostOrder",id:"dfs---postorder",level:3}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\ud2b8\ub9ac-\uc21c\ud68c",children:"\ud2b8\ub9ac \uc21c\ud68c"}),"\n",(0,l.jsx)(n.p,{children:"\ubaa8\ub4e0 \ub178\ub4dc\ub97c \ud55c\ubc88\uc529 \ubc29\ubb38\ud558\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4. \ud06c\uac8c \ub450\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc21c\ud68c\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Breadth-first Search(BFS) \ub113\uc774\uc6b0\uc120"}),"\n",(0,l.jsx)(n.li,{children:"Depth-first Search(DFS) \uae4a\uc774\uc6b0\uc120"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"bfs",children:"BFS"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ud050\uc640 \ubc29\ubb38\ud55c \ub178\ub4dc\uc758 \uac12\uc744 \uc800\uc7a5\ud560 \ubcc0\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"Root \ub178\ub4dc\ub97c \ud050\uc5d0 \uc704\uce58\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:["\ud050\uc5d0 \ub178\ub4dc\uac00 \uc788\ub2e4\uba74 \uc544\ub798\ub97c \ubc18\ubcf5\ud569\ub2c8\ub2e4.","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ud050\uc5d0\uc11c \ub178\ub4dc\ub97c \ud558\ub098 \uaebc\ub0b4\uc11c \ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\uc5d0 \ub123\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uaebc\ub0b8 \ub178\ub4dc\uac00 \uc67c\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74 \ud050\uc5d0 \ub123\uc2b5\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uaebc\ub0b8 \ub178\ub4dc\uac00 \uc624\ub978\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74 \ud050\uc5d0 \ub123\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"dfs---inorder",children:"DFS - InOrder"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc\uc758 \uac12\uc744 \uc800\uc7a5\ud560 \ubcc0\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"current"})," \ubcc0\uc218\uc5d0 BST\uc758 Root \ub178\ub4dc\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:["\ub178\ub4dc\ub97c \uc778\uc790\ub85c \ubc1b\ub294 helper \ud568\uc218\ub97c \uc791\uc131\ud569\ub2c8\ub2e4.","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ub178\ub4dc\uac00 \uc67c\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74, helper \ud568\uc218\ub97c \uc67c\ucabd \uc790\uc2dd \ub178\ub4dc\ub85c \ud638\ucd9c\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\uc5d0 \ub178\ub4dc\uc758 \uac12\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub178\ub4dc\uac00 \uc624\ub978\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74, helper \ud568\uc218\ub97c \uc624\ub978\ucabd \uc790\uc2dd\ub178\ub4dc\ub85c \ud638\ucd9c\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"current"})," \ubcc0\uc218\ub85c helper \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"dfs---preorder",children:"DFS - PreOrder"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc\uc758 \uac12\uc744 \uc800\uc7a5\ud560 \ubcc0\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"current"})," \ubcc0\uc218\uc5d0 BST\uc758 Root \ub178\ub4dc\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:["\ub178\ub4dc\ub97c \uc778\uc790\ub85c \ubc1b\ub294 helper \ud568\uc218\ub97c \uc791\uc131\ud569\ub2c8\ub2e4.","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\uc5d0 \ub178\ub4dc\uc758 \uac12\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub178\ub4dc\uac00 \uc67c\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74, helper \ud568\uc218\ub97c \uc67c\ucabd \uc790\uc2dd \ub178\ub4dc\ub85c \ud638\ucd9c\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub178\ub4dc\uac00 \uc624\ub978\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74, helper \ud568\uc218\ub97c \uc624\ub978\ucabd \uc790\uc2dd\ub178\ub4dc\ub85c \ud638\ucd9c\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"current"})," \ubcc0\uc218\ub85c helper \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"dfs---postorder",children:"DFS - PostOrder"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc\uc758 \uac12\uc744 \uc800\uc7a5\ud560 \ubcc0\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"current"})," \ubcc0\uc218\uc5d0 BST\uc758 Root \ub178\ub4dc\ub97c \uc800\uc7a5\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:["\ub178\ub4dc\ub97c \uc778\uc790\ub85c \ubc1b\ub294 helper \ud568\uc218\ub97c \uc791\uc131\ud569\ub2c8\ub2e4.","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\ub178\ub4dc\uac00 \uc67c\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74, helper \ud568\uc218\ub97c \uc67c\ucabd \uc790\uc2dd \ub178\ub4dc\ub85c \ud638\ucd9c\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub178\ub4dc\uac00 \uc624\ub978\ucabd \uc790\uc2dd\uc774 \uc788\ub2e4\uba74, helper \ud568\uc218\ub97c \uc624\ub978\ucabd \uc790\uc2dd\ub178\ub4dc\ub85c \ud638\ucd9c\ud569\ub2c8\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\uc5d0 \ub178\ub4dc\uc758 \uac12\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"current"})," \ubcc0\uc218\ub85c helper \ud568\uc218\ub97c \ud638\ucd9c\ud569\ub2c8\ub2e4."]}),"\n",(0,l.jsx)(n.li,{children:"\ubc29\ubb38\ud55c \ub178\ub4dc \ubcc0\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var l=r(7294);const s={},i=l.createContext(s);function c(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);