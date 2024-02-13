type SpeccerFunctionType = () => void;

/**
 * Extends the global Window interface to add custom properties.
 */
declare global {
    interface Window {
        /**
         * Represents the DrawSVGCurlyBracket class for drawing curly brackets.
         */
        DrawSVGCurlyBracket: any;
        /**
         * Represents the DrawSVGLine class for drawing lines.
         */
        DrawSVGLine: any;
        /**
         * Represents the speccer object for additional functionality.
         */
        speccer: any;
    }
}
//# sourceMappingURL=global.d.ts.map

declare const spacing: {
    create: (text?: string | number, tag?: string) => HTMLElement;
    element: (targetEl: HTMLElement) => Promise<void>;
};
declare const dissect: {
    create: (textContent: string | undefined, area: string, n?: string) => HTMLElement;
    element: (sectionEl: HTMLElement) => Promise<void>;
};
declare const measure: {
    create: (text?: string | number, area?: string | null, tag?: string) => HTMLElement;
    element: (targetEl: HTMLElement) => Promise<void>;
};
declare const mark: {
    create: (n?: string) => HTMLElement;
    element: (elementToMark: HTMLElement) => Promise<void>;
};
declare const typography: {
    create: (html: string, area: string | null) => HTMLElement;
    element: (targetEl: HTMLElement) => Promise<void>;
};
declare const modes: {
    dom: (speccer: SpeccerFunctionType) => void;
    lazy: () => void;
    manual: (speccer: SpeccerFunctionType) => void;
    activate: (speccer: SpeccerFunctionType) => void;
};
declare const speccer: () => void;

export { speccer as default, dissect, mark, measure, modes, spacing, typography };
