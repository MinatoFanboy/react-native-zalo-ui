import React, { FC, createRef, useCallback, useEffect, useRef, useState } from 'react';
import { Animated, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, List, Text } from '~/components';
import { COLORS, FONTS } from '~/constants';
import { dp } from '~/utils';

type mlProps = {
    height: number;
    x: number;
    width: number;
    y: number;
};

const TABS = [
    { ref: createRef<TouchableOpacity>(), name: 'Tab 1' },
    { ref: createRef<TouchableOpacity>(), name: 'Tab 2' },
    { ref: createRef<TouchableOpacity>(), name: 'Tab 3' },
];

const TabIndicator: FC<{ measureLayout: mlProps[]; position: Animated.Value }> = ({ measureLayout, position }) => {
    const inputRange = TABS.map((_, index) => index);

    const translateX = position.interpolate({ inputRange, outputRange: measureLayout.map((measure) => measure.x) });

    return (
        <Animated.View
            style={{
                backgroundColor: COLORS.blue60,
                bottom: -dp(0.5),
                height: dp(2),
                position: 'absolute',
                transform: [{ translateX }],
                width: dp(35),
            }}
        />
    );
};

const Tab: FC<MainStackScreenProps<'Tab'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const containerRef = useRef(null);
    const positionAnim = useRef<Animated.Value>(new Animated.Value(0)).current;
    const [measureLayout, setMeasureLayout] = useState<mlProps[]>([]);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onChangeTab = useCallback(
        (value: number) => {
            Animated.timing(positionAnim, { duration: 200, toValue: value, useNativeDriver: true }).start();
        },
        [positionAnim],
    );

    useEffect(() => {
        let ml: mlProps[] = [];

        TABS.forEach((item) => {
            item.ref.current?.measureLayout(containerRef?.current!, (x, y, width, height) => {
                ml.push({ height, x, width, y });

                if (ml.length === TABS.length) {
                    setMeasureLayout(ml);
                }
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerRef?.current]);

    return (
        <Container containerStyle={{ paddingHorizontal: 0 }} onBack={onBack} title={'Tab'}>
            <Block card color={colors.pageBackground2} px={0} radius={0}>
                <Block gap={dp(8)} px={dp(16)}>
                    <Text titleSmall>Tab</Text>

                    <List array={['Tối đa 1 dòng', 'Đồng cấp và tương đồng về loại', 'Không có dấu chấm câu']} />
                </Block>

                <View
                    ref={containerRef}
                    style={{
                        borderBottomWidth: dp(1),
                        borderColor: colors.divider1,
                        flexDirection: 'row',
                        gap: dp(24),
                        paddingHorizontal: dp(16),
                        paddingVertical: dp(8),
                    }}
                >
                    {TABS.map((tab, index) => {
                        const colorAnim = positionAnim.interpolate({
                            extrapolate: 'clamp',
                            inputRange: [index - 1, index, index + 1],
                            outputRange: [0.6, 1, 0.6],
                        });

                        return (
                            <TouchableOpacity
                                activeOpacity={0.7}
                                key={`Tab-${index}`}
                                onPress={() => onChangeTab(index)}
                                ref={tab.ref}
                            >
                                <Animated.Text style={[FONTS.textXSmall, { color: colors.text1, opacity: colorAnim }]}>
                                    {tab.name}
                                </Animated.Text>
                            </TouchableOpacity>
                        );
                    })}

                    {measureLayout.length > 0 && <TabIndicator measureLayout={measureLayout} position={positionAnim} />}
                </View>
            </Block>
        </Container>
    );
};

export default Tab;
