import { StateComponent, renderer } from 'polythene-react-base';
import { Conditional } from 'polythene-core';
import { coreIOSSpinner } from 'polythene-core-ios-spinner';
import { BaseSpinner } from 'polythene-react-base-spinner';

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

var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var SpinnerInstance = StateComponent(_extends({}, coreIOSSpinner, {
  component: BaseSpinner
}));
var SpinnerToggle = StateComponent(Conditional);
SpinnerToggle.displayName = "IOSSpinnerToggle";
var IOSSpinner = function IOSSpinner(props) {
  return renderer(SpinnerToggle, _extends({}, props, {
    placeholderClassName: baseSpinnerClasses.placeholder,
    instance: SpinnerInstance
  }));
};
IOSSpinner.classes = classes;
IOSSpinner.displayName = "IOSSpinner";

export { IOSSpinner };
