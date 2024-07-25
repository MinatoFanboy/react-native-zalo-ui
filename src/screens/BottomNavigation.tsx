import React, { FC, useCallback, useState } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Button, Container, Icon, List, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const BottomNavigation: FC<MainStackScreenProps<'BottomNavigation'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const [key, setKey] = useState<number>(0);

    const onChangeKey = useCallback((value: number) => {
        setKey(value);
    }, []);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ paddingHorizontal: 0 }} onBack={onBack} title={'Bottom Navigation'}>
            <Block color={colors.pageBackground2} gap={dp(24)} pt={dp(16)}>
                <Block gap={dp(8)} px={dp(16)}>
                    <Text titleSmall>Bottom Navigation</Text>

                    <List
                        array={[
                            'Số lượng tab tối thiểu là 2 và tối da là 5',
                            'Mặc định mở tab đầu tiên khi App bắt đầu hoạt động',
                        ]}
                    />
                </Block>
                <Block py={dp(4)} row style={{ borderColor: colors.divider1, borderTopWidth: dp(1) }}>
                    <Button activeOpacity={1} align={'center'} flex={1} gap={dp(2)} onPress={() => onChangeKey(0)}>
                        <Icon
                            color={key === 0 ? COLORS.blue60 : colors.text2}
                            name={key === 0 ? 'chat-solid' : 'chat'}
                            size={dp(20)}
                        />
                        <Text color={key === 0 ? COLORS.blue60 : colors.text2} textXXXSmall>
                            Tin nhắn
                        </Text>
                    </Button>
                    <Button activeOpacity={1} align={'center'} flex={1} gap={dp(2)} onPress={() => onChangeKey(1)}>
                        <Icon
                            color={key === 1 ? COLORS.blue60 : colors.text2}
                            name={key === 1 ? 'contact-list-solid' : 'contact-list'}
                            size={dp(20)}
                        />
                        <Text color={key === 1 ? COLORS.blue60 : colors.text2} textXXXSmall>
                            Danh bạ
                        </Text>
                    </Button>
                    <Button activeOpacity={1} align={'center'} flex={1} gap={dp(2)} onPress={() => onChangeKey(2)}>
                        <Icon
                            color={key === 2 ? COLORS.blue60 : colors.text2}
                            name={key === 2 ? 'more-diamond-solid' : 'more-diamond'}
                            size={dp(20)}
                        />
                        <Text color={key === 2 ? COLORS.blue60 : colors.text2} textXXXSmall>
                            Khám phá
                        </Text>
                    </Button>
                    <Button activeOpacity={1} align={'center'} flex={1} gap={dp(2)} onPress={() => onChangeKey(3)}>
                        <Icon
                            color={key === 3 ? COLORS.blue60 : colors.text2}
                            name={key === 3 ? 'clock-1-solid' : 'clock-1'}
                            size={dp(20)}
                        />
                        <Text color={key === 3 ? COLORS.blue60 : colors.text2} textXXXSmall>
                            Nhật ký
                        </Text>
                    </Button>
                    <Button activeOpacity={1} align={'center'} flex={1} gap={dp(2)} onPress={() => onChangeKey(4)}>
                        <Icon
                            color={key === 4 ? COLORS.blue60 : colors.text2}
                            name={key === 4 ? 'user-solid' : 'user'}
                            size={dp(20)}
                        />
                        <Text color={key === 4 ? COLORS.blue60 : colors.text2} textXXXSmall>
                            Cá nhân
                        </Text>
                    </Button>
                </Block>
            </Block>
        </Container>
    );
};

export default BottomNavigation;
