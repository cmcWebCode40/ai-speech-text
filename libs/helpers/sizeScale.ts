import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

/**
 *  The using a default (375) width
 *  The default (812) Height
 */
export const baseWidthScale = SCREEN_WIDTH / 375;
export const baseHeightScale = SCREEN_HEIGHT / 812;

export const screenWidth = SCREEN_WIDTH;
export const screenHeight = SCREEN_HEIGHT;

export const normalize = (size: number, scaleType: 'height' | 'width') => {
  const normalizedSize =
    scaleType === 'height' ? size * baseHeightScale : size * baseWidthScale;
  return Math.round(PixelRatio.roundToNearestPixel(normalizedSize));
};

//for width  pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};

//for height  pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

//for font  pixel
const fontPixel = (size: number) => {
  return heightPixel(size);
};

//for Margin and Padding vertical pixel
const pixelSizeVertical = (size: number) => {
  return heightPixel(size);
};

//for Margin and Padding horizontal pixel
const pixelSizeHorizontal = (size: number) => {
  return widthPixel(size);
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
};
