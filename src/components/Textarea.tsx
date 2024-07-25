import React, { FC, memo, useContext, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

type TextareaProps = {
    disabled?: boolean;
    focused?: boolean;
    helperText?: string;
    label?: string;
    maxLength?: number;
    onChangeText?: ((text: string) => void) | undefined;
} & TextInputProps;

const Textarea: FC<TextareaProps> = ({ disabled, focused, helperText, label, maxLength, onChangeText, ...props }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const [isFocused, setIsFocused] = useState<boolean>(focused || false);

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
                            : isFocused
                            ? COLORS.blue60
                            : colors.border2,
                    },
                ]}
            >
                <TextInput
                    editable={disabled ? false : true}
                    multiline
                    numberOfLines={5}
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                    onChangeText={onChangeText}
                    placeholderTextColor={colors.text3}
                    selectionColor={COLORS.blue60}
                    style={{
                        color: disabled ? colors.text2 : colors.text1,
                        flex: 1,
                        fontFamily: 'Roboto-Regular',
                        fontSize: dp(16),
                        textAlignVertical: 'top',
                    }}
                    {...props}
                />

                <Block align={'center'}>
                    {isFocused && props.value && (
                        <Button onPress={() => onChangeText?.('')}>
                            <Icon name={'close-circle-solid'} size={dp(16)} />
                        </Button>
                    )}
                    <Block flex={1} />

                    <Block style={{ alignSelf: 'flex-end' }}>
                        {maxLength && (
                            <Text color={colors.text2} medium textXXXSmall>
                                {maxLength - (props.value ? props.value.length : 0)}
                            </Text>
                        )}
                    </Block>
                </Block>
            </Block>

            {helperText && (
                <Block align={'center'} gap={dp(4)} row>
                    <Icon color={colors.text2} name={'help-circle-solid'} size={dp(16)} />
                    <Text color={colors.text2} flex={1} textXSmall>
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
        gap: dp(12),
        height: dp(120),
        padding: dp(12),
    },
});

export default memo(Textarea);
