import React from 'react';
import {
  View as RNView,
  ViewProps as RNViewProps,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { templates } from './templates';

export interface ViewProps extends RNViewProps {
  children: React.ReactNode;
  background?: 'white' | 'gray';
  type?: 'default' | 'container';
  padding?: 'all' | 'horizontal' | 'vertical' | 'right' | 'none';
  borderTopBottom?: boolean;
}

export const View = ({
  type = 'default',
  background = 'white',
  padding = 'none',
  borderTopBottom = false,
  style,
  children,
  ...rest
}: ViewProps) => {
  const flattenedStyle = StyleSheet.flatten([
    templates.default,
    type === 'container' && templates.container,
    background === 'gray' && templates.backgroundGray,
    (padding === 'all' || padding === 'vertical') && templates.paddingVertical,
    (padding === 'all' || padding === 'horizontal') &&
      templates.paddingHorizontal,
    (padding === 'all' || padding === 'right') && templates.paddingRight,
    borderTopBottom && templates.borderTopBottom,
    style,
  ]);

  if (type === 'container') {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={templates.keyboardAvoidingView}
      >
        <SafeAreaView style={flattenedStyle} {...rest}>
          <ScrollView>{children}</ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }

  return (
    <RNView style={flattenedStyle} {...rest}>
      {children}
    </RNView>
  );
};
