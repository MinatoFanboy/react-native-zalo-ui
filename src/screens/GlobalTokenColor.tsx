import React, { FC, Fragment, useCallback } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
const { width } = Dimensions.get('window');

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const DATA = [
    {
        colors: [
            { bg: COLORS.neutralGray10, name: 'NG10' },
            { bg: COLORS.neutralGray20, name: 'NG20' },
            { bg: COLORS.neutralGray30, name: 'NG30' },
            { bg: COLORS.neutralGray40, name: 'NG40' },
            { bg: COLORS.neutralGray50, name: 'NG50' },
            { bg: COLORS.neutralGray60, name: 'NG60' },
            { bg: COLORS.neutralGray70, name: 'NG70' },
            { bg: COLORS.neutralGray80, name: 'NG80' },
            { bg: COLORS.neutralGray90, name: 'NG90' },
            { bg: COLORS.neutralGray100, name: 'NG100' },
        ],
        title: 'Neutral Gray',
    },
    {
        colors: [
            { bg: COLORS.blue10, name: 'B10' },
            { bg: COLORS.blue20, name: 'B20' },
            { bg: COLORS.blue30, name: 'B30' },
            { bg: COLORS.blue40, name: 'B40' },
            { bg: COLORS.blue50, name: 'B50' },
            { bg: COLORS.blue60, name: 'B60' },
            { bg: COLORS.blue70, name: 'B70' },
            { bg: COLORS.blue80, name: 'B80' },
            { bg: COLORS.blue90, name: 'B90' },
            { bg: COLORS.blue100, name: 'B100' },
        ],
        title: 'Blue',
    },
    {
        colors: [
            { bg: COLORS.red10, name: 'R10' },
            { bg: COLORS.red20, name: 'R20' },
            { bg: COLORS.red30, name: 'R30' },
            { bg: COLORS.red40, name: 'R40' },
            { bg: COLORS.red50, name: 'R50' },
            { bg: COLORS.red60, name: 'R60' },
            { bg: COLORS.red70, name: 'R70' },
            { bg: COLORS.red80, name: 'R80' },
            { bg: COLORS.red90, name: 'R90' },
            { bg: COLORS.red100, name: 'R100' },
        ],
        title: 'Red',
    },
    {
        colors: [
            { bg: COLORS.yellow10, name: 'Y10' },
            { bg: COLORS.yellow20, name: 'Y20' },
            { bg: COLORS.yellow30, name: 'Y30' },
            { bg: COLORS.yellow40, name: 'Y40' },
            { bg: COLORS.yellow50, name: 'Y50' },
            { bg: COLORS.yellow60, name: 'Y60' },
            { bg: COLORS.yellow70, name: 'Y70' },
            { bg: COLORS.yellow80, name: 'Y80' },
            { bg: COLORS.yellow90, name: 'Y90' },
            { bg: COLORS.yellow100, name: 'Y100' },
        ],
        title: 'Yellow',
    },
    {
        colors: [
            { bg: COLORS.green10, name: 'G10' },
            { bg: COLORS.green20, name: 'G20' },
            { bg: COLORS.green30, name: 'G30' },
            { bg: COLORS.green40, name: 'G40' },
            { bg: COLORS.green50, name: 'G50' },
            { bg: COLORS.green60, name: 'G60' },
            { bg: COLORS.green70, name: 'G70' },
            { bg: COLORS.green80, name: 'G80' },
            { bg: COLORS.green90, name: 'G90' },
            { bg: COLORS.green100, name: 'G100' },
        ],
        title: 'Green',
    },
    {
        colors: [
            { bg: COLORS.orange10, name: 'OR10' },
            { bg: COLORS.orange20, name: 'OR20' },
            { bg: COLORS.orange30, name: 'OR30' },
            { bg: COLORS.orange40, name: 'OR40' },
            { bg: COLORS.orange50, name: 'OR50' },
            { bg: COLORS.orange60, name: 'OR60' },
            { bg: COLORS.orange70, name: 'OR70' },
            { bg: COLORS.orange80, name: 'OR80' },
            { bg: COLORS.orange90, name: 'OR90' },
            { bg: COLORS.orange100, name: 'OR100' },
        ],
        title: 'Orange',
    },
    {
        colors: [
            { bg: COLORS.steelBlue10, name: 'ST10' },
            { bg: COLORS.steelBlue20, name: 'ST20' },
            { bg: COLORS.steelBlue30, name: 'ST30' },
            { bg: COLORS.steelBlue40, name: 'ST40' },
            { bg: COLORS.steelBlue50, name: 'ST50' },
            { bg: COLORS.steelBlue60, name: 'ST60' },
            { bg: COLORS.steelBlue70, name: 'ST70' },
            { bg: COLORS.steelBlue80, name: 'ST80' },
            { bg: COLORS.steelBlue90, name: 'ST90' },
            { bg: COLORS.steelBlue100, name: 'ST100' },
        ],
        title: 'Steel Blue',
    },
    {
        colors: [
            { bg: COLORS.teal10, name: 'TL10' },
            { bg: COLORS.teal20, name: 'TL20' },
            { bg: COLORS.teal30, name: 'TL30' },
            { bg: COLORS.teal40, name: 'TL40' },
            { bg: COLORS.teal50, name: 'TL50' },
            { bg: COLORS.teal60, name: 'TL60' },
            { bg: COLORS.teal70, name: 'TL70' },
            { bg: COLORS.teal80, name: 'TL80' },
            { bg: COLORS.teal90, name: 'TL90' },
            { bg: COLORS.teal100, name: 'TL100' },
        ],
        title: 'Teal',
    },
    {
        colors: [
            { bg: COLORS.purple10, name: 'PU10' },
            { bg: COLORS.purple20, name: 'PU20' },
            { bg: COLORS.purple30, name: 'PU30' },
            { bg: COLORS.purple40, name: 'PU40' },
            { bg: COLORS.purple50, name: 'PU50' },
            { bg: COLORS.purple60, name: 'PU60' },
            { bg: COLORS.purple70, name: 'PU70' },
            { bg: COLORS.purple80, name: 'PU80' },
            { bg: COLORS.purple90, name: 'PU90' },
            { bg: COLORS.purple100, name: 'PU100' },
        ],
        title: 'Purple',
    },
    {
        colors: [
            { bg: COLORS.pink10, name: 'PK10' },
            { bg: COLORS.pink20, name: 'PK20' },
            { bg: COLORS.pink30, name: 'PK30' },
            { bg: COLORS.pink40, name: 'PK40' },
            { bg: COLORS.pink50, name: 'PK50' },
            { bg: COLORS.pink60, name: 'PK60' },
            { bg: COLORS.pink70, name: 'PK70' },
            { bg: COLORS.pink80, name: 'PK80' },
            { bg: COLORS.pink90, name: 'PK90' },
            { bg: COLORS.pink100, name: 'PK100' },
        ],
        title: 'Pink',
    },
    {
        colors: [
            { bg: COLORS.skyBlue10, name: 'SK10' },
            { bg: COLORS.skyBlue20, name: 'SK20' },
            { bg: COLORS.skyBlue30, name: 'SK30' },
            { bg: COLORS.skyBlue40, name: 'SK40' },
            { bg: COLORS.skyBlue50, name: 'SK50' },
            { bg: COLORS.skyBlue60, name: 'SK60' },
            { bg: COLORS.skyBlue70, name: 'SK70' },
            { bg: COLORS.skyBlue80, name: 'SK80' },
            { bg: COLORS.skyBlue90, name: 'SK90' },
            { bg: COLORS.skyBlue100, name: 'SK100' },
        ],
        title: 'Sky Blue',
    },
];

const SIZE_WIDTH = (width - dp(76) - 1) / 2;

const GlobalTokenColor: FC<MainStackScreenProps<'GlobalTokenColor'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container onBack={onBack} title={'Global Token Color'}>
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                {DATA.map((item, index) => (
                    <Fragment key={`${index}`}>
                        <Text style={styles.title}>{item.title}</Text>

                        <Block gap={dp(12)} row wrap>
                            {item.colors.map((color, index1) => (
                                <Block color={color.bg} key={`Color-${index1}`} style={styles.item} w={SIZE_WIDTH}>
                                    <Text
                                        color={index1 < 5 ? COLORS.neutralGray100 : COLORS.white100}
                                        font={'RobotoCondensed-Regular'}
                                        lineHeight={dp(16)}
                                        size={dp(12)}
                                    >
                                        {color.name}
                                    </Text>
                                </Block>
                            ))}
                        </Block>
                    </Fragment>
                ))}
            </Block>

            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text style={styles.title}>{'Black'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black100} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A100'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black90} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A90'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black80} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A80'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black70} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A70'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black60} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A60'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black50} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A50'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black40} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A40'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black30} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A30'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black20} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A20'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black10} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A10'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black5} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A5'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray20} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.black0} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A0'}
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </Block>

            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text style={styles.title}>{'White'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white100} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A100'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white90} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A90'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white80} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A80'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white70} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A70'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white60} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A60'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white50} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.neutralGray100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A50'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white40} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A40'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white30} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A30'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white20} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A20'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white10} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A10'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white5} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A5'}
                            </Text>
                        </Block>
                    </Block>
                    <Block color={COLORS.neutralGray100} p={dp(8)} radius={0} w={SIZE_WIDTH}>
                        <Block color={COLORS.white0} style={[styles.item, { borderRadius: dp(4) }]}>
                            <Text
                                color={COLORS.white100}
                                font={'RobotoCondensed-Regular'}
                                lineHeight={dp(16)}
                                size={dp(12)}
                            >
                                {'WHT_A0'}
                            </Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    item: { alignItems: 'center', borderRadius: dp(4), justifyContent: 'center', paddingVertical: dp(16) },
    title: { fontFamily: 'RobotoCondensed-Regular', fontSize: dp(12), lineHeight: dp(18) },
});

export default GlobalTokenColor;
