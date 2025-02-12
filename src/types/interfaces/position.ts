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

  absolute: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the top.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  toTop: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the top.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  fromTop: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the bottom.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  toBottom: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the bottom.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  fromBottom: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the left.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  toLeft: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the left.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  fromLeft: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving to the right.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  toRight: (inp?: PositionInputType) => PositionPropertiesType;

  /**
   * Calculates position properties for moving from the right.
   * @param inp - Optional position input.
   * @returns Position properties.
   */

  fromRight: (inp?: PositionInputType) => PositionPropertiesType;
}
