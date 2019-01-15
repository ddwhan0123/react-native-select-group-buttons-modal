import {Dimensions, PixelRatio} from "react-native";


/**
 * @return {number}
 */
function ScaleByWidth(designPixel, designWidth = 750) {
    // let {width} = Dimensions.get('window');
    let width = Dimensions.get('window').width;
    return Math.ceil(designPixel * 1.0 / designWidth * width);
}
export const SCALE_DIMENSION_SIZE = (pixel) => ScaleByWidth(pixel);