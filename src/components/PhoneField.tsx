import React, { FC, memo, useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard, Platform, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp, isAutoFillSupported, valueToArray } from '~/utils';

interface PhoneFieldProps {
    /**
     * If keyboard is automatically brought up when OTP is loaded.
     */
    autoFocusOnLoad?: boolean;
    /**
     * If inputs are automatically cleared.
     */
    clearInputs?: boolean;
    /**
     * text hint or warning
     */
    helperText?: string;
    /**
     * Callback function
     * Trigger when phone filled
     *
     * @param value The number phone
     */
    onValueChange?: (value: string) => void;
    /**
     * Label of input
     */
    label?: string;
    /**
     * Value of phone number
     */
    value?: string;
}

const usePrevious = (value?: string) => {
    const ref = useRef<string>();

    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

const PhoneField: FC<PhoneFieldProps> = ({
    autoFocusOnLoad = false,
    clearInputs,
    helperText,
    label,
    onValueChange,
    value,
}) => {
    const [phoneState, setPhoneState] = useState<{ digits: string[]; selectedIndex: number }>({
        digits: valueToArray(value),
        selectedIndex: autoFocusOnLoad ? 0 : -1,
    });
    let valPrev = usePrevious(value);
    let fields = useRef<TextInput[]>([]);

    const { colors } = useTheme() as CustomTheme;

    /** Function blur all field */
    const blurAllFields = useCallback(() => {
        fields.current.forEach((field: TextInput | null) => (field as TextInput).blur());
        setPhoneState((prev) => ({ ...prev, selectedIndex: -1 }));
    }, [fields]);

    /** Function to clear all value and set focus to first input */
    const clearAllFields = () => {
        if (clearInputs && value === '') {
            setPhoneState({ digits: [], selectedIndex: 0 });
        }
    };

    /** Function touch field => focus to selected index */
    const focusField = (index: number) => {
        if (index < fields.current.length) {
            (fields.current[index] as TextInput).focus();
            setPhoneState((prev) => ({ ...prev, selectedIndex: index }));
        }
    };

    /** Function to notify change value */
    const notifyValueChanged = (val: string[]) => {
        const v = val.join('');
        onValueChange?.(v);
    };

    /** Function to handle change text */
    const handleChangeText = (index: number, text: string) => {
        const digits = value === undefined ? phoneState.digits : value.split('');
        let newDigits = digits.slice();

        if (text.length === 0) {
            if (newDigits.length > 0) {
                newDigits = newDigits.slice(0, newDigits.length - 1);
            }
        } else {
            text.split('').forEach((v) => {
                if (index < 9) {
                    newDigits[index] = v;
                    index += 1;
                }
            });
            index -= 1;
        }
        setPhoneState((prev) => ({ ...prev, digits: newDigits }));
        notifyValueChanged(newDigits);

        let result = newDigits.join('');
        if (result.length >= 9) {
            onValueChange?.(result);
            focusField(8);
            blurAllFields();
        } else {
            if (text.length > 0 && index < 8) {
                focusField(index + 1);
            }
        }
    };

    /** Function when press key */
    const handleKeyPressTextInput = (index: number, key: string) => {
        const digits = value === undefined ? phoneState.digits : value.split('');
        if (key === 'Backspace') {
            if (!digits[index] && index > 0) {
                handleChangeText(index - 1, '');
                focusField(index - 1);
            }
        }
    };

    /** Function focus when click TouchableWithoutFeedback */
    const onFocus = () => {
        if (!clearInputs) {
            const digits = value === undefined ? phoneState.digits : value.split('');

            let filledPinCount = digits.filter((digit) => {
                return digit !== null && digit !== undefined;
            }).length;
            focusField(Math.min(filledPinCount, 8));
        } else {
            clearAllFields();
            focusField(0);
        }
    };

    /** Effect to check value current */
    useEffect(() => {
        if (value !== valPrev) {
            setPhoneState((prev) => ({ ...prev, digits: valueToArray(value) }));
        }
    }, [value, valPrev]);

    useEffect(() => {
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            blurAllFields();
        });

        return () => {
            keyboardDidHideListener.remove();
        };
    }, [blurAllFields]);

    return (
        <Block gap={dp(4)}>
            {/** Label */}
            {label && <Text textSmall>{label}</Text>}

            {/** Input */}
            <Block style={[styles.inputWrapper, { borderColor: colors.border2 }]}>
                {/** Region */}
                <Button
                    color={colors.pageBackground3}
                    align={'center'}
                    gap={dp(4)}
                    justify={'center'}
                    px={dp(12)}
                    row
                    style={{
                        borderBottomLeftRadius: 8,
                        borderColor: colors.border1,
                        borderTopLeftRadius: 8,
                        borderRightWidth: 1,
                    }}
                >
                    <Text textLarge>+84</Text>

                    {/** Icon */}
                    <Icon name={'chevron-down'} size={dp(16)} />
                </Button>

                {/** Input */}
                <TouchableOpacity activeOpacity={1} onPress={onFocus} style={{ flex: 1, height: '100%' }}>
                    <Block flex={1} h={'100%'} ml={dp(12)} row>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(0, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(0, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[0] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[0] : ''}
                            />
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(1, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(1, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[1] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[1] : ''}
                            />
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(2, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(2, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[2] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[2] : ''}
                            />
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                marginHorizontal: Platform.OS === 'android' ? 0 : dp(2),
                            }}
                        >
                            <Text style={{ color: colors.text3, fontFamily: 'Roboto-Regular', fontSize: dp(16) }}>
                                -
                            </Text>
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(3, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(3, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[3] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[3] : ''}
                            />
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(4, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(4, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[4] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[4] : ''}
                            />
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(5, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(5, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[5] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[5] : ''}
                            />
                        </View>
                        <View
                            style={{
                                justifyContent: 'center',
                                marginHorizontal: Platform.OS === 'android' ? 0 : dp(2),
                            }}
                        >
                            <Text style={{ color: colors.text3, fontFamily: 'Roboto-Regular', fontSize: dp(16) }}>
                                -
                            </Text>
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(6, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(6, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[6] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[6] : ''}
                            />
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(7, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(7, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[7] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[7] : ''}
                            />
                        </View>
                        <View pointerEvents={'none'} style={{ justifyContent: 'center' }}>
                            <TextInput
                                keyboardAppearance={'default'}
                                keyboardType={'numeric'}
                                onChangeText={(text) => {
                                    handleChangeText(8, text);
                                }}
                                onKeyPress={({ nativeEvent: { key } }) => {
                                    handleKeyPressTextInput(8, key);
                                }}
                                placeholder={'_'}
                                placeholderTextColor={colors.text3}
                                ref={(ref) => {
                                    if (ref) {
                                        fields.current[8] = ref;
                                    }
                                }}
                                selectionColor={'#006AF5'}
                                style={{
                                    color: colors.text1,
                                    fontFamily: 'Roboto-Regular',
                                    fontSize: dp(16),
                                    height: Platform.OS === 'android' ? '100%' : undefined,
                                    padding: 0,
                                    textAlign: Platform.OS === 'android' ? 'center' : undefined,
                                    width: Platform.OS === 'android' ? dp(16) : undefined,
                                }}
                                textContentType={isAutoFillSupported ? 'oneTimeCode' : 'none'}
                                value={!clearInputs ? phoneState.digits[8] : ''}
                            />
                        </View>
                    </Block>
                </TouchableOpacity>
            </Block>

            {/** Helper text */}
            {helperText && (
                <Block align={'center'} gap={dp(4)} row>
                    <Icon color={COLORS.neutralGray60} name={'info-circle-solid'} size={dp(16)} />
                    <Text color={COLORS.neutralGray60} flex={1} textXSmall>
                        {helperText}
                    </Text>
                </Block>
            )}
        </Block>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        borderRadius: dp(8),
        borderWidth: dp(1),
        flexDirection: 'row',
        height: dp(48),
    },
});

export default memo(PhoneField);
