!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("polythene-core"),require("polythene-theme")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-theme"],t):t(e.polythene={},e["polythene-core"],e["polythene-theme"])}(this,function(e,t,o){"use strict";function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var n={base:"pe-button",component:"pe-button pe-text-button",content:"pe-button__content",focus:"pe-button__focus",label:"pe-button__label",wash:"pe-button__wash",borders:"pe-button--borders",disabled:"pe-button--disabled",focused:"pe-button--focus",inactive:"pe-button--inactive",selected:"pe-button--selected"},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},i=function(e){return e.attrs.element||"a"},d=function(e,t){var o=t(),r=t(!1),n=t(!1),a=t(!1);return{dom:o,focus:r,inactive:n,mouseover:a,redrawOnUpdate:t.merge([o,r,n,a])}},s=function(e){if(e.dom){var o=e.state;if(o.dom(e.dom),t.isClient){var r=function(){return o.focus(!o.mouseover())},n=function(){return o.focus(!1)},a=function(){return o.mouseover(!0)},l=function(){return o.mouseover(!1)};e.dom.addEventListener("focus",r,!1),e.dom.addEventListener("blur",n,!1),e.dom.addEventListener("mouseover",a,!1),e.dom.addEventListener("mouseout",l,!1),o.removeEventListeners=function(){return e.dom.removeEventListener("focus",r,!1),e.dom.removeEventListener("blur",n,!1),e.dom.removeEventListener("mouseover",n,!1),e.dom.removeEventListener("mouseout",l,!1)}}}},u=function(e){return e.state.removeEventListeners&&e.state.removeEventListeners()},c=function(e,o){var a,i=o.keys,d=e.state,s=e.attrs,u=s.disabled,c=s.inactive||d.inactive(),_=s.events&&s.events[i.onclick],v=s.events&&s.events[i.onkeydown]||_,b=function(){return d.inactive(!0),setTimeout(function(){return d.inactive(!1)},1e3*s.inactivate)};return l({},t.filterSupportedAttributes(s,{add:[i.formaction,"type"],remove:["style"]}),{className:[s.parentClassName||n.component,s.selected?n.selected:null,u?n.disabled:null,c?n.inactive:null,s.borders?n.borders:null,d.focus()?n.focused:null,"dark"===s.tone?"pe-dark-tone":null,"light"===s.tone?"pe-light-tone":null,s.className||s[i.class]].join(" ")},c?null:(a={},r(a,i.tabindex,u||c?-1:s[i.tabindex]||0),r(a,i.onclick,function(e){return void 0!==s.inactivate&&b(),_&&_(e),!0}),r(a,i.onkeydown,function(e){"Enter"===e.key&&d.focus()&&(d.focus(!1),v&&v(e))}),a),s.events,s.url,u?{disabled:!0}:null)},_=function(e,t){var o,i=t.renderer,d=t.keys,s=t.Ripple,u=e.state,c=e.attrs,_=void 0!==c.ink&&!1===c.ink,v=c.disabled,b=c.children||e.children,f=c.content?c.content:c.label?"object"===a(c.label)?c.label:i("div",{className:n.label},c.label):b||null,p=v||void 0!==c.wash&&!c.wash;return f?i("div",(o={},r(o,d.class,n.content),r(o,"style",c.style),o),[c.shadowComponent?c.shadowComponent:null,v||_?null:s?i(s,l({},{key:"ripple",target:u.dom()},c.ripple)):null,p?null:i("div",{key:"wash",className:n.wash}),v?null:i("div",{key:"focus",className:n.focus}),f]):null},v=Object.freeze({getElement:i,getInitialState:d,onMount:s,onUnMount:u,createProps:c,createContent:_}),b=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},f=o.vars.unit_touch_height,p={margin_h:o.vars.grid_unit,border_radius:o.vars.unit_item_border_radius,font_size:14,font_weight:500,outer_padding_v:(f-36)/2,padding_h:2*o.vars.grid_unit,padding_v:11,min_width:8*o.vars.grid_unit_component,text_transform:"uppercase",border_width:0,animation_duration:o.vars.animation_duration,color_light_background:"transparent",color_light_text:b(o.vars.color_light_foreground,o.vars.blend_light_text_primary),color_light_hover_background:b(o.vars.color_light_foreground,o.vars.blend_light_background_hover),color_light_focus_background:b(o.vars.color_light_foreground,o.vars.blend_light_background_hover),color_light_active_background:b(o.vars.color_light_foreground,o.vars.blend_light_background_active),color_light_disabled_background:"transparent",color_light_disabled_text:b(o.vars.color_light_foreground,o.vars.blend_light_text_disabled),color_dark_background:"transparent",color_dark_text:b(o.vars.color_dark_foreground,o.vars.blend_dark_text_primary),color_dark_hover_background:b(o.vars.color_dark_foreground,o.vars.blend_dark_background_hover),color_dark_focus_background:b(o.vars.color_dark_foreground,o.vars.blend_dark_background_hover),color_dark_active_background:b(o.vars.color_dark_foreground,o.vars.blend_dark_background_active),color_dark_disabled_background:"transparent",color_dark_disabled_text:b(o.vars.color_dark_foreground,o.vars.blend_dark_text_disabled)};e.coreButton=v,e.classes=n,e.vars=p,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-button.js.map
