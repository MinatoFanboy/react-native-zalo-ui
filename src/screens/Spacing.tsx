import React, { useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { ThemeContext } from '~/themes';
import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Text } from '~/components';
import { dp } from '~/utils';
import { COLORS } from '~/constants';

const Spacing: React.FC<MainStackScreenProps<'Spacing'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Spacing System'}>
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.blue60} titleSmall>
                    U Spacing
                </Text>

                {/* Default */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(4)} w={dp(4)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U</Text>
                        <Text style={styles.text}>Default = 4px</Text>
                    </Block>
                </Block>

                {/* 8px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(8)} w={dp(8)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U2</Text>
                        <Text style={styles.text}>8px</Text>
                    </Block>
                </Block>

                {/* 12px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(12)} w={dp(12)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U3</Text>
                        <Text style={styles.text}>12px</Text>
                    </Block>
                </Block>

                {/* 16px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(16)} w={dp(16)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U4</Text>
                        <Text style={styles.text}>16px</Text>
                    </Block>
                </Block>

                {/* 20px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(20)} w={dp(20)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U5</Text>
                        <Text style={styles.text}>20px</Text>
                    </Block>
                </Block>

                {/* 24px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(24)} w={dp(24)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U6</Text>
                        <Text style={styles.text}>24px</Text>
                    </Block>
                </Block>

                {/* 28px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(28)} w={dp(28)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U7</Text>
                        <Text style={styles.text}>28px</Text>
                    </Block>
                </Block>

                {/* 32px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(32)} w={dp(32)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U8</Text>
                        <Text style={styles.text}>32px</Text>
                    </Block>
                </Block>

                {/* 36px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(36)} w={dp(36)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U9</Text>
                        <Text style={styles.text}>36px</Text>
                    </Block>
                </Block>

                {/* 40px */}
                <Block align={'center'} gap={dp(16)} row>
                    <Block color={theme === 'dark' ? '#E4E8EC' : COLORS.neutralGray10} style={styles.rectangle}>
                        <Block color={COLORS.pink60} h={dp(40)} w={dp(40)} />
                    </Block>

                    <Block flex={1} gap={dp(8)}>
                        <Text style={styles.text}>U10</Text>
                        <Text style={styles.text}>40px</Text>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: dp(48),
        width: dp(48),
    },
    text: { fontFamily: 'RobotoCondensed-Regular', fontSize: dp(14), lineHeight: dp(18) },
});

export default Spacing;
