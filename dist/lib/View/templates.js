import { StyleSheet } from 'react-native';
import * as theme from '../../theme';
export var templates = StyleSheet.create({
    default: {
        backgroundColor: theme.colors.backgroundWhite,
    },
    backgroundGray: {
        backgroundColor: theme.colors.backgroundGray,
    },
    paddingRight: {
        paddingRight: theme.layout.baseMargin,
    },
    paddingVertical: {
        paddingTop: theme.layout.baseMargin,
        paddingBottom: theme.layout.baseMargin,
    },
    paddingHorizontal: {
        paddingLeft: theme.layout.baseMargin,
        paddingRight: theme.layout.baseMargin,
    },
    borderTopBottom: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.viewBorder,
    },
    container: {
        flex: 1,
        paddingLeft: theme.layout.baseMargin,
        paddingRight: theme.layout.baseMargin,
        backgroundColor: theme.colors.backgroundGray,
    },
    safeAreaViewComponent: {
        flex: 1,
    },
    scrollViewComponent: {
        flex: 1,
    },
});
//# sourceMappingURL=templates.js.map