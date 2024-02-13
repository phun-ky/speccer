/* eslint-disable import/no-unused-modules */
export const isString = (variable: unknown) => typeof variable === 'string';

export const isNotString = (variable: unknown) => !isString(variable);

export const isNumber = (variable: unknown) => typeof variable === 'number';

export const isNotNumber = (variable: unknown) => !isNumber(variable);

export const isBoolean = (variable: unknown) => typeof variable === 'boolean';

export const isNotBoolean = (variable: unknown) => !isBoolean(variable);

export const isUndefined = (variable: unknown) => typeof variable === 'undefined';

export const isNotUndefined = (variable: unknown) => !isNotUndefined(variable);
