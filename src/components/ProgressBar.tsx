import React, { FC, useEffect, memo, useRef } from 'react';
import { Animated, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
const { width } = Dimensions.get('window');

import { CustomTheme } from '~/types';
import Block from './Block';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

type ProgressBarProps = {
    title?: string;
};

const ProgressBar: FC<ProgressBarProps> = ({ title = 'Title' }) => {
    const { colors } = useTheme() as CustomTheme;
    const translateAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateAnim, {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: true,
                }),
                Animated.timing(translateAnim, {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true,
                }),
            ]),
        ).start();
    }, [translateAnim]);

    return (
        <Block style={{ overflow: 'hidden' }}>
            <Block color={colors.pageBackground3} gap={16} px={12} py={10} row>
                <Icon name={'close'} />

                <Text center flex={1} lineHeight={26} size={20}>
                    {title}
                </Text>

                <Icon name={'more-horizontal'} />
            </Block>

            <Block color={colors.divider1} h={1} />

            <Animated.View
                style={{
                    backgroundColor: COLORS.blue60,
                    height: dp(3),
                    transform: [
                        {
                            translateX: translateAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [(-width * 2) / 3, 0],
                            }),
                        },
                    ],
                }}
            />
        </Block>
    );
};

export default memo(ProgressBar);
