/**
 * Interface representing a map of attributes with string keys and string values.
 *
 * This interface defines a structure for a map of attributes, where the keys are
 * strings (attribute names) and the values are also strings (attribute values).
 * It can be used to define the structure of objects that store attributes in
 * key-value pairs.
 */
export interface AttributesMapInterface {
  [key: string]: string;
}
