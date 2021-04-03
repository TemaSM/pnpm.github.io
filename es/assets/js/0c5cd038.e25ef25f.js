(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{395:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,b=d["".concat(i,".").concat(u)]||d[u]||m[u]||o;return t?r.a.createElement(b,p(p({ref:n},c),{},{components:t})):r.a.createElement(b,p({ref:n},c))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(8),o=(t(0),t(395)),i={id:"pnpm-vs-npm",title:"pnpm vs npm"},p={unversionedId:"pnpm-vs-npm",id:"version-5.x/pnpm-vs-npm",isDocsHomePage:!1,title:"pnpm vs npm",description:"npm's flat tree",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-5.x/pnpm-vs-npm.md",slug:"/pnpm-vs-npm",permalink:"/es/pnpm-vs-npm",editUrl:"https://crowdin.com/project/pnpm/es",version:"5.x"},s=[{value:"npm&#39;s flat tree",id:"npms-flat-tree",children:[]},{value:"Instalaci\xf3n",id:"instalaci\xf3n",children:[]},{value:"Directory dependencies",id:"directory-dependencies",children:[]}],c={toc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"npms-flat-tree"},"npm's flat tree"),Object(o.b)("p",null,"npm maintains a ",Object(o.b)("a",{parentName:"p",href:"https://github.com/npm/npm/issues/6912"},"flattened dependency tree")," as of version 3. This leads to less disk space bloat, with a messy ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," directory as a side effect."),Object(o.b)("p",null,"On the other hand, pnpm manages ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," by using hard linking and symbolic linking to a global on-disk content-addressable store. This nets you the benefits of far less disk space usage, while also keeping your ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules")," clean. There is documentation on the ",Object(o.b)("a",{parentName:"p",href:"symlinked-node-modules-structure"},"store layout")," if you wish to learn more."),Object(o.b)("p",null,"The good thing about pnpm's proper ",Object(o.b)("inlineCode",{parentName:"p"},"node_modules"),' structure is that it "',Object(o.b)("a",{parentName:"p",href:"https://www.kochan.io/nodejs/pnpms-strictness-helps-to-avoid-silly-bugs.html"},"helps to avoid silly bugs"),"\" by making it impossible to use modules that are not specified in the project's ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),"."),Object(o.b)("h2",{id:"instalaci\xf3n"},"Instalaci\xf3n"),Object(o.b)("p",null,"pnpm does not allow installation of packages without saving them to ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". If no parameters are passed to ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm add"),", packages are saved as regular dependencies. Like with npm, ",Object(o.b)("inlineCode",{parentName:"p"},"--save-dev")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--save-optional")," can be used to install packages as dev or optional dependencies."),Object(o.b)("p",null,"As a consequence of this limitation, projects won't have any extraneous packages when they use pnpm unless they remove a dependency and leave it orphaned. That's why pnpm's implementation of the ",Object(o.b)("a",{parentName:"p",href:"cli/prune"},"prune command")," does not allow you to specify packages to prune - it ALWAYS removes all extraneous and orphaned packages."),Object(o.b)("h2",{id:"directory-dependencies"},"Directory dependencies"),Object(o.b)("p",null,"Directory dependencies start with the ",Object(o.b)("inlineCode",{parentName:"p"},"file:")," prefix and point to a directory in the filesystem. Like npm, pnpm symlinks those dependencies. Unlike npm, pnpm does not perform installation for the file dependencies."),Object(o.b)("p",null,"This means that if you have a package called ",Object(o.b)("inlineCode",{parentName:"p"},"foo")," (",Object(o.b)("inlineCode",{parentName:"p"},"<root>/foo"),") that has ",Object(o.b)("inlineCode",{parentName:"p"},"bar@file:../bar")," as a dependency, pnpm won't perform installation for ",Object(o.b)("inlineCode",{parentName:"p"},"<root>/bar")," when you run ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm install")," on ",Object(o.b)("inlineCode",{parentName:"p"},"foo"),"."),Object(o.b)("p",null,"If you need to run installations in several packages at the same time, for instance in the case of a monorepo, you should look at the documentation for ",Object(o.b)("a",{parentName:"p",href:"cli/recursive"},Object(o.b)("inlineCode",{parentName:"a"},"pnpm -r")),"."))}l.isMDXComponent=!0}}]);