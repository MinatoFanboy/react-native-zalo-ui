import React, { FC, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Icon, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const ListItem: FC<MainStackScreenProps<'ListItem'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'List Item'}>
            <Block card color={colors.pageBackground2}>
                <Block align={'center'} gap={dp(16)} p={dp(16)} row>
                    <Text flex={1} textLarge>
                        Title
                    </Text>

                    <Icon color={colors.text2} name={'chevron-right'} size={dp(16)} />

                    <Block color={colors.divider1} style={styles.border} />
                </Block>
                <Block align={'center'} gap={dp(16)} p={dp(16)} row>
                    <Icon color={colors.text2} name={'user-block'} />

                    <Text flex={1} textLarge>
                        Sample text title
                    </Text>

                    <Icon color={COLORS.blue60} name={'check'} />

                    <Block color={colors.divider1} style={styles.border} />
                </Block>
                <Block align={'center'} gap={dp(16)} p={dp(16)} row>
                    <Block flex={1} gap={dp(2)}>
                        <Text textLarge>Title</Text>
                        <Text color={colors.text2} textSmall>
                            Subtitle
                        </Text>
                    </Block>

                    <Icon color={colors.text2} name={'chevron-right'} size={dp(16)} />

                    <Block color={colors.divider1} style={styles.border} />
                </Block>
                <Block align={'center'} gap={dp(16)} p={dp(16)} row>
                    <Icon color={colors.text2} name={'members'} />

                    <Text flex={1} textLarge>
                        Title
                    </Text>

                    <Block color={colors.divider1} style={styles.border} />
                </Block>
                <Block align={'center'} gap={dp(16)} p={dp(16)} row>
                    <Text textLarge>
                        Title <Text color={colors.text2}>(Brackets)</Text>
                    </Text>

                    <Block color={colors.divider1} style={styles.border} />
                </Block>
                <Block gap={dp(2)} p={dp(16)}>
                    <Text textLarge>Title</Text>
                    <Text color={colors.text2} textSmall>
                        Subtitle
                    </Text>

                    <Block color={colors.divider1} style={styles.border} />
                </Block>
                <Block align={'center'} row gap={dp(16)} p={dp(16)}>
                    <Text flex={1} textLarge>
                        Title <Text style={{ color: colors.text2 }}>(Brackets)</Text>
                    </Text>

                    <Icon color={colors.text2} name={'chevron-right'} size={dp(16)} />

                    <Block color={colors.divider1} style={styles.border} />
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    border: {
        bottom: 0,
        height: dp(0.5),
        left: dp(16),
        position: 'absolute',
        right: dp(16),
    },
});

export default ListItem;
