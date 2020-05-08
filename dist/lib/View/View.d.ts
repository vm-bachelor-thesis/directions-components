import React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
export interface ViewProps extends RNViewProps {
    children: React.ReactNode;
    background?: 'white' | 'gray';
    type?: 'default' | 'container';
    padding?: 'all' | 'horizontal' | 'vertical' | 'right' | 'none';
    borderTopBottom?: boolean;
}
export declare const View: ({ type, background, padding, borderTopBottom, style, children, ...rest }: ViewProps) => JSX.Element;
