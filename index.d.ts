import { SpeccerFunctionType } from 'types/speccer';

declare global {
    interface Window {
        DrawSVGCurlyBracket: any;
        DrawSVGLine: any;
        speccer: any;
    }
}

declare const create$2: (text?: string | number, tag?: string) => HTMLElement;
declare const element$3: (targetEl: HTMLElement) => Promise<void>;

declare namespace __spacing {
  export {
    create$2 as create,
    element$3 as element,
  };
}

declare const create$1: (textContent: string | undefined, area: string, n?: string) => HTMLElement;
declare const element$2: (sectionEl: HTMLElement) => void;

declare namespace __dissect {
  export {
    create$1 as create,
    element$2 as element,
  };
}

declare const element$1: (targetEl: HTMLElement) => Promise<void>;

declare namespace __measure {
  export {
    element$1 as element,
  };
}

declare const create: (html: string, area: string | null) => HTMLDivElement;
declare const element: (targetEl: HTMLElement) => Promise<void>;

declare const __typography_create: typeof create;
declare const __typography_element: typeof element;
declare namespace __typography {
  export {
    __typography_create as create,
    __typography_element as element,
  };
}

declare const dom: (speccer: SpeccerFunctionType) => void;
declare const lazy: () => void;
declare const manual: (speccer: SpeccerFunctionType) => void;
declare const activate: (speccer: SpeccerFunctionType) => void;

declare const browser_dom: typeof dom;
declare const browser_lazy: typeof lazy;
declare const browser_manual: typeof manual;
declare const browser_activate: typeof activate;
declare namespace browser {
  export {
    browser_dom as dom,
    browser_lazy as lazy,
    browser_manual as manual,
    browser_activate as activate,
  };
}

declare const spacing: typeof __spacing;
declare const dissect: typeof __dissect;
declare const measure: typeof __measure;
declare const typography: typeof __typography;
declare const modes: typeof browser;
declare const speccer: () => void;

export { speccer as default, dissect, measure, modes, spacing, typography };
