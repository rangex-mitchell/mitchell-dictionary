"use strict";(self.webpackChunkmitchell_dictionary=self.webpackChunkmitchell_dictionary||[]).push([[8983],{7124:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>i});var t=r(5893),o=r(1151);const s={authors:"mitchell",title:"renderHook\uc758 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0",date:new Date("2024-04-17T00:00:00.000Z"),tags:["testing-library","rtl","testing","hook","renderHook"],description:"renderHook \ub3d9\uc791\uc758 \uc774\ud574\uc640 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud55c \ub300\ucc98",keywords:["frontend","testing-library","rtl","testing","hook","renderHook","react","unit test"]},c="renderHook\uc758 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0",d={id:"troubles/render-hook",title:"renderHook\uc758 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0",description:"renderHook \ub3d9\uc791\uc758 \uc774\ud574\uc640 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud55c \ub300\ucc98",source:"@site/docs/troubles/render-hook.md",sourceDirName:"troubles",slug:"/troubles/render-hook",permalink:"/mitchell-dictionary/docs/troubles/render-hook",draft:!1,unlisted:!1,tags:[{label:"testing-library",permalink:"/mitchell-dictionary/docs/tags/testing-library"},{label:"rtl",permalink:"/mitchell-dictionary/docs/tags/rtl"},{label:"testing",permalink:"/mitchell-dictionary/docs/tags/testing"},{label:"hook",permalink:"/mitchell-dictionary/docs/tags/hook"},{label:"renderHook",permalink:"/mitchell-dictionary/docs/tags/render-hook"}],version:"current",frontMatter:{authors:"mitchell",title:"renderHook\uc758 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0",date:"2024-04-17T00:00:00.000Z",tags:["testing-library","rtl","testing","hook","renderHook"],description:"renderHook \ub3d9\uc791\uc758 \uc774\ud574\uc640 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uc0ac\uc6a9\ubc95\uc5d0 \ub300\ud55c \ub300\ucc98",keywords:["frontend","testing-library","rtl","testing","hook","renderHook","react","unit test"]},sidebar:"study",previous:{title:"box-sizing",permalink:"/mitchell-dictionary/docs/troubles/box-sizing"}},l={},i=[{value:"\ubb38\uc81c\uc758 \uc6d0\uc778",id:"\ubb38\uc81c\uc758-\uc6d0\uc778",level:2},{value:"\ud574\uacb0\ubc29\ubc95",id:"\ud574\uacb0\ubc29\ubc95",level:2},{value:"\uc65c \uadf8\ub7f4\uae4c?",id:"\uc65c-\uadf8\ub7f4\uae4c",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"renderhook\uc758-\uc0c1\ud0dc\ubcc0\ud654\uac00-\ubc1c\uc0dd\ud558\uc9c0-\uc54a\ub294-\uacbd\uc6b0",children:"renderHook\uc758 \uc0c1\ud0dc\ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0"}),"\n",(0,t.jsxs)(n.p,{children:["\ud604\uc7ac \uc571\uc758 \uceec\ub7ec\ud14c\ub9c8\ub97c \ub2e4\ub8e8\ub294 ",(0,t.jsx)(n.code,{children:"useThemeMode"})," \ucee4\uc2a4\ud140 \ud6c5\uc744 \uc544\ub798\uc640 \uac19\uc774 \ud14c\uc2a4\ud2b8\ud558\ub824\uace0 \ud569\ub2c8\ub2e4. \uae30\ubcf8 \uac12\uc740 'light'\uc774\uba70, ",(0,t.jsx)(n.code,{children:"changeTheme"}),"\uc744 \ud638\ucd9c\ud558\uc5ec \ud14c\ub9c8\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"const renderUseThemeMode = () => {\n  const { result } = renderHook(() => useThemeMode())\n\n  return result.current\n}\n\ndescribe('Test hook', () => {\n  test('render hook correctly', () => {\n    const { currentTheme, changeTheme } = renderUseThemeMode()\n\n    expect(currentTheme).toBe('light')\n\n    act(() => {\n      changeTheme('dark')\n    })\n\n    expect(currentTheme).toBe('dark')\n  })\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uccab\ubc88\uc9f8 assertion\uc5d0\uc11c\ub294 \uc608\uc0c1\ub300\ub85c \ud604\uc7ac \ud14c\ub9c8\uac00 \uae30\ubcf8 \uac12\uc778 'light'\ub77c\uace0 \ud1b5\uacfc\ud558\uac8c \ub429\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ub450\ubc88\uc9f8 assertion\uc5d0\uc11c \ud14c\ub9c8\uac00 'dark'\ub85c \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc544 \ud14c\uc2a4\ud2b8\uac00 \ucd5c\uc885\uc801\uc73c\ub85c \uc2e4\ud328\ud558\ub294 \uacb0\uacfc\ub97c \uc5bb\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uc0c1\ud0dc\uc758 \ubcc0\ud654\ub97c \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \ud568\uc218\uc778 ",(0,t.jsx)(n.code,{children:"changeTheme"}),"\ub3c4 ",(0,t.jsx)(n.code,{children:"act"}),"\uc758 \ub0b4\ubd80\uc5d0\uc11c \uc2e4\ud589\ud558\uc5ec \ubd84\uba85\ud788 \uc0c1\ud0dc \ubcc0\ud654\uac00 \ubc1c\uc0dd\ud558\uace0, \ud14c\uc2a4\ud2b8\uac00 \ud1b5\uacfc\ud574\uc57c\ud560\ud150\ub370\uc694. \uc65c \uc0c1\ud0dc\ubcc0\ud654\ub97c \ucd94\uc801\ud558\uc9c0 \ubabb\ud558\uace0 \uc788\ub294\uac78\uae4c\uc694?"]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\ubb38\uc81c\uc758-\uc6d0\uc778",children:"\ubb38\uc81c\uc758 \uc6d0\uc778"}),"\n",(0,t.jsxs)(n.p,{children:["\ubb38\uc81c\uc758 \uc6d0\uc778\uc740 ",(0,t.jsx)(n.code,{children:"renderUseThemeMode"})," \ud568\uc218\uc5d0 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\ub7ec \ud14c\uc2a4\ud2b8\ucf00\uc774\uc2a4\uc5d0 \uac78\uccd0 \ud3b8\ud558\uac8c \ud6c5\uc744 \ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud574 \ub9cc\ub4e4\uc5b4\ub454 \ud568\uc218\uc778\ub370\uc694. \ub0b4\ubd80 \uad6c\ud604\uc744 \ubcf4\uba74 ",(0,t.jsx)(n.code,{children:"renderHook"}),"\uc758 \ubc18\ud658 \uac12 \uc911 ",(0,t.jsx)(n.code,{children:"result.current"}),"\ub97c \ubc18\ud658\ud558\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uac00 \ubc14\ub85c \ubb38\uc81c\uac00 \ub418\ub294 \ubd80\ubd84\uc778\ub370\uc694. \ucd08\uae30 \uc0c1\ud0dc\uc5d0 \ub300\ud55c \uac12\uc774 ",(0,t.jsx)(n.code,{children:"result.current"}),"\uc5d0\ub294 \ub4e4\uc5b4\uc788\uaca0\uc9c0\ub9cc, \uc0c1\ud0dc\uac00 \ubcc0\uacbd\ub418\ub354\ub77c\ub3c4 \uc774\uc804\uc758 \uac12\uc744 \uc720\uc9c0\ud558\uae30 \ub54c\ubb38\uc5d0 \ubcc0\uacbd\ub41c \uc0c1\ud0dc\ub85c assertion\uc744 \ud558\uba74 \uc2e4\ud328\ud558\uac8c \ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\ud574\uacb0\ubc29\ubc95",children:"\ud574\uacb0\ubc29\ubc95"}),"\n",(0,t.jsxs)(n.p,{children:["\ud574\uacb0\ubc29\ubc95\uc740 \uc544\uc8fc \uac04\ub2e8\ud558\uc9c0\ub9cc \uc870\uae08\uc740 \ubd88\ud3b8\ud560 \uc218 \uc788\ub294\ub370\uc694. ",(0,t.jsx)(n.code,{children:"result.current"}),"\ub97c \ubcc4\ub3c4\uc758 \ubcc0\uc218\uc5d0 \ud560\ub2f9\ud558\uc9c0 \uc54a\uace0 \uc0ac\uc6a9\ud558\uba74 \uc0c1\ud0dc \ubcc0\ud654\ub97c \uc815\uc0c1\uc801\uc73c\ub85c \ucd94\uc801\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4. \uc774\uc5d0 \ub530\ub77c ",(0,t.jsx)(n.code,{children:"renderUseThemeMode"})," \ub80c\ub354\ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0, ",(0,t.jsx)(n.code,{children:"renderHook"}),"\uc744 \uc9c1\uc811 \ud638\ucd9c\ud558\ub3c4\ub85d \ubcc0\uacbd\ud558\uc600\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"describe('Test hook', () => {\n  test('render hook correctly', () => {\n    const { result } = renderHook(() => useThemeMode())\n\n    expect(result.current.currentTheme).toBe('light')\n\n    act(() => {\n      result.current.changeTheme('dark')\n    })\n\n    expect(result.current.currentTheme).toBe('dark')\n  })\n})\n"})}),"\n",(0,t.jsx)(n.p,{children:"\uc774\uc81c \uc815\uc0c1\uc801\uc73c\ub85c \uc0c1\ud0dc \ubcc0\ud654\ub97c \ucd94\uc801\ud558\uc5ec, \ub9c8\uc9c0\ub9c9 assertion\uc744 \ud1b5\uacfc\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(n.h2,{id:"\uc65c-\uadf8\ub7f4\uae4c",children:"\uc65c \uadf8\ub7f4\uae4c?"}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub807\ub2e4\uba74 \uc65c ",(0,t.jsx)(n.code,{children:"result.current"}),"\uc744 \ub2e4\ub978 \ubcc0\uc218\uc5d0 \uc120\uc5b8\ud558\uba74 \uc0c1\ud0dc \ubcc0\ud654\ub97c \ucd94\uc801\ud558\uc9c0 \ubabb\ud560\uae4c\uc694? \uc6b0\uc120 ",(0,t.jsx)(n.code,{children:"result.current"}),"\uc758 \uc815\uccb4\uac00 \ubb34\uc5c7\uc778\uc9c0 ",(0,t.jsx)(n.code,{children:"renderHook"})," \ud568\uc218\uc758 \uad6c\ud604\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"function renderHook(renderCallback, options = {}) {\n  const {initialProps, ...renderOptions} = options\n  const result = React.createRef()\n\n  // \ud14c\uc2a4\ud2b8\uc6a9 \ud568\uc218 \ucef4\ud3ec\ub10c\ud2b8 \uc0dd\uc131\n  // \uacb0\uacfc\ub97c ref\uc758 current\ub85c \uc804\ub2ec\n  function TestComponent({renderCallbackProps}) {\n    // \uc804\ub2ec\ud55c \ucee4\uc2a4\ud140 \ud6c5\n    const pendingResult = renderCallback(renderCallbackProps)\n\n    // \uc758\uc874\uc131 \ubc30\uc5f4\uc744 \uc124\uc815\ud558\uc9c0 \uc54a\uc558\uc73c\ubbc0\ub85c \ub9e4 \ub80c\ub354\ub9c1\ub9c8\ub2e4 result.current\uc758 \uac12\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4.\n    React.useEffect(() => {\n      result.current = pendingResult\n    })\n\n    return null\n  }\n\n  // \ud14c\uc2a4\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub80c\ub354, \uc989 \ucee4\uc2a4\ud140 \ud6c5\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\n  const {rerender: baseRerender, unmount} = render(\n    <TestComponent renderCallbackProps={initialProps} />,\n    renderOptions,\n  )\n\n  // \ub9ac\ub80c\ub7ec\ub354 \ud568\uc218 \uc0dd\uc131\n  function rerender(rerenderCallbackProps) {\n    return baseRerender(\n      <TestComponent renderCallbackProps={rerenderCallbackProps} />,\n    )\n  }\n\n  return {result, rerender, unmount}\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\ucee4\uc2a4\ud140 \ud6c5\uc758 \ubcc0\uacbd\ub41c \uc0c1\ud0dc\uac00 ",(0,t.jsx)(n.code,{children:"React.creatRef"}),"\ub85c \uc0dd\uc131\ub41c ",(0,t.jsx)(n.code,{children:"result.current"}),"\ub85c \ubc18\uc601\ub418\ub3c4\ub85d \uc124\uacc4 \ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4. ",(0,t.jsx)(n.code,{children:"result.current"}),"\uc758 \ucc38\uc870\ub294 ",(0,t.jsx)(n.code,{children:"React.creatRef"}),"\ub85c \uc0dd\uc131\ub418\uc5b4 \ub80c\ub354\ub9c1\uc774\ub098 \uc0c1\ud0dc\ubcc0\ud654\uc5d0\ub3c4 \ucc38\uc870\uac00 \ubc14\ub00c\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ucc38\uc870\ub294 \ubc14\ub00c\uc9c0 \uc54a\ub294\ub370, \uadf8 \uc548\uc758 \uac12\uc740 \ubc14\ub00c\uae30 \ub54c\ubb38\uc5d0 renderHook\uc758 ",(0,t.jsx)(n.code,{children:"result.current"}),"\ub85c \ucc38\uc870\ud558\ub294 \uacbd\uc6b0 \uc0c1\ud0dc \ubcc0\uacbd\uc5d0 \ub300\ud55c \uac12\uc744 \uc9c0\uc18d\ud574\uc11c \ucd94\uc801\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>c});var t=r(7294);const o={},s=t.createContext(o);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);