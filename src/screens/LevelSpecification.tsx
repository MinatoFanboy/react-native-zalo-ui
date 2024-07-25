import React, { FC, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, LevelOrganization, Text } from '~/components';
import { dp } from '~/utils';

const LevelSpecification: FC<MainStackScreenProps<'LevelSpecification'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Level Specification'}>
            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Color / Level Organization</Text>

                <LevelOrganization />
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Shadow / Bottom</Text>

                <Block justify={'space-between'} row>
                    <Block flex={1} gap={dp(24)}>
                        <Text style={styles.label}>level_01</Text>

                        <Block color={colors.container} h={dp(80)} shadow1 w={dp(80)} />

                        <Text color={colors.text2} style={styles.label}>
                            {'x: 0\ny: 0\nblur: 6\ncolor: \n#141415, 14%'}
                        </Text>
                    </Block>
                    <Block flex={1} gap={dp(24)}>
                        <Text style={styles.label}>level_02</Text>

                        <Block color={colors.container} h={dp(80)} shadow2 w={dp(80)} />

                        <Text color={colors.text2} style={styles.label}>
                            {'x: 0\ny: 5\nblur: 12\ncolor: \n#141415, 12%'}
                        </Text>
                    </Block>
                    <Block flex={1} gap={dp(24)}>
                        <Text style={styles.label}>level_03</Text>

                        <Block color={colors.container} h={dp(80)} shadow3 w={dp(80)} />

                        <Text color={colors.text2} style={styles.label}>
                            {'x: 0\ny: 10\nblur: 24\ncolor: \n#141415, 9%'}
                        </Text>
                    </Block>
                </Block>
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Shadow / Top</Text>

                <Block justify={'space-between'} row>
                    <Block flex={1} gap={dp(24)}>
                        <Text style={styles.label}>level_01</Text>

                        <Block
                            color={colors.container}
                            h={dp(80)}
                            shadow1
                            style={{ shadowOffset: { height: -dp(2), width: 0 } }}
                            w={dp(80)}
                        />

                        <Text color={colors.text2} style={styles.label}>
                            {'x: 0\ny: -2\nblur: 6\ncolor: \n#141415, 14%'}
                        </Text>
                    </Block>
                    <Block flex={1} gap={dp(24)}>
                        <Text style={styles.label}>level_02</Text>

                        <Block
                            color={colors.container}
                            h={dp(80)}
                            shadow2
                            style={{ shadowOffset: { height: -dp(5), width: 0 } }}
                            w={dp(80)}
                        />

                        <Text color={colors.text2} style={styles.label}>
                            {'x: 0\ny: -5\nblur: 12\ncolor: \n#141415, 12%'}
                        </Text>
                    </Block>
                    <Block flex={1} gap={dp(24)}>
                        <Text style={styles.label}>level_03</Text>

                        <Block
                            color={colors.container}
                            h={dp(80)}
                            shadow3
                            style={{ shadowOffset: { height: -dp(10), width: 0 } }}
                            w={dp(80)}
                        />

                        <Text color={colors.text2} style={styles.label}>
                            {'x: 0\ny: -10\nblur: 24\ncolor: \n#141415, 9%'}
                        </Text>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    label: {
        fontFamily: 'RobotoCondensed-Regular',
        fontSize: dp(12),
        lineHeight: dp(18),
    },
});

export default LevelSpecification;
