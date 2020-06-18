(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(240)),o={id:"intro",title:"Getting started",sidebar_label:"Getting started"},l={id:"intro",title:"Getting started",description:"Introduction",source:"@site/docs/intro.md",permalink:"/docs/next/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/intro.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1592512067,sidebar_label:"Getting started",sidebar:"Docs",next:{title:"Terminology",permalink:"/docs/next/terminology"}},c=[{value:"Introduction",id:"introduction",children:[{value:"Key features:",id:"key-features",children:[]}]},{value:"Versions",id:"versions",children:[]},{value:"Quick start guide",id:"quick-start-guide",children:[{value:"Installation",id:"installation",children:[]},{value:"Basic example",id:"basic-example",children:[]},{value:"Composition example",id:"composition-example",children:[]},{value:"Multirun",id:"multirun",children:[]}]},{value:"Other stuff",id:"other-stuff",children:[{value:"Community",id:"community",children:[]},{value:"Citing Hydra",id:"citing-hydra",children:[]}]}],b={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"Hydra is an open-source Python framework that simplifies the development of research and other complex applications.\nThe key feature is the ability to dynamically create a hierarchical configuration by composition and override it through config files and the command line.\nThe name Hydra comes from its ability to run multiple similar jobs - much like a Hydra with multiple heads."),Object(i.b)("h3",{id:"key-features"},"Key features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Hierarchical configuration composable from multiple sources"),Object(i.b)("li",{parentName:"ul"},"Configuration can be specified or overridden from the command line"),Object(i.b)("li",{parentName:"ul"},"Dynamic command line tab completion"),Object(i.b)("li",{parentName:"ul"},"Run your application locally or launch it to run remotely"),Object(i.b)("li",{parentName:"ul"},"Run multiple jobs with different arguments with a single command")),Object(i.b)("h2",{id:"versions"},"Versions"),Object(i.b)("p",null,"Hydra supports Linux, Mac and Windows."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Version"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Docs"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Release notes"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Python Version"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0.11 (Stable)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"../intro"}),"0.11 Docs")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/facebookresearch/hydra/releases/tag/0.11.0"}),"Release notes")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.7, 3.5+")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\u25ba"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.0 (Release candidate)"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.0 docs"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/facebookresearch/hydra/releases/tag/hydra-1.0.0rc1"}),"Release notes")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"3.6+"))))),Object(i.b)("h2",{id:"quick-start-guide"},"Quick start guide"),Object(i.b)("p",null,"This guide will show you some of the most important features of Hydra.\nRead the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),"tutorial")," to gain a deeper understanding."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"Install Hydra 1.0 with ",Object(i.b)("inlineCode",{parentName:"p"},"pip install hydra-core --pre --upgrade"),".",Object(i.b)("br",{parentName:"p"}),"\n","This version may contain nuts and bugs and might be incompatible with existing plugins."),Object(i.b)("h3",{id:"basic-example"},"Basic example"),Object(i.b)("p",null,"Config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"db:\n  driver: mysql\n  user: omry\n  pass: secret\n")),Object(i.b)("p",null,"Application:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python",metastring:'{4-6} title="my_app.py"',"{4-6}":!0,title:'"my_app.py"'}),'import hydra\nfrom omegaconf import DictConfig\n\n@hydra.main(config_name="config")\ndef my_app(cfg : DictConfig) -> None:\n    print(cfg.pretty())\n\nif __name__ == "__main__":\n    my_app()\n')),Object(i.b)("p",null,"You can learn more about OmegaConf ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://omegaconf.readthedocs.io/en/latest/usage.html#access-and-manipulation"}),"here")," later."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"config.yaml")," is loaded automatically when you run your application"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n")),Object(i.b)("p",null,"You can override values in the loaded config from the command line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:"{4-5}","{4-5}":!0}),"$ python my_app.py db.user=root db.pass=1234\ndb:\n  driver: mysql\n  user: root\n  pass: 1234\n")),Object(i.b)("h3",{id:"composition-example"},"Composition example"),Object(i.b)("p",null,"You may want to alternate between two different databases. to support this create a ",Object(i.b)("inlineCode",{parentName:"p"},"config group")," named db,\nand place one config file for each alternative inside:\nThe directory structure of our application now looks like:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"\u251c\u2500\u2500 db\n\u2502   \u251c\u2500\u2500 mysql.yaml\n\u2502   \u2514\u2500\u2500 postgresql.yaml\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 my_app.py\n")),Object(i.b)("p",null,"Here is the new config:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"defaults:\n  - db: mysql\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"defaults")," is a special directive telling Hydra to use db/mysql.yaml when composing the configuration object.\nThe resulting cfg object is a composition of configs from defaults with configs specified in your ",Object(i.b)("inlineCode",{parentName:"p"},"config.yaml"),"."),Object(i.b)("p",null,"You can now choose which database configuration to use from the and override values from the command line: "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py db=postgresql db.timeout=20\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 20\n  user: postgre_user\nwebsite:\n  domain: example.com\n")),Object(i.b)("p",null,"You can have as many config groups as you need."),Object(i.b)("h3",{id:"multirun"},"Multirun"),Object(i.b)("p",null,"You can run your function multiple times with different configuration easily with the ",Object(i.b)("inlineCode",{parentName:"p"},"--multirun|-m")," flag."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"$ python my_app.py --multirun db=mysql,postgresql\n[HYDRA] Sweep output dir : multirun/2020-01-09/01-16-29\n[HYDRA] Launching 2 jobs locally\n[HYDRA]        #0 : db=mysql\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\nwebsite:\n    domain: example.com\n\n[HYDRA]        #1 : db=postgresql\ndb:\n  driver: postgresql\n  pass: drowssap\n  timeout: 10\n  user: postgre_user\nwebsite:\n    domain: example.com\n")),Object(i.b)("p",null,"There is a whole lot more to Hydra. Read the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/tutorials/basic/your_first_app/simple_cli"}),"tutorial")," to learn more."),Object(i.b)("h2",{id:"other-stuff"},"Other stuff"),Object(i.b)("h3",{id:"community"},"Community"),Object(i.b)("p",null,"Ask questions in the chat or StackOverflow (Use the tag #fb-hydra):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://hydra-framework.zulipchat.com"}),"Zulip Chat")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/tagged/fb-hydra"}),"StackOverflow"))),Object(i.b)("p",null,"Follow Hydra on Twitter and Facebook:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.facebook.com/Hydra-Framework-109364473802509/"}),"Facebook page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://twitter.com/Hydra_Framework"}),"Twitter"))),Object(i.b)("h3",{id:"citing-hydra"},"Citing Hydra"),Object(i.b)("p",null,"If you use Hydra in your research please use the following BibTeX entry:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"@Misc{,\n  author =       {Omry Yadan},\n  title =        {A framework for elegantly configuring complex applications},\n  howpublished = {Github},\n  year =         {2019},\n  url =          {https://github.com/facebookresearch/hydra}\n}\n")))}p.isMDXComponent=!0},240:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),m=n,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||i;return a?r.a.createElement(d,l(l({ref:t},b),{},{components:a})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);