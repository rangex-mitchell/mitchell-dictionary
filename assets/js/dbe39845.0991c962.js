"use strict";(self.webpackChunkmitchell_dictionary=self.webpackChunkmitchell_dictionary||[]).push([[7253],{5218:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(5893),o=t(1151);const r={title:"React Compiler: Everything You Need to Know",description:"Translation React Compiler: Everything You Need to Know for Korean",keywords:["react","javascript","webdev","compiler","typescript","react19"]},c="React Compiler: Everything You Need to Know",l={id:"translation/react-compiler",title:"React Compiler: Everything You Need to Know",description:"Translation React Compiler: Everything You Need to Know for Korean",source:"@site/docs/translation/react-compiler.md",sourceDirName:"translation",slug:"/translation/react-compiler",permalink:"/mitchell-dictionary/docs/translation/react-compiler",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"React Compiler: Everything You Need to Know",description:"Translation React Compiler: Everything You Need to Know for Korean",keywords:["react","javascript","webdev","compiler","typescript","react19"]},sidebar:"dictiondary",previous:{title:"Polymorphic React Component",permalink:"/mitchell-dictionary/docs/translation/polymorphic"},next:{title:"Top Level Await",permalink:"/mitchell-dictionary/docs/translation/top-level-await"}},a={},s=[{value:"\uc11c\ub860",id:"\uc11c\ub860",level:2},{value:"\ub9ac\uc561\ud2b8\uc758 \uba58\ud0c8 \ubaa8\ub378",id:"\ub9ac\uc561\ud2b8\uc758-\uba58\ud0c8-\ubaa8\ub378",level:2},{value:"\ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub4e4",id:"\ubd88\ud544\uc694\ud55c-\ub9ac\ub80c\ub354\ub4e4",level:2},{value:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc774\ub780?",id:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc774\ub780",level:2},{value:"React.memo",id:"reactmemo",level:3},{value:"useMemo",id:"usememo",level:3},{value:"useCallback",id:"usecallback",level:3},{value:"\ucef4\ud30c\uc77c\ub7ec\uc758 \ud544\uc694\uc131",id:"\ucef4\ud30c\uc77c\ub7ec\uc758-\ud544\uc694\uc131",level:2},{value:"\ub9ac\uc561\ud2b8 \ucef4\ud30c\uc77c\ub7ec\ub85c\uc758 \uc774\ub3d9",id:"\ub9ac\uc561\ud2b8-\ucef4\ud30c\uc77c\ub7ec\ub85c\uc758-\uc774\ub3d9",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"react-compiler-everything-you-need-to-know",children:"React Compiler: Everything You Need to Know"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Mohamed Jubair\ub2d8\uc758 \ud3ec\uc2a4\ud2b8 ",(0,i.jsx)(n.em,{children:"React Compiler: Everything You Need to Know"}),"\ub97c \ubc88\uc5ed\ud558\uc600\uc2b5\ub2c8\ub2e4.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"https://dev.to/mjubair/react-compiler-everything-you-need-to-know-51b9",children:"\uc6d0\ubcf8 \ubc14\ub85c\uac00\uae30"})]})}),"\n",(0,i.jsx)(n.p,{children:"\uc6b0\ub9ac\uac00 \ub9ac\uc561\ud2b8 \ucf54\ub4dc\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\uacfc \ub9ac\ub80c\ub354\ub9c1 \ubb38\uc81c\ub97c \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uace0\ub3c4 \uc791\uc131\ud560 \uc218 \uc788\ub2e4\uba74 \uc5b4\ub5a8\uae4c\uc694? \uc774\uac8c \ubc14\ub85c React 19(\uace7 \ub2e4\uac00\uc62c \ub110\ub9ac \uc0ac\uc6a9\ub418\ub294 \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uc720\uc800 \uc778\ud130\ud398\uc774\uc2a4 \uc0dd\uc131 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc758 \uba54\uc774\uc800 \ubc84\uc804)\uac00 \uc81c\uacf5\ud558\uae30 \uc57d\uc18d\ud55c \uac83\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \uba54\ubaa8\uc774\uc81c\uc774\uc158\uacfc \ub9ac\ub80c\ub354\ub9c1 \uacfc\uc815\uc744 \ucef4\ud30c\uc77c\ub7ec \uc544\ud0a4\ud14d\uccd0\ub85c \uc62e\uae40\uc73c\ub85c\uc368 \uac04\ub2e8\ud558\uac8c \ub9cc\ub4dc\ub294 \uac83\uc744 \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 \ucef4\ud30c\uc77c\ub7ec\uac00 \ud544\uc694\ud55c \uc774\uc720\uc640 \uadf8\uac83\uc774 \ud574\uacb0\ud558\ub294 \uacfc\uc81c\uc5d0 \ub300\ud574\uc11c \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\uc11c\ub860",children:"\uc11c\ub860"}),"\n",(0,i.jsx)(n.p,{children:"\ucd5c\uadfc\uc758 \ube14\ub85c\uadf8 \uac8c\uc2dc\ubb3c\uc5d0\uc11c \ub9ac\uc561\ud2b8\ud300\uc774 Actions, Directive, Document Metadata \ubc0f Asset Loading\uacfc \ud568\uaed8 React \ucef4\ud30c\uc77c\ub7ec\ub97c \ud3ec\ud568\ud558\uc5ec \ub9ac\uc561\ud2b8 19\uc5d0\uc11c \ubc30\ud3ec\ub420 \uac83\uc73c\ub85c \uc608\uc0c1\ub418\ub294 \uba87\uac00\uc9c0 \ud765\ubbf8\ub85c\uc6b4 \uae30\ub2a5\uc744 \uacf5\uac1c\ud558\uc600\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uadf8\ub4e4\uc740 \ub610\ud55c \ud504\ub85c\ub355\uc158\uc5d0\uc11c \uc774\ubbf8 \uc778\uc2a4\ud0c0\uadf8\ub7a8\uc5d0 \uc801\uc6a9\uc911\uc778 \uc0c8\ub85c\uc6b4 \ucef4\ud30c\uc77c\ub7ec\uc5d0 \ub300\ud574 \uc5b8\uae09\ud558\uc600\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8\ub4e4\uc740 \ucef4\ud30c\uc77c\ub7ec\uc758 \uccab \ubc88\uc9f8 \uc624\ud508\uc18c\uc2a4 \ubc84\uc804\uc744 \ucd9c\uc2dc\ud558\uae30 \uc704\ud574 \ub178\ub825\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8\uc758 \uadfc\ubcf8 \uc6d0\ub9ac\ub97c \uc774\ud574\ud558\ub294 \uac83\uc73c\ub85c \uc774\uc81c \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\ub9ac\uc561\ud2b8\uc758-\uba58\ud0c8-\ubaa8\ub378",children:"\ub9ac\uc561\ud2b8\uc758 \uba58\ud0c8 \ubaa8\ub378"}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8\ub294 '\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc \ubcc0\ud654\uc5d0 \ub530\ub978 UI \ub9ac\ub80c\ub354\ub9c1'\uc774\ub77c\ub294 \ud575\uc2ec \uc6d0\uce59\uc73c\ub85c \uc791\ub3d9\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \uac1c\ubc1c\uc790\ub4e4\uc774 UI\uc758 \uc554\uc2dc\uc801\uc73c\ub85c DOM\uc744 \uc5b4\ub5bb\uac8c \uc870\uc791\ud560 \uac83\uc778\uc9c0 \ub2e8\uacc4\ubcc4 \uc9c0\uc2dc\ub97c \uc791\uc131\ud558\uae30 \ubcf4\ub2e4\ub294 \uc6d0\ud558\ub294 \ucd5c\uc885 \uc0c1\ud0dc\ub97c \ubb18\uc0ac\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ub0b4\ubd80\uc801\uc73c\ub85c, \ub9ac\uc561\ud2b8\ub294 \uac00\uc0c1 DOM\uc774\ub77c\ub294 \ud604\uba85\ud55c \uc804\ub7b5\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uc774 in-memory UI \ud45c\ud604\uc740 \ub9ac\uc561\ud2b8\uac00 \ud6a8\uc728\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ud544\uc694\ud55c \ud2b9\uc815 DOM \uc694\uc18c\ub4e4\uc744 \ud310\ubcc4\ud558\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc \ubcc0\ud654\uc5d0 \ub530\ub77c, \ub9ac\uc561\ud2b8\ub294 \uc2e4\uc81c DOM\uacfc \uac00\uc0c1 DOM\uc744 \ube44\uad50\ud558\uace0, \uc218\uc815\uc774 \ud544\uc694\ud55c \uc0ac\ud56d\uc758 \ucd5c\uc18c\ud55c\uc758 \uad6c\uc131\uc744 \uc9da\uc5b4\uc8fc\uace0, \uc815\ud655\ud558\uac8c \uc2e4\uc81c DOM\uc744 \uc5c5\ub370\uc774\ud2b8\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ud558\uc9c0\ub9cc \uc5ec\uae30\uc5d0\uc11c \ud55c \uac00\uc9c0 \ubb38\uc81c\uac00 \uc788\ub294\ub370, \uadf8\uac83\uc740 \ub9ac\uc561\ud2b8\uac00 \uc131\ub2a5 \ubb38\uc81c\uc758 \uc6d0\uc778\uc774 \ub418\ub294 \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub97c \ubc1c\uc0dd\ud0a8\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\ubd88\ud544\uc694\ud55c-\ub9ac\ub80c\ub354\ub4e4",children:"\ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub4e4"}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8\uc758 \ubc18\uc751\uc131\uc740 \uac15\uc810\uc774\uc9c0\ub9cc, \uadf8\uac83\uc740 \ub54c\ub85c \uacfc\ub3c4\ud55c \ub9ac\ub80c\ub354\ub97c \uc57c\uae30\ud569\ub2c8\ub2e4. \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\uc758 \uac1d\uccb4\ub098 \ubc30\uc5f4 \uac19\uc740 \ubcf5\uc7a1\ud55c \ub370\uc774\ud130 \uad6c\uc870\ub4e4\uc744 \ube44\uad50\ud558\ub294\uac8c \uacc4\uc0b0\uc801\uc73c\ub85c \ube44\uc2f8\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4. \ub9cc\uc57d \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc0c8\ub85c\uc6b4 \uac1d\uccb4\ub098 \ubc30\uc5f4\uc744 \ub9e4 \ub80c\ub354\ub9c8\ub2e4 \uc0dd\uc131\ud55c\ub2e4\uba74, \ucf58\ud150\uce20\uac00 \uc2e4\uc81c\ub85c \ubcc0\uacbd\ub41c \uc544\ub2d0\uc9c0\ub77c\ub3c4, \ub9ac\uc561\ud2b8 \uc548\uc5d0\uc11c\ub294 \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc774\uac78 \ubc29\uc9c0\ud558\ub824\uba74, \uac1c\ubc1c\uc790\ub4e4\uc740 \uba54\ubaa8\uc774\uc81c\uc774\uc158 \uae30\uc220\uc744 \uc0ac\uc6a9\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc744 \uc758\ub3c4\uc801\uc73c\ub85c \ucd5c\uc801\ud654\ud574 \ub9ac\uc561\ud2b8\uac00 \ub370\uc774\ud130\uac00 \uc815\ub9d0\ub85c \ubcc0\uacbd\ub418\uc5c8\uc744 \ub54c\ub9cc \uc5c5\ub370\uc774\ud2b8\ub418\ub3c5 \ud574\uc57c\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc774\ub780",children:"\uba54\ubaa8\uc774\uc81c\uc774\uc158\uc774\ub780?"}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8\uc5d0\uc11c \uba54\ubaa8\uc774\uc81c\uc774\uc158\uc740 \uc785\ub825 \ub9e4\uac1c\ubcc0\uc218\ub97c \uae30\ubc18\uc73c\ub85c \ube44\uc2fc \uacc4\uc0b0\uc774\ub098 \ucef4\ud3ec\ub10c\ud2b8 \uacb0\uacfc\ub97c \uc800\uc7a5\ud558\uace0 \uc7ac\uc0ac\uc6a9\ud558\ub294 \uc131\ub2a5 \ucd5c\uc801\ud654 \uae30\uc220\uc785\ub2c8\ub2e4. \uc8fc\uc694 \ubaa9\uc801\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \ubd88\ud544\uc694\ud55c \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\uace0, \uc774\uc5d0 \ub530\ub77c \uc804\uccb4\uc801\uc778 \ub9ac\uc561\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ud6a8\uc728\uc131\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158 \ud560 \uc218 \uc787\ub294 \ub2e4\uc591\ud56d \ubc29\ubc95\uc744 \uc81c\uacf5\ud558\uc5ec, \ub9ac\ub80c\ub354\ub9c1\uc744 \ubc29\uc9c0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"reactmemo",children:"React.memo"}),"\n",(0,i.jsx)(n.p,{children:"props\uac00 \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc558\uc744 \ub54c \ucef4\ud3ec\ub10c\ud2b8 \ub9ac\ub80c\ub354\ub9c1\uc744 \uac74\ub108\ub6f8 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 \uace0\ucc28\ud568\uc218\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const MemoizedComponent = React.memo((props) => {\n    // Component logic here\n});\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usememo",children:"useMemo"}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\ub80c\ub354 \uc0ac\uc774\uc758 \uacc4\uc0b0\uacb0\uacfc\ub97c \uce90\uc2dc\ud574\uc8fc\ub294 \ub9ac\uc561\ud2b8 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const memoizedResult = useMemo(() => {\n    // Expensive computation\n}, [dependency1, dependency2]);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"usecallback",children:"useCallback"}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\ub80c\uc11c \uc0ac\uc774\uc758 \ud568\uc218 \uc815\uc758\ub97c \uce90\uc2dc\ud574\uc8fc\ub294 \ub9ac\uc561\ud2b8 \ud6c5\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"const memoizedCallback = useCallback(() => {\n   // Callback logic\n}, [dependency1, dependency2]);\n"})}),"\n",(0,i.jsx)(n.p,{children:"\ud604\uc7ac\ub85c\ub294, \uac1c\ubc1c\uc790\ub4e4\uc774 \ub370\uc774\ud130\uac00 \ubcc0\uacbd\ub420 \ub54c \uc571\uc758 \ub9ac\ub80c\ub354 \ubd80\ubd84\uc744 \uc9c1\uc811 \uc81c\uc5b4\ud558\uae30 \uc704\ud574\uc11c \uc774\ub7ec\ud55c useMemo, useCallback, memo\uc640 \uac19\uc740 API\ub4e4\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. \uc774\uac74 \uc880 \uace0\ud1b5\uc785\ub2c8\ub2e4! \uc774\uac83\uc740 \ucf54\ub4dc\ub97c \uc5b4\uc9c0\ub7fd\ud788\uace0, \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\uae30 \uc26c\uc6b0\uba70, \uc9c0\uc18d\uc801\uc778 \uc720\uc9c0\ubcf4\uc218\ub97c \ud544\uc694\ub85c \ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \ub610\ud55c \ub9ac\uc561\ud2b8 \uba58\ud0c8 \ubaa8\ub378\uc758 \ud575\uc2ec \uc6d0\uce59\uc5d0\uc11c \uba40\uc5b4\uc9c0\uac8c \ud569\ub2c8\ub2e4. \ub9ac\uc561\ud2b8\ub294 \uc9c0\uae08 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc0c1\ud0dc\uc5d0 \uae30\ubc18\ud558\uc5ec \uc120\uc5b8\uc801\uc73c\ub85c \ub80c\ub354\ub9c1\ud558\uae30 \ubcf4\ub2e4\ub294 \uc554\uc2dc\uc801\uc73c\ub85c \uc6b0\ub9ac\uac00 UI\ub97c \uc5b4\ub5bb\uac8c \ub80c\ub354\ud560 \uac83\uc778\uc9c0 \uc124\uba85\ud558\ub3c4\ub85d \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\ucef4\ud30c\uc77c\ub7ec\uc758-\ud544\uc694\uc131",children:"\ucef4\ud30c\uc77c\ub7ec\uc758 \ud544\uc694\uc131"}),"\n",(0,i.jsx)(n.p,{children:"\uc804\ud1b5\uc801\uc73c\ub85c, \ub9ac\uc561\ud2b8\ub294 JSX \ucf54\ub4dc\ub97c \ube0c\ub77c\uc6b0\uc800\ub97c \uc704\ud55c \ucd5c\uc801\ud654\ub41c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c\ub85c \ubcc0\ud658\ud558\ub294 \ubc88\ub4e4\ub9c1\uc774\ub77c\uace0 \ubd88\ub9ac\ub294 \uacfc\uc815\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc0c8\ub85c\uc6b4 \ucef4\ud30c\uc77c\ub7ec\ub294 \uc774 \uac1c\ub150\uc744 \ud55c \ub2e8\uacc4 \ud655\uc7a5\ud569\ub2c8\ub2e4. \uadf8\uac83\uc740 \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc758 \uad6c\uc870\uc640 \uc758\uc874\uc131\uc744 \uc774\ud574\ud558\uc5ec \ub354 \uae4a\uc740 \uacf3\uc5d0\uc11c\ubd80\ud130 \ucf54\ub4dc\ub97c \ubd84\uc11d\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc774\ub807\uac8c \ud558\uba74 \ub9ac\uc561\ud2b8\ub294 \uac1c\ubc1c\uc790\ub4e4\uc774 \ub9ac\uc561\ud2b8\uc5d0 \ub300\ud574 \uc5b4\ub5bb\uac8c \uc0dd\uac01\ud558\uace0 \uc801\uc6a9\ud574\uc57c\ud558\ub294 \uc9c0\uc5d0 \ub300\ud55c \uba58\ud0c8 \ubaa8\ub378\uc744 \ubc14\uafb8\uc9c0 \uc54a\uace0\ub3c4 \uc790\ub3d9\uc73c\ub85c \ub9ac\ub80c\ub354 \ud589\uc704\ub97c \ucd5c\uc801\ud654\ud558\uac8c \ub429\ub2c8\ub2e4. \uc774\uac8c \ub9ac\uc561\ud2b8\ub97c \uc704\ud55c \ucd5c\uc801\ud654\ub41c \ucef4\ud30c\uc77c\ub7ec\ub97c \uac1c\ubc1c\ud558\ub294\ub370 \ud22c\uc790\ud558\ub294 \uc774\uc720\uc785\ub2c8\ub2e4. - \uc774\uac83\uc740 \uc5c5\ub370\uc774\ud2b8\uc5d0 \ub300\ud574\uc11c \ub9ac\uc561\ud2b8\uac00 \ub354 \ub611\ub611\ud560 \uc218 \uc788\uac8c \ub3c4\uc640\uc90d\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc774\uac83\uc5d0 \ub300\ud574 \uc0dd\uac01\ud560 \uc218 \uc788\ub294 \ud55c\uac00\uc9c0 \ubc29\ubc95\uc740 \ub9ac\uc561\ud2b8\uac00 \ud604\uc7ac\ub85c\ub294 \uac1d\uccb4\uc758 \uc2dd\ubcc4\uc774 \ubcc0\ud588\uc744 \ub54c \ub9ac\ub80c\ub354 \ud558\ub294 \uac83\uc785\ub2c8\ub2e4. \uc0c8 \ucef4\ud30c\uc77c\ub7ec\ub85c\ub294, \uae4a\uc740 \ube44\uad50\ub97c \uc704\ud55c \ub7f0\ud0c0\uc784 \ube44\uc6a9\ubc1c\uc0dd \uc5c6\uc774\ub3c4 \ub9ac\uc561\ud2b8\ub294 \uc758\ubbf8\uc788\ub294 \uac12\uc758 \ubcc0\ud654\uac00 \uc788\uc744 \ub54c \ub9ac\ub80c\ub354\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h2,{id:"\ub9ac\uc561\ud2b8-\ucef4\ud30c\uc77c\ub7ec\ub85c\uc758-\uc774\ub3d9",children:"\ub9ac\uc561\ud2b8 \ucef4\ud30c\uc77c\ub7ec\ub85c\uc758 \uc774\ub3d9"}),"\n",(0,i.jsx)(n.p,{children:"\ub9ac\uc561\ud2b8 \ucef4\ud30c\uc77c\ub7ec\uac00 \uc81c\uacf5\ud574\uc904 \uc218 \uc788\ub294 \uc7a0\uc7ac\uc801\uc778 \ud6a8\uacfc\ub294 \ubd80\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \ud504\ub85c\uc81d\ud2b8\uac00 \uc9c4\ud589\ub428\uc5d0 \ub530\ub77c, \uc6b0\ub9ac\ub294 \ub9ac\uc561\ud2b8 \uc560\ud50c\ucf00\uc774\uc158\uc774 \uc5b4\ub5bb\uac8c \ube4c\ub4dc\ub418\uace0 \ucd5c\uc801\ud654\ub418\ub294\uc9c0\uc5d0 \ub300\ud55c \uc911\uc694\ud55c \ubcc0\ud654\ub97c \uc608\uc0c1\ud574\ubcfc \uc218 \uc788\uc73c\uba70, \uc774 \ubcc0\ud654\ub294 \ud575\uc2ec\uc801\uc778 \uc131\ub2a5 \ud5a5\uc0c1, \uac04\uc18c\ud654\ub41c \uac1c\ubc1c\uc790 \uacbd\ud5d8 \uadf8\ub9ac\uace0 \ucf54\ub4dc \uc720\uc9c0\ubcf4\uc218\uc5d0 \ub300\ud55c \ud5a5\uc0c1\uc73c\ub85c\ub3c4 \uc774\uc5b4\uc9c4\ub2e4\uace0 \uc608\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\uc774\uac83\uc740 \ub9ac\uc561\ud2b8\uc758 \ubbf8\ub798\uc5d0 \ub300\ud55c \uc911\uc694\ud55c \uc6c0\uc9c1\uc784\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \uc9c0\uc18d\uc801\uc73c\ub85c \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud5a5\uc0c1\uc2dc\ud0a4\uace0 \uac1c\ubc1c\uc790\ub4e4\uc774 \ub6f0\uc5b4\ub09c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \ub9cc\ub4e4\uc5b4\ub0bc \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \ub9ac\uc561\ud2b8\ud300\uc758 \uc9c0\uc18d\uc801\uc778 \ub178\ub825\uc5d0 \ub300\ud55c \uc785\uc99d\uc785\ub2c8\ub2e4."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>c});var i=t(7294);const o={},r=i.createContext(o);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);