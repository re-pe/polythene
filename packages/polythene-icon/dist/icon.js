!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("mithril"),require("polythene-core"),require("polythene-svg"),require("polythene-css"),require("polythene-config")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-core","polythene-svg","polythene-css","polythene-config"],i):i(e.polythene=e.polythene||{},e.m,e["polythene-core"],e["polythene-svg"],e["polythene-css"],e["polythene-config"])}(this,function(e,i,n,r,t,o){"use strict";i="default"in i?i.default:i;var l={size_small:o.vars.unit_icon_size_small,size_regular:o.vars.unit_icon_size,size_medium:o.vars.unit_icon_size_medium,size_large:o.vars.unit_icon_size_large},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.vars.unit_icon_size;return{width:e+"px",height:e+"px"}},s=function(e){return[{".pe-icon":{display:"inline-block","vertical-align":"middle","background-repeat":"no-repeat",fill:"currentcolor",position:"relative","font-size":0,"line-height":0,"&.pe-icon--avatar img":{border:"none","border-radius":"50%",width:"100%",height:"100%"}," img":{height:"100%"}," svg":{width:"100%",height:"100%",fill:"currentcolor",color:"inherit"," path, rect, polygon":{"&:not([fill=none])":{fill:"currentcolor"}}},"&.pe-icon--small":a(e.size_small),"&.pe-icon--regular":a(e.size_regular),"&.pe-icon--medium":a(e.size_medium),"&.pe-icon--large":a(e.size_large)}}]},c=function(e){return t.mixin.createStyles(e,s)};t.styler.styleComponent("pe-icon","icon",o.componentsConfig,l,c);var u=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p={icon:"pe-icon",avatar:"pe-icon--avatar",small:"pe-icon--small",regular:"pe-icon--regular",medium:"pe-icon--medium",large:"pe-icon--large"},g={small:p.small,regular:p.regular,medium:p.medium,large:p.large},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return g[e]},v=function(e){var t=e.attrs,o=t.element||"div",l=u({},n.filterSupportedAttributes(t),{class:[p.icon,m(t.type),t.avatar?p.avatar:null,t.class].join(" ")},t.events?t.events:null),a=t.content?t.content:t.svg?i(r.svg,u({},t.svg)):t.msvg?i(r.svg,{content:t.msvg}):t.src?i("img",{src:t.src}):null;return i(o,l,[t.before,a,t.after])},h={view:v};e.icon=h,e.iconConfig=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=icon.js.map
