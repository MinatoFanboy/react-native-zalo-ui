import React, { FC, useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, CustomSheet, DefaultSheet, Dialog, Icon, Image, Popup, Text } from '~/components';
import { dp } from '~/utils';

const SheetAndModal: FC<MainStackScreenProps<'SheetAndModal'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Sheet & Modal'}>
            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Bottom Sheet</Text>

                <DefaultSheet
                    array={[{ name: 'Sample Menu' }, { name: 'Sample Menu' }, { name: 'Sample Menu', type: 'danger' }]}
                />

                <CustomSheet>
                    <Block color={colors.uiBackground} flex={1}>
                        <ScrollView
                            contentContainerStyle={{ gap: dp(16), padding: dp(16) }}
                            showsVerticalScrollIndicator={false}
                            style={{ flex: 1 }}
                        >
                            <Image
                                h={dp(91)}
                                resizeMode={'contain'}
                                source={require('~/assets/images/starbucks.png')}
                                w={'auto'}
                            />

                            <Text medium textLarge>
                                Cho phép Starbucks Coffee xác định vị trí của bạn
                            </Text>
                            <Text color={colors.text2} regular textNormal>
                                Starbucks Coffee sẽ sử dụng vị trí của bạn để hỗ trợ giao nhận hàng, tìm kiếm dịch vụ,
                                bạn bè quanh bạn, hoặc các dịch vụ liên quan đến địa điểm khác.
                            </Text>
                        </ScrollView>

                        <Icon
                            color={colors.text2}
                            name={'info-circle'}
                            size={dp(24)}
                            style={{ position: 'absolute', right: dp(16), top: dp(16) }}
                        />
                    </Block>
                </CustomSheet>
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Dialog & Modal</Text>

                <Dialog
                    cancelText={'Button'}
                    confirmText={'Button'}
                    content={'This is a very long message that can be displayed in 3 lines'}
                    label={'Info Dialog'}
                    title={'This is the title'}
                />

                <Popup
                    backdrop={require('~/assets/images/image.png')}
                    content={'This is a very long message that can be displayed in 3 lines'}
                    label={'Popup'}
                    title={'This is the title'}
                />
            </Block>
        </Container>
    );
};

export default SheetAndModal;
