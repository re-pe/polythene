import { filterSupportedAttributes, isClient, deprecation, iconDropdownDown } from "polythene-core";
import classes from "polythene-css-classes/button";

export const getElement = vnode =>
  vnode.attrs.element || "a";

export const getInitialState = (vnode, createStream) => {
  const dom = createStream(null);
  const focus = createStream(false);
  const inactive = createStream(false);
  const mouseover = createStream(false);
  return {
    dom,
    focus,
    inactive,
    mouseover,
    redrawOnUpdate: createStream.merge([dom, focus, inactive])
  };
};

export const onMount = vnode => {
  if (!vnode.dom) {
    return;
  }
  const state = vnode.state;
  const attrs = vnode.attrs;
  if (attrs.borders !== undefined) {
    deprecation("Button", { option: "borders", newOption: "border" });
  }
  state.dom(vnode.dom);
  
  if (isClient) {
    const handleInactivate = () => (
      state.inactive(true),
      setTimeout(() => (
        state.inactive(false)
      ), attrs.inactivate * 1000)
    );

    const onFocus = () => state.focus(!state.mouseover());
    const onBlur = () => state.focus(false);
    const onMouseOver = () => state.mouseover(true);
    const onMouseOut = () => state.mouseover(false);
    const onClick = handleInactivate;

    vnode.dom.addEventListener("focus", onFocus, false);
    vnode.dom.addEventListener("blur", onBlur, false);
    vnode.dom.addEventListener("mouseover", onMouseOver, false);
    vnode.dom.addEventListener("mouseout", onMouseOut, false);
    vnode.dom.addEventListener("click", onClick, false);

    state.removeEventListeners = () => (
      vnode.dom.removeEventListener("focus", onFocus, false),
      vnode.dom.removeEventListener("blur", onBlur, false),
      vnode.dom.removeEventListener("mouseover", onBlur, false),
      vnode.dom.removeEventListener("mouseout", onMouseOut, false),
      vnode.dom.removeEventListener("click", onClick, false)
    );
  }
};

export const onUnMount = vnode =>
  vnode.state.removeEventListeners && vnode.state.removeEventListeners();

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const disabled = attrs.disabled;
  const inactive = attrs.inactive || state.inactive();
  const onClickHandler = attrs.events && attrs.events[k.onclick];
  const onKeyUpHandler = (attrs.events && attrs.events[k.onkeyup]) || onClickHandler;

  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs, { add: [k.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
    {
      className: [
        classes.super,
        attrs.parentClassName || classes.component,
        attrs.contained ? classes.contained : null,
        attrs.raised ? classes.contained : null,
        attrs.raised ? classes.raised : null,
        attrs.selected ? classes.selected : null,
        attrs.highLabel ? classes.highLabel : null,
        attrs.extraWide ? classes.extraWide : null,
        disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        attrs.separatorAtStart ? classes.separatorAtStart : null,
        (attrs.border || attrs.borders) ? classes.border : null,
        attrs.dropdown ? classes.hasDropdown : null,
        attrs.dropdown
          ? attrs.dropdown.open
            ? classes.dropdownOpen
            : classes.dropdownClosed
          : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    },
    attrs.events,
    inactive ? null : {
      [k.tabindex]: disabled || inactive
        ? -1
        : attrs[k.tabindex] || 0,
      [k.onclick]: onClickHandler,
      [k.onkeyup]: e => {
        if (e.keyCode === 13 && state.focus()) {
          state.focus(false);
          if (onKeyUpHandler) {
            onKeyUpHandler(e);
          }
        }
      }
    },
    attrs.url,
    disabled ? { disabled: true } : null
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Ripple, Icon, Shadow }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const noink = attrs.ink !== undefined && attrs.ink === false;
  const disabled = attrs.disabled;
  const children = attrs.children || vnode.children;
  const label = attrs.content
    ? attrs.content
    : attrs.label !== undefined
      ? typeof attrs.label === "object"
        ? attrs.label
        : h("div",
          { className: classes.label },
          h("div",
            {
              className: classes.textLabel,
              style: attrs.textStyle
            },
            attrs.label
          )
        )
      : children
        ? children
        : null;
  const noWash = disabled || (attrs.wash !== undefined && !attrs.wash);
  return h("div",
    {
      [k.class]: classes.content,
      style: attrs.style
    },
    [
      h(Shadow, {
        key: "shadow",
        shadowDepth: attrs.shadowDepth !== undefined
          ? attrs.shadowDepth
          : 0,
        animated: true
      }),
      // Ripple
      disabled || noink || !Ripple || (h.displayName === "react" ? !state.dom() : false)
        // somehow Mithril does not update when the dom stream is updated
        ? null
        : h(Ripple, Object.assign({},
          {
            key: "ripple",
            target: state.dom()
          },
          attrs.ripple
        )),
      // hover
      noWash ? null : h("div", { key: "wash", className: classes.wash }),
      label,
      attrs.dropdown
        ? h(Icon,
          {
            className: classes.dropdown,
            key: "dropdown",
            svg: { content: h.trust(iconDropdownDown) }
          }
        )
        : null
    ]
  );
};
