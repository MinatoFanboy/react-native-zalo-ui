import React, { FC, useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { ThemeContext } from '~/themes';
import { Block, Container, Text } from '~/components';
import { dp } from '~/utils';
import { COLORS } from '~/constants';

const Layout: FC<MainStackScreenProps<'Layout'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(10), paddingHorizontal: 0 }} onBack={onBack} title={'Layout'}>
            {/* Flex layout */}
            <Block color={colors.pageBackground2} gap={dp(24)} py={dp(24)}>
                {/* Title */}
                <Block px={dp(16)}>
                    <Text titleSmall>Flex layout</Text>
                </Block>

                {/* Flex group */}
                <Block gap={dp(4)}>
                    {/* Flex 1 */}
                    <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} style={styles.flex} w={'100%'}>
                        <Text style={styles.text}>Flex 1</Text>
                    </Block>

                    {/* Flex 2 */}
                    <Block gap={dp(4)} row>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 2_1</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 2_2</Text>
                        </Block>
                    </Block>

                    {/* Flex 3 */}
                    <Block gap={dp(4)} row>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 3_1</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 3_2</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 3_3</Text>
                        </Block>
                    </Block>

                    {/* Flex 4 */}
                    <Block gap={dp(4)} row>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 4_1</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 4_2</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 4_3</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 4_4</Text>
                        </Block>
                    </Block>

                    {/* Flex 4 */}
                    <Block gap={dp(4)} row>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 5_1</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={2} style={styles.flex}>
                            <Text style={styles.text}>Flex 5_2</Text>
                        </Block>
                        <Block color={theme === 'dark' ? COLORS.pink80 : COLORS.pink10} flex={1} style={styles.flex}>
                            <Text style={styles.text}>Flex 5_3</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>

            {/* Grid layout */}
            <Block color={colors.pageBackground2} gap={dp(24)} px={0} py={dp(24)}>
                {/* Title */}
                <Block px={dp(16)}>
                    <Text titleSmall>Grid layout</Text>
                </Block>

                {/* Grid group */}
                <Block
                    style={{
                        borderBottomWidth: dp(1),
                        borderColor: theme === 'dark' ? COLORS.pink80 : COLORS.pink30,
                        borderTopWidth: dp(1),
                    }}
                >
                    <Block row>
                        <Block style={[styles.grid, { borderColor: theme === 'dark' ? COLORS.pink80 : COLORS.pink30 }]}>
                            <Text style={styles.text}>GRID</Text>
                        </Block>
                        <Block style={[styles.grid, { borderColor: theme === 'dark' ? COLORS.pink80 : COLORS.pink30 }]}>
                            <Text style={styles.text}>GRID</Text>
                        </Block>
                        <Block style={[styles.grid, { borderColor: theme === 'dark' ? COLORS.pink80 : COLORS.pink30 }]}>
                            <Text style={styles.text}>GRID</Text>
                        </Block>
                    </Block>

                    <Block row>
                        <Block style={[styles.grid, { borderColor: theme === 'dark' ? COLORS.pink80 : COLORS.pink30 }]}>
                            <Text style={styles.text}>GRID</Text>
                        </Block>
                        <Block style={[styles.grid, { borderColor: theme === 'dark' ? COLORS.pink80 : COLORS.pink30 }]}>
                            <Text style={styles.text}>GRID</Text>
                        </Block>
                        <Block style={[styles.grid, { borderColor: theme === 'dark' ? COLORS.pink80 : COLORS.pink30 }]}>
                            <Text style={styles.text}>GRID</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    flex: { alignItems: 'center', justifyContent: 'center', padding: dp(12) },
    grid: {
        alignItems: 'center',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        padding: dp(12),
    },
    text: { fontFamily: 'RobotoCondensed-Regular', fontSize: dp(13), lineHeight: dp(18) },
});

export default Layout;
