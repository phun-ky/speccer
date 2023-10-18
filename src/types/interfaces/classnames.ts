/**
 * Type for the optional properties object with boolean values.
 */
export type ClassNamesSecondArgType = undefined | Record<string, boolean>;

/**
 * Type for the first argument of the cx function which can be either a string or `ClassNamesSecondArgType`.
 */
export type ClassNamesFirstArgType = string | ClassNamesSecondArgType;
