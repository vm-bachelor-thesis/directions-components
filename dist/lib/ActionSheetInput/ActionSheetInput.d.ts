/// <reference types="react" />
export interface ActionSheetInputProps {
    title: string;
    placeholder: string;
    options: string[];
    values?: string[];
    onValueChange: (value: string) => void;
}
export declare const ActionSheetInput: ({ title, placeholder, options, values, onValueChange, ...rest }: ActionSheetInputProps) => JSX.Element;
