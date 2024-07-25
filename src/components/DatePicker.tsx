import React, { FC, memo, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';
import { format } from 'date-fns';

type DatePickerProps = {
    disabled?: boolean;
    helperText?: string;
    label?: string;
    onClear?: () => void;
    onPress?: () => void;
    value?: Date | undefined;
};

const DatePicker: FC<DatePickerProps> = ({ disabled, helperText, label, onClear, onPress, value }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    return (
        <Block gap={dp(4)}>
            {label && (
                <Text color={disabled ? colors.text3 : colors.text1} textSmall>
                    {label}
                </Text>
            )}

            <Button
                color={disabled ? (theme === 'dark' ? COLORS.white10 : COLORS.black10) : 'transparent'}
                disabled={disabled}
                onPress={onPress}
                style={[
                    styles.inputWrapper,
                    {
                        borderColor: disabled ? (theme === 'dark' ? COLORS.white10 : COLORS.black10) : colors.border2,
                    },
                ]}
            >
                <Block flex={1}>
                    <Text color={value ? colors.text1 : disabled ? colors.text2 : colors.text3} textLarge>
                        {value ? format(value, 'dd/MM/yyyy') : 'dd/mm/yyyy'}
                    </Text>
                </Block>

                {value && (
                    <Button onPress={onClear}>
                        <Icon color={colors.text1} name={'close-circle-solid'} size={dp(16)} />
                    </Button>
                )}

                <Icon color={colors.text1} name={'calendar'} size={dp(24)} />
            </Button>

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
        alignItems: 'center',
        borderRadius: dp(8),
        borderWidth: dp(1),
        flexDirection: 'row',
        gap: dp(12),
        height: dp(48),
        paddingHorizontal: dp(12),
    },
});

export default memo(DatePicker);
