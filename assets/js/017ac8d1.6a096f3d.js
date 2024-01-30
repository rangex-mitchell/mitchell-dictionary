"use strict";(self.webpackChunkmitchell_dictionary=self.webpackChunkmitchell_dictionary||[]).push([[523],{2084:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/emotion/emotion-mechanism","metadata":{"permalink":"/mitchell-dictionary/blog/emotion/emotion-mechanism","source":"@site/blog/emotion/emotion-mechanism.mdx","title":"Emotion\uc774 CSS\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95","description":"css in js \ub77c\uc774\ube0c\ub7ec\ub9ac emotion\uc758 \ub3d9\uc791 \uc6d0\ub9ac \ubc0f \uba54\ucee4\ub2c8\uc998","date":"2024-01-28T00:00:00.000Z","formattedDate":"2024\ub144 1\uc6d4 28\uc77c","tags":[{"label":"emotion","permalink":"/mitchell-dictionary/blog/tags/emotion"},{"label":"css","permalink":"/mitchell-dictionary/blog/tags/css"},{"label":"css in js","permalink":"/mitchell-dictionary/blog/tags/css-in-js"}],"readingTime":17.765,"hasTruncateMarker":true,"authors":[{"name":"Mitchell","title":"Frontend Developer","url":"https://github.com/rangex-mitchell","imageURL":"https://github.com/rangex-mitchell.png","key":"mitchell"}],"frontMatter":{"authors":"mitchell","title":"Emotion\uc774 CSS\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95","date":"2024-01-28T00:00:00.000Z","tags":["emotion","css","css in js"],"description":"css in js \ub77c\uc774\ube0c\ub7ec\ub9ac emotion\uc758 \ub3d9\uc791 \uc6d0\ub9ac \ubc0f \uba54\ucee4\ub2c8\uc998","keywords":["css","css in js","emotion","styled-component","javascript","typescript","web","html","\uc774\ubaa8\uc158"]},"unlisted":false,"nextItem":{"title":"\ud6a8\uacfc\uc801\uc778 Emotion(CSS in JS) \uc0ac\uc6a9\uc744 \uc704\ud55c \uc81c\uc5b8","permalink":"/mitchell-dictionary/blog/2024/01/06/suggestion-for-effective-use-of-emotion"}},"content":"\ub300\ud45c\uc801\uc778 CSS in JS \ub77c\uc774\ube0c\ub7ec\ub9ac\uc778 Emotion\uc758 \uc18c\uc2a4\ucf54\ub4dc\ub97c \ubd84\uc11d\ud558\uba74\uc11c \ub3d9\uc791\uc6d0\ub9ac\ub97c \uc774\ud574\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub3d9\uc791\uc6d0\ub9ac\ub97c \uc774\ud574\ud558\uac8c \ub418\uba74 \uc7a5\uc810\uc744 \uadf9\ub300\ud654\ud558\uace0, \ub2e8\uc810\uc744 \ucd5c\uc18c\ud654\ud558\uc5ec \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ud6a8\uacfc\uc801\uc73c\ub85c \uc4f8 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \ubc1c\uacac\ud574\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 `@emotion/react`\uc640 cssProp\ub97c \uc911\uc2ec\uc73c\ub85c \uc124\uba85\ud569\ub2c8\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n### \uc8fc\uc758\uae4a\uac8c \ubcfc \ud328\ud0a4\uc9c0\\nEmotion\uc740 \uc2a4\ud0c0\uc77c\uc744 \uc0dd\uc131\ud558\uace0 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud55c \ub9ce\uc740 \ud328\ud0a4\uc9c0\ub4e4\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uadf8 \uc911 \uc804\uccb4\uc801\uc778 \ud750\ub984\uc744 \uc774\ud574\ud558\uae30 \uc704\ud574\uc11c \ub2e4\uc74c \ud328\ud0a4\uc9c0\ub4e4\uc758 \ucf54\ub4dc\ub97c \uc911\uc810\uc801\uc73c\ub85c \uc0b4\ud3b4\ubcf4\uac8c \ub429\ub2c8\ub2e4.   \\n[\uc804\uccb4 \ud328\ud0a4\uc9c0 \ubcf4\uae30](https://github.com/emotion-js/emotion/tree/main/packages)\\n\\n```bash\\npackages\\n\u251c\u2500\u2500 cache\\n\u251c\u2500\u2500 css\\n\u251c\u2500\u2500 react\\n\u251c\u2500\u2500 serialize\\n\u251c\u2500\u2500 sheet\\n\u251c\u2500\u2500 use-insertion-effect-with-fallbacks\\n\u251c\u2500\u2500 utils\\n```\\n\\n### \uc804\uccb4\uc801\uc778 \ub3d9\uc791 \uacfc\uc815\\n1. `@emotion/react`\uc5d0 \uc758\ud55c JSX \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub9c1\\n2. \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c React \ub80c\ub354\uc2dc\uc791\\n3. Emotion cache \uc0dd\uc131\\n4. cssProp\uc5d0 \uc804\ub2ec\ub41c \uc2a4\ud0c0\uc77c \uc9c1\ub82c\ud654\\n5. \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc744 \uce90\uc2dc\uc5d0 \ub4f1\ub85d \ubc0f \uc0bd\uc785\\n7. stylis\ub85c \uc2a4\ud0c0\uc77c\uc744 [CSSRule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule)\ub85c \ucef4\ud30c\uc77c\\n8. \ucef4\ud30c\uc77c\ub41c [CSSrule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule)\uc744 HTML\ubb38\uc11c\uc5d0 \uc0bd\uc785\\n\\n1\ubc88\uc740 \uc2e4\uc81c \ucf54\ub4dc\uac00 \uc2e4\ud589\ub418\uae30 \uc804\uc778 `\ucef4\ud30c\uc77c\ud0c0\uc784`\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c0\ub294 \ub3d9\uc791\uc774\uace0, \ub098\uba38\uc9c0\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c JavaScript \ud30c\uc77c\uc774 \ub2e4\uc6b4\ub85c\ub4dc \ub418\uace0 \ucf54\ub4dc\uac00 \uc2e4\uc81c\ub85c \uc2e4\ud589\ub418\ub294 `\ub7f0\ud0c0\uc784`\uc5d0\uc11c \uc774\ub8e8\uc5b4\uc9c0\ub294 \ub3d9\uc791\uc785\ub2c8\ub2e4. \uac01 \ud56d\ubaa9\uc5d0 \ub300\ud574\uc11c \ud558\ub098\uc529 \ub2e4\ub904\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n---\\n\\n## 01. JSX \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub9c1\\nEmotion\uc73c\ub85c \uc791\uc131\ub41c \ucf54\ub4dc\uac00 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc815\uc0c1\uc801\uc73c\ub85c \uc791\ub3d9\ub420 \uc218 \uc788\ub3c4\ub85d \ubcc0\ud658\ub418\ub294 \uacfc\uc815\uc785\ub2c8\ub2e4.\\n\\ncssProp\uc744 \uc0ac\uc6a9\ud574 \uac04\ub2e8\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc791\uc131\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n```tsx\\nfunction Simple() {\\n  return (\\n    <button css={{\\n      backgroundColor: \'blue\'\\n    }}>\\n      \uac04\ub2e8\ud55c \ubc84\ud2bc\uc785\ub2c8\ub2e4.\\n    </button>\\n  )\\n}\\n```\\n\\ncssProp\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 \ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8 tsconfig\uc758 `jsxImportSource`\ub97c `@emotion/react`\ub85c \uc124\uc815\ud558\uace0 \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub9c1 \ud574\ubcf4\uba74 \ub2e4\uc74c\uacfc \uac19\uc774 \ubcc0\ud658\ub429\ub2c8\ub2e4.\\n```js\\nimport { jsx as _jsx } from \\"@emotion/react/jsx-runtime\\";\\nfunction Simple() {\\n    return (_jsx(\\"button\\", { css: {\\n            backgroundColor: \'blue\'\\n        }, children: \\"\\\\uAC04\\\\uB2E8\\\\uD55C \\\\uBC84\\\\uD2BC\\\\uC785\\\\uB2C8\\\\uB2E4.\\" }));\\n}\\n```  \\n\\n---\\n\\n## 02. \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c React \ucef4\ud3ec\ub10c\ud2b8 \ub80c\ub354\uc2dc\uc791\\n\uc704\uc5d0\uc11c \ud2b8\ub79c\uc2a4\ud30c\uc77c\ub9c1\ub41c \uc18c\uc2a4\ucf54\ub4dc\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \uc2e4\ud589\ub418\uba70, \ub7f0\ud0c0\uc784\uc5d0\uc11c \uc2a4\ud0c0\uc77c\ucf54\ub4dc\ub97c \uc0dd\uc131\ud558\uace0 \uc8fc\uc785\ud569\ub2c8\ub2e4. \ubaa8\ub4e0 \ud750\ub984\uc740 \uc704\uc5d0\uc11c \ubcf8 `jsx` \ud568\uc218\uc758 \ud638\ucd9c\ub85c\ubd80\ud130 \uc2dc\uc791\ud569\ub2c8\ub2e4.\\n```tsx title=\\"emotion/packages/react/src/jsx-runtime.js\\"\\nimport * as ReactJSXRuntime from \'react/jsx-runtime\'\\nimport Emotion, { createEmotionProps } from \'./emotion-element\'\\nimport { hasOwnProperty } from \'./utils\'\\n\\n//...\\n\\nexport function jsx(type: any, props: any, key: any) {\\n  if (!hasOwnProperty.call(props, \'css\')) {\\n    return ReactJSXRuntime.jsx(type, props, key)\\n  }\\n\\n  return ReactJSXRuntime.jsx(Emotion, createEmotionProps(type, props), key)\\n}\\n\\n//...\\n```\\n\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/react/src/jsx-runtime.js)\\n\\n`@emotion/react/jsx-runtime`\uc758 `jsx`\ub294 React\uc758 jsx\uac00 cssProp\ub97c \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ud655\uc7a5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. jsx\uc758 \ud30c\ub77c\ubbf8\ud130 \uc911 type\uc5d0 `Emotion`\uc744, props\uc5d0 `createEmotionProps(type, props)`\ub97c \uc804\ub2ec\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n### Emotion\\n\uccab\ubc88\uc9f8\ub85c \uc804\ub2ec\ub418\ub294 \ud30c\ub77c\ubbf8\ud130\ub294 `Emotion`\uc785\ub2c8\ub2e4. jsx\ub294 React\uc758 `createElement`\ub85c \ubcc0\ud658\ub418\uace0, \uadf8 \ud568\uc218\uc758 \uccab\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub294 string, HTMLElement, Component \ub4f1\uc73c\ub85c \uc9c0\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ub124\uc774\ubc0d \ucee8\ubca4\uc158\uc774 PascalCase\uc778 \uc810\uc744 \ubbf8\ub8e8\uc5b4 \ubcf4\uc544 `Emotion`\uc740 \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uc778 \uac83\uc73c\ub85c \uc608\uc0c1\ud574\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n```tsx title=\\"emotion/packages/react/src/emotion-element.js\\"\\nlet Emotion = /* #__PURE__ */ withEmotionCache<any, any>(\\n  (props, cache, ref) => {\\n    //...\\n\\n    return (\\n      <>\\n        <Insertion\\n          cache={cache}\\n          serialized={serialized}\\n          isStringTag={typeof WrappedComponent === \'string\'}\\n        />\\n        <WrappedComponent {...newProps} />\\n      </>\\n    )\\n  }\\n)\\n```\\n[\uc18c\ud06c\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/react/src/emotion-element.js)  \\n\\n\uc608\uc0c1\ub300\ub85c `Element` \ubcc0\uc218\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubc18\ud658\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ud568\uc218 \uc2dc\uadf8\ub2c8\ucc98 \ubd80\ud130 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4.\\n1. `withEmotionCache`\ub77c\ub294 HOC(High order Component)\ub85c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uac10\uc2f8\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ub124\uc774\ubc0d\uc73c\ub85c \uc720\ucd94\ud574\ubcf4\uba74, emotion\uc758 cache \ucc98\ub9ac\uc640 \uad00\ub828\ud55c \ub85c\uc9c1\uc774 \uc788\uc744 \uac83\uc73c\ub85c \uc608\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n2. \uc6d0\ub798\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc778 `<WrappedComponent>`\ub294 `<Insertion/>`\uc774\ub77c\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc640 \ud568\uaed8 \ub80c\ub354\ub9c1\ub420 \uac83\uc785\ub2c8\ub2e4. \ub124\uc774\ubc0d\uc73c\ub85c \uc720\ucd94\ud558\uc790\uba74, `<Insertion/>`\uc740 \uc2a4\ud0c0\uc77c\uc758 \uc0bd\uc785\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub294 \uacf3\uc774\ub77c\uace0 \uc608\uc0c1\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n### createEmotionProps\\nEmotion\ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 Props\ub97c \uc0dd\uc131\ud558\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. \uc8fc\uc694 \uc5ed\ud560\uc740 \ucef4\ud3ec\ub10c\ud2b8 \ud0c0\uc785 \uacb0\uc815, cssProp\uc758 \uc720\ud6a8\uc131\uc744 \uac80\uc0ac, \uac1c\ubc1c\ud658\uacbd\uc744 \uc704\ud55c \ub514\ubc84\uae45 \ucc98\ub9ac \ub4f1 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n---\\n\\n## 03. Emotion Cache \uc0dd\uc131\\n\uc5ec\uae30\uc5d0\uc11c \uc790\uc138\ud788 \uc124\uba85\ud558\uc9c4 \uc54a\uc9c0\ub9cc, Emotion\uc5d0\uc11c\ub294 [contextAPI](https://react.dev/learn/passing-data-deeply-with-context)\ub97c \ud65c\uc6a9\ud558\uc5ec `EmotionCacheContext`\ub97c \uc0dd\uc131\ud558\uace0 Emotion\uc758 \uc2a4\ud0c0\uc77c \uc8fc\uc785\uc774 \ud544\uc694\ud55c \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c Cache\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n```tsx title=\\"emotion/packages/react/src/context.js\\"\\nlet withEmotionCache = function withEmotionCache<Props, Ref: React.Ref<*>>(\\n  func: (props: Props, cache: EmotionCache, ref: Ref) => React.Node\\n): React.AbstractComponent<Props> {\\n  // $FlowFixMe\\n  return forwardRef((props: Props, ref: Ref) => {\\n    // the cache will never be null in the browser\\n    let cache = ((useContext(EmotionCacheContext): any): EmotionCache)\\n\\n    return func(props, cache, ref)\\n  })\\n}\\n```\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/react/src/context.js)\\n\\n\uc704\uc5d0\uc11c \uac04\ub7b5\ud558\uac8c \uc0b4\ud3b4\ubcf8 `Emotion` \ucef4\ud3ec\ub10c\ud2b8\ub294 withEmotionCache\ub77c\ub294 HOC\ub85c \ub7a9\ud551\ub418\uc5b4 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. `withEmotionCache`\ub294 \uc0dd\uc131\ub41c cache\ub97c useContext\ub97c \ud1b5\ud574\uc11c \uac00\uc838\uc640 \ub80c\ub354\ub9c1 \ub300\uc0c1\uc774 \ub418\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc804\ub2ec\ud558\ub294 \uacf5\ud1b5 \ub85c\uc9c1\uc744 \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc5d0 \ub530\ub77c `Emotion` \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 cache\uc5d0 \uc811\uadfc\ud558\uc5ec \ud6a8\uc728\uc801\uc73c\ub85c \uc2a4\ud0c0\uc77c\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\uac8c \ub429\ub2c8\ub2e4.\\n\\n---\\n\\n## 04. cssProp\uc5d0 \uc804\ub2ec\ub41c \uc2a4\ud0c0\uc77c \uc9c1\ub82c\ud654\\n:::info\\n\uc5ec\uae30\uc5d0\uc11c \uc2a4\ud0c0\uc77c\uc744 \uc9c1\ub82c\ud654 \ud55c\ub2e4\ub294 \uac83\uc740 Emotion\uc5d0\uc11c \uc2a4\ud0c0\uc77c \uc0bd\uc785\uc744 \uc704\ud55c \ud615\ud0dc\uc778 `SerializedStyles` \uac1d\uccb4\ub85c \ub9cc\ub4e0\ub2e4\ub294 \uc758\ubbf8\uc785\ub2c8\ub2e4.\\n\\n```tsx\\nexport interface SerializedStyles {\\n  name: string\\n  styles: string\\n  map?: string\\n  next?: SerializedStyles\\n}\\n```\\n:::\\n\\n\ub2e4\uc2dc `Emotion` \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub3cc\uc544\uc640\uc11c \ub85c\uc9c1\uc744 \ud558\ub098\uc529 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \ub0b4\ubd80 \ub85c\uc9c1\uc5d0\uc11c\ub294 3\ubc88\uc744 \ud1b5\ud574 \uc804\ub2ec\ub41c `cache`\uc640 props\ub85c \uc2a4\ud0c0\uc77c\uc744 \uc9c1\ub82c\ud654 \ud560 \uac83\uc785\ub2c8\ub2e4.\\n\\n```tsx title=\\"emotion/packages/react/src/emotion-element.js\\"\\nlet Emotion = /* #__PURE__ */ withEmotionCache<any, any>(\\n  (props, cache, ref) => {\\n    let cssProp = props.css\\n    \\n    if (\\n      typeof cssProp === \'string\' &&\\n      cache.registered[cssProp] !== undefined\\n    ) {\\n      // SerializedStyles.styles, \uc989 \uc2a4\ud0c0\uc77c\ubb38\uc790\uc5f4\uc744 \uac00\uc838\uc635\ub2c8\ub2e4.\\n      cssProp = cache.registered[cssProp]\\n    }\\n\\n    let WrappedComponent = props[typePropName]\\n    let registeredStyles = [cssProp]\\n    let className = \'\'\\n\\n    if (typeof props.className === \'string\') {\\n      className = getRegisteredStyles(\\n        cache.registered,\\n        registeredStyles,\\n        props.className\\n      )\\n    } else if (props.className != null) {\\n      className = `${props.className} `\\n    }\\n\\n    let serialized = serializeStyles(\\n      registeredStyles,\\n      undefined,\\n      React.useContext(ThemeContext)\\n    )\\n\\n    // ...\\n\\n    className += `${cache.key}-${serialized.name}`\\n\\n    // ...\\n  }\\n)\\n```\\n[\uc18c\ud06c\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/react/src/emotion-element.js)  \\n\\n\uc774 \ub85c\uc9c1\uc758 \ud575\uc2ec\uc740 `cssProp`\uc73c\ub85c \ub4e4\uc5b4\uc628 \uac12\uc744 `cache`\uc5d0\uc11c \ud655\uc778\ud558\uc5ec \uc774\ubbf8 \ub4f1\ub85d\ub41c\uac8c \uc788\uc73c\uba74 \uc9c1\ub82c\ud654\uac00 \uc644\ub8cc\ub41c \uc2a4\ud0c0\uc77c\uc744 \uac00\uc838\uc624\uace0, \uc5c6\uc73c\uba74 \uc9c1\ub82c\ud654\ub97c \uc9c4\ud589\ud55c\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4.\\n1. `cssProp`\uc774 `string`\uc774\uace0 \uadf8 \uac12\uc744 \ud0a4\ub85c \uce90\uc2dc\uc5d0 \ub4f1\ub85d\ub41c \uc2a4\ud0c0\uc77c\uc774 \uc788\uc73c\uba74 `cssProp`\uc5d0 \uce90\uc2dc\uc5d0 \ub4f1\ub85d\ub41c \uac12\uc744 \ud560\ub2f9\ud569\ub2c8\ub2e4.\\n2. `cssProp`\uc744 \ubc30\uc5f4\uc758 \uccab\ubc88\uc9f8 \uc694\uc18c\ub85c \ucd94\uac00\ud558\uc5ec `registeredStyles`\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4.\\n3. `getRegisteredStyles` \ud568\uc218\ub97c \ud1b5\ud574\uc11c `registeredStyles`\uc5d0 \uce90\uc2dc\uc5d0 \ub4f1\ub85d\ub41c \uc2a4\ud0c0\uc77c\ub4e4\uc744 \ucd94\uac00\ud558\uace0, \uc0c8\ub85c\uc6b4 className\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.\\n4. `serializeStyles`\ub85c `registeredStyles`\ub97c \uc9c1\ub82c\ud654 \ud569\ub2c8\ub2e4.\\n\\n\ub9e8 \uc704\uc5d0\uc11c \uac04\ub2e8\ud55c \uc608\uc2dc\ub85c \ub4e4\uc5c8\ub358 Simple \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub2e4\uc2dc \uc124\uba85\ud558\uc790\uba74,\\n```tsx\\n<button css={{\\n  backgroundColor: \'blue\'\\n}}>\\n  \uac04\ub2e8\ud55c \ubc84\ud2bc\uc785\ub2c8\ub2e4.\\n</button>\\n```\\ncssProp\uc5d0 \uc804\ub2ec\ud55c `{ backgroundColor: \'blue\' }`\uac00 `serializeStyles`\uc5d0 \uc758\ud574\uc11c \uc9c1\ub82c\ud654\ub429\ub2c8\ub2e4.\\n\\n### getRegisteredStyles\\n\ud30c\ub77c\ubbf8\ud130\ub85c \uc804\ub2ec\ubc1b\uc740 \uac12\uc73c\ub85c\ubd80\ud130 \uce90\uc2dc\uc5d0 \ub4f1\ub85d\ub41c \uc2a4\ud0c0\uc77c\ubb38\uc790\uc5f4\uc744 \uac00\uc838\uc624\uace0, \ub4f1\ub85d\ub41c \uac12\uc774 \uc5c6\ub2e4\uba74 \ud574\ub2f9 \ud074\ub798\uc2a4\ub124\uc784\uc740 \ub2e4\uc2dc \ubc18\ud658\ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4.  \\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/utils/src/index.js#L6)\\n\\n\\n### serializeStyles\\nEmotion\uc5d0\uc11c \uc2a4\ud0c0\uc77c \uc0bd\uc785\uc73c\ub85c \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \ud615\ud0dc\uc778 `SerializedStyles` \uac1d\uccb4\ub85c \uc9c1\ub82c\ud654 \ud574\uc8fc\ub294 \ud568\uc218\uc785\ub2c8\ub2e4. Object\ud615\uc2dd\uc774\ub4e0 [Tagged Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)\ud615\uc2dd\uc774\ub4e0 \uc800\ud76c\uac00 \uc791\uc131\ud588\ub358 \uc2a4\ud0c0\uc77c\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4.\\n\\n```tsx title=\\"emotion/packages/serialize/src/index.js\\"\\nexport const serializeStyles = function (\\n  args: Array<Interpolation>,\\n  registered: RegisteredCache | void,\\n  mergedProps: void | Object\\n): SerializedStyles {\\n  // args\ub97c \uc21c\ud68c\ud558\uba70 \uc5ec\ub7ec \ud0c0\uc785\uc73c\ub85c \uc791\uc131\ub41c\\n  // \uc2a4\ud0c0\uc77c\ub4e4\uc744 \ucc98\ub9ac\ud558\uc5ec \ud558\ub098\uc758 \ubb38\uc790\uc5f4\ub85c \uc0dd\uc131\ud558\uace0\\n  // \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c \uac1d\uccb4\ub97c \ubc18\ud658\ud568.\\n}\\n```\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js)  \\n\\n1. `args`\uac00 1\uac1c\uc774\uace0, `SerializedStyles`\uc774\ub77c\uba74 \uc9c1\ub82c\ud654 \uacfc\uc815 \uc5c6\uc774 \ubc14\ub85c \uadf8 \uac12\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4.\\n2. 1\ubc88\uc774 \uc544\ub2c8\ub77c\uba74 \ubaa8\ub4e0 `args` \uc694\uc18c\uc5d0 \ub300\ud574 \ubc18\ubcf5\ubb38\uc744 \ub3cc\uba74\uc11c `handleInterpolation`\ud568\uc218\ub97c \ud1b5\ud574 \uc2a4\ud0c0\uc77c \ubb38\uc790\uc5f4\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.\\n  - `args`\uac00 <code>css\\\\`color: blue;\\\\`</code>\uacfc \uac19\uc740 [Tagged Template Literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)\ub85c \ub4e4\uc5b4\uc624\uba74 \uace0\uc815\ubb38\uc790\uc5f4\uc5d0 `handleInterpolation` \ud568\uc218\ub97c \uac70\uce5c \ub3d9\uc801\ubcc0\uc218 \ubb38\uc790\uc5f4\uc744 \ud569\uccd0 \uc2a4\ud0c0\uc77c \ubb38\uc790\uc5f4\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.\\n3. \uc0dd\uc131\ub41c \uc2a4\ud0c0\uc77c \ubb38\uc790\uc5f4\uc744 \ubc14\ud0d5\uc73c\ub85c \uc2a4\ud0c0\uc77c\uc758 hash name\uc744 \ub9cc\ub4ed\ub2c8\ub2e4.\\n4. hash name, \uc2a4\ud0c0\uc77c \ubb38\uc790\uc5f4 \ub4f1\uc73c\ub85c `SerializedStyles` \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4 \ubc18\ud658\ud569\ub2c8\ub2e4.\\n\\n### handleInterpolation\\n\ud568\uc218, \ubb38\uc790\uc5f4, \uc22b\uc790, \uac1d\uccb4 \ub4f1 \uc2a4\ud0c0\uc77c\uc744 \uc704\ud574 \uc791\uc131\ub41c \uac12\uc744 \uac01 \ucf00\uc774\uc2a4 \ubcc4\ub85c \ucc98\ub9ac\ud558\uc5ec **\uc2a4\ud0c0\uc77c \ubb38\uc790\uc5f4**\ub85c \ubcc0\ud658\ud569\ub2c8\ub2e4. \uac1d\uccb4\uc758 \uacbd\uc6b0\ub294 `createStringFromObject` \ud568\uc218\ub97c \ud1b5\ud574\uc11c \ubb38\uc790\uc5f4 \ucc98\ub9ac\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc774\ubbf8 \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc758 \uacbd\uc6b0\ub294 \uc5ed\uc2dc \ubcc4\ub3c4 \ucc98\ub9ac\uc5c6\uc774 \ubc14\ub85c \ubc18\ud658\ub429\ub2c8\ub2e4.  \\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js)\\n\\n### createStringFromObject\\n\uc774 \ud568\uc218\ub294 \uc804\ub2ec\ubc1b\uc740 \uac1d\uccb4\uc758 key\uc640 value\ub97c \ubc14\ud0d5\uc73c\ub85c \uc21c\ud68c\ud558\uba70 \uc2a4\ud0c0\uc77c \ubb38\uc790\uc5f4\uc744 \ub9cc\ub4e4\uc5b4 \ubc18\ud658\ud569\ub2c8\ub2e4.  \\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js)  \\n\\n\\n\uc815\ub9ac\ud558\uc790\uba74, (`serializeStyles` &rightarrow; `handleInterpolation` &rightarrow; `createStringFromObject`)\uc758 \uacfc\uc815\uc744 \uac70\uccd0 `SerializedStyles` \uac1d\uccb4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8 \uac1d\uccb4\ub294 `serialized` \ubcc0\uc218\uc5d0 \ub2f4\uc544 \ucd5c\uc885 \ubc18\ud658 \uac12\uc778 `<Insertion/>` \ucef4\ud3ec\ub10c\ud2b8\ub85c `cache`\uc640 \ud568\uaed8 props\ub85c \uc804\ub2ec\ub429\ub2c8\ub2e4.\\n\\n---\\n\\n## 05. \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc744 \uce90\uc2dc\uc5d0 \ub4f1\ub85d \ubc0f \uc0bd\uc785\\n4\ubc88\uc758 \ubcf5\uc7a1\ud588\ub358 \uc2a4\ud0c0\uc77c \uc9c1\ub82c\ud654 \uacfc\uc815\uc744 \uac70\uce5c `<Insertion/>` \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c\ub294 \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc744 \uce90\uc2dc\uc5d0 \ub4f1\ub85d\ud558\uace0 \uc0bd\uc785\ud569\ub2c8\ub2e4.\\n```tsx title=\\"emotion/packages/react/src/emotion-element.js\\"\\nconst Insertion = ({ cache, serialized, isStringTag }) => {\\n  registerStyles(cache, serialized, isStringTag)\\n\\n  const rules = useInsertionEffectAlwaysWithSyncFallback(() =>\\n    insertStyles(cache, serialized, isStringTag)\\n  )\\n\\n  if (!isBrowser && rules !== undefined) {\\n    let serializedNames = serialized.name\\n    let next = serialized.next\\n    while (next !== undefined) {\\n      serializedNames += \' \' + next.name\\n      next = next.next\\n    }\\n    return (\\n      <style\\n        {...{\\n          [`data-emotion`]: `${cache.key} ${serializedNames}`,\\n          dangerouslySetInnerHTML: { __html: rules },\\n          nonce: cache.sheet.nonce\\n        }}\\n      />\\n    )\\n  }\\n  return null\\n}\\n```\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/react/src/emotion-element.js)\\n\\n1. `registerStyles`\uc5d0\uc11c className\uc744 key\ub85c \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc744 value\ub85c \uce90\uc2dc\uc5d0 \ub4f1\ub85d\ud569\ub2c8\ub2e4.\\n2. `useInsertionEffectAlwaysWithSyncFallback`\uc774\ub77c\ub294 \ud6c5 \uc548\uc5d0\uc11c `insertStyles`\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4.\\n  - CSR\uc5d0\uc11c\ub294 [`useInsertionEffect`](https://react.dev/reference/react/useInsertionEffect)\ud6c5\uc5d0\uc11c `insertStyles`\ub97c \uc2e4\ud589\ud558\uc5ec \uc2a4\ud0c0\uc77c \uc0bd\uc785\uc744 \uc644\ub8cc\ud569\ub2c8\ub2e4.\\n  - SSR\uc5d0\uc11c\ub294 `insertStyles`\uc758 \ubc18\ud658\ub41c \uac12\uc73c\ub85c `<style/>`\ud0dc\uadf8\ub97c \ub80c\ub354\ud569\ub2c8\ub2e4.\\n\\n### registerStyles\\n\uc804\ub2ec\ubc1b\uc740 \uce90\uc2dc\uc758 key\uc640 \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc758 name\uc73c\ub85c className\uc744 \uc0dd\uc131\ud558\uace0, \uadf8 \uac12\uc744 key\ub85c \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\ubb38\uc790\uc5f4\uc744 \uc800\uc7a5\ud574\ub461\ub2c8\ub2e4.\\n```tsx\\n// ...\\nlet className = `${cache.key}-${serialized.name}`\\n\\n/// ...\\ncache.registered[className] = serialized.styles\\n```\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/utils/src/index.js#L23)\\n\\n### insertStyles\\n`insertStyles`\uc5d0\uc11c\ub294 `EmotionCache.insert`\ub97c \ud1b5\ud574\uc11c \uc2a4\ud0c0\uc77c\uc744 \ucef4\ud30c\uc77c\ud558\uace0 \uc0bd\uc785\ud569\ub2c8\ub2e4.\\n```tsx\\nexport const insertStyles = (\\n  cache: EmotionCache,\\n  serialized: SerializedStyles,\\n  isStringTag: boolean\\n) => {\\n  registerStyles(cache, serialized, isStringTag)\\n\\n  let className = `${cache.key}-${serialized.name}`\\n\\n  if (cache.inserted[serialized.name] === undefined) {\\n    let stylesForSSR = \'\'\\n    let current = serialized\\n    do {\\n      let maybeStyles = cache.insert(\\n        serialized === current ? `.${className}` : \'\',\\n        current,\\n        cache.sheet,\\n        true\\n      )\\n      if (!isBrowser && maybeStyles !== undefined) {\\n        stylesForSSR += maybeStyles\\n      }\\n      current = current.next\\n    } while (current !== undefined)\\n    if (!isBrowser && stylesForSSR.length !== 0) {\\n      return stylesForSSR\\n    }\\n  }\\n}\\n```\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/utils/src/index.js#L23)\\n\\n1. \uce90\uc2dc\uc758 key\uc640 \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc758 name\uc73c\ub85c className\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4.\\n2. \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc758 name\uc744 key\ub85c \uc774\ubbf8 \uc0bd\uc785\ub41c \uc2a4\ud0c0\uc77c\uc778\uc9c0 \uccb4\ud06c\ud569\ub2c8\ub2e4.\\n3. \uc0bd\uc785\ub418\uc9c0 \uc54a\uc558\ub2e4\uba74 `cache.insert`\ub85c \ud574\ub2f9 \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc744 \uc0bd\uc785\ud569\ub2c8\ub2e4.\\n4. \uc0bd\uc785 \ud6c4 \ubc18\ud658 \uac12\uc744 SSR\uc744 \uc704\ud574 \uc800\uc7a5\ud558\uace0 \ubc18\ud658\ud569\ub2c8\ub2e4.\\n\\n## stylis\ub85c \uc0bd\uc785\ud560 \uc2a4\ud0c0\uc77c CSSRule\ub85c \ucef4\ud30c\uc77c\\n`EmotionCache`\uc758 `insert` \ud568\uc218\ub85c \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc744  \ud604\uc7ac\uc758 `StyleSheet`\uc5d0 \uc8fc\uc785\ud558\uace0 \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc758 name\uc73c\ub85c cache\uc5d0 \uc0bd\uc785\ub41c \uc2a4\ud0c0\uc77c\uc744 \uc800\uc7a5\ud569\ub2c8\ub2e4.\\n```tsx title=\\"emotion/packages/cache/src/index.js\\"\\n// ...\\ninsert = (\\n  selector: string,\\n  serialized: SerializedStyles,\\n  sheet: StyleSheet,\\n  shouldCache: boolean\\n): void => {\\n\\n  // ...\\n\\n  stylis(selector ? `${selector}{${serialized.styles}}` : serialized.styles)\\n\\n  if (shouldCache) {\\n    cache.inserted[serialized.name] = true\\n  }\\n}\\n// ...\\n```\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/cache/src/index.js#L46)\\n\\n### stylis\\n[stylis](https://stylis.js.org/)\ub294 CSS preprocessor\ub85c \uc8fc\uc5b4\uc9c4 \uc2a4\ud0c0\uc77c \ubb38\uc790\uc5f4\uc744 [CSSRule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule)\ub85c \ucef4\ud30c\uc77c \ud558\ub294 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc785\ub2c8\ub2e4. Emotion\uc740 \ub0b4\ubd80\uc801\uc73c\ub85c stylis\ub97c \ud1b5\ud574 \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc744 \ucc98\ub9ac\ud569\ub2c8\ub2e4. \uc774 \uacfc\uc815\uc5d0\uc11c \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc740 [CSSRule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule)\ub85c \ud30c\uc2f1\ub418\uace0, Vendor Prefix\ub97c \ucd94\uac00\ud558\uace0 \ubcc4\ub3c4\uc758 \ucd5c\uc801\ud654\ucc98\ub9ac\ub97c \uac70\uce58\uac8c \ub429\ub2c8\ub2e4.\\n```tsx\\nimport {\\n  serialize,\\n  compile,\\n  middleware,\\n  rulesheet,\\n  stringify,\\n  COMMENT\\n} from \'stylis\'\\n\\n// ...\\n\\nconst finalizingPlugins = [\\n  stringify,\\n  process.env.NODE_ENV !== \'production\'\\n    ? element => { /* ... */ }\\n    : rulesheet(rule => {\\n        currentSheet.insert(rule)\\n      })\\n]\\n\\n// ...\\n\\nconst serializer = middleware(\\n  omnipresentPlugins.concat(stylisPlugins, finalizingPlugins)\\n)\\n\\nconst stylis = styles => serialize(compile(styles), serializer)\\n\\n// ...\\n```\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/cache/src/index.js#L46)  \\n\\n\uc704 stylis\ub77c\ub294 \ud568\uc218 \ubbf8\ub4e4\uc6e8\uc5b4\ub85c \ub4f1\ub85d\ub41c \ud50c\ub7ec\uadf8\uc778 \uc911 `finalizingPlugins`\uc744 \uc0b4\ud3b4\ubcf4\uba74 \uc2a4\ud0c0\uc77c\uc744 \uc8fc\uc785\ud558\ub294 \ucf54\ub4dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c `currentSheet`\ub294 `insertStyles` \ub0b4\ubd80\uc5d0\uc11c \ud638\ucd9c\ub41c `cache.insert` \ud568\uc218\uc758 \ud30c\ub77c\ubbf8\ud130 `cache.sheet`\uc785\ub2c8\ub2e4.\\n\\n### \ucef4\ud30c\uc77c\ub41c CSSRule\uc744 StyleSheet\uc5d0 \uc0bd\uc785\\n\ub2e4\uc2dc \uc774 `currentSheet`\ub294 Emotion\uc758 `StyleSheet` \ud074\ub798\uc2a4\uc758 \uc778\uc2a4\ud134\uc2a4\uc785\ub2c8\ub2e4.(\ucd5c\ucd08\uc5d0 `EmotionCache`\ub97c \uc0dd\uc131\ud560 \ub54c \ud568\uaed8 \uc778\uc2a4\ud130\uc2a4\uac00 \uc0dd\uc131\ub418\uc5c8\uc5c8\uc2b5\ub2c8\ub2e4.) `StyleSheet.insert` \uba54\uc18c\ub4dc\uc5d0\uc11c\ub294 [CSSStyleSheet](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet)\uc758 insert\ub97c \ud1b5\ud574 \uc704\uc5d0\uc11c stylis\ub85c \ucef4\ud30c\uc77c\ub41c [CSSRule](https://developer.mozilla.org/en-US/docs/Web/API/CSSRule)\uc744 \uc2e4\uc81c `document.styleSheet`\uc5d0 \uc0bd\uc785\ud558\uac8c \ub429\ub2c8\ub2e4.\\n\\n[\uc18c\uc2a4\ucf54\ub4dc \ubc14\ub85c\uac00\uae30](https://github.com/emotion-js/emotion/blob/main/packages/sheet/src/index.js)\\n\\n---\\n\\n## \uc815\ub9ac\\nEmotion\uc740 \uac1c\ubc1c\uc790\uac00 \uc791\uc131\ud55c CSS(\ubb38\uc790\uc5f4\uc774\ub4e0, Object\uc774\ub4e0)\ub97c \uc9c1\ub82c\ud654\ud558\uace0 `<Insertion/>`\ub85c \uc2a4\ud0c0\uc77c\uc744 \ubb38\uc11c\uc5d0 \uc0bd\uc785\ud574\uc8fc\uba70,\\n  1. cssProp\uc73c\ub85c \ubd80\ud130 \ub4e4\uc5b4\uc628 \uac12\uc744 \uc2a4\ud0c0\uc77c \uc9c1\ub82c\ud654 \ud55c\ub2e4.\\n  2. \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc740 \uce90\uc2dc\uc5d0 \ub4f1\ub85d\ub418\uc5b4 \ub2e4\ub978 cssProp\uc758 \uc9c1\ub82c\ud654 \ud6a8\uc728\uc744 \ub192\uc5ec\uc900\ub2e4.\\n  3. \uc9c1\ub82c\ud654\ub41c \uc2a4\ud0c0\uc77c\uc740 stylis\ub97c \ud1b5\ud574 CSSRule\ub85c \ubcc0\ud658\ub41c\ub2e4.\\n  4. CSSRule\uc740 CSSStyleSheet\ub85c \uc2a4\ud0c0\uc77c\uc774 \uc8fc\uc785\ub41c\ub2e4.\\n\\n\uadf8 \uacfc\uc815\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c0\ub294 className\uc774 \ubcf8\ub798\uc758 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ucd94\uac00\ub418\uba74\uc11c \ucd5c\uc885\uc801\uc73c\ub85c \uc2a4\ud0c0\uc77c\uc774 \uc785\ud600\uc9c4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub418\ub3c4\ub85d \ud574\uc90d\ub2c8\ub2e4."},{"id":"/2024/01/06/suggestion-for-effective-use-of-emotion","metadata":{"permalink":"/mitchell-dictionary/blog/2024/01/06/suggestion-for-effective-use-of-emotion","source":"@site/blog/2024-01-06-suggestion-for-effective-use-of-emotion/index.mdx","title":"\ud6a8\uacfc\uc801\uc778 Emotion(CSS in JS) \uc0ac\uc6a9\uc744 \uc704\ud55c \uc81c\uc5b8","description":"","date":"2024-01-06T00:00:00.000Z","formattedDate":"2024\ub144 1\uc6d4 6\uc77c","tags":[{"label":"Emotion","permalink":"/mitchell-dictionary/blog/tags/emotion"},{"label":"CSS in JS","permalink":"/mitchell-dictionary/blog/tags/css-in-js"}],"readingTime":0,"hasTruncateMarker":false,"authors":[{"name":"Mitchell","title":"Frontend Developer","url":"https://github.com/rangex-mitchell","imageURL":"https://github.com/rangex-mitchell.png","key":"mitchell"}],"frontMatter":{"authors":"mitchell","title":"\ud6a8\uacfc\uc801\uc778 Emotion(CSS in JS) \uc0ac\uc6a9\uc744 \uc704\ud55c \uc81c\uc5b8","tags":["Emotion","CSS in JS"]},"unlisted":false,"prevItem":{"title":"Emotion\uc774 CSS\ub97c \uc0dd\uc131\ud558\ub294 \ubc29\ubc95","permalink":"/mitchell-dictionary/blog/emotion/emotion-mechanism"}},"content":""}]}')}}]);