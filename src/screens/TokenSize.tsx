import React, { FC, useCallback } from 'react';
import { ColorValue } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

type CardProps = {
    backgroundColor?: ColorValue;
    color?: ColorValue;
    font?: string;
    fontFamily?: string;
    fontSize: number;
    lineHeight: number;
};

const Card: FC<CardProps> = ({ backgroundColor, color, font, fontFamily, fontSize, lineHeight }) => {
    const { colors } = useTheme() as CustomTheme;

    return (
        <Block gap={dp(8)}>
            <Block row>
                <Block color={backgroundColor} px={dp(16)} py={dp(4)} rounded>
                    <Text color={color} medium textSmall>
                        {font}
                    </Text>
                </Block>
            </Block>

            <Text color={colors.text1} font={fontFamily} lineHeight={dp(lineHeight)} size={dp(fontSize)}>
                Bầu trời trong xanh thăm thẳm, không một gợn mây
            </Text>

            <Block gap={dp(24)} row>
                <Text color={colors.text2} textSmall>{`Size: ${fontSize}`}</Text>
                <Text color={colors.text2} textSmall>{`Line height: ${lineHeight}`}</Text>
            </Block>
        </Block>
    );
};

const TokenSize: FC<MainStackScreenProps<'TokenSize'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Token Size'}>
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>Typeface: Roboto</Text>
                    <Text color={colors.text2} textXSmall>
                        Designed by Christian Robertson
                    </Text>
                </Block>

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f1100r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={27}
                    lineHeight={34}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f1100m'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={27}
                    lineHeight={34}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f1000r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={24}
                    lineHeight={30}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f1000r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={24}
                    lineHeight={30}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f900r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={22}
                    lineHeight={26}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f900r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={22}
                    lineHeight={26}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f800r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={20}
                    lineHeight={26}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f800r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={20}
                    lineHeight={26}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f700r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={18}
                    lineHeight={24}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f700r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={18}
                    lineHeight={24}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f600r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={16}
                    lineHeight={22}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f600r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={16}
                    lineHeight={22}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f500r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={15}
                    lineHeight={20}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f500r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={15}
                    lineHeight={20}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f400r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={14}
                    lineHeight={18}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f400r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={14}
                    lineHeight={18}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f300r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={13}
                    lineHeight={18}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f300r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={13}
                    lineHeight={18}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f200r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={12}
                    lineHeight={16}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f200r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={12}
                    lineHeight={16}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f100r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={11}
                    lineHeight={16}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f100r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={11}
                    lineHeight={16}
                />

                <Block color={colors.divider1} h={dp(1)} />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f000r'}
                    fontFamily={'Roboto-Regular'}
                    fontSize={10}
                    lineHeight={14}
                />

                <Card
                    backgroundColor={COLORS.blue10}
                    color={COLORS.blue60}
                    font={'f000r'}
                    fontFamily={'Roboto-Medium'}
                    fontSize={10}
                    lineHeight={14}
                />
            </Block>
        </Container>
    );
};

export default TokenSize;
