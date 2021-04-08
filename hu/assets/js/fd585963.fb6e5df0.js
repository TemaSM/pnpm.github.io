(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{438:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(8),l=(a(0),a(446)),i={id:"add",title:"pnpm add <pkg>",original_id:"add"},p={unversionedId:"cli/add",id:"version-4.x/cli/add",isDocsHomePage:!1,title:"pnpm add <pkg>",description:"Telep\xedt egy csomagot, valamint minden olyan csomagot, amely f\xfcgg\u0151s\xe9ge az adott csomagnak. By default, any new package is installed as a prod dependency.",source:"@site/i18n/hu/docusaurus-plugin-content-docs/version-4.x/cli/add.md",slug:"/cli/add",permalink:"/hu/4.x/cli/add",editUrl:"https://crowdin.com/project/pnpm/hu",version:"4.x",sidebar:"version-4.x/docs",previous:{title:"Filtering",permalink:"/hu/4.x/filtering"},next:{title:"pnpm install",permalink:"/hu/4.x/cli/install"}},o=[{value:"tl;dr",id:"tldr",children:[]},{value:"T\xe1mogatott csomag forr\xe1sok",id:"t\xe1mogatott-csomag-forr\xe1sok",children:[{value:"Telep\xedt\xe9s az npm b\xe1zisb\xf3l",id:"telep\xedt\xe9s-az-npm-b\xe1zisb\xf3l",children:[]},{value:"Telep\xedt\xe9s a workspaceb\u0151l",id:"telep\xedt\xe9s-a-workspaceb\u0151l",children:[]},{value:"Telep\xedt\xe9s helyi f\xe1jlrendszerb\u0151l",id:"telep\xedt\xe9s-helyi-f\xe1jlrendszerb\u0151l",children:[]},{value:"Install from remote gzipped tarball",id:"install-from-remote-gzipped-tarball",children:[]},{value:"Telep\xedt\xe9s a Git t\xe1rh\xe1zb\xf3l",id:"telep\xedt\xe9s-a-git-t\xe1rh\xe1zb\xf3l",children:[]}]},{value:"Options",id:"options",children:[{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-exact, -E",id:"--save-exact--e",children:[]},{value:"--save-peer",id:"--save-peer",children:[]},{value:"--ignore-workspace-root-check, -W",id:"--ignore-workspace-root-check--w",children:[]},{value:"--global",id:"--global",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]},{value:"--workspace",id:"--workspace",children:[]}]}],c={toc:o};function b(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Telep\xedt egy csomagot, valamint minden olyan csomagot, amely f\xfcgg\u0151s\xe9ge az adott csomagnak. By default, any new package is installed as a prod dependency."),Object(l.b)("p",null,Object(l.b)("img",{src:a(452).default})),Object(l.b)("h2",{id:"tldr"},"tl;dr"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Command"),Object(l.b)("th",{parentName:"tr",align:null},"Meaning"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax")),Object(l.b)("td",{parentName:"tr",align:null},"save to ",Object(l.b)("inlineCode",{parentName:"td"},"dependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add -D sax")),Object(l.b)("td",{parentName:"tr",align:null},"save to ",Object(l.b)("inlineCode",{parentName:"td"},"devDependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add -O sax")),Object(l.b)("td",{parentName:"tr",align:null},"save to ",Object(l.b)("inlineCode",{parentName:"td"},"optionalDependencies"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax@next")),Object(l.b)("td",{parentName:"tr",align:null},"Specify tag ",Object(l.b)("inlineCode",{parentName:"td"},"next"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"pnpm add sax@3.0.0")),Object(l.b)("td",{parentName:"tr",align:null},"Specify version ",Object(l.b)("inlineCode",{parentName:"td"},"3.0.0"))))),Object(l.b)("h2",{id:"t\xe1mogatott-csomag-forr\xe1sok"},"T\xe1mogatott csomag forr\xe1sok"),Object(l.b)("p",null,"A package can be installed from different locations:"),Object(l.b)("h3",{id:"telep\xedt\xe9s-az-npm-b\xe1zisb\xf3l"},"Telep\xedt\xe9s az npm b\xe1zisb\xf3l"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"pnpm add package-name")," will install the latest version of ",Object(l.b)("inlineCode",{parentName:"p"},"package-name")," from the ",Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm registry"),"."),Object(l.b)("p",null,"You may also install packages by:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"tag: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add express@nightly")),Object(l.b)("li",{parentName:"ul"},"version: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add express@1.0.0")),Object(l.b)("li",{parentName:"ul"},"version range: ",Object(l.b)("inlineCode",{parentName:"li"},'pnpm add express@2 react@">=0.1.0 <0.2.0"'))),Object(l.b)("h3",{id:"telep\xedt\xe9s-a-workspaceb\u0151l"},"Telep\xedt\xe9s a workspaceb\u0151l"),Object(l.b)("p",null,"Note that when adding dependencies and working within a ",Object(l.b)("a",{parentName:"p",href:"/hu/4.x/workspaces"},"workspace"),", packages will be installed from the configured sources, depending on whether or not ",Object(l.b)("a",{parentName:"p",href:"/hu/4.x/workspaces#link-workspace-packages"},Object(l.b)("inlineCode",{parentName:"a"},"link-workspace-packages"))," is set, and use of the ",Object(l.b)("a",{parentName:"p",href:"/hu/4.x/workspaces#workspace-ranges-workspace"},Object(l.b)("inlineCode",{parentName:"a"},"workspace: range protocol")),"."),Object(l.b)("h3",{id:"telep\xedt\xe9s-helyi-f\xe1jlrendszerb\u0151l"},"Telep\xedt\xe9s helyi f\xe1jlrendszerb\u0151l"),Object(l.b)("p",null,"There are two ways to install from the local file system:"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"from a tarball file (",Object(l.b)("inlineCode",{parentName:"li"},".tar"),", ",Object(l.b)("inlineCode",{parentName:"li"},".tar.gz"),", or ",Object(l.b)("inlineCode",{parentName:"li"},".tgz"),")"),Object(l.b)("li",{parentName:"ol"},"from a directory")),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add ./package.tgz\npnpm add ./some-directory\n")),Object(l.b)("p",null,"When you install from a directory, a symlink will be created in the current project's ",Object(l.b)("inlineCode",{parentName:"p"},"node_modules"),", so it is the same as running ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm link"),"."),Object(l.b)("h3",{id:"install-from-remote-gzipped-tarball"},"Install from remote gzipped tarball"),Object(l.b)("p",null,'The argument must start with "http://" or "https://".'),Object(l.b)("p",null,"Example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add https://github.com/indexzero/forever/tarball/v0.5.6\n")),Object(l.b)("h3",{id:"telep\xedt\xe9s-a-git-t\xe1rh\xe1zb\xf3l"},"Telep\xedt\xe9s a Git t\xe1rh\xe1zb\xf3l"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add <git remote url>\n")),Object(l.b)("p",null,"Installs the package from the hosted Git provider, cloning it with Git."),Object(l.b)("p",null,"You may install from Git by:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"latest commit from master: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive")),Object(l.b)("li",{parentName:"ul"},"commit: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#97edff6f525f192a3f83cea1944765f769ae2678")),Object(l.b)("li",{parentName:"ul"},"branch: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#master")),Object(l.b)("li",{parentName:"ul"},"version range: ",Object(l.b)("inlineCode",{parentName:"li"},"pnpm add kevva/is-positive#semver:^2.0.0"))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--save-prod--p"},"--save-prod, -P"),Object(l.b)("p",null,"This will install one or more packages in your ",Object(l.b)("inlineCode",{parentName:"p"},"dependencies"),"."),Object(l.b)("h3",{id:"--save-dev--d"},"--save-dev, -D"),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"--save-dev")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-D")," will install one or more packages in your ",Object(l.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(l.b)("h3",{id:"--save-optional--o"},"--save-optional, -O"),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"--save-optional")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-O")," will install one or more packages in your ",Object(l.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(l.b)("h3",{id:"--save-exact--e"},"--save-exact, -E"),Object(l.b)("p",null,"Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator."),Object(l.b)("h3",{id:"--save-peer"},"--save-peer"),Object(l.b)("p",null,"Added in: v3.2.0"),Object(l.b)("p",null,"Using ",Object(l.b)("inlineCode",{parentName:"p"},"--save-peer")," will add one or more packages to ",Object(l.b)("inlineCode",{parentName:"p"},"peerDependencies")," and install them as dev dependencies."),Object(l.b)("h3",{id:"--ignore-workspace-root-check--w"},"--ignore-workspace-root-check, -W"),Object(l.b)("p",null,"Added in: v3.6.0"),Object(l.b)("p",null,"Adding a new dependency to the root workspace package fails, unless the ",Object(l.b)("inlineCode",{parentName:"p"},"--ignore-workspace-root-check")," or ",Object(l.b)("inlineCode",{parentName:"p"},"-W")," flag is used. For instance, ",Object(l.b)("inlineCode",{parentName:"p"},"pnpm add debug -W"),"."),Object(l.b)("h3",{id:"--global"},"--global"),Object(l.b)("p",null,"Install a package globally."),Object(l.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector>"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"/hu/4.x/filtering"},"Read more about filtering.")),Object(l.b)("h3",{id:"--workspace"},"--workspace"),Object(l.b)("p",null,"Added in: v4.4.0"),Object(l.b)("p",null,"Only adds the new dependency if it is found in the workspace."))}b.isMDXComponent=!0},446:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=b(a),m=n,u=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return a?r.a.createElement(u,p(p({ref:t},c),{},{components:a})):r.a.createElement(u,p({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var c=2;c<l;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},452:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pnpm-install-package-5a2978bb5d926b98518d1aa3d97b5122.svg"}}]);