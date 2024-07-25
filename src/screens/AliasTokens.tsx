import React, { FC, useCallback, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { ThemeContext } from '~/themes';
import { Block, Container, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const AliasTokens: FC<MainStackScreenProps<'AliasTokens'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Alias Tokens'}>
            <Text textXXSmall>Naming convention: lowercase + underscore</Text>

            {/* Background */}
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text titleSmall>Background</Text>

                {/* Header */}
                <Block gap={dp(12)} row>
                    <Text style={[styles.text, { color: theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100 }]}>
                        TOKEN
                    </Text>
                    <Text style={[styles.text, { color: theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100 }]}>
                        LIGHT THEME
                    </Text>
                    <Text style={[styles.text, { color: theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100 }]}>
                        DARK THEME
                    </Text>
                </Block>

                {/* Separate */}
                <Block color={colors.divider1} h={dp(1)} />

                {/* Page background 01 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        page_background_01
                    </Text>
                    <Block color={COLORS.neutralGray20} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG20
                        </Text>
                    </Block>
                    <Block color={COLORS.black100} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            BLK_A100
                        </Text>
                    </Block>
                </Block>

                {/* Page background 02 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        page_background_02
                    </Text>
                    <Block
                        color={COLORS.white100}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            WHT_A100
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray100} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG100
                        </Text>
                    </Block>
                </Block>

                {/* Page background 03 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        page_background_03
                    </Text>
                    <Block color={COLORS.neutralGray10} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG10
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray90} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG90
                        </Text>
                    </Block>
                </Block>

                {/* Separate */}
                <Block color={colors.divider1} h={dp(1)} />

                {/* Container */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        container
                    </Text>
                    <Block
                        color={COLORS.white100}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            WHT_A100
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray90} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG90
                        </Text>
                    </Block>
                </Block>

                {/* UI background */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        ui_background
                    </Text>
                    <Block
                        color={COLORS.white100}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            WHT_A100
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray100} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG100
                        </Text>
                    </Block>
                </Block>

                {/* UI background pressed */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        ui_background_pressed
                    </Text>
                    <Block color={COLORS.neutralGray20} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG20
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray80} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG80
                        </Text>
                    </Block>
                </Block>

                {/* UI background selected */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        ui_background_selected
                    </Text>
                    <Block color={COLORS.neutralGray10} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG10
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray90} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG90
                        </Text>
                    </Block>
                </Block>

                {/* UI background highlighted */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        ui_background_highlighted
                    </Text>
                    <Block color={COLORS.skyBlue10} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            SKB10
                        </Text>
                    </Block>
                    <Block color={COLORS.skyBlue100} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            SKB100
                        </Text>
                    </Block>
                </Block>

                {/* UI background disabled */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        ui_background_disabled
                    </Text>
                    <Block color={COLORS.neutralGray30} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG30
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray80} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG80
                        </Text>
                    </Block>
                </Block>

                {/** UI background transparent */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        ui_background_transparent
                    </Text>
                    <Block
                        color={COLORS.white0}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text style={styles.colorText}>WHT_A0</Text>
                    </Block>
                    <Block
                        color={COLORS.black0}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text style={styles.colorText}>BLK_A0</Text>
                    </Block>
                </Block>
            </Block>

            {/* Token */}
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text titleSmall>Token</Text>

                <Block gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        TOKEN
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        LIGHT THEME
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        DARK THEME
                    </Text>
                </Block>

                {/* Separate */}
                <Block color={colors.divider1} h={dp(1)} />

                {/* Text 1 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        text_01
                    </Text>
                    <Block color={COLORS.neutralGray100} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG100
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray10} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG10
                        </Text>
                    </Block>
                </Block>

                {/* Text 2 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        text_02
                    </Text>
                    <Block color={COLORS.neutralGray60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG60
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray50} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG50
                        </Text>
                    </Block>
                </Block>

                {/* Text 3 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        text_03
                    </Text>
                    <Block color={COLORS.neutralGray40} style={styles.colorWrapper}>
                        <Text style={[styles.colorText, { color: COLORS.white100 }]}>NG40</Text>
                    </Block>
                    <Block color={COLORS.neutralGray70} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG70
                        </Text>
                    </Block>
                </Block>

                {/* Text 4 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        text_04
                    </Text>
                    <Block
                        color={COLORS.white100}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            WHT_A100
                        </Text>
                    </Block>
                    <Block
                        color={COLORS.white100}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            WHT_A100
                        </Text>
                    </Block>
                </Block>

                {/* Section label */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        section_label
                    </Text>
                    <Block color={COLORS.blue70} style={styles.colorWrapper}>
                        <Text style={[styles.colorText, { color: COLORS.white100 }]}>...</Text>
                    </Block>
                    <Block color={COLORS.blue40} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            ...
                        </Text>
                    </Block>
                </Block>
            </Block>

            {/* Icon */}
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text titleSmall>Icon</Text>

                {/* Title */}
                <Block gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        TOKEN
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        LIGHT THEME
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        DARK THEME
                    </Text>
                </Block>

                {/* Separate */}
                <Block color={colors.divider1} h={dp(1)} />

                {/* Icon 1 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        icon_01
                    </Text>
                    <Block color={COLORS.neutralGray100} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG100
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray10} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG10
                        </Text>
                    </Block>
                </Block>

                {/* Icon 2 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        icon_02
                    </Text>
                    <Block color={COLORS.neutralGray60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG60
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray50} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG50
                        </Text>
                    </Block>
                </Block>

                {/* Icon 3 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        icon_03
                    </Text>
                    <Block color={COLORS.neutralGray40} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG40
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray70} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG70
                        </Text>
                    </Block>
                </Block>

                {/* Icon 4 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        icon_04
                    </Text>
                    <Block
                        color={COLORS.white100}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            WHT_A100
                        </Text>
                    </Block>
                    <Block
                        color={COLORS.white100}
                        style={[styles.colorWrapper, { borderColor: colors.divider1, borderWidth: dp(1) }]}
                    >
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            WHT_A100
                        </Text>
                    </Block>
                </Block>
            </Block>

            {/* Interactive */}
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text titleSmall>Interactive</Text>

                <Block gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        TOKEN
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        LIGHT THEME
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        DARK THEME
                    </Text>
                </Block>

                {/* Separate */}
                <Block color={colors.divider1} h={dp(1)} />

                {/* Danger */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        danger
                    </Text>
                    <Block color={COLORS.red60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R60
                        </Text>
                    </Block>
                    <Block color={COLORS.red60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R60
                        </Text>
                    </Block>
                </Block>

                {/* Danger pressed */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        danger_pressed
                    </Text>
                    <Block color={COLORS.red70} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R70
                        </Text>
                    </Block>
                    <Block color={COLORS.red50} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R50
                        </Text>
                    </Block>
                </Block>

                {/* Link 1 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        link_01
                    </Text>
                    <Block color={COLORS.blue60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B60
                        </Text>
                    </Block>
                    <Block color={COLORS.blue60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B60
                        </Text>
                    </Block>
                </Block>

                {/* Link 2 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        link_02
                    </Text>
                    <Block color={COLORS.blue50} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B50
                        </Text>
                    </Block>
                    <Block color={COLORS.blue50} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B50
                        </Text>
                    </Block>
                </Block>

                {/* Link pressed */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        link_pressed
                    </Text>
                    <Block color={COLORS.blue70} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B70
                        </Text>
                    </Block>
                    <Block color={COLORS.blue70} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B70
                        </Text>
                    </Block>
                </Block>

                {/* Selected */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        selected
                    </Text>
                    <Block color={COLORS.blue60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B60
                        </Text>
                    </Block>
                    <Block color={COLORS.blue60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B60
                        </Text>
                    </Block>
                </Block>
            </Block>

            {/* Support */}
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text titleSmall>Support</Text>

                <Block gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        TOKEN
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        LIGHT THEME
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        DARK THEME
                    </Text>
                </Block>

                {/* Separate */}
                <Block color={colors.divider1} h={dp(1)} />

                {/* Support error */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        support_error
                    </Text>
                    <Block color={COLORS.red60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R60
                        </Text>
                    </Block>
                    <Block color={COLORS.red60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R60
                        </Text>
                    </Block>
                </Block>

                {/* Support success */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        support_success
                    </Text>
                    <Block color={COLORS.green60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            G60
                        </Text>
                    </Block>
                    <Block color={COLORS.green60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            G60
                        </Text>
                    </Block>
                </Block>

                {/* Support warning */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        support_warning
                    </Text>
                    <Block color={COLORS.yellow60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            Y60
                        </Text>
                    </Block>
                    <Block color={COLORS.yellow60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            Y60
                        </Text>
                    </Block>
                </Block>

                {/* Support informative */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        support_informative
                    </Text>
                    <Block color={COLORS.blue70} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B&0
                        </Text>
                    </Block>
                    <Block color={COLORS.blue60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B60
                        </Text>
                    </Block>
                </Block>
            </Block>

            {/* Border & Divider */}
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text titleSmall>Border & Divider</Text>

                <Block gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        TOKEN
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        LIGHT THEME
                    </Text>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        DARK THEME
                    </Text>
                </Block>

                {/* Separate */}
                <Block color={colors.divider1} h={dp(1)} />

                {/* Divider 1 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        divider_01
                    </Text>
                    <Block color={COLORS.neutralGray20} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG20
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray80} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG80
                        </Text>
                    </Block>
                </Block>

                {/* Divider 2 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        divider_02
                    </Text>
                    <Block color={COLORS.neutralGray30} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG30
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray70} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG70
                        </Text>
                    </Block>
                </Block>

                {/* Border 1 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        border_01
                    </Text>
                    <Block color={COLORS.neutralGray30} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG30
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray70} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG70
                        </Text>
                    </Block>
                </Block>

                {/* Border 2 */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        border_02
                    </Text>
                    <Block color={COLORS.neutralGray40} style={styles.colorWrapper}>
                        <Text color={COLORS.neutralGray100} style={styles.colorText}>
                            NG40
                        </Text>
                    </Block>
                    <Block color={COLORS.neutralGray60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            NG60
                        </Text>
                    </Block>
                </Block>

                {/* Border selected */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        border_selected
                    </Text>
                    <Block color={COLORS.blue60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B60
                        </Text>
                    </Block>
                    <Block color={COLORS.blue60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            B60
                        </Text>
                    </Block>
                </Block>

                {/* Border danger */}
                <Block align={'center'} gap={dp(12)} row>
                    <Text color={theme === 'dark' ? COLORS.neutralGray10 : COLORS.black100} style={styles.text}>
                        border_danger
                    </Text>
                    <Block color={COLORS.red60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R60
                        </Text>
                    </Block>
                    <Block color={COLORS.red60} style={styles.colorWrapper}>
                        <Text color={COLORS.white100} style={styles.colorText}>
                            R60
                        </Text>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    colorText: { fontFamily: 'RobotoCondensed-Regular', fontSize: dp(12), lineHeight: dp(16) },
    colorWrapper: {
        alignItems: 'center',
        borderRadius: dp(4),
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: dp(8),
        paddingVertical: dp(16),
    },
    text: { flex: 1, fontFamily: 'RobotoCondensed-Regular', fontSize: dp(12), lineHeight: dp(18) },
});

export default AliasTokens;
