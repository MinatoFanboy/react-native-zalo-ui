import React, { FC, PropsWithChildren, memo, useMemo } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';

import { ButtonProps } from '~/types';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const Button: FC<PropsWithChildren<ButtonProps>> = ({
    absolute,
    activeOpacity = 0.7,
    align,
    bottom,
    children,
    color,
    danger,
    disabled,
    flex,
    fullWidth,
    gap,
    h,
    justify,
    large,
    loading,
    left,
    leftIcon,
    mb,
    medium,
    mt,
    mx,
    neutral,
    onPress,
    p,
    px,
    py,
    pressedColor,
    primary,
    radius,
    right,
    rightIcon,
    rounded,
    row,
    secondary,
    small,
    style,
    tertiary,
    title,
    top,
    w,
}) => {
    const isPressed = useMemo(() => {
        return danger || fullWidth || large || medium || neutral || primary || secondary || small || tertiary;
    }, [danger, fullWidth, large, medium, neutral, primary, secondary, small, tertiary]);

    const buttonStyles = StyleSheet.flatten([
        {
            ...(absolute && { position: 'absolute' }),
            ...(align && { alignItems: align }),
            ...(bottom !== undefined && { bottom }),
            ...(color && { backgroundColor: color }),
            ...(flex !== undefined && { flex }),
            ...(gap && { gap }),
            ...(h && { height: h }),
            ...(justify && { justifyContent: justify }),
            ...(left !== undefined && { left }),
            ...(p !== undefined && { padding: p }),
            ...(px !== undefined && { paddingHorizontal: px }),
            ...(py !== undefined && { paddingVertical: py }),
            ...(radius !== undefined && { borderRadius: radius }),
            ...(right !== undefined && { right }),
            ...(rounded && { borderRadius: 999 }),
            ...(row && { flexDirection: 'row' }),
            ...(top !== undefined && { top }),
            ...(w && { width: w }),
        },
        style,
    ]) as ViewStyle;

    const pressableStyles = StyleSheet.flatten([
        {
            ...(absolute && { position: 'absolute' }),
            ...(bottom !== undefined && { bottom }),
            ...(flex !== undefined && { flex }),
            ...(left !== undefined && { left }),
            ...(mb !== undefined && { marginBottom: mb }),
            ...(mt !== undefined && { marginTop: mt }),
            ...(mx !== undefined && { marginHorizontal: mx }),
            ...(right !== undefined && { right }),
            ...(top !== undefined && { top }),
        },
        style,
    ]) as ViewStyle;

    if (isPressed) {
        return (
            <View style={[{ flexDirection: 'row' }, pressableStyles]}>
                <Pressable
                    disabled={disabled || loading}
                    onPress={onPress}
                    style={({ pressed }) => [
                        {
                            alignItems: 'center',
                            borderRadius: 999,
                            justifyContent: 'center',
                            overflow: 'hidden',
                            backgroundColor: pressed ? COLORS.blue70 : COLORS.blue60,
                            ...(secondary && { backgroundColor: pressed ? COLORS.blue30 : COLORS.blue20 }),
                            ...(tertiary && { backgroundColor: pressed ? COLORS.blue10 : undefined }),
                            ...(danger && {
                                backgroundColor: pressed ? COLORS.red70 : COLORS.red60,
                                ...(secondary && { backgroundColor: pressed ? COLORS.red30 : COLORS.red20 }),
                                ...(tertiary && { backgroundColor: pressed ? COLORS.red10 : undefined }),
                            }),
                            ...(neutral && {
                                backgroundColor: pressed ? COLORS.neutralGray10 : undefined,
                                ...(secondary && {
                                    backgroundColor: pressed ? COLORS.neutralGray30 : COLORS.neutralGray20,
                                }),
                                ...(tertiary && { backgroundColor: pressed ? COLORS.neutralGray10 : undefined }),
                            }),
                            ...(pressedColor && {
                                backgroundColor: pressed ? pressedColor : 'white',
                                ...(color && { backgroundColor: pressed ? pressedColor : color }),
                            }),
                            ...(disabled && { backgroundColor: COLORS.neutralGray30 }),
                            minHeight: dp(48),
                            ...(medium && { minHeight: dp(40) }),
                            ...(small && { minHeight: undefined }),
                            paddingHorizontal: dp(24),
                            ...(medium && { paddingHorizontal: dp(24) }),
                            ...(small && { paddingHorizontal: dp(16) }),
                            ...(!title && { paddingHorizontal: dp(12) }),
                            paddingVertical: dp(12),
                            ...(medium && { paddingVertical: dp(8) }),
                            ...(small && { paddingVertical: dp(8) }),
                            ...(fullWidth && { width: '100%' }),
                        },
                        style,
                    ]}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            gap: dp(8),
                            minWidth: dp(72),
                            ...(medium && { minWidth: dp(48) }),
                            ...(small && { minWidth: dp(40) }),
                            ...(!title && { minWidth: undefined }),
                        }}
                    >
                        {leftIcon && leftIcon}
                        {title && (
                            <Text
                                medium
                                textNormal
                                style={{
                                    color: COLORS.white100,
                                    ...(secondary && { color: COLORS.blue60 }),
                                    ...(tertiary && { color: COLORS.blue60 }),
                                    ...(danger && {
                                        ...(secondary && { color: COLORS.red60 }),
                                        ...(tertiary && { color: COLORS.red60 }),
                                    }),
                                    ...(disabled && { color: COLORS.neutralGray40 }),
                                    ...(neutral && { color: COLORS.neutralGray100 }),
                                    ...(small && { fontSize: dp(14), lineHeight: dp(18) }),
                                }}
                            >
                                {title}
                            </Text>
                        )}
                        {rightIcon && rightIcon}
                    </View>

                    {loading && !disabled && (
                        <View
                            style={[
                                StyleSheet.absoluteFillObject,
                                {
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: COLORS.blue70,
                                    ...(secondary && { backgroundColor: COLORS.blue30 }),
                                    ...(tertiary && { backgroundColor: COLORS.blue10 }),
                                    ...(danger && {
                                        backgroundColor: COLORS.red70,
                                        ...(secondary && { backgroundColor: COLORS.red30 }),
                                        ...(tertiary && { backgroundColor: COLORS.red10 }),
                                    }),
                                    ...(neutral && {
                                        backgroundColor: COLORS.neutralGray10,
                                        ...(secondary && {
                                            backgroundColor: COLORS.neutralGray30,
                                        }),
                                        ...(tertiary && { backgroundColor: COLORS.neutralGray10 }),
                                    }),
                                    ...(pressedColor && { backgroundColor: pressedColor }),
                                },
                            ]}
                        >
                            <ActivityIndicator color={COLORS.white100} size={dp(24)} />
                        </View>
                    )}
                </Pressable>
            </View>
        );
    }

    return (
        <TouchableOpacity
            activeOpacity={activeOpacity}
            disabled={disabled || loading}
            onPress={onPress}
            style={buttonStyles}
        >
            {children}
        </TouchableOpacity>
    );
};

export default memo(Button);
