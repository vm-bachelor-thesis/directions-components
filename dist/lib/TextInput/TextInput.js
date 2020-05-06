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
import { TextInput as RNTextInput, StyleSheet, } from 'react-native';
import { templates, calculateHeight } from './templates';
import * as theme from '../theme';
export var TextInput = function (_a) {
    var placeholder = _a.placeholder, _b = _a.lines, lines = _b === void 0 ? 1 : _b, style = _a.style, rest = __rest(_a, ["placeholder", "lines", "style"]);
    var height = lines > 1 ? calculateHeight(lines) : 'auto';
    var flattenedStyle = StyleSheet.flatten([
        templates.default,
        { height: height },
        style,
    ]);
    return (<RNTextInput style={flattenedStyle} placeholder={placeholder} placeholderTextColor={theme.colors.placeholder} multiline={lines > 1} {...rest}/>);
};
//# sourceMappingURL=TextInput.js.map