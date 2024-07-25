import React, { FC, memo, useCallback, useLayoutEffect, useRef, useState } from 'react';
import {
    Animated,
    FlatList,
    Image,
    ImageStyle,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleProp,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import Icon from './Icon';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

type SwiperProps = {
    autoPlay?: boolean;
    images: number[];
    imageStyle?: StyleProp<ImageStyle>;
    showButton?: boolean;
    showNumber?: boolean;
};

const Swiper: FC<SwiperProps> = ({ autoPlay, images = [], imageStyle, showButton, showNumber }) => {
    const ref = useRef<FlatList>(null);
    const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;
    const timeoutRef = useRef<null | ReturnType<typeof setTimeout>>(null);

    const [position, setPosition] = useState<number>(0);
    const [width, setWidth] = useState<number>(0);

    const onMomentumScrollEnd = useCallback(
        (event: NativeSyntheticEvent<NativeScrollEvent>) => {
            const digit = Math.round(event.nativeEvent.contentOffset.x / width);
            setPosition(digit);
        },
        [width],
    );

    const onNextScreen = useCallback(() => {
        setPosition((prevIndex) => {
            if (prevIndex < images.length - 1) {
                const offset = width * (prevIndex + 1);
                ref?.current?.scrollToOffset({ animated: true, offset });
                return prevIndex + 1;
            } else {
                return prevIndex;
            }
        });
    }, [images, width]);

    const onPrevScreen = useCallback(() => {
        setPosition((prevIndex) => {
            if (prevIndex > 0) {
                const offset = width * (prevIndex - 1);
                ref?.current?.scrollToOffset({ animated: true, offset });
                return prevIndex - 1;
            } else {
                return prevIndex;
            }
        });
    }, [width]);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useLayoutEffect(() => {
        resetTimeout();

        if (autoPlay) {
            timeoutRef.current = setTimeout(() => {
                setPosition((prevIndex) => {
                    if (prevIndex === images.length - 1) {
                        ref?.current?.scrollToOffset({ animated: true, offset: 0 });
                        return 0;
                    } else {
                        ref?.current?.scrollToOffset({ animated: true, offset: (prevIndex + 1) * width });
                        return prevIndex + 1;
                    }
                });
            }, 3000);
        }

        return () => {
            resetTimeout();
        };
    }, [autoPlay, images, position, width]);

    return (
        <View onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
            {width ? (
                <View style={{ alignItems: 'center', justifyContent: showButton ? 'center' : 'flex-end' }}>
                    <Animated.FlatList
                        bounces={false}
                        decelerationRate={'fast'}
                        data={images}
                        keyExtractor={(_, index) => `Image-${index}`}
                        horizontal
                        onMomentumScrollEnd={onMomentumScrollEnd}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: { contentOffset: { x: scrollX } },
                                },
                            ],
                            {
                                useNativeDriver: true,
                            },
                        )}
                        ref={ref}
                        renderItem={({ item }) => {
                            return (
                                <Image
                                    resizeMode={'cover'}
                                    source={item}
                                    style={[{ borderRadius: dp(8), height: dp(150), width }, imageStyle]}
                                />
                            );
                        }}
                        showsHorizontalScrollIndicator={false}
                        snapToAlignment={'start'}
                        snapToInterval={width}
                    />

                    {showButton && (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={onPrevScreen}
                            style={{
                                alignItems: 'center',
                                backgroundColor: COLORS.black20,
                                borderRadius: 999,
                                justifyContent: 'center',
                                height: dp(24),
                                left: dp(12),
                                position: 'absolute',
                                width: dp(24),
                            }}
                        >
                            <Icon color={COLORS.white100} name={'chevron-left'} size={dp(12)} />
                        </TouchableOpacity>
                    )}

                    {showButton && (
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={onNextScreen}
                            style={{
                                alignItems: 'center',
                                backgroundColor: COLORS.black20,
                                borderRadius: 999,
                                justifyContent: 'center',
                                height: dp(24),
                                position: 'absolute',
                                right: dp(12),
                                width: dp(24),
                            }}
                        >
                            <Icon color={COLORS.white100} name={'chevron-right'} size={dp(12)} />
                        </TouchableOpacity>
                    )}

                    {images.length > 0 && width && !showButton && (
                        <>
                            {showNumber ? (
                                <View
                                    style={{
                                        backgroundColor: COLORS.black10,
                                        borderRadius: dp(4),
                                        bottom: dp(8),
                                        paddingHorizontal: dp(8),
                                        position: 'absolute',
                                    }}
                                >
                                    <Text
                                        style={[FONTS.textSmall, { color: COLORS.white100 }]}
                                    >{`${position} / ${images.length}`}</Text>
                                </View>
                            ) : (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        backgroundColor: COLORS.black10,
                                        borderRadius: 999,
                                        bottom: dp(8),
                                        flexDirection: 'row',
                                        gap: dp(4),
                                        height: dp(12),
                                        position: 'absolute',
                                        paddingHorizontal: dp(6),
                                    }}
                                >
                                    {images.map((_, index) => {
                                        const sizeAnim = scrollX.interpolate({
                                            extrapolate: 'clamp',
                                            inputRange: [
                                                width * (index - 2),
                                                width * (index - 1),
                                                width * index,
                                                width * (index + 1),
                                                width * (index + 2),
                                            ],
                                            outputRange: [4 / 6, 4 / 6, 1, 4 / 6, 4 / 6],
                                        });
                                        const bgAnim = scrollX.interpolate({
                                            extrapolate: 'clamp',
                                            inputRange: [
                                                width * (index - 2),
                                                width * (index - 1),
                                                width * index,
                                                width * (index + 1),
                                                width * (index + 2),
                                            ],
                                            outputRange: [
                                                'rgba(255, 255, 255, 0.6)',
                                                'rgba(255, 255, 255, 0.6)',
                                                'rgba(255, 255, 255, 1)',
                                                'rgba(255, 255, 255, 0.6)',
                                                'rgba(255, 255, 255, 0.6)',
                                            ],
                                        });

                                        return (
                                            <Animated.View
                                                key={`Dot-${index}`}
                                                style={{
                                                    backgroundColor: bgAnim,
                                                    borderRadius: 999,
                                                    height: dp(6),
                                                    transform: [{ scale: sizeAnim }],
                                                    width: dp(6),
                                                }}
                                            />
                                        );
                                    })}
                                </View>
                            )}
                        </>
                    )}
                </View>
            ) : null}
        </View>
    );
};

export default memo(Swiper);
