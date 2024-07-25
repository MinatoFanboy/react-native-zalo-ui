import React, { FC, memo, useContext } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CheckboxItem, CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

interface RadioListProps {
    array: CheckboxItem[];
    disabled?: boolean;
    onChange?: (value: CheckboxItem) => void;
    small?: boolean;
    value?: CheckboxItem;
    wrapperStyle?: StyleProp<ViewStyle>;
}

const RadioList: FC<RadioListProps> = ({ array = [], disabled, onChange, small, value, wrapperStyle }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    return (
        <View style={wrapperStyle}>
            {array.map((item) => {
                const isChecked = value?.value === item.value;

                return (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        disabled={disabled}
                        key={`Radio-${item.value}`}
                        onPress={() => onChange?.(item)}
                        style={{ alignItems: 'center', flexDirection: 'row', gap: dp(8) }}
                    >
                        <View
                            style={{
                                backgroundColor: disabled
                                    ? isChecked
                                        ? COLORS.white60
                                        : colors.uiBackgroundDisabled
                                    : isChecked
                                    ? COLORS.white100
                                    : 'transparent',
                                borderColor: isChecked
                                    ? disabled
                                        ? theme === 'dark'
                                            ? COLORS.blue80
                                            : COLORS.blue40
                                        : COLORS.blue60
                                    : colors.border2,
                                borderRadius: 999,
                                borderWidth: isChecked ? (small ? dp(5) : dp(8)) : small ? dp(1.5) : dp(2),
                                height: small ? dp(16) : dp(24),
                                width: small ? dp(16) : dp(24),
                            }}
                        />

                        <Text
                            style={[
                                { ...(small ? FONTS.textXSmall : FONTS.textSmall) },
                                { color: colors.text, opacity: disabled ? 0.4 : 1 },
                            ]}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default memo(RadioList);
