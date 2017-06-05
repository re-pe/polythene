export { isClient, isServer } from 'polythene-core';

if (isClient && !window.WebFontConfig) {
    window.WebFontConfig = {};
    (function () {
        var wf = document.createElement('script');
        wf.src = (document.location.protocol === 'https:' ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
}

var webfontLoader = {
    add: function add(vendor, family, key) {
        if (isServer) {
            return;
        }
        var vendorCfg = window.WebFontConfig[vendor] || {};
        vendorCfg.families = vendorCfg.families || [];
        vendorCfg.families.push(family);
        if (key) {
            vendorCfg.key = key;
        }
        window.WebFontConfig[vendor] = vendorCfg;
    }
};

export default webfontLoader;