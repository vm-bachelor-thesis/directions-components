import React from 'react';
export interface FormRowProps {
    title: string;
    inputComponent: React.ReactNode;
    wideTitle?: boolean;
}
export declare const FormRow: ({ title, inputComponent, wideTitle, }: FormRowProps) => JSX.Element;
