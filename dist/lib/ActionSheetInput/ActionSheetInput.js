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
import { ActionSheetIOS, TouchableWithoutFeedback } from 'react-native';
import { Text } from '../..';
import { templates } from './templates';
export var ActionSheetInput = function (_a) {
    var title = _a.title, placeholder = _a.placeholder, options = _a.options, values = _a.values, onValueChange = _a.onValueChange, rest = __rest(_a, ["title", "placeholder", "options", "values", "onValueChange"]);
    var _b = useState(), value = _b[0], setValue = _b[1];
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
    return (<TouchableWithoutFeedback onPress={handlePress} {...rest}>
      <Text style={!value && templates.placeholder}>
        {value ? value : placeholder}
      </Text>
    </TouchableWithoutFeedback>);
};
//# sourceMappingURL=ActionSheetInput.js.map