"use strict";Object.defineProperty(exports,"__esModule",{value:true});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _polytheneCommonMultiple=require("polythene/common/multiple");var _polytheneCommonMultiple2=_interopRequireDefault(_polytheneCommonMultiple);var _polytheneNotificationNotificationInstance=require("polythene/notification/notification-instance");var _polytheneNotificationNotificationInstance2=_interopRequireDefault(_polytheneNotificationNotificationInstance);var _polytheneThemeSnackbarSnackbarTransitions=require("polythene-theme/snackbar/snackbar-transitions");var _polytheneThemeSnackbarSnackbarTransitions2=_interopRequireDefault(_polytheneThemeSnackbarSnackbarTransitions);require("polythene-theme/snackbar/snackbar");exports["default"]=(0,_polytheneCommonMultiple2["default"])({instance:_polytheneNotificationNotificationInstance2["default"],"class":"snackbar",defaultId:"default_snackbar",tag:"div.snackbar-holder",noneTag:"span.snackbar-placeholder",bodyShowClass:"snackbar-open",queue:true,transitions:_polytheneThemeSnackbarSnackbarTransitions2["default"]});module.exports=exports["default"];