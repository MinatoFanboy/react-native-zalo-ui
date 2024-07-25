import React, { FC, ReactNode, memo, useCallback, useMemo, useRef, useState } from 'react';
import { Animated, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { add, eachMonthOfInterval, isSameDay, startOfDay, startOfMonth, sub } from 'date-fns';

import { CustomTheme } from '~/types';
import Button from '../Button';
import Icon from '../Icon';
import ScrollPicker from './ScrollPicker';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

interface SinglePickerProps {
    children: (methods: { open: () => void }) => ReactNode;
    onChange?: (value: any) => void;
    value?: Date;
}

const SinglePicker: FC<SinglePickerProps> = ({ children, onChange, value = new Date() }) => {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme() as CustomTheme;

    const translateYAnimated = useRef<Animated.Value>(new Animated.Value(0)).current;
    const tempt = useRef<any>(new Date());
    const [visible, setVisible] = useState<boolean>(false);

    const onClose = () => {
        Animated.timing(translateYAnimated, { duration: 200, toValue: 0, useNativeDriver: true }).start(() =>
            setVisible(false),
        );
    };

    const onOpen = () => {
        setVisible(true);
        Animated.timing(translateYAnimated, { duration: 200, toValue: 1, useNativeDriver: true }).start();
    };

    const days = useMemo(() => {
        const startDate = sub(value, { years: 1 });
        const endDate = add(value, { years: 1 });

        return eachMonthOfInterval({
            end: startOfDay(endDate),
            start: startOfDay(startDate),
        });
    }, [value]);

    const handleChange = useCallback(() => {
        setVisible(false);
        onChange?.(tempt.current);
    }, [onChange]);

    const onChangeTempt = useCallback((v: any) => {
        tempt.current = v;
    }, []);

    const selectedIndex = useMemo(() => days.findIndex((e) => isSameDay(e, startOfMonth(value))), [days, value]);

    return (
        <View>
            {children({
                open: () => onOpen(),
            })}

            <Modal onRequestClose={onClose} statusBarTranslucent transparent visible={visible}>
                {/* Touch modal outside to close */}
                <View style={{ backgroundColor: '#00000077', flex: 1, justifyContent: 'flex-end' }}>
                    <TouchableOpacity activeOpacity={1} onPress={onClose} style={StyleSheet.absoluteFillObject} />

                    {/* Main Picker */}
                    <Animated.View
                        style={{
                            backgroundColor: colors.card,
                            borderTopLeftRadius: dp(8),
                            borderTopRightRadius: dp(8),
                            gap: dp(16),
                            paddingBottom: insets.bottom || dp(16),
                            paddingHorizontal: dp(16),
                            paddingTop: dp(8),
                            transform: [
                                {
                                    translateY: translateYAnimated.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [600, 0],
                                    }),
                                },
                            ],
                        }}
                    >
                        {/* Title && close */}
                        <View style={{ alignItems: 'center', paddingHorizontal: dp(16), paddingVertical: dp(8) }}>
                            <Text style={[FONTS.textXLargeM, { color: colors.text1 }]}>{'Single column selector'}</Text>

                            <TouchableOpacity
                                activeOpacity={0.7}
                                onPress={onClose}
                                style={{ position: 'absolute', right: 0, top: 8 }}
                            >
                                <Icon color={colors.text} name={'close'} size={dp(24)} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: 280 }}>
                            <ScrollPicker
                                activeItemTextStyle={{ color: COLORS.blue60, fontSize: 18, lineHeight: 24 }}
                                dataSource={days}
                                highlightColor={colors.uiBackgroundSelected}
                                itemTextStyle={{ color: colors.text2, fontSize: 18, lineHeight: 24 }}
                                onValueChange={onChangeTempt}
                                selectedIndex={selectedIndex}
                            />
                        </View>

                        <Button fullWidth onPress={handleChange} primary title={'Button'} />
                    </Animated.View>
                </View>
            </Modal>
        </View>
    );
};

export default memo(SinglePicker);
