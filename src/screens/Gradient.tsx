import React, { FC, useCallback } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
const { width } = Dimensions.get('window');

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const SIZE_WIDTH = (width - dp(88) - 1) / 3;

const Gradient: FC<MainStackScreenProps<'Gradient'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container onBack={onBack} title={'Gradient'}>
            <Block card color={colors.pageBackground2} gap={dp(12)}>
                <Text style={styles.title}>{'B60B50'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#006AF5', '#52A0FF']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#006AF5', '#52A0FF']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#006AF5', '#52A0FF']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'B60B40'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#006AF5', '#8FC1FF']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#006AF5', '#8FC1FF']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#006AF5', '#8FC1FF']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'B60SKB50'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#006AF5', '#5FCBF2']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#006AF5', '#5FCBF2']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#006AF5', '#5FCBF2']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'SKB60GR50'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#12AEE2', '#66D68F']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#12AEE2', '#66D68F']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#12AEE2', '#66D68F']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'SKB60GR50'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#34B764', '#99E5B5']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#34B764', '#99E5B5']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#34B764', '#99E5B5']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'GR60Y50'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#34B764', '#FDD949']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#34B764', '#FDD949']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#34B764', '#FDD949']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'OR60Y60'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#DE640D', '#E8BA02']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#DE640D', '#E8BA02']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#DE640D', '#E8BA02']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'R60O50'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#DC1F18', '#F8954F']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#DC1F18', '#F8954F']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#DC1F18', '#F8954F']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'PU60B50'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#6A40BF', '#52A0FF']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#6A40BF', '#52A0FF']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#6A40BF', '#52A0FF']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'PU70PU40'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#513091', '#B69DE7']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#513091', '#B69DE7']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#513091', '#B69DE7']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'PU60PK30'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#5E47D1', '#F8BFEC']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#5E47D1', '#F8BFEC']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#5E47D1', '#F8BFEC']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'PK60PK30'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#DF16B7', '#F8BFEC']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#DF16B7', '#F8BFEC']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#DF16B7', '#F8BFEC']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'R50PK40'}</Text>

                <Block gap={dp(12)} row wrap>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['#F1645F', '#F49AE2']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#F1645F', '#F49AE2']}
                        start={{ x: 0, y: 0 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Horizontal'}</Text>
                    </Block>
                    <Block
                        end={{ x: 1, y: 0 }}
                        gradient={['#F1645F', '#F49AE2']}
                        start={{ x: 0, y: 1 }}
                        style={[styles.item, { width: SIZE_WIDTH }]}
                    >
                        <Text style={styles.name}>{'Diagonal'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'BLK_A0A50'}</Text>

                <Block
                    end={{ x: 0, y: 0 }}
                    gradient={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)']}
                    start={{ x: 0, y: 1 }}
                    style={styles.item}
                >
                    <Text style={styles.name}>{'Vertical'}</Text>
                </Block>

                <Text style={styles.title}>{'BLK_A50A0'}</Text>

                <Block
                    end={{ x: 0, y: 0 }}
                    gradient={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0)']}
                    start={{ x: 0, y: 1 }}
                    style={styles.item}
                >
                    <Text style={styles.name}>{'Vertical'}</Text>
                </Block>

                <Text style={styles.title}>{'BLK_A0A10'}</Text>

                <Block
                    end={{ x: 0, y: 0 }}
                    gradient={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.1)']}
                    start={{ x: 0, y: 1 }}
                    style={styles.item}
                >
                    <Text style={[styles.name, { color: COLORS.neutralGray100 }]}>{'Vertical'}</Text>
                </Block>

                <Text style={styles.title}>{'BLK_A10A0'}</Text>

                <Block
                    end={{ x: 0, y: 0 }}
                    gradient={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0)']}
                    start={{ x: 0, y: 1 }}
                    style={styles.item}
                >
                    <Text style={[styles.name, { color: COLORS.neutralGray100 }]}>{'Vertical'}</Text>
                </Block>

                <Text style={styles.title}>{'WHT_A0A20'}</Text>

                <Block color={COLORS.neutralGray100} p={dp(10)}>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.2)']}
                        start={{ x: 0, y: 1 }}
                        style={styles.item}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                </Block>

                <Text style={styles.title}>{'WHT_A20A0'}</Text>

                <Block color={COLORS.neutralGray100} p={dp(10)}>
                    <Block
                        end={{ x: 0, y: 0 }}
                        gradient={['rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0)']}
                        start={{ x: 0, y: 1 }}
                        style={styles.item}
                    >
                        <Text style={styles.name}>{'Vertical'}</Text>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    item: { alignItems: 'center', borderRadius: dp(4), justifyContent: 'center', paddingVertical: dp(16) },
    name: { color: COLORS.white100, fontFamily: 'RobotoCondensed-Regular', fontSize: dp(12), lineHeight: dp(16) },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: dp(12),
        lineHeight: dp(18),
    },
});

export default Gradient;
