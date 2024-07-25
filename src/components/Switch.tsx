import React, { FC, memo, useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

type SwitchProps = {
    active?: boolean;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    small?: boolean;
    title?: string;
};

const Switch: FC<SwitchProps> = ({ active = false, disabled = false, onChange, small, title }) => {
    const { colors } = useTheme() as CustomTheme;
    const toggleAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(toggleAnim, { duration: 300, toValue: active ? 1 : 0, useNativeDriver: true }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            disabled={disabled}
            onPress={() => onChange?.(!active)}
            style={{ alignItems: 'center', flexDirection: 'row', gap: dp(8), opacity: disabled ? 0.8 : 1 }}
        >
            <Animated.View
                style={{
                    backgroundColor: toggleAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [colors.text3, '#006AF5'],
                    }),
                    borderRadius: 999,
                    height: small ? dp(16) : dp(24),
                    width: small ? dp(28) : dp(40),
                }}
            >
                <Animated.View
                    style={{
                        backgroundColor: COLORS.white100,
                        borderRadius: 999,
                        height: small ? dp(12) : dp(20),
                        left: dp(2),
                        position: 'absolute',
                        top: dp(2),
                        transform: [
                            {
                                translateX: toggleAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, small ? dp(12) : dp(16)],
                                }),
                            },
                        ],
                        width: small ? dp(12) : dp(20),
                    }}
                />
            </Animated.View>

            <Text
                style={[
                    { ...(small ? FONTS.textXSmall : FONTS.textSmall) },
                    { color: colors.text1, opacity: disabled ? 0.4 : 1 },
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default memo(Switch);
