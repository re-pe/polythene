!function(o,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("mithril"),require("polythene-icon"),require("polythene-button"),require("polythene-css"),require("polythene-config")):"function"==typeof define&&define.amd?define(["exports","mithril","polythene-icon","polythene-button","polythene-css","polythene-config"],n):n(o.polythene=o.polythene||{},o.m,o["polythene-icon"],o["polythene-button"],o["polythene-css"],o["polythene-config"])}(this,function(o,n,t,e,i,r){"use strict";n="default"in n?n.default:n;var c=function(o,n,t){return n in o?Object.defineProperty(o,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):o[n]=t,o},a=Object.assign||function(o){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(o[e]=t[e])}return o},p=(r.appConfig.grid_unit_icon_button-r.appConfig.unit_icon_size)/2,l=(r.appConfig.grid_unit_icon_button-r.appConfig.unit_icon_size)/3,u=a({},e.buttonConfig,{padding:p,padding_compact:l,color_light_wash_opacity:r.appConfig.blend_light_background_hover_medium,color_light_focus_opacity:r.appConfig.blend_light_background_hover_medium,color_light_flat_normal_text:r.appConfig.rgba(r.appConfig.color_light_foreground,r.appConfig.blend_light_text_secondary),color_dark_wash_opacity:r.appConfig.blend_dark_background_hover_medium,color_dark_focus_opacity:r.appConfig.blend_dark_background_hover_medium,color_dark_flat_normal_text:r.appConfig.rgba(r.appConfig.color_dark_foreground,r.appConfig.blend_dark_text_secondary)}),_=function(o){return[{".pe-button--icon":{display:"inline-block","vertical-align":"middle",cursor:"pointer",position:"relative","font-size":"1rem","border-radius":"50%",border:"none"," .pe-button--icon__content":{"line-height":1,padding:o.padding+"px"},"&.pe-button--compact":{" .pe-button--icon__content":{padding:o.padding_compact+"px"}}}}]},d=function(o){return i.mixin.createStyles(o,_)},b=function(o,n,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return[c({},e+".pe-button.pe-button--icon",{color:o["color_"+n+"_"+t+"_normal_text"],background:"none"," .pe-button__wash":{opacity:o["color_"+n+"_wash_opacity"]},"&.pe-button--focus, &.pe-button--selected":{" .pe-button__focus":{opacity:o["color_"+n+"_focus_opacity"],"background-color":"currentcolor"}},"&.pe-button--disabled":{color:o["color_"+n+"_"+t+"_disabled_text"]},"&.pe-button--raised":{"background-color":o["color_"+n+"_background"]," .pe-button__content":{background:"transparent"}}})]},f=function(o,n,t){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return[c({},e+".pe-button.pe-button--icon:hover","light"===n?{" .pe-button__wash":{"background-color":"currentcolor"}}:{" .pe-button__wash":{"background-color":o["color_"+n+"_"+t+"_normal_text"]}})]},g=function(o){return[b(o,"light","flat"),{"html.pe-no-touch":[f(o,"light","flat"," ")]},{".pe-dark-theme":[b(o,"dark","flat"," "),b(o,"dark","flat","&")]},{"html.pe-no-touch .pe-dark-theme":[f(o,"dark","flat"," ")]}]},s=function(o){return i.mixin.createStyles(o,g)};i.styler.styleComponent("pe-icon-button","icon-button",r.componentsConfig,u,d,s);var h={component:"pe-button pe-button--icon",content:"pe-button--icon__content",compact:"pe-button--compact"},m=function(o){var i=o.attrs,r=i.icon?n(t.icon,i.icon):i.content?i.content:null;return n(e.button,a({},a({},i),{content:n("div",{class:h.content},r),parentClass:[i.parentClass||h.component,i.compact?h.compact:null].join(" "),wash:void 0!==i.wash&&i.wash,ripple:i.ripple||null,animateOnTap:void 0!==i.animateOnTap&&i.animateOnTap}))},y={view:m};o.iconButton=y,o.iconButtonConfig=u,Object.defineProperty(o,"__esModule",{value:!0})});
//# sourceMappingURL=icon-button.js.map
