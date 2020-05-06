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
import { View as RNView, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';
import { templates } from './templates';
export var View = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'default' : _b, _c = _a.padding, padding = _c === void 0 ? 'none' : _c, _d = _a.borderTopBottom, borderTopBottom = _d === void 0 ? false : _d, style = _a.style, children = _a.children, rest = __rest(_a, ["type", "padding", "borderTopBottom", "style", "children"]);
    var flattenedStyle = StyleSheet.flatten([
        templates.default,
        type === 'container' && templates.container,
        (padding === 'all' || padding === 'vertical') && templates.paddingVertical,
        (padding === 'all' || padding === 'horizontal') &&
            templates.paddingHorizontal,
        (padding === 'all' || padding === 'right') && templates.paddingRight,
        borderTopBottom && templates.borderTopBottom,
        style,
    ]);
    if (type === 'container') {
        return (<SafeAreaView style={flattenedStyle} {...rest}>
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>);
    }
    return (<RNView style={flattenedStyle} {...rest}>
      {children}
    </RNView>);
};
//# sourceMappingURL=View.js.map