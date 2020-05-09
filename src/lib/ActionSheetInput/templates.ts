import { StyleSheet } from 'react-native';
import * as theme from '../../theme';

export const touchable = StyleSheet.create({
  default: {
    flexGrow: 1,
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
  },
});

export const text = StyleSheet.create({
  default: {},
  placeholder: {
    color: theme.colors.placeholder,
  },
  textAlignRight: {
    textAlign: 'right',
  },
});
