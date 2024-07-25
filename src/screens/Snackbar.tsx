import React, { FC, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps, ToastType } from '~/types';
import { Block, Button, Container, Text } from '~/components';
import { dp, showToast } from '~/utils';

const Snackbar: FC<MainStackScreenProps<'Snackbar'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onShowToast = useCallback(({ message, type = 'default' }: { message?: string; type?: ToastType }) => {
        showToast({ message, type });
    }, []);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Snackbar'}>
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Snackbar</Text>

                <Button
                    onPress={() => onShowToast({ message: 'Snackbar', type: 'default' })}
                    secondary
                    title={'Default with Action'}
                />

                <Button onPress={() => onShowToast({ message: 'Error', type: 'error' })} secondary title={'Error'} />

                <Button
                    onPress={() => onShowToast({ message: 'Success', type: 'success' })}
                    secondary
                    title={'Success'}
                />

                <Button
                    onPress={() => onShowToast({ message: 'Warning', type: 'warning' })}
                    secondary
                    title={'Warning'}
                />

                <Button
                    onPress={() => onShowToast({ message: 'Loading', type: 'loading' })}
                    secondary
                    title={'Loading'}
                />

                <Button
                    onPress={() => onShowToast({ message: 'Download ...', type: 'download' })}
                    secondary
                    title={'Download'}
                />

                <Button
                    onPress={() => onShowToast({ message: 'Connect Wifi', type: 'connect-wifi' })}
                    secondary
                    title={'Connect wifi'}
                />

                <Button
                    onPress={() => onShowToast({ message: 'Disconnect Wifi', type: 'disconnect-wifi' })}
                    secondary
                    title={'Disconnect wifi'}
                />
            </Block>
        </Container>
    );
};

export default Snackbar;
