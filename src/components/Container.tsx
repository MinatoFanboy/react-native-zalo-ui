import React, { FC, PropsWithChildren, memo, useContext } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

interface ContainerProps {
    containerStyle?: StyleProp<ViewStyle>;
    keyboard?: boolean;
    onBack?: () => void;
    page?: boolean;
    title?: string;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({
    children,
    containerStyle,
    keyboard,
    onBack,
    page,
    title,
}) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme, toggleTheme } = useContext(ThemeContext);
    const insets = useSafeAreaInsets();

    const _renderBody = () => {
        if (keyboard) {
            return (
                <KeyboardAwareScrollView
                    contentContainerStyle={[
                        { padding: dp(16), paddingBottom: dp(76) + (insets.bottom || dp(24)) },
                        containerStyle,
                    ]}
                    keyboardDismissMode={'on-drag'}
                    keyboardShouldPersistTaps={'handled'}
                    showsVerticalScrollIndicator={false}
                    style={{ backgroundColor: colors.pageBackground1, flex: 1 }}
                >
                    {children}
                </KeyboardAwareScrollView>
            );
        }

        if (page) {
            return (
                <Block
                    color={colors.pageBackground1}
                    flex={1}
                    pb={dp(76) + (insets.bottom || dp(24))}
                    pt={dp(16)}
                    px={dp(16)}
                    style={containerStyle}
                >
                    {children}
                </Block>
            );
        }

        return (
            <ScrollView
                contentContainerStyle={[
                    { padding: dp(16), paddingBottom: dp(76) + (insets.bottom || dp(24)) },
                    containerStyle,
                ]}
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: colors.pageBackground1, flex: 1 }}
            >
                {children}
            </ScrollView>
        );
    };

    return (
        <>
            <Block
                align={'center'}
                color={colors.uiBackground}
                gap={dp(8)}
                pb={dp(6)}
                pl={dp(12)}
                pr={dp(8)}
                pt={insets.top || dp(12)}
                row
            >
                <Button onPress={onBack}>
                    <Icon color={colors.text1} name={'chevron-left'} />
                </Button>

                <Text flex={1} titleNormal>
                    {title}
                </Text>

                <Block
                    align={'center'}
                    gap={dp(4)}
                    h={dp(32)}
                    justify={'center'}
                    radius={dp(16)}
                    row
                    w={dp(87)}
                    style={{ borderColor: 'rgba(151, 151, 151, 0.5)', borderWidth: dp(0.5) }}
                >
                    <Button>
                        <Icon name={'menu'} />
                    </Button>
                    <Block color={COLORS.black20} h={dp(19)} w={dp(0.5)} />
                    <Button>
                        <Icon name={'turn-off'} />
                    </Button>
                </Block>
            </Block>
            <Block color={colors.pageBackground1} h={dp(1)} w={'100%'} />
            {_renderBody()}

            <Button
                absolute
                align={'center'}
                bottom={insets.bottom + dp(24)}
                color={theme === 'dark' ? COLORS.white100 : COLORS.neutralGray100}
                justify={'center'}
                h={dp(44)}
                left={dp(16)}
                onPress={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                rounded
                style={{
                    borderColor: theme === 'dark' ? COLORS.black20 : COLORS.white20,
                    borderWidth: dp(2),
                }}
                w={dp(44)}
            >
                <Icon
                    color={theme === 'dark' ? COLORS.neutralGray100 : COLORS.white100}
                    name={theme === 'dark' ? 'sun-solid' : 'moon-solid'}
                />
            </Button>
        </>
    );
};

export default memo(Container);
