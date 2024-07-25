import React, { FC, memo } from 'react';
import { ImageStyle, Image as RNImage, StyleSheet } from 'react-native';

import { IImageProps } from '~/types';

const Image: FC<IImageProps> = ({ alt, h, ml, mt, radius, resizeMode, rounded, source, style, w }) => {
    const imageStyles = StyleSheet.flatten([
        {
            ...(h && { height: h }),
            ...(ml && { marginLeft: ml }),
            ...(mt && { marginTop: mt }),
            ...(radius && { borderRadius: radius }),
            ...(rounded && { borderRadius: 999 }),
            ...(w && { width: w }),
        },
        style,
    ]) as ImageStyle;

    return <RNImage alt={alt} resizeMode={resizeMode} source={source} style={imageStyles} />;
};

export default memo(Image);
