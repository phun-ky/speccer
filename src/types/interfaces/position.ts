import {
  PositionInputType,
  PositionPropertiesType
} from '../../types/position';

/**
 * Interface for functions that calculate position properties based on input.
 */
export interface GetRecPropertiesInterface {
  /**
   * Calculates absolute position properties.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  absolute: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the top.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  toTop: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the top.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  fromTop: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the bottom.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  toBottom: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the bottom.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  fromBottom: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the left.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  toLeft: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the left.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  fromLeft: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the right.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  toRight: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the right.
   * @param inp - Optional position input.
   * @returns Position properties.
   */
  // eslint-disable-next-line no-unused-vars
  fromRight: (inp?: PositionInputType) => PositionPropertiesType;
}
