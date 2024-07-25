import React, { FC, memo, useRef, useState } from 'react';
import { ActivityIndicator, Animated, Modal, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import Block from './Block';
import Button from './Button';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

type DialogProps = {
    cancelText?: string;
    confirmText?: string;
    content: string;
    label?: string;
    onCancel?: () => void;
    onConfirm?: () => void;
    title: string;
};

const Dialog: FC<DialogProps> = ({
    cancelText,
    confirmText,
    content,
    label,
    onCancel = () => {},
    onConfirm = () => {},
    title,
}) => {
    const { colors } = useTheme() as CustomTheme;

    const scaleAnim = useRef<Animated.Value>(new Animated.Value(0)).current;
    const [visible, setVisible] = useState<boolean>(false);

    const onClose = () => {
        Animated.timing(scaleAnim, { duration: 200, toValue: 0, useNativeDriver: true }).start(() => setVisible(false));
    };

    const onOpen = () => {
        setVisible(true);
        Animated.timing(scaleAnim, { duration: 200, toValue: 1, useNativeDriver: true }).start();
    };

    return (
        <>
            <Button fullWidth onPress={onOpen} secondary title={label} />

            <Modal statusBarTranslucent transparent visible={visible}>
                <Button activeOpacity={1} onPress={onClose} style={styles.wrapper}>
                    <Animated.View
                        style={{
                            backgroundColor: colors.container,
                            borderRadius: dp(12),
                            overflow: 'hidden',
                            transform: [{ scale: scaleAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }],
                        }}
                    >
                        <Button activeOpacity={1} onPress={() => {}}>
                            <Block pb={dp(12)} px={dp(24)} pt={dp(24)}>
                                <Text titleLarge>{title}</Text>
                            </Block>
                            <Block pb={dp(24)} px={dp(24)}>
                                <Text regular textNormal>
                                    {content}
                                </Text>
                            </Block>

                            {(cancelText || confirmText) && (
                                <Block>
                                    <Block color={colors.divider1} h={dp(1)} mx={dp(24)} />

                                    <Block style={styles.footer}>
                                        {cancelText && (
                                            <Button
                                                onPress={() => {
                                                    onClose();
                                                    onCancel();
                                                }}
                                                p={dp(8)}
                                                rounded
                                            >
                                                <Block h={dp(24)} justify={'center'}>
                                                    <Text textNormal>{cancelText}</Text>

                                                    {false && (
                                                        <ActivityIndicator
                                                            color={colors.text1}
                                                            size={dp(24)}
                                                            style={{ alignSelf: 'center', position: 'absolute' }}
                                                        />
                                                    )}
                                                </Block>
                                            </Button>
                                        )}
                                        {confirmText && (
                                            <Button
                                                activeOpacity={0.7}
                                                onPress={() => {
                                                    onClose();
                                                    onConfirm();
                                                }}
                                                p={dp(8)}
                                                rounded
                                            >
                                                <Block h={dp(24)} justify={'center'}>
                                                    <Text color={COLORS.blue60} textNormal>
                                                        {confirmText}
                                                    </Text>

                                                    {false && (
                                                        <ActivityIndicator
                                                            color={COLORS.blue60}
                                                            size={dp(24)}
                                                            style={{ alignSelf: 'center', position: 'absolute' }}
                                                        />
                                                    )}
                                                </Block>
                                            </Button>
                                        )}
                                    </Block>
                                </Block>
                            )}
                        </Button>
                    </Animated.View>
                </Button>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        gap: dp(8),
        paddingHorizontal: dp(16),
        paddingVertical: dp(12),
    },
    wrapper: { backgroundColor: COLORS.black70, flex: 1, justifyContent: 'center', paddingHorizontal: dp(32) },
});

export default memo(Dialog);
