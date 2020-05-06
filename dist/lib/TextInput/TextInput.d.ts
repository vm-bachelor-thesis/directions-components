/// <reference types="react" />
import { TextInputProps as RNTextInputProps } from 'react-native';
export interface TextInputProps extends RNTextInputProps {
    placeholder: string;
    lines?: number;
}
export declare const TextInput: ({ placeholder, lines, style, ...rest }: TextInputProps) => JSX.Element;
