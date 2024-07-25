import React, { FC, memo, useContext, useState } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

type SearchInputProps = {
    disabled?: boolean;
    small?: boolean;
} & TextInputProps;

const SearchInput: FC<SearchInputProps> = ({ disabled, small, ...props }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <Block
            color={disabled ? (theme === 'dark' ? COLORS.white10 : COLORS.black10) : 'transparent'}
            gap={small ? dp(8) : dp(12)}
            h={small ? dp(32) : dp(48)}
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
            <Icon name={'search'} />

            <TextInput
                editable={disabled ? false : true}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                placeholderTextColor={colors.text3}
                selectionColor={COLORS.blue60}
                style={[
                    { ...(small ? FONTS.textLarge : FONTS.textNormal) },
                    {
                        color: disabled ? colors.text2 : colors.text1,
                        flex: 1,
                        paddingVertical: 0,
                        textAlignVertical: 'center',
                    },
                ]}
                {...props}
            />

            {isFocused && props?.value && (
                <Button>
                    <Icon name={'close-circle'} size={dp(16)} />
                </Button>
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
        paddingHorizontal: dp(12),
    },
});

export default memo(SearchInput);
