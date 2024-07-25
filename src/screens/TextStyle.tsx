import React, { FC, Fragment, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const DATA = [
    {
        child: [
            { fontFamily: 'Roboto-Medium', fontSize: 16, lineHeight: 22, title: 'Normal' },
            { fontFamily: 'Roboto-Medium', fontSize: 15, lineHeight: 20, title: 'Small' },
        ],
        title: 'Header Text',
    },
    {
        child: [
            { fontFamily: 'Roboto-Medium', fontSize: 22, lineHeight: 26, title: 'XLarge' },
            { fontFamily: 'Roboto-Medium', fontSize: 20, lineHeight: 26, title: 'Large' },
            { fontFamily: 'Roboto-Medium', fontSize: 18, lineHeight: 22, title: 'Normal' },
            { fontFamily: 'Roboto-Medium', fontSize: 15, lineHeight: 20, title: 'Small' },
        ],
        title: 'Title Text',
    },
    {
        child: [
            { fontFamily: 'Roboto-Regular', fontSize: 18, lineHeight: 24, title: 'XLarge' },
            { fontFamily: 'Roboto-Medium', fontSize: 18, lineHeight: 24, title: 'xLarge M' },
            { fontFamily: 'Roboto-Regular', fontSize: 16, lineHeight: 22, title: 'Large' },
            { fontFamily: 'Roboto-Medium', fontSize: 16, lineHeight: 22, title: 'Large M' },
            { fontFamily: 'Roboto-Regular', fontSize: 15, lineHeight: 20, title: 'Normal' },
            { fontFamily: 'Roboto-Medium', fontSize: 15, lineHeight: 20, title: 'Normal M' },
            { fontFamily: 'Roboto-Regular', fontSize: 14, lineHeight: 18, title: 'Small' },
            { fontFamily: 'Roboto-Medium', fontSize: 14, lineHeight: 18, title: 'Small M' },
            { fontFamily: 'Roboto-Regular', fontSize: 13, lineHeight: 18, title: 'xSmall' },
            { fontFamily: 'Roboto-Medium', fontSize: 13, lineHeight: 18, title: 'xSmall M' },
            { fontFamily: 'Roboto-Regular', fontSize: 12, lineHeight: 16, title: 'xxSmall' },
            { fontFamily: 'Roboto-Medium', fontSize: 12, lineHeight: 16, title: 'xxSmall M' },
            { fontFamily: 'Roboto-Regular', fontSize: 11, lineHeight: 16, title: 'xxxSmall' },
            { fontFamily: 'Roboto-Medium', fontSize: 11, lineHeight: 16, title: 'xxxSmall M' },
            { fontFamily: 'Roboto-Regular', fontSize: 10, lineHeight: 14, title: 'xxxxSmall' },
            { fontFamily: 'Roboto-Medium', fontSize: 10, lineHeight: 14, title: 'xxxxSmall M' },
        ],
        title: 'Body Text',
    },
];

const TextStyle: FC<MainStackScreenProps<'TextStyle'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Text Style'}>
            {DATA.map((item, index) => (
                <Block card color={colors.pageBackground2} key={`Item-${index}`}>
                    <Text titleSmall>{item.title}</Text>

                    {item.child.map((e, index1) => (
                        <Fragment key={`ItemChild-${index1}`}>
                            <Block gap={dp(8)}>
                                <Block row>
                                    <Block color={COLORS.green10} px={dp(16)} py={dp(4)} rounded>
                                        <Text color={COLORS.green60} medium textSmall>
                                            {e.title}
                                        </Text>
                                    </Block>
                                </Block>

                                <Text font={e.fontFamily} size={dp(e.fontSize)} lineHeight={dp(e.lineHeight)}>
                                    Bầu trời trong xanh thăm thẳm, không một gợn mây
                                </Text>

                                <Block gap={dp(24)} row>
                                    <Text color={colors.text2} textSmall>{`Size: ${e.fontSize}`}</Text>
                                    <Text color={colors.text2} textSmall>{`Line height: ${e.lineHeight}`}</Text>
                                </Block>
                            </Block>

                            {index1 !== item.child.length - 1 && <Block color={COLORS.neutralGray20} h={dp(1)} />}
                        </Fragment>
                    ))}
                </Block>
            ))}
        </Container>
    );
};

export default TextStyle;
