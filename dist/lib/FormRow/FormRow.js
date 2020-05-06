import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from '../';
import { templates } from './templates';
export var FormRow = function (_a) {
    var title = _a.title, inputComponent = _a.inputComponent, _b = _a.wideTitle, wideTitle = _b === void 0 ? false : _b;
    var inputViewStyle = StyleSheet.flatten([
        templates.inputView,
        wideTitle && templates.inputViewNarrow,
    ]);
    return (<View style={templates.containerView}>
      <View style={templates.titleView} padding="right">
        <Text>{title}</Text>
      </View>
      <View style={inputViewStyle}>{inputComponent}</View>
    </View>);
};
//# sourceMappingURL=FormRow.js.map