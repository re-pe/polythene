import { ViewComponent, StateComponent } from 'polythene-react-base';
import { coreTab, coreScrollButton, coreTabs } from 'polythene-core-tabs';
import { Icon } from 'polythene-react-icon';
import { Button } from 'polythene-react-button';
import { IconButton } from 'polythene-react-icon-button';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var Tab = ViewComponent(_extends({}, coreTab, {
  createProps: function createProps(vnode, args) {
    return coreTab.createProps(vnode, _extends(args, {
      Icon: Icon
    }));
  },
  component: Button
}));
Tab.displayName = "Tab";

var ScrollButton = ViewComponent(_extends({}, coreScrollButton, {
  component: IconButton
}));
ScrollButton.displayName = "ScrollButton";

var Tabs = StateComponent(_extends({}, coreTabs, {
  createContent: function createContent(vnode, args) {
    return coreTabs.createContent(vnode, _extends(args, {
      Tab: Tab,
      ScrollButton: ScrollButton
    }));
  }
}));
Tabs.displayName = "Tabs";

export { Tabs };
