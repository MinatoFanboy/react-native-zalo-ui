import React, { useCallback } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Swiper as SwiperComponent, Text } from '~/components';
import { dp } from '~/utils';

const Swiper: React.FC<MainStackScreenProps<'Swiper'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container onBack={onBack} title={'Swipe'}>
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Block gap={dp(8)}>
                    <Text titleSmall>Usage</Text>
                    <Text color={colors.text2} textXXSmall>
                        Khi cần tiết kiệm không gian hiển thị cho một nhóm nội dung cùng cấp như banner, card, ...
                    </Text>
                </Block>

                <Block gap={dp(12)}>
                    <Text titleSmall>Default</Text>

                    <SwiperComponent
                        images={[
                            require('~/assets/images/image-1.jpeg'),
                            require('~/assets/images/image-2.jpeg'),
                            require('~/assets/images/image-3.jpeg'),
                            require('~/assets/images/image-4.jpeg'),
                            require('~/assets/images/image-5.jpeg'),
                        ]}
                    />

                    <Text titleSmall>Custom</Text>

                    <Block gap={dp(8)}>
                        <Text color={colors.text2} textXXSmall>
                            Ẩn swiper & thêm Navigation Button
                        </Text>

                        <SwiperComponent
                            images={[
                                require('~/assets/images/image-1.jpeg'),
                                require('~/assets/images/image-2.jpeg'),
                                require('~/assets/images/image-3.jpeg'),
                                require('~/assets/images/image-4.jpeg'),
                                require('~/assets/images/image-5.jpeg'),
                            ]}
                            showButton
                        />
                    </Block>

                    <Block gap={dp(8)}>
                        <Text color={colors.text2} textXXSmall>
                            Bật autoplay
                        </Text>

                        <SwiperComponent
                            autoPlay
                            images={[
                                require('~/assets/images/image-1.jpeg'),
                                require('~/assets/images/image-2.jpeg'),
                                require('~/assets/images/image-3.jpeg'),
                                require('~/assets/images/image-4.jpeg'),
                                require('~/assets/images/image-5.jpeg'),
                            ]}
                        />
                    </Block>

                    <Block gap={dp(8)}>
                        <Text color={colors.text2} textXXSmall>
                            Custom Navigation
                        </Text>

                        <SwiperComponent
                            showNumber
                            images={[
                                require('~/assets/images/image-1.jpeg'),
                                require('~/assets/images/image-2.jpeg'),
                                require('~/assets/images/image-3.jpeg'),
                                require('~/assets/images/image-4.jpeg'),
                                require('~/assets/images/image-5.jpeg'),
                            ]}
                        />
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

export default Swiper;
