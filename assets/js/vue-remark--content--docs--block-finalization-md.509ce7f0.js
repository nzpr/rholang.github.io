(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},cIg8:function(e,t,o){"use strict";o.r(t);var n=o("KHd+"),a=o("UQSp"),i=o("Kw5r");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var r={VueRemarkRoot:a.a},s=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(r).forEach((function(e){"object"===c(r[e])&&"function"==typeof r[e].render?t[e]=r[e]:o[e]=function(){return r[e]}}))},l=i.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",p={excerpt:null,title:"Check block finalization"};var u=function(e){e.options[f]&&(e.options[f]=p),i.a.util.defineReactive(e.options,f,p),e.options.computed=l.computed({$frontmatter:function(){return e.options[f]}},e.options.computed)},d=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"check-block-finalization"}},[o("a",{attrs:{href:"#check-block-finalization","aria-hidden":"true"}},[e._v("#")]),e._v("Check block finalization")]),o("p",[e._v("When the network has accepted your block and reached a consensus on it, the block is finalized")]),o("h2",{attrs:{id:"check-if-a-block-is-finalized"}},[o("a",{attrs:{href:"#check-if-a-block-is-finalized","aria-hidden":"true"}},[e._v("#")]),e._v("Check if a block is finalized")]),o("p",[e._v("Use this command to check if a block with the given blockhash is finalized")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("rnode is-finalized "),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("blockhash"),o("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")])])]),o("p",[e._v("Here is an example of the console output following the is-finalized call.")]),o("pre",{pre:!0,attrs:{class:"language-bash"}},[o("code",{pre:!0,attrs:{class:"language-bash"}},[e._v("$ rnode is-finalized f893a2ef3c9d69a0d8b2a660453abe0002628769c51f11af4d720e56c43a96d7\nBlock is finalized")])])])}),[],!1,null,null,null);"function"==typeof s&&s(d),"function"==typeof u&&u(d);t.default=d.exports}}]);