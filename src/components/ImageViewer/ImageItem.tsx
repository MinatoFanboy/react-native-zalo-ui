import React, { FC, memo } from 'react';
import { Dimensions, Image, ImageRequireSource, ImageURISource, View } from 'react-native';
import Pinchable from 'react-native-pinchable';
const { width } = Dimensions.get('window');

const ImageItem: FC<{ imageSrc: ImageRequireSource | ImageURISource }> = ({ imageSrc }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Pinchable>
                <Image resizeMode={'contain'} source={imageSrc} style={[{ height: '100%', width }]} />
            </Pinchable>
        </View>
    );
};

export default memo(ImageItem);
