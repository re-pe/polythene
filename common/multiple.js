"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _mithril=require("mithril");var _mithril2=_interopRequireDefault(_mithril);require("polythene/common/object.assign");var multiple=function multiple(mOpts){var items=[];var removeItem=function removeItem(id){var item=findItem(id);var index=items.indexOf(item);if(index!==-1){items.splice(index,1)}};var findItem=function findItem(id){var _iteratorNormalCompletion=true;var _didIteratorError=false;var _iteratorError=undefined;try{for(var _iterator=items[Symbol.iterator](),_step;!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=true){var item=_step.value;if(item.instanceId===id){return item}}}catch(err){_didIteratorError=true;_iteratorError=err}finally{try{if(!_iteratorNormalCompletion&&_iterator["return"]){_iterator["return"]()}}finally{if(_didIteratorError){throw _iteratorError}}}};var next=function next(){if(items.length){items[0].show=true;_mithril2["default"].redraw()}};var _remove=function _remove(instanceId){if(mOpts.queue){items.shift();setTimeout(function(){next()},0)}else{removeItem(instanceId)}};var setPauseState=function setPauseState(pause,instanceId){var item=findItem(instanceId);if(item){item.pause=pause;item.unpause=!pause}};var didShow=function didShow(instanceId){var item=findItem(instanceId);item.showDeferred.resolve()};var didHide=function didHide(instanceId){var item=findItem(instanceId);item.hideDeferred.resolve();if(mOpts.queue){_remove(instanceId)}};var makeItem=function makeItem(opts,instanceId){return Object.assign({},mOpts,{instanceId:instanceId,opts:opts,show:mOpts.queue?false:true,showDeferred:_mithril2["default"].deferred(),hideDeferred:_mithril2["default"].deferred(),didShow:didShow,didHide:didHide})};return{count:function count(){return items.length},clear:function clear(){return items.length=0},show:function show(opts){var instanceId=arguments.length<=1||arguments[1]===undefined?mOpts.defaultId:arguments[1];console.log("multi show",instanceId);var item=undefined;if(mOpts.queue){item=makeItem(opts,instanceId);items.push(item);if(items.length===1){next()}}else{item=findItem(instanceId);if(!item){item=makeItem(opts,instanceId);items.push(item)}}return item.showDeferred.promise},hide:function hide(){var instanceId=arguments.length<=0||arguments[0]===undefined?mOpts.defaultId:arguments[0];console.log("multi hide",instanceId);var item=undefined;if(mOpts.queue){if(items.length){item=items[0]}}else{item=findItem(instanceId)}console.log("item",item);item.hide=true;return item.hideDeferred.promise},remove:function remove(){var instanceId=arguments.length<=0||arguments[0]===undefined?mOpts.defaultId:arguments[0];_remove(instanceId)},pause:function pause(){var instanceId=arguments.length<=0||arguments[0]===undefined?mOpts.defaultId:arguments[0];setPauseState(true,instanceId)},unpause:function unpause(){var instanceId=arguments.length<=0||arguments[0]===undefined?mOpts.defaultId:arguments[0];setPauseState(false,instanceId)},view:function view(){var toShowItems=items.filter(function(item){return item.show});if(!toShowItems.length){document.body.classList.remove(mOpts.bodyShowClass);return(0,_mithril2["default"])(mOpts.noneTag)}else{document.body.classList.add(mOpts.bodyShowClass)}return(0,_mithril2["default"])(mOpts.tag,toShowItems.map(function(itemData){if(itemData.show){return _mithril2["default"].component(mOpts.instance,Object.assign({},itemData,{transitions:mOpts.transitions}))}}))}}};exports["default"]=multiple;module.exports=exports["default"];