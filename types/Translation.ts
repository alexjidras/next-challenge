type DeepObj = { [key: string]: string | DeepObj };

export interface Resources {
  [locale: string]: DeepObj;
}

type Primitive = string | number | boolean;

export interface TranslateOptions {
  params?: { [param: string]: Primitive };
  fallback?: string;
  language?: string;
}

export type Translate = (key: string, options?: TranslateOptions) => string;

export interface TranslationContextValue {
  resources: Resources;
  t: Translate;
}
