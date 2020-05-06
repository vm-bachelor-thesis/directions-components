import { StyleSheet } from 'react-native';
import * as theme from '../theme';
export var calculateHeight = function (lines) {
    return lines * theme.layout.fontSize + theme.layout.baseMargin / 1.5;
};
export var templates = StyleSheet.create({
    default: {
        fontSize: theme.layout.fontSize,
        lineHeight: theme.layout.lineHeight,
        color: theme.colors.text,
        paddingTop: theme.layout.baseMargin / 3,
        paddingBottom: theme.layout.baseMargin / 3,
    },
});
//# sourceMappingURL=templates.js.map