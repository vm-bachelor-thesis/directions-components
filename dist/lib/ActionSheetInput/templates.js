import { StyleSheet } from 'react-native';
import * as theme from '../../theme';
export var touchable = StyleSheet.create({
    default: {
        flexGrow: 1,
        alignSelf: 'stretch',
        flex: 1,
        justifyContent: 'center',
    },
});
export var text = StyleSheet.create({
    default: {},
    placeholder: {
        color: theme.colors.placeholder,
    },
    textAlignRight: {
        textAlign: 'right',
    },
});
//# sourceMappingURL=templates.js.map