/// <reference types="react" />
export interface ActionSheetInputProps {
    title: string;
    placeholder: string;
    options: string[];
    values?: string[];
    textAlign?: 'left' | 'right';
    onValueChange: (value: string) => void;
}
export declare const ActionSheetInput: ({ title, placeholder, options, values, textAlign, onValueChange, ...rest }: ActionSheetInputProps) => JSX.Element;
