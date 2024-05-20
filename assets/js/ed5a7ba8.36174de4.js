"use strict";(self.webpackChunkmitchell_dictionary=self.webpackChunkmitchell_dictionary||[]).push([[4350],{6278:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=r(5893),s=r(1151);const l={},o="Array.from\uacfc Array.fill\ub85c \ube48 \uc774\uc911\ubc30\uc5f4\uc744 \ub9cc\ub4e4\uba74 \uc548\ub418\uc694.",c={id:"troubles/array-from-nested",title:"Array.from\uacfc Array.fill\ub85c \ube48 \uc774\uc911\ubc30\uc5f4\uc744 \ub9cc\ub4e4\uba74 \uc548\ub418\uc694.",description:"\ube48 \uc774\uc911\ubc30\uc5f4\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc774 \ud558\uc600\ub2e4.",source:"@site/docs/troubles/array-from-nested.md",sourceDirName:"troubles",slug:"/troubles/array-from-nested",permalink:"/mitchell-dictionary/docs/troubles/array-from-nested",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"study",previous:{title:"Recursive - flatten \ubb38\uc81c\ud574\uacb0",permalink:"/mitchell-dictionary/docs/algorithm/flatten"},next:{title:"box-sizing",permalink:"/mitchell-dictionary/docs/troubles/box-sizing"}},i={},a=[{value:"\uc65c \uc774\uc0c1\ud55c \uc774\uc911\ubc30\uc5f4\uc774 \ub9cc\ub4e4\uc5b4\uc84c\uc744\uae4c?",id:"\uc65c-\uc774\uc0c1\ud55c-\uc774\uc911\ubc30\uc5f4\uc774-\ub9cc\ub4e4\uc5b4\uc84c\uc744\uae4c",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"arrayfrom\uacfc-arrayfill\ub85c-\ube48-\uc774\uc911\ubc30\uc5f4\uc744-\ub9cc\ub4e4\uba74-\uc548\ub418\uc694",children:"Array.from\uacfc Array.fill\ub85c \ube48 \uc774\uc911\ubc30\uc5f4\uc744 \ub9cc\ub4e4\uba74 \uc548\ub418\uc694."}),"\n",(0,t.jsx)(n.p,{children:"\ube48 \uc774\uc911\ubc30\uc5f4\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud574 \ub2e4\uc74c\uacfc \uac19\uc774 \ud558\uc600\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const nested = Array.from({ length: n }).fill(Array.from({ length: n }))\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uadf8\ub9ac\uace0 \ud2b9\uc815 \uc704\uce58\uc758 \uc6d0\uc18c\uc5d0 \ub300\ud574 \uac12\uc744 \ubc14\uafb8\uc5c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"nested[0, 0] = 1\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uadf8\ub7f0\ub370 nested\uc758 \uac12\uc774 \uc774\uc0c1\ud558\ub2e4. [0, 1]\uc758 \uc6d0\uc18c\ub9cc \ubc14\ub014 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\uc5c8\uc73c\ub098 \uadf8\ub807\uc9c0 \uc54a\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"console.log(nested)\n// [[1, 0, 0, ... ,0], [1, 0, 0, ... ,0], ...]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\uc65c-\uc774\uc0c1\ud55c-\uc774\uc911\ubc30\uc5f4\uc774-\ub9cc\ub4e4\uc5b4\uc84c\uc744\uae4c",children:"\uc65c \uc774\uc0c1\ud55c \uc774\uc911\ubc30\uc5f4\uc774 \ub9cc\ub4e4\uc5b4\uc84c\uc744\uae4c?"}),"\n",(0,t.jsx)(n.p,{children:"\uc774\uc911\ubc30\uc5f4\uc744 \uc0dd\uc131\ud588\ub358 \ubd80\ubd84\uc744 \ub2e4\uc2dc \ud55c\ubc88 \uc0b4\ud3b4\ubcf4\uc790. \uc2e4\uc81c\ub85c \uc800\ub807\uac8c \ub3d9\uc791\ud558\ub3c4\ub85d \ub9cc\ub4e4\uc5c8\uae30 \ub54c\ubb38\uc774\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uae38\uc774\uac00 n\uc778 \ube48 \ubc30\uc5f4\uc744 \uae38\uc774\uac00 n\uc778 \ube48 \ubc30\uc5f4\uc758 \uc6d0\uc18c\ub85c \ucc44\uc6b0\ub294 \uacfc\uc815\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"Array.fill"})," \uba54\uc18c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc600\uace0, \uac01 \uc6d0\uc18c\ub97c \uc21c\ud68c\ud558\uba70 \uae38\uc774\uac00 n\uc778 \ube48 \ubc30\uc5f4\uc744 \uc0dd\uc131\ud558\uc5ec \ucc44\uc6cc\uc904 \uac83\uc73c\ub85c \uc608\uc0c1\ud558\uc600\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub7ec\ub098 \uc2e4\uc81c\ub85c\ub294 ",(0,t.jsx)(n.code,{children:"Array.fill"}),"\uc5d0 \ud560\ub2f9\ub41c \uc778\uc790\uc758 \ucc38\uc870\uac12\uc744 \uac01 \uc6d0\uc18c\ub9c8\ub2e4 \ucc44\uc6b0\uac8c \ub41c\ub2e4. \uacf5\uc2dd\ubb38\uc11c\uc758 \uc124\uba85\uc5d0\ub3c4 \uadf8\ub807\ub2e4\uace0 \ub098\uc640\uc788\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:["| ",(0,t.jsx)(n.code,{children:"value"}),"\uac00 \uac1d\uccb4\uc778 \uacbd\uc6b0, \ubc30\uc5f4\uc758 \uac01 \uc2ac\ub86f\uc740 \ud574\ub2f9 \uac1d\uccb4\ub97c \ucc38\uc870\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\ub530\ub77c\uc11c \uc704\uc5d0\uc11c [0, 1]\uc758 \uc6d0\uc18c\ub97c \ubc14\uafb8\uc5c8\uc744 \ub54c \ud574\ub2f9 \ubc30\uc5f4\uc758 \uac19\uc740 \ucc38\uc870\uac12\uc744 \ub4e4\uace0 \uc788\ub358 \ubaa8\ub4e0 \uc6d0\uc18c\uc758 \uac12\uc774 \ubc14\ub00c\ub294 \uacb0\uacfc\ub97c \uc5bb\uac8c \ub418\ub294 \uac83\uc774\ub2e4."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var t=r(7294);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);