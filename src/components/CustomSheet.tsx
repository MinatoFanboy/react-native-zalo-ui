import React, { FC, PropsWithChildren, memo, useCallback, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
const { height } = Dimensions.get('window');

import { CustomTheme } from '~/types';
import Block from './Block';
import Button from './Button';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const CustomSheet: FC<PropsWithChildren<{ label?: string }>> = ({ children, label = 'Custom Bottom Sheet' }) => {
    const { colors } = useTheme() as CustomTheme;
    const insets = useSafeAreaInsets();

    const ref = useRef<RBSheet>(null);

    const onClose = useCallback(() => {
        if (ref.current) {
            ref.current.close();
        }
    }, []);

    const onOpen = useCallback(() => {
        if (ref.current) {
            ref.current.open();
        }
    }, []);

    return (
        <Block>
            <Button fullWidth secondary onPress={onOpen} title={label} />

            <RBSheet
                customStyles={{
                    container: {
                        backgroundColor: colors.uiBackground,
                        borderTopLeftRadius: dp(16),
                        borderTopRightRadius: dp(16),
                        gap: dp(16),
                        paddingBottom: insets.bottom || dp(16),
                    },
                    wrapper: { backgroundColor: COLORS.black70 },
                }}
                height={(insets.bottom || dp(16)) + height / 2}
                ref={ref}
            >
                {children}

                <Block color={colors.uiBackground} gap={dp(16)} px={dp(16)} row>
                    <Button flex={1} fullWidth onPress={onClose} secondary title={'Để sau'} />
                    <Button flex={1} fullWidth onPress={onClose} primary title={'Cho phép'} />
                </Block>
            </RBSheet>
        </Block>
    );
};

export default memo(CustomSheet);
