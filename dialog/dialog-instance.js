'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),require('polythene/common/object.assign');var _events=require('polythene/common/events'),_events2=_interopRequireDefault(_events),_mithril=require('mithril'),_mithril2=_interopRequireDefault(_mithril),_dialog=require('polythene/dialog/dialog'),_dialog2=_interopRequireDefault(_dialog),_transition=require('polythene/common/transition'),_transition2=_interopRequireDefault(_transition),_shadow=require('polythene/shadow/shadow'),_shadow2=_interopRequireDefault(_shadow);require('polythene/dialog/theme/theme');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var CSS_CLASSES={block:'pe-dialog',visible:'pe-dialog--visible',body:'pe-dialog__body',fullscreen:'pe-dialog--fullscreen',content:'pe-dialog__content',header:'pe-dialog__header',footer:'pe-dialog__footer',footerHigh:'pe-dialog__footer--high',title:'pe-dialog__title',actions:'pe-dialog__actions',hasBackdrop:'pe-dialog--backdrop',hasTopOverflow:'pe-dialog--overflow-top',hasBottomOverflow:'pe-dialog--overflow-bottom',menuContent:'pe-menu__content'},SCROLL_WATCH_TIMER=150,updateScrollState=function(a){var b=a.scrollEl;b&&(a.topOverflow=0<b.scrollTop,a.bottomOverflow=0<b.scrollHeight-(b.scrollTop+b.getBoundingClientRect().height))},updateFooterState=function(a){var b=a.footerEl;if(b){var c=window.getComputedStyle(b),d=b.getBoundingClientRect().height,f=parseInt(c.minHeight,10);d>f?b.classList.add(CSS_CLASSES.footerHigh):b.classList.remove(CSS_CLASSES.footerHigh)}},show=function(a,b){var c=a.instanceId;return a.isTransitioning=!0,_transition2.default.show(Object.assign({},b,{el:a.el,showClass:CSS_CLASSES.visible})).then(function(){a.isTransitioning=!1,a.visible=!0,a.didShow&&a.didShow(c)})},hide=function(a,b){var c=a.instanceId;return a.isTransitioning=!0,_transition2.default.hide(Object.assign({},b,{el:a.el,showClass:CSS_CLASSES.visible})).then(function(){_dialog2.default.remove(c),a.isTransitioning=!1,a.visible=!1,a.didHide&&a.didHide(c),setTimeout(_mithril2.default.redraw,0)})},createViewContent=function(a,b){var d=b.body||b.menu;return{tag:'div',attrs:{'class':CSS_CLASSES.body,style:{},config:function config(f,g){g||(a.scrollEl=f)},onscroll:function onscroll(){a.isScrolling=!0,updateScrollState(a),clearTimeout(a.scrollWatchId),a.scrollWatchId=setTimeout(function(){a.isScrolling=!1},SCROLL_WATCH_TIMER)}},children:[d]}},createView=function(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{},c=b.body||b.menu,d=b.updateContentOnScroll||!1,f=!d&&a.isScrolling,g=b.tag||'form',h=function update(){updateScrollState(a),updateFooterState(a),_mithril2.default.redraw()},i=Object.assign({},{class:[CSS_CLASSES.block,b.fullscreen?CSS_CLASSES.fullscreen:null,b.backdrop?CSS_CLASSES.hasBackdrop:null,a.topOverflow||b.borders?CSS_CLASSES.hasTopOverflow:null,a.bottomOverflow||b.borders?CSS_CLASSES.hasBottomOverflow:null,a.visible?CSS_CLASSES.visible:null,b.class].join(' '),id:b.id||'',config:function config(l,m,n,o){if(!m){b.config&&b.config(l,m,n,o),a.el=l;var p=function cleanup(){_events2.default.unsubscribe('resize',h),_events2.default.unsubscribe('keydown',q)},q=function handleEscape(r){b.fullscreen||b.backdrop||27===r.which&&(p(),hide(a,Object.assign({},b,{hideDelay:0})))};_events2.default.subscribe('resize',h),_events2.default.subscribe('keydown',q),n.onunload=function(){p()},updateScrollState(a),updateFooterState(a),show(a,b).then(function(){updateScrollState(a),updateFooterState(a),(a.topOverflow||a.bottomOverflow)&&setTimeout(_mithril2.default.redraw,0)})}},onclick:function onclick(l){l.target!==a.el||b.modal||!a.isTransitioning&&hide(a,Object.assign({},b,{hideDelay:0}))}},b.formOptions?b.formOptions:null),j=c?f?{subtree:'retain'}:createViewContent(a,b):null,k={tag:'div',attrs:{'class':[CSS_CLASSES.content,b.menu?CSS_CLASSES.menuContent:null].join(' ')},children:[b.fullscreen?null:_mithril2.default.component(_shadow2.default,{z:a.z,animated:!0}),b.fullscreen?null:b.title?{tag:'div',attrs:{'class':CSS_CLASSES.header,config:function config(l){a.headerHeight=l.scrollHeight}},children:[{tag:'div',attrs:{'class':CSS_CLASSES.title},children:[b.title]}]}:null,j,b.fullscreen?null:b.footer?{tag:'div',attrs:{'class':CSS_CLASSES.footer,config:function config(l,m){a.footerHeight=l.scrollHeight;m||(a.footerEl=l)}},children:[{tag:'div',attrs:{'class':CSS_CLASSES.actions},children:[b.footer]}]}:null]};return(0,_mithril2.default)(g,i,[b.before,k,b.after])},component={controller:function controller(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.opts||{},c=b.z===void 0?3:b.z;return Object.assign({},a,{instanceId:a.instanceId,z:c,scrollEl:null,footerEl:null,topOverflow:!1,bottomOverflow:!1,scrollWatchId:0,isScrolling:!1,headerHeight:0,footerHeight:0,el:null,visible:!1,isTransitioning:!1})},view:function view(a,b){var c='function'==typeof b.opts?b.opts():b.opts;return b.hide&&!a.isTransitioning&&hide(a,c),createView(a,c)}};exports.default=component,module.exports=exports['default'];
//# sourceMappingURL=dialog-instance.js.map