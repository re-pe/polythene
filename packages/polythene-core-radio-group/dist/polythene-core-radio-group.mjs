import { filterSupportedAttributes } from 'polythene-core';

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
  component: "pe-radio-group"
};

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};
var getInitialState = function getInitialState(vnode, createStream) {
  var checkedIndex = createStream(null);
  return {
    checkedIndex: checkedIndex,
    redrawOnUpdate: createStream.merge([checkedIndex])
  };
};
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;
  var attrs = vnode.attrs;
  return _extends({}, filterSupportedAttributes(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};
var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      RadioButton = _ref2.RadioButton;
  var attrs = vnode.attrs;
  var state = vnode.state;
  var checkedIndex = state.checkedIndex();
  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : attrs.children || vnode.children || [];
  return buttons.length ? buttons.map(function (buttonOpts, index) {
    if (!buttonOpts) {
      return null;
    }

    if (buttonOpts.value === undefined) {
      console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
    } // Only set defaultChecked the first time when no value has been stored yet


    var isDefaultChecked = (buttonOpts.defaultChecked || buttonOpts.checked || attrs.defaultSelectedValue !== undefined && buttonOpts.value === attrs.defaultSelectedValue) && checkedIndex === null;
    var buttonOptsChecked = buttonOpts.checked !== undefined ? buttonOpts.checked : checkedIndex === index; // Use internal state if checked state is not set in attrs

    var isChecked = isDefaultChecked || buttonOptsChecked;
    return h(RadioButton, _extends({}, {
      /* group attributes that may be overwritten by individual buttons */
      name: attrs.name,
      key: buttonOpts.value
    }, attrs.all,
    /* individual button options */
    buttonOpts, {
      /* this component's options */
      onChange: function onChange(_ref3) {
        var value = _ref3.value;
        return state.checkedIndex(index), attrs.onChange && attrs.onChange({
          value: value
        });
      },
      checked: isChecked
    }));
  }) : null;
};

var radioGroup = /*#__PURE__*/Object.freeze({
  getElement: getElement,
  getInitialState: getInitialState,
  createProps: createProps,
  createContent: createContent
});

export { radioGroup as coreRadioGroup };
