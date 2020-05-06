/// <reference types="react" />
export interface SUSQuestionnaireProps {
    callback(susResponse: SUSResponse): void;
}
export declare const SUSQuestionnaire: ({ callback }: SUSQuestionnaireProps) => JSX.Element;
