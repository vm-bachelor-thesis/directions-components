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
import { View, StyleSheet } from 'react-native';
import { templates } from './templates';
export var Divider = function (_a) {
    var style = _a.style, rest = __rest(_a, ["style"]);
    var flattenedStyle = StyleSheet.flatten([templates.default, style]);
    return <View style={flattenedStyle} {...rest}/>;
};
//# sourceMappingURL=Divider.js.map