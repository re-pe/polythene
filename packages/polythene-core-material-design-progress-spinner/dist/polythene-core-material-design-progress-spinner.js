!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("polythene-core"),require("polythene-utilities"),require("polythene-theme"),require("polythene-core-base-spinner")):"function"==typeof define&&define.amd?define(["exports","polythene-core","polythene-utilities","polythene-theme","polythene-core-base-spinner"],r):r(e.polythene={},e["polythene-core"],e["polythene-utilities"],e["polythene-theme"],e["polythene-core-base-spinner"])}(this,function(e,r,t,n,i){"use strict";var a=function(e){return"rgba("+e+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1)+")"},o=(Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e})({},i.vars,{border_width_small:i.vars.size_small/i.vars.size_regular*3,border_width_regular:3,border_width_medium:i.vars.size_medium/i.vars.size_regular*3,border_width_large:i.vars.size_large/i.vars.size_regular*3,border_width_fab:i.vars.size_fab/i.vars.size_regular*3,animation_duration:"1.5s",color_light:a(n.vars.color_primary),color_dark:a(n.vars.color_primary)}),s={component:"pe-md-progress-spinner",animation:"pe-md-progress-spinner__animation",circle:"pe-md-progress-spinner__circle",circleRight:"pe-md-progress-spinner__circle-right",circleLeft:"pe-md-progress-spinner__circle-left"},c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"regular";return o["size_"+e]},p=function(e,r){return e+(r-e)*(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)},u=function(e,r,t,n){var i=e.style;i.transform=i["-webkit-transform"]=i["-moz-transform"]=i["-ms-transform"]=i["-o-transform"]="rotate("+p(r,t,n)+"deg)"},d=function(e,r,t){var n=e.querySelector("."+s.animation).style;n.clip=t<.5?"rect(0px, "+r+"px, "+r+"px, "+r/2+"px)":"rect(auto, auto, auto, auto)";var i=e.querySelector("."+s.circleLeft),a=e.querySelector("."+s.circleRight);i.style.clip=a.style.clip="rect(0px, "+r/2+"px, "+r+"px, 0px)",u(a,0,180,Math.min(1,2*t)),u(i,0,360,t)},m=function(e,r,n,i){if(r.dom()&&!r.animating()){var a=r.percentage();if(i.animated&&a!==e){var o=1e3*(i.updateDuration||.8),s=r.dom(),c=null,l=function i(l){c||(c=l);var p=l-c,u=a+1/o*p*(e-a);d(s,n,t.easing.easeInOutQuad(u)),c&&p<o?window.requestAnimationFrame(i):(c=null,r.percentage(e),r.animating(!1))};r.animating(!0),window.requestAnimationFrame(l)}else d(r.dom(),n,e),r.percentage(e)}},f=function(e,t,n){if(void 0!==t.percentage){var i=r.unpackAttrs(t.percentage);m(i,e,n,t)}},g=function(e){var r=l(e.size),t=o.raisedSize(r),n=t.padding,i=t.paddedSize;return e.raised?i-2*n:r},v=function(e,r){var t=r(0);return{dom:r(),percentage:t,animating:r(!1)}},h=function(e){if(e.dom){var r=e.state,t=e.attrs;r.dom(e.dom);var n=g(t);f(r,t,n)}},y=function(e,r){var t=r.renderer,n=e.state,i=e.attrs,a=g(i);f(n,i,a);var o=t("div",{key:"content",className:s.animation,style:{width:a+"px",height:a+"px"}},[t("div",{key:"left",className:[s.circle,s.circleLeft].join(" ")}),t("div",{key:"right",className:[s.circle,s.circleRight].join(" ")})]);return c({},i,{className:[s.component,i.className].join(" "),content:o})},_=Object.freeze({getInitialState:v,onMount:h,createProps:y});e.coreMaterialDesignProgressSpinner=_,e.classes=s,e.vars=o,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=polythene-core-material-design-progress-spinner.js.map
