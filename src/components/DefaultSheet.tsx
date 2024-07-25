import React, { FC, Fragment, memo, useCallback, useContext, useRef } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';

import { CustomTheme } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Text from './Text';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

interface ButtonProps {
    name: string;
    onPress?: () => void;
    type?: 'danger' | 'default';
}

interface DefaultSheetProps {
    label?: string;
    title?: string;
    array: ButtonProps[];
}

const ButtonItem: FC<{ onClose: () => void } & ButtonProps> = ({
    name,
    onClose,
    onPress = () => {},
    type = 'default',
}) => {
    const { colors } = useTheme() as CustomTheme;

    return (
        <Button
            onPress={() => {
                onClose();
                onPress();
            }}
            style={styles.container}
        >
            <Block h={dp(24)} justify={'center'}>
                <Text
                    numberOfLines={1}
                    style={[FONTS.textLarge, { color: type === 'danger' ? COLORS.red60 : colors.text1 }]}
                >
                    {name}
                </Text>
            </Block>
        </Button>
    );
};

const DefaultSheet: FC<DefaultSheetProps> = ({
    array = [],
    label = 'Default Bottom Sheet',
    title = 'This is title, it can be one line or two line',
}) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const insets = useSafeAreaInsets();

    const ref = useRef<RBSheet>(null);

    const onClose = useCallback(() => {
        if (ref.current) {
            ref.current.close();
        }
    }, []);

    return (
        <>
            <Button
                fullWidth
                onPress={() => {
                    if (ref.current) {
                        ref.current.open();
                    }
                }}
                secondary
                title={label}
            />

            <RBSheet
                customStyles={{
                    container: {
                        backgroundColor: colors.pageBackground2,
                        borderTopLeftRadius: dp(16),
                        borderTopRightRadius: dp(16),
                        paddingBottom: insets.bottom,
                    },
                    wrapper: { backgroundColor: COLORS.black70 },
                }}
                height={dp(107) + insets.bottom + array.length * dp(57)}
                ref={ref}
            >
                <Block style={styles.container}>
                    <Block h={dp(24)} justify={'center'}>
                        <Text color={colors.text2} numberOfLines={1} textSmall>
                            {title}
                        </Text>
                    </Block>
                </Block>

                {array.map((item, index) => (
                    <Fragment key={`Button-${index}`}>
                        <Block color={colors.divider1} h={dp(1)} />

                        <ButtonItem name={item.name} onClose={onClose} onPress={item.onPress} type={item.type} />
                    </Fragment>
                ))}

                <Block color={theme === 'dark' ? COLORS.black100 : COLORS.neutralGray10} h={dp(4)}>
                    <ButtonItem name={'Cancel'} onClose={onClose} />
                </Block>
            </RBSheet>
        </>
    );
};

const styles = StyleSheet.create({
    container: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: dp(56), paddingVertical: dp(16) },
});

export default memo(DefaultSheet);
