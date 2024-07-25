import React, { FC, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, ProgressBar, QRWallet, Text } from '~/components';
import { dp } from '~/utils';

const Loading: FC<MainStackScreenProps<'Loading'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Progress Loading'}>
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text bold textNormal>
                    Progress bar
                </Text>

                <ProgressBar />
            </Block>

            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text bold textNormal>
                    Loading
                </Text>

                <Block align={'center'} gap={dp(16)}>
                    <QRWallet />

                    <Text weight={'bold'} size={dp(16)}>
                        Ví QR Zalo
                    </Text>
                </Block>
            </Block>
        </Container>
    );
};

export default Loading;
