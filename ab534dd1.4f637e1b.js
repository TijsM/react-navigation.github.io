(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{369:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(6),o=(t(0),t(509)),i={id:"preventing-going-back",title:"Preventing going back",sidebar_label:"Preventing going back"},c={unversionedId:"preventing-going-back",id:"version-5.x/preventing-going-back",isDocsHomePage:!1,title:"Preventing going back",description:"Available in version 5.7+",source:"@site/versioned_docs/version-5.x/preventing-going-back.md",slug:"/preventing-going-back",permalink:"/docs/preventing-going-back",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/preventing-going-back.md",version:"5.x",sidebar_label:"Preventing going back",sidebar:"version-5.x/docs",previous:{title:"Custom Android back button behavior",permalink:"/docs/custom-android-back-button-handling"},next:{title:"Call a function when focused screen changes",permalink:"/docs/function-after-focusing-screen"}},s=[],l={rightToc:s};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Available in version 5.7+")),Object(o.b)("p",null,"Sometimes you may want to prevent the user from leaving a screen, for example, if there are unsaved changes, you might want to show a confirmation dialog. You can achieve it by using the ",Object(o.b)("inlineCode",{parentName:"p"},"beforeRemove")," event."),Object(o.b)("p",null,"Note that this event is ",Object(o.b)("strong",{parentName:"p"},"only")," triggered whenever a screen is being removed. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The user pressed back button on a screen in a stack"),Object(o.b)("li",{parentName:"ul"},"The user performed a swipe back gesture"),Object(o.b)("li",{parentName:"ul"},"Some action such as ",Object(o.b)("inlineCode",{parentName:"li"},"pop")," or ",Object(o.b)("inlineCode",{parentName:"li"},"reset")," was dispatched which removes the screen from the state")),Object(o.b)("p",null,"This event is ",Object(o.b)("strong",{parentName:"p"},"not")," triggered when a screen is being unfocused, but not removed. For example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"The user pushed a new screen on top of the screen with the listener in a stack"),Object(o.b)("li",{parentName:"ul"},"The user navigated from one tab/drawer screen to another tab/drawer screen")),Object(o.b)("p",null,"The event listener receives the ",Object(o.b)("inlineCode",{parentName:"p"},"action")," that triggered it. You can dispatch this action again after confirmation, or check the action object to determine what to do."),Object(o.b)("p",null,"Example:"),Object(o.b)("samp",{id:"prevent-going-back"}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function EditText({ navigation }) {\n  const [text, setText] = React.useState('');\n  const hasUnsavedChanges = Boolean(text);\n\n  React.useEffect(\n    () =>\n      navigation.addListener('beforeRemove', (e) => {\n        if (!hasUnsavedChanges) {\n          // If we don't have unsaved changes, then we don't need to do anything\n          return;\n        }\n\n        // Prevent default behavior of leaving the screen\n        e.preventDefault();\n\n        // Prompt the user before leaving the screen\n        Alert.alert(\n          'Discard changes?',\n          'You have unsaved changes. Are you sure to discard them and leave the screen?',\n          [\n            { text: \"Don't leave\", style: 'cancel', onPress: () => {} },\n            {\n              text: 'Discard',\n              style: 'destructive',\n              // If the user confirmed, then we dispatch the action we blocked earlier\n              // This will continue the action that had triggered the removal of the screen\n              onPress: () => navigation.dispatch(e.data.action),\n            },\n          ]\n        );\n      }),\n    [navigation, hasUnsavedChanges]\n  );\n\n  return (\n    <TextInput\n      value={text}\n      placeholder=\"Type something\u2026\"\n      onChangeText={setText}\n    />\n  );\n}\n")),Object(o.b)("p",null,"Previously, the way to do this was to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Override back button in header"),Object(o.b)("li",{parentName:"ul"},"Disable back swipe gesture"),Object(o.b)("li",{parentName:"ul"},"Override system back button/gesture on Android")),Object(o.b)("p",null,"However, this approach has many important differences in addition to being less code:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It's not coupled to any specific buttons, going back from custom buttons will trigger it as well"),Object(o.b)("li",{parentName:"ul"},"It's not coupled to any specific actions, any action that removes the route from state will trigger it"),Object(o.b)("li",{parentName:"ul"},"It works across nested navigators, e.g. if the screen is being removed due to an action in parent navigator"),Object(o.b)("li",{parentName:"ul"},"User can still swipe back in the stack navigator, however, the swipe will be cancelled if the event was prevented"),Object(o.b)("li",{parentName:"ul"},"It's possible to continue the same action that triggered the event")),Object(o.b)("p",null,"There are couple of edge cases to be aware of when using this approach. Specifically, the event only checks if the route is removed from the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/navigation-state"}),"navigation state")," when an action is handled. If the change was from other reasons, e.g. - screen getting unmounted due to parent being unmounted, conditionally rendering different screens based on state not managed by React Navigation, using ",Object(o.b)("inlineCode",{parentName:"p"},"unmountOnBlur")," etc., then this event won't be triggered. It's impossible to prevent unmounting a component."))}b.isMDXComponent=!0},509:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(t),d=r,g=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return t?a.a.createElement(g,c(c({ref:n},l),{},{components:t})):a.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);