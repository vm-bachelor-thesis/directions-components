import React, { useState } from 'react';
import {
  ActionSheetIOS,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { Text } from '../..';
import * as templates from './templates';

export interface ActionSheetInputProps {
  title: string;
  placeholder: string;
  options: string[];
  values?: string[];
  textAlign?: 'left' | 'right';
  onValueChange: (value: string) => void;
}

export const ActionSheetInput = ({
  title,
  placeholder,
  options,
  values,
  textAlign = 'left',
  onValueChange,
  ...rest
}: ActionSheetInputProps) => {
  const [value, setValue] = useState<string>();

  const openActionSheet = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...options, 'Avbryt'],
        title: title,
        cancelButtonIndex: options.length,
      },
      (index) => {
        if (index !== options.length) {
          const newValue = values ? values[index] : options[index];

          setValue(newValue);
          onValueChange(newValue);
        }
      },
    );
  };

  const handlePress = () => {
    openActionSheet();
  };

  const flattenedStyle = StyleSheet.flatten([
    templates.text.default,
    !value && templates.text.placeholder,
    textAlign === 'right' && templates.text.textAlignRight,
  ]);

  return (
    <TouchableWithoutFeedback onPress={handlePress} {...rest}>
      <View style={templates.touchable.default}>
        <Text style={flattenedStyle}>{value ? value : placeholder}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
