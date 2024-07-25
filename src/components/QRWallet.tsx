import React, { FC, memo, useEffect, useRef } from 'react';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';
import { Defs, LinearGradient, Path, Stop, Svg } from 'react-native-svg';

import { COLORS } from '~/constants';

const QRWallet: FC = () => {
    const rotateAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
                easing: Easing.linear,
            }),
        ).start();
    }, [rotateAnim]);

    return (
        <View
            style={{
                alignItems: 'center',
                height: 62,
                justifyContent: 'center',
                width: 62,
            }}
        >
            <Image
                resizeMode={'contain'}
                source={require('~/assets/images/qr.png')}
                style={{ borderRadius: 999, height: 48, width: 48 }}
            />
            <View
                style={{
                    borderColor: '#D6D9DC',
                    borderRadius: 999,
                    borderWidth: 1,
                    bottom: 1.5,
                    left: 1.5,
                    position: 'absolute',
                    right: 1.5,
                    top: 1.5,
                }}
            />
            <Animated.View
                style={[
                    StyleSheet.absoluteFillObject,
                    {
                        alignItems: 'center',
                        transform: [
                            {
                                rotate: rotateAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ['0deg', '360deg'],
                                }),
                            },
                        ],
                    },
                ]}
            >
                <Svg height={'62'} width={'62'}>
                    <Defs>
                        <LinearGradient id={'grad'} x1={'0'} y1={'0'} x2={'100%'} y2={'0'}>
                            <Stop offset={'0'} stopColor={'#FFF'} stopOpacity={'0.1'} />
                            <Stop offset={'1'} stopColor={'#08F'} stopOpacity={'1'} />
                        </LinearGradient>
                    </Defs>
                    <Path d={'M 2.5,26 A 31,31 0 0 1 30,2.5'} fill={'none'} stroke={'url(#grad)'} strokeWidth={'5'} />
                </Svg>
                <View
                    style={{
                        backgroundColor: COLORS.blue60,
                        borderRadius: 999,
                        height: 5,
                        position: 'absolute',
                        top: 0,
                        width: 5,
                    }}
                />
            </Animated.View>
        </View>
    );
};

export default memo(QRWallet);
