import React, { FC, memo, useContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CheckboxItem, CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

interface CheckboxListProps {
    array: CheckboxItem[];
    disabled?: boolean;
    onChange?: (value: CheckboxItem) => void;
    small?: boolean;
    value?: CheckboxItem[];
    wrapperStyle?: StyleProp<ViewStyle>;
}

const CheckboxList: FC<CheckboxListProps> = ({ array = [], disabled, onChange, small, value = [], wrapperStyle }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    return (
        <Block style={wrapperStyle}>
            {array.map((item) => {
                const isChecked = value?.filter((e) => e.value === item.value).length > 0;

                return (
                    <Button
                        align={'center'}
                        disabled={disabled}
                        gap={dp(8)}
                        key={`Checkbox-${item.value}`}
                        onPress={() => onChange?.(item)}
                        row
                    >
                        <Block
                            color={
                                disabled
                                    ? isChecked
                                        ? COLORS.white60
                                        : colors.uiBackgroundDisabled
                                    : isChecked
                                    ? COLORS.white100
                                    : 'transparent'
                            }
                            radius={dp(8)}
                            h={small ? dp(16) : dp(24)}
                            w={small ? dp(16) : dp(24)}
                        >
                            {isChecked ? (
                                <Icon
                                    color={
                                        disabled ? (theme === 'dark' ? COLORS.blue80 : COLORS.blue40) : COLORS.blue60
                                    }
                                    name={'checkbox'}
                                    size={small ? dp(16) : dp(24)}
                                />
                            ) : (
                                <Block
                                    h={small ? dp(16) : dp(24)}
                                    style={{
                                        borderColor: colors.border2,
                                        borderRadius: small ? dp(4) : dp(8),
                                        borderWidth: small ? dp(1.5) : dp(2),
                                    }}
                                    w={small ? dp(16) : dp(24)}
                                />
                            )}
                        </Block>

                        <Text
                            color={colors.text}
                            style={[
                                { ...(small ? FONTS.textXSmall : FONTS.textSmall) },
                                { opacity: disabled ? 0.4 : 1 },
                            ]}
                        >
                            {item.name}
                        </Text>
                    </Button>
                );
            })}
        </Block>
    );
};

export default memo(CheckboxList);
