import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
export interface TextProps extends RNTextProps {
    children: React.ReactNode;
    type?: 'default' | 'header' | 'onGrayBackground';
    margin?: 'all' | 'top' | 'bottom' | 'horizontal' | 'top+horizontal' | 'bottom+horizontal' | 'none';
}
export declare const Text: ({ type, margin, style, children, ...rest }: TextProps) => JSX.Element;
