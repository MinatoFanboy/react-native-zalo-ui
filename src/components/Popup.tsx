import React, { FC, memo, useRef, useState } from 'react';
import { Animated, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme } from '~/types';
import Button from './Button';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

type PopupProps = {
    backdrop?: number;
    content: string;
    label?: string;
    title: string;
};

const Popup: FC<PopupProps> = ({ backdrop, content, label, title }) => {
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
        <View>
            <Button fullWidth onPress={onOpen} secondary title={label} />

            <Modal statusBarTranslucent transparent visible={visible}>
                <TouchableOpacity activeOpacity={1} onPress={onClose} style={styles.wrapper}>
                    <Animated.View
                        style={{
                            backgroundColor: colors.container,
                            borderRadius: dp(12),
                            overflow: 'hidden',
                            transform: [{ scale: scaleAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }) }],
                        }}
                    >
                        <TouchableOpacity activeOpacity={1} onPress={() => {}} style={{ gap: dp(12) }}>
                            {backdrop && (
                                <Image
                                    resizeMode={'cover'}
                                    source={backdrop}
                                    style={{ height: dp(167), width: '100%' }}
                                />
                            )}

                            <View style={{ paddingHorizontal: dp(24), paddingTop: dp(24) }}>
                                <Text style={[FONTS.titleLarge, { color: colors.text1, textAlign: 'center' }]}>
                                    {title}
                                </Text>
                            </View>
                            <View>
                                <View style={{ paddingBottom: dp(32), paddingHorizontal: dp(24) }}>
                                    <Text
                                        style={[
                                            FONTS.textNormal,
                                            {
                                                color: colors.text1,
                                                fontFamily: 'Roboto-Regular',
                                                textAlign: 'center',
                                            },
                                        ]}
                                    >
                                        {content}
                                    </Text>
                                </View>

                                <Button
                                    fullWidth
                                    mb={dp(24)}
                                    mx={dp(24)}
                                    onPress={onClose}
                                    primary
                                    title={'Xác nhận'}
                                />
                            </View>
                        </TouchableOpacity>
                    </Animated.View>
                </TouchableOpacity>
            </Modal>
        </View>
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

export default memo(Popup);
