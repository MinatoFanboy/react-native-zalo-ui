import React, { FC, memo, useContext, useEffect, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    StyleSheet,
    TextInput as RnTextInput,
    TextInputProps as RnTextInputProps,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
const { width } = Dimensions.get('window');

import { CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp, isStrongPassword } from '~/utils';

const RULE_WIDTH = (width - dp(72)) / 3;

type TextInputProps = {
    checked?: boolean;
    disabled?: boolean;
    error?: string;
    focused?: boolean;
    helperText?: string;
    isPassword?: boolean;
    label?: string;
    onChangeText?: ((text: string) => void) | undefined;
    rules?: boolean;
    value?: string | undefined;
} & RnTextInputProps;

const TextInput: FC<TextInputProps> = ({
    checked,
    disabled,
    error,
    focused,
    helperText,
    isPassword,
    label,
    onChangeText,
    rules,
    value,
    ...props
}) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const [isFocused, setIsFocused] = useState<boolean>(focused || false);
    const [isSecure, setIsSecure] = useState<boolean>(true);
    const ruleAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

    const togglePassword = () => {
        setIsSecure((prev) => !prev);
    };

    useEffect(() => {
        Animated.timing(ruleAnim, { duration: 300, toValue: isStrongPassword(value), useNativeDriver: true }).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <Block gap={dp(4)}>
            {label && (
                <Text color={disabled ? colors.text3 : colors.text1} textSmall>
                    {label}
                </Text>
            )}

            <Block
                color={disabled ? (theme === 'dark' ? COLORS.white10 : COLORS.black10) : 'transparent'}
                style={[
                    styles.inputWrapper,
                    {
                        borderColor: disabled
                            ? theme === 'dark'
                                ? COLORS.white10
                                : COLORS.black10
                            : error
                            ? COLORS.red60
                            : isFocused
                            ? COLORS.blue60
                            : colors.border2,
                    },
                ]}
            >
                <RnTextInput
                    editable={disabled ? false : true}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.text3}
                    secureTextEntry={isPassword ? isSecure : false}
                    selectionColor={COLORS.blue60}
                    style={{
                        color: disabled ? colors.text2 : colors.text1,
                        fontFamily: 'Roboto-Regular',
                        fontSize: dp(16),
                        flex: 1,
                        textAlignVertical: 'center',
                    }}
                    value={value}
                    {...props}
                />

                {isFocused && value && (
                    <Button onPress={() => onChangeText?.('')}>
                        <Icon name={'close-circle-solid'} size={dp(16)} />
                    </Button>
                )}

                {!isFocused && checked && !error && (
                    <Icon color={COLORS.green60} name={'check-circle-solid'} size={dp(16)} />
                )}

                {isPassword && (
                    <Button onPress={togglePassword}>
                        <Icon name={'hide'} />
                    </Button>
                )}
            </Block>

            {rules && (
                <Block gap={dp(4)} h={dp(4)} row>
                    <Block style={styles.ruleWrapper}>
                        <Animated.View
                            style={{
                                backgroundColor: ruleAnim.interpolate({
                                    inputRange: [0, 1, 2, 3],
                                    outputRange: ['#D6D9DC', '#DC1F18', '#E8BA02', '#34B764'],
                                }),
                                borderRadius: dp(4),
                                height: '100%',
                                transform: [
                                    {
                                        translateX: ruleAnim.interpolate({
                                            inputRange: [0, 1, 2, 3],
                                            outputRange: [-RULE_WIDTH, 0, 0, 0],
                                        }),
                                    },
                                ],
                                width: RULE_WIDTH,
                            }}
                        />
                    </Block>
                    <Block style={styles.ruleWrapper}>
                        <Animated.View
                            style={{
                                backgroundColor: ruleAnim.interpolate({
                                    inputRange: [0, 1, 2, 3],
                                    outputRange: ['#D6D9DC', '#DC1F18', '#E8BA02', '#34B764'],
                                }),
                                borderRadius: dp(4),
                                height: '100%',
                                transform: [
                                    {
                                        translateX: ruleAnim.interpolate({
                                            inputRange: [0, 1, 2, 3],
                                            outputRange: [-RULE_WIDTH, -RULE_WIDTH, 0, 0],
                                        }),
                                    },
                                ],
                                width: RULE_WIDTH,
                            }}
                        />
                    </Block>
                    <Block style={styles.ruleWrapper}>
                        <Animated.View
                            style={{
                                backgroundColor: ruleAnim.interpolate({
                                    inputRange: [0, 1, 2, 3],
                                    outputRange: ['#D6D9DC', '#DC1F18', '#E8BA02', '#34B764'],
                                }),
                                borderRadius: dp(4),
                                height: '100%',
                                transform: [
                                    {
                                        translateX: ruleAnim.interpolate({
                                            inputRange: [0, 1, 2, 3],
                                            outputRange: [-RULE_WIDTH, -RULE_WIDTH, -RULE_WIDTH, 0],
                                        }),
                                    },
                                ],
                                width: RULE_WIDTH,
                            }}
                        />
                    </Block>
                </Block>
            )}

            {(helperText || error) && (
                <Block align={'center'} gap={dp(4)} row>
                    <Icon
                        color={error ? COLORS.red60 : COLORS.neutralGray60}
                        name={error ? 'warning-solid' : 'info-circle-solid'}
                        size={dp(16)}
                    />
                    <Text color={error ? COLORS.red60 : COLORS.neutralGray60} flex={1} textXSmall>
                        {helperText}
                    </Text>
                </Block>
            )}
        </Block>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        alignItems: 'center',
        borderRadius: dp(8),
        borderWidth: dp(1),
        flexDirection: 'row',
        gap: dp(12),
        height: dp(48),
        paddingHorizontal: dp(12),
    },
    ruleWrapper: { backgroundColor: COLORS.neutralGray30, borderRadius: dp(4), flex: 1, overflow: 'hidden' },
});

export default memo(TextInput);
