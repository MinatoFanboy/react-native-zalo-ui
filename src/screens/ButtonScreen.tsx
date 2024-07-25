import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Button, Container, Icon, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const ButtonScreen: React.FC<MainStackScreenProps<'ButtonScreen'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Button'}>
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>Level</Text>
                    <Text textXXSmall>Có 3 level button cơ bản: Primary, Secondary, Tertiary</Text>
                </Block>

                <Text style={styles.label}>Primary</Text>

                <Button primary title={'Button'} />

                <Text style={styles.label}>Secondary</Text>

                <Button secondary title={'Button'} />

                <Text style={styles.label}>Tertiary</Text>

                <Button tertiary title={'Button'} />
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Type Primary / Secondary / Tertiary</Text>

                <Text style={styles.label}>Highlight</Text>

                <Block gap={dp(8)} row wrap>
                    <Button primary title={'Button'} />

                    <Button secondary title={'Button'} />

                    <Button tertiary title={'Button'} />
                </Block>

                <Text style={styles.label}>Danger</Text>

                <Block gap={dp(8)} row wrap>
                    <Button danger primary title={'Button'} />

                    <Button danger secondary title={'Button'} />

                    <Button danger tertiary title={'Button'} />
                </Block>

                <Text style={styles.label}>Neutral</Text>

                <Block gap={dp(8)} row wrap>
                    <Button neutral primary title={'Button'} />

                    <Button neutral secondary title={'Button'} />

                    <Button neutral tertiary title={'Button'} />
                </Block>
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Size</Text>

                <Text style={styles.label}>Large</Text>

                <Button large title={'Button'} />

                <Text style={styles.label}>Medium</Text>

                <Button medium title={'Button'} />

                <Text style={styles.label}>Small</Text>

                <Button small title={'Button'} />

                <Text style={styles.label}>Full-width</Text>

                <Button fullWidth title={'Button'} />
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Anatomy</Text>

                <Text style={styles.label}>Nút với biểu tượng ở đầu</Text>

                <Button
                    leftIcon={<Icon color={COLORS.white100} name={'plus'} size={dp(24)} />}
                    primary
                    title={'Button'}
                />

                <Text style={styles.label}>Nút với biểu tượng ở sau</Text>

                <Button
                    primary
                    rightIcon={<Icon color={COLORS.white100} name={'arrow-right'} size={dp(24)} />}
                    title={'Button'}
                />

                <Text style={styles.label}>Nút</Text>

                <Button primary title={'Button'} />

                <Text style={styles.label}>Nút biểu tượng</Text>

                <Button leftIcon={<Icon color={COLORS.white100} name={'plus'} />} primary />
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Primary State</Text>

                <Text style={styles.label}>Default</Text>

                <Button primary title={'Button'} />

                <Text style={styles.label}>Loading</Text>

                <Button loading primary title={'Button'} />

                <Text style={styles.label}>Disabled</Text>

                <Button primary disabled title={'Button'} />
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    label: { color: COLORS.neutralGray60, fontFamily: 'Roboto-Italic', fontSize: dp(12), lineHeight: dp(16) },
});

export default ButtonScreen;
