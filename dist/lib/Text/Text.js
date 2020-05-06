var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Text as RNText, StyleSheet, } from 'react-native';
import { templates } from './templates';
export var Text = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b, _c = _a.margin, margin = _c === void 0 ? 'none' : _c, style = _a.style, children = _a.children, rest = __rest(_a, ["type", "margin", "style", "children"]);
    var flattenedStyle = StyleSheet.flatten([
        templates.default,
        type === 'header' && templates.header,
        type === 'onGrayBackground' && templates.onGrayBackground,
        (margin === 'all' || margin === 'top' || margin === 'top+horizontal') &&
            templates.marginTop,
        (margin === 'all' ||
            margin === 'bottom' ||
            margin === 'bottom+horizontal') &&
            templates.marginBottom,
        (margin === 'all' ||
            margin === 'horizontal' ||
            margin === 'top+horizontal' ||
            margin === 'bottom+horizontal') &&
            templates.marginHorizontal,
        style,
    ]);
    return (<RNText style={flattenedStyle} {...rest}>
      {children}
    </RNText>);
};
//# sourceMappingURL=Text.js.map