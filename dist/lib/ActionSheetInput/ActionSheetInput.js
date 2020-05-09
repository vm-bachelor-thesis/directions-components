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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import React, { useState } from 'react';
import { ActionSheetIOS, View, TouchableWithoutFeedback, StyleSheet, } from 'react-native';
import { Text } from '../..';
import * as templates from './templates';
export var ActionSheetInput = function (_a) {
    var title = _a.title, placeholder = _a.placeholder, options = _a.options, values = _a.values, _b = _a.textAlign, textAlign = _b === void 0 ? 'left' : _b, onValueChange = _a.onValueChange, rest = __rest(_a, ["title", "placeholder", "options", "values", "textAlign", "onValueChange"]);
    var _c = useState(), value = _c[0], setValue = _c[1];
    var openActionSheet = function () {
        ActionSheetIOS.showActionSheetWithOptions({
            options: __spreadArrays(options, ['Avbryt']),
            title: title,
            cancelButtonIndex: options.length,
        }, function (index) {
            if (index !== options.length) {
                var newValue = values ? values[index] : options[index];
                setValue(newValue);
                onValueChange(newValue);
            }
        });
    };
    var handlePress = function () {
        openActionSheet();
    };
    var flattenedStyle = StyleSheet.flatten([
        templates.text.default,
        !value && templates.text.placeholder,
        textAlign === 'right' && templates.text.textAlignRight,
    ]);
    return (<TouchableWithoutFeedback onPress={handlePress} {...rest}>
      <View style={templates.touchable.default}>
        <Text style={flattenedStyle}>{value ? value : placeholder}</Text>
      </View>
    </TouchableWithoutFeedback>);
};
//# sourceMappingURL=ActionSheetInput.js.map