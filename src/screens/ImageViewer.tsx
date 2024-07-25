import React, { FC, useCallback, useRef } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, ImageViewRef, MainStackScreenProps } from '~/types';
import { Block, Button, Container, Image, ImageViewer as ImageViewerComponent, Text } from '~/components';
import { dp } from '~/utils';

const ImageViewer: FC<MainStackScreenProps<'ImageViewer'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const ref = useRef<ImageViewRef>(null);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onShowImage = useCallback((index?: number) => {
        ref.current?.show(index || 0);
    }, []);

    return (
        <Container onBack={onBack} title={'Image Viewer'}>
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Block gap={dp(8)}>
                    <Text titleSmall>Usage</Text>
                    <Text color={colors.text2} textXXSmall>
                        Khi cần xem và tương tác với hình ảnh trên kích thước lớn hơn
                    </Text>
                </Block>

                <Block>
                    <Text titleSmall>Example</Text>

                    <Block gap={dp(4)} mt={dp(8)} row wrap>
                        <Button onPress={() => onShowImage(0)}>
                            <Image
                                alt={'Image-6'}
                                h={dp(70)}
                                resizeMode={'cover'}
                                source={require('~/assets/images/image-6.jpeg')}
                                w={dp(70)}
                            />
                        </Button>
                        <Button onPress={() => onShowImage(1)}>
                            <Image
                                alt={'Image-7'}
                                h={dp(70)}
                                resizeMode={'cover'}
                                source={require('~/assets/images/image-7.jpeg')}
                                w={dp(70)}
                            />
                        </Button>
                        <Button onPress={() => onShowImage(2)}>
                            <Image
                                alt={'Image-8'}
                                h={dp(70)}
                                resizeMode={'cover'}
                                source={require('~/assets/images/image-8.jpeg')}
                                w={dp(70)}
                            />
                        </Button>
                        <Button onPress={() => onShowImage(3)}>
                            <Image
                                alt={'Image-9'}
                                h={dp(70)}
                                resizeMode={'cover'}
                                source={require('~/assets/images/image-9.jpeg')}
                                w={dp(70)}
                            />
                        </Button>
                    </Block>

                    <ImageViewerComponent
                        images={[
                            require('~/assets/images/image-6.jpeg'),
                            require('~/assets/images/image-7.jpeg'),
                            require('~/assets/images/image-8.jpeg'),
                            require('~/assets/images/image-9.jpeg'),
                        ]}
                        ref={ref}
                    />
                </Block>
            </Block>
        </Container>
    );
};

export default ImageViewer;
