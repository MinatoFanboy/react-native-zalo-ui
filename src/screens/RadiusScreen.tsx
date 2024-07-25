import React, { FC, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const RadiusScreen: FC<MainStackScreenProps<'RadiusScreen'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Radius'}>
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Block gap={dp(8)}>
                    <Text color={COLORS.blue60} titleSmall>
                        App Radius
                    </Text>
                    <Text textXXSmall>
                        Rounded Corners are Easy on the Eyes (and the Brain). It takes less cognitive load to see
                        rounded rectangles than it does to see sharp-cornered ones.
                    </Text>
                </Block>

                {/* Border radius: 4 */}
                <Block align={'center'} gap={dp(24)} row>
                    <Block style={[styles.rectangle, { borderRadius: dp(4) }]} />

                    <Block flex={1} gap={dp(8)}>
                        <Text textSmall>TOKEN: corner_04</Text>
                        <Text textSmall>BORDER: 4</Text>
                    </Block>
                </Block>

                {/* Border radius: 8 */}
                <Block align={'center'} gap={dp(24)} row>
                    <Block style={[styles.rectangle, { borderRadius: dp(8) }]} />

                    <Block flex={1} gap={dp(8)}>
                        <Text textSmall>TOKEN: corner_08</Text>
                        <Text textSmall>BORDER: 8</Text>
                    </Block>
                </Block>

                {/* Border radius: 12 */}
                <Block align={'center'} gap={dp(24)} row>
                    <Block style={[styles.rectangle, { borderRadius: dp(12) }]} />

                    <Block flex={1} gap={dp(8)}>
                        <Text textSmall>TOKEN: corner_12</Text>
                        <Text textSmall>BORDER: 12</Text>
                    </Block>
                </Block>

                {/* Border radius: 16 */}
                <Block align={'center'} gap={dp(24)} row>
                    <Block style={[styles.rectangle, { borderRadius: dp(16) }]} />

                    <Block flex={1} gap={dp(8)}>
                        <Text textSmall>TOKEN: corner_16</Text>
                        <Text textSmall>BORDER: 16</Text>
                    </Block>
                </Block>

                {/* Border radius: 16 */}
                <Block align={'center'} gap={dp(24)} row>
                    <Block style={[styles.rectangle, { borderRadius: 999 }]} />

                    <Block flex={1} gap={dp(8)}>
                        <Text textSmall>TOKEN: corner_100</Text>
                        <Text textSmall>BORDER: 50%</Text>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    rectangle: {
        backgroundColor: COLORS.blue30,
        borderColor: COLORS.blue60,
        borderWidth: dp(1),
        height: dp(64),
        width: dp(64),
    },
});

export default RadiusScreen;
