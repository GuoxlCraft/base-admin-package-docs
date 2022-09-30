(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{393:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"项目配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目配置"}},[t._v("#")]),t._v(" 项目配置")]),t._v(" "),a("h2",{attrs:{id:"环境变量配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境变量配置"}},[t._v("#")]),t._v(" 环境变量配置")]),t._v(" "),a("p",[t._v("在项目中，难免会碰到需要在不同环境下做不同的事，这时候，就需要自己去配置环境变量。目前"),a("code",[t._v("vue-element-admin")]),t._v("提供了四种环境变量。除了"),a("code",[t._v("base.env")]),t._v("是针对开发的时候，其他三种环境变量是针对打包的时候去构建不同环境的。目前主要的一个区别就是为了区分出接口前缀。")]),t._v(" "),a("p",[t._v("开发人员可以根据实际项目情况去进行扩展改造。")]),t._v(" "),a("p",[t._v("环境变量文件都存放在"),a("code",[t._v("config")]),t._v("文件夹中。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("获取全局环境变量：process.env.xxx")])]),t._v(" "),a("h3",{attrs:{id:"base-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base-env"}},[t._v("#")]),t._v(" base.env")]),t._v(" "),a("p",[t._v("当运行"),a("code",[t._v("npm run serve")]),t._v("的时候，默认取的是"),a("code",[t._v("base.env")]),t._v("中的环境变量以及参数。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为 development 环境")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"development\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api接口前缀需要使用哪个环境的前缀")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API_CURENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"base\"'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"dev-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dev-env"}},[t._v("#")]),t._v(" dev.env")]),t._v(" "),a("p",[t._v("当运行"),a("code",[t._v("npm run build:dev")]),t._v("的时候，默认取的是"),a("code",[t._v("dev.env")]),t._v("中的环境变量以及参数，打包开发环境的项目代码，适用于开发人员的自我测试。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为 development 环境")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"development\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api接口前缀需要使用哪个环境的前缀")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API_CURENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"dev\"'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"test-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-env"}},[t._v("#")]),t._v(" test.env")]),t._v(" "),a("p",[t._v("当运行"),a("code",[t._v("npm run build:test")]),t._v("的时候，默认取的是"),a("code",[t._v("test.env")]),t._v("中的环境变量以及参数，打包测试环境的项目代码，适用于测试人员进行项目测试。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为 development 环境")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"development\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api接口前缀需要使用哪个环境的前缀")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API_CURENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"test\"'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"pro-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pro-env"}},[t._v("#")]),t._v(" pro.env")]),t._v(" "),a("p",[t._v("当运行"),a("code",[t._v("npm run build:pro")]),t._v("的时候，默认取的是"),a("code",[t._v("pro.env")]),t._v("中的环境变量以及参数，打包生产环境的项目代码，用于上线交付。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认为 production 环境")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"production\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// api接口前缀需要使用哪个环境的前缀")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API_CURENV")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\"pro\"'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"主题色和样式配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主题色和样式配置"}},[t._v("#")]),t._v(" 主题色和样式配置")]),t._v(" "),a("p",[t._v("主要用于配置侧边栏菜单和顶部菜单的主题色以及"),a("code",[t._v("layout")]),t._v("整体布局")]),t._v(" "),a("p",[t._v("侧边栏菜单和顶部菜单的样式主要代码位置位于"),a("code",[t._v("src/styles/sidebar.less")])]),t._v(" "),a("p",[t._v("目前"),a("code",[t._v("vue-element-admin")]),t._v("的布局和主题采用的是样式变量，如果需要更改主题色或者样式变量，可在"),a("code",[t._v("src/styles/variables.less")]),t._v("中进行更改，更改后将影响整个项目的主题和布局。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("目前并没有开放主题更改，只能手动在代码上进行变更，后续也会针对这个需求去进行主题的改造。")]),t._v(" "),a("p",[a("code",[t._v("variables.less")]),t._v("已经配置在全局中，无需各自引入，如需更改或新增全局 less 文件，可在"),a("code",[t._v("build/utils")]),t._v("的"),a("code",[t._v("style-resources-loader")]),t._v("进行更改，之后重启项目即可。")])]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Silder")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@menuText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #bfcbd9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单默认字体颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@menuActiveText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单选中字体颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@menuActiveBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2d8cf0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单选中背景颜色\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@menuBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #001529"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单默认背景颜色\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@subMenuBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #1f2d3d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单子菜单背景颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@subMenuHover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2d8cf0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单子菜单悬停背景颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@subMenuActiveText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单子菜单悬停字体颜色\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@menuWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单宽度\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@menuMinWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 64px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 侧边菜单最小宽度\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// topSider")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topSiderHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 60px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部操作栏高度\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topMenuText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #303133"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部菜单栏目默认字体颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topMenuActiveText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2d8cf0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部菜单栏目选中字体颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topMenuActiveBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部菜单栏目选中背景颜色\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topMenuBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部菜单栏目默认背景颜色\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topSubMenuBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #1f2d3d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部菜单栏子菜单默认背景颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topSMenuHover"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2d8cf0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部菜单栏子菜单悬停背景颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@topSMenuActiveText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2d8cf0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 顶部菜单栏子菜单悬停字体颜色\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// navbar")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@navbarHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # navbar高度\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// tagsView")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@tagsViewHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 标签页高度\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@tagActiveBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #304156"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 标签页选中背景颜色\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// content")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@contentBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 主体内容背景颜色\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@appBg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #f5f7f9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 项目背景颜色\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// html body")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@minWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" 992px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" # 项目最小宽度\n\n")])])]),a("h2",{attrs:{id:"项目配置-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目配置-2"}},[t._v("#")]),t._v(" 项目配置")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("项目配置用于配置项目内展示的内容/布局/文本等效果，存于 vuex 中。")]),t._v(" "),a("p",[t._v("文件位置"),a("code",[t._v("src/store/modules/app.ts")]),t._v("，更改保存之后将会立即作用于整个项目中，开发者可根据实际项目进行扩展。")])]),t._v(" "),a("div",{staticClass:"language-javaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" collapsed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 菜单栏是否栏缩收")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showLogo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示logo")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showTags "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示标签栏")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showNavbar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示navbar")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" fixedHeader "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否固定header")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LayoutType "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Classic'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// layout布局")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showBreadcrumb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示面包屑")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showHamburger "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示侧边栏缩收按钮")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showScreenfull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否全屏按钮")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showUserInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示用户头像")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" title "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-element-admin'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 标题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" logoTitle "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-ele-admin'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// logo标题")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" userInfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'userInfo'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录信息存储字段-建议每个项目换一个字段，避免与其他项目冲突")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" greyMode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否开始灰色模式，用于特殊悼念日")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showBackTop "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否显示回到顶部")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" showMenuTab "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否固定一级菜单")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" requestTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否在接口调用时添加时间戳，避免IE缓存")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);