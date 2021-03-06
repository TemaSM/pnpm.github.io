(window.webpackJsonp=window.webpackJsonp||[]).push([[1456],{1525:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(7),i=(t(0),t(3064)),c={id:"run",title:"pnpm run",original_id:"run"},o={unversionedId:"cli/run",id:"version-5.6/cli/run",isDocsHomePage:!1,title:"pnpm run",description:"Aliases: run-script",source:"@site/versioned_docs/version-5.6/cli/run.md",slug:"/cli/run",permalink:"/5.6/cli/run",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.6/cli/run.md",version:"5.6",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615066944,sidebar:"version-5.6/docs",previous:{title:"pnpm why",permalink:"/5.6/cli/why"},next:{title:"pnpm test",permalink:"/5.6/cli/test"}},l=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Details",id:"details",children:[]},{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--if-present",id:"--if-present",children:[]},{value:"--parallel",id:"--parallel",children:[]},{value:"--stream",id:"--stream",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Aliases: ",Object(i.b)("inlineCode",{parentName:"p"},"run-script")),Object(i.b)("p",null,"Runs a defined package script."),Object(i.b)("h2",{id:"synopsis"},"Synopsis"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm run [[-r] [--no-bail] [--no-sort] [--workspace-concurrency=<number>]]\n     <command> [-- <args>...]\n")),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)("p",null,"Run the ",Object(i.b)("inlineCode",{parentName:"p"},"watch")," task:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm run watch\n")),Object(i.b)("p",null,"Same thing without the ",Object(i.b)("inlineCode",{parentName:"p"},"run")," keyword will work as well:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm watch\n")),Object(i.b)("h2",{id:"details"},"Details"),Object(i.b)("p",null,"In addition to the shell\u2019s pre-existing ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),", ",Object(i.b)("inlineCode",{parentName:"p"},"pnpm run")," adds ",Object(i.b)("inlineCode",{parentName:"p"},"node_modules/.bin"),"\nto the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH")," provided to ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),". As of v3.5, when executed inside a workspace,\n",Object(i.b)("inlineCode",{parentName:"p"},"<workspace root>/node_modules/.bin")," is also added to the ",Object(i.b)("inlineCode",{parentName:"p"},"PATH"),", so if a tool\nis installed in the workspace root, it may be called in any workspace package's ",Object(i.b)("inlineCode",{parentName:"p"},"scripts"),"."),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(i.b)("p",null,"This runs an arbitrary command from each package's \"scripts\" object.\nIf a package doesn't have the command, it is skipped.\nIf none of the packages have the command, the command fails."),Object(i.b)("h3",{id:"--if-present"},"--if-present"),Object(i.b)("p",null,"Added in: v4.5.0"),Object(i.b)("p",null,"You can use the ",Object(i.b)("inlineCode",{parentName:"p"},"--if-present")," flag to avoid exiting with a non-zero exit code\nwhen the script is undefined. This lets you run potentially undefined scripts\nwithout breaking the execution chain."),Object(i.b)("h3",{id:"--parallel"},"--parallel"),Object(i.b)("p",null,"Added in: v5.1.0"),Object(i.b)("p",null,"Completely disregard concurrency and topological sorting, running a given script\nimmediately in all matching packages with prefixed streaming output. This is the\npreferred flag for long-running processes such as watch run over many packages."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-text"},"pnpm run --parallel watch\n")),Object(i.b)("h3",{id:"--stream"},"--stream"),Object(i.b)("p",null,"Added in: v5.1.0"),Object(i.b)("p",null,"Stream output from child processes immediately, prefixed with the originating package directory.\nThis allows output from different packages to be interleaved."),Object(i.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"../filtering"},"Read more about filtering.")))}s.isMDXComponent=!0},3064:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return t?a.a.createElement(m,o(o({ref:n},p),{},{components:t})):a.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,c=new Array(i);c[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var p=2;p<i;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);