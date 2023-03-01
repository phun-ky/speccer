import { PositionInputType, PositionPropertiesType } from 'types/position';

export interface GetRecPropertiesInterface {
  // eslint-disable-next-line no-unused-vars
  toTop: (inp?: PositionInputType) => PositionPropertiesType;
  // eslint-disable-next-line no-unused-vars
  fromTop: (inp?: PositionInputType) => PositionPropertiesType;
  // eslint-disable-next-line no-unused-vars
  toBottom: (inp?: PositionInputType) => PositionPropertiesType;
  // eslint-disable-next-line no-unused-vars
  fromBottom: (inp?: PositionInputType) => PositionPropertiesType;
  // eslint-disable-next-line no-unused-vars
  toLeft: (inp?: PositionInputType) => PositionPropertiesType;
  // eslint-disable-next-line no-unused-vars
  fromLeft: (inp?: PositionInputType) => PositionPropertiesType;
  // eslint-disable-next-line no-unused-vars
  toRight: (inp?: PositionInputType) => PositionPropertiesType;
  // eslint-disable-next-line no-unused-vars
  fromRight: (inp?: PositionInputType) => PositionPropertiesType;
}
