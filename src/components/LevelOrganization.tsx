import React, { memo, useCallback, useRef, useState } from 'react';
import { Animated, Dimensions, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { G, Path, Rect, Svg } from 'react-native-svg';
const { width } = Dimensions.get('window');

import { CustomTheme } from '~/types';
import { Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const LevelOrganization = () => {
    const { colors } = useTheme() as CustomTheme;
    const [activeLevel, setActiveLevel] = useState<number>(0);

    const scrollX = useRef<Animated.Value>(new Animated.Value(0)).current;

    const onChangeActiveLevel = useCallback((level: number) => {
        setActiveLevel((prev) => (prev === level ? 0 : level));
    }, []);

    return (
        <View style={{ paddingBottom: dp(32) }}>
            <Animated.ScrollView
                horizontal
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: true,
                })}
                scrollEnabled={width - 110 < 320}
                showsHorizontalScrollIndicator={false}
            >
                <Svg
                    height={550}
                    width={320}
                    style={{
                        elevation: 24,
                        shadowColor: '#141415',
                        shadowOffset: { height: 10, width: 0 },
                        shadowRadius: 24,
                        shadowOpacity: 0.2,
                    }}
                >
                    {/* Path level 4 */}
                    <G rotation={(Math.atan2(20 - 20, 150 - 90) * 180) / Math.PI - 135} origin={`${78}, ${25}`}>
                        <Path
                            d={`M ${82 + 8} ${22 + 8} L ${90 - 10} ${20 + 10} L ${88 - 8} ${28 - 8}`}
                            fill={'none'}
                            stroke={colors.text1}
                            strokeWidth={2}
                        />
                    </G>
                    <Path
                        d={'M80 310 L50 310 A 10,10 1 0 1 40 300 L40 30 A 10,10 1 0 1 50 20 L80 20'}
                        fill={'none'}
                        stroke={colors.text1}
                        strokeWidth={2}
                    />
                    <Rect
                        fill={colors.pageBackground3}
                        height={40}
                        onPress={() => onChangeActiveLevel(1)}
                        stroke={activeLevel === 1 ? '#006AF5' : colors.border1}
                        strokeWidth={1}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-510}
                        y={323}
                        width={190}
                    />
                    <Rect
                        fill={colors.pageBackground2}
                        height={39}
                        onPress={() => onChangeActiveLevel(1)}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-370}
                        y={323}
                        width={30}
                    />
                    <Rect
                        fill={colors.pageBackground2}
                        height={39}
                        onPress={() => onChangeActiveLevel(1)}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-410}
                        y={323}
                        width={30}
                    />
                    <Rect
                        fill={colors.pageBackground2}
                        height={39}
                        onPress={() => onChangeActiveLevel(1)}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-450}
                        y={323}
                        width={30}
                    />

                    {/* Path level 3 */}
                    <G rotation={(Math.atan2(20 - 20, 150 - 90) * 180) / Math.PI - 135} origin={`${86}, ${45}`}>
                        <Path
                            d={`M ${82 + 8} ${22 + 8} L ${90 - 10} ${20 + 10} L ${88 - 8} ${28 - 8}`}
                            fill={'none'}
                            stroke={'#DE640D'}
                            strokeWidth={2}
                        />
                    </G>
                    <Path
                        d={'M80 360 L50 360 A 10,10 1 0 1 40 350 L40 70 A 10,10 1 0 1 50 60 L80 60'}
                        fill={'none'}
                        stroke={'#DE640D'}
                        strokeWidth={2}
                    />

                    {/* Path level 2 */}
                    <G rotation={(Math.atan2(20 - 20, 150 - 90) * 180) / Math.PI - 135} origin={`${94.5}, ${65}`}>
                        <Path
                            d={`M ${82 + 8} ${22 + 8} L ${90 - 10} ${20 + 10} L ${88 - 8} ${28 - 8}`}
                            fill={'none'}
                            stroke={'#58789D'}
                            strokeWidth={2}
                        />
                    </G>
                    <Path
                        d={'M80 410 L50 410 A 10,10 1 0 1 40 400 L40 110 A 10,10 1 0 1 50 100 L80 100'}
                        fill={'none'}
                        stroke={'#58789D'}
                        strokeWidth={2}
                    />

                    {/* Path level 1 */}
                    <G rotation={(Math.atan2(20 - 20, 150 - 90) * 180) / Math.PI - 135} origin={`${105.5}, ${90}`}>
                        <Path
                            d={`M ${82 + 8} ${22 + 8} L ${90 - 10} ${20 + 10} L ${88 - 8} ${28 - 8}`}
                            fill={'none'}
                            stroke={'#12AEE2'}
                            strokeWidth={2}
                        />
                    </G>
                    <Path
                        d={'M80 460 L50 460 A 10,10 1 0 1 40 450 L40 160 A 10,10 1 0 1 50 150 L80 150'}
                        fill={'none'}
                        stroke={'#12AEE2'}
                        strokeWidth={2}
                    />

                    {/** Canvas */}
                    <Rect
                        fill={'#53575A'}
                        height={40}
                        onPress={() => onChangeActiveLevel(2)}
                        stroke={activeLevel === 2 ? '#006AF5' : colors.border1}
                        strokeWidth={1}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-450}
                        y={288}
                        width={190}
                    />
                    <Rect
                        fill={colors.pageBackground2}
                        height={40}
                        onPress={() => onChangeActiveLevel(2)}
                        stroke={activeLevel === 2 ? '#006AF5' : colors.border1}
                        strokeWidth={1}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-450}
                        y={288}
                        width={40}
                    />
                    <Rect
                        fill={'#006AF5'}
                        height={40}
                        onPress={() => onChangeActiveLevel(2)}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-300}
                        y={288}
                        width={40}
                    />
                    <Rect
                        fill={'rgba(0, 0, 0, 0.7)'}
                        height={40}
                        onPress={() => onChangeActiveLevel(3)}
                        stroke={activeLevel === 3 ? '#006AF5' : colors.border1}
                        strokeWidth={1}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-390}
                        y={255}
                        width={190}
                    />
                    <Rect
                        fill={'#53575A'}
                        height={40}
                        onPress={() => onChangeActiveLevel(4)}
                        stroke={activeLevel === 4 ? '#006AF5' : colors.border1}
                        strokeWidth={1}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-330}
                        y={221}
                        width={190}
                    />
                    <Rect
                        fill={colors.pageBackground2}
                        height={40}
                        onPress={() => onChangeActiveLevel(4)}
                        transform={[{ skewX: '60' }, { skewY: '-15' }]}
                        x={-330}
                        y={221}
                        width={70}
                    />
                </Svg>
            </Animated.ScrollView>

            {/** Label */}
            <Animated.View
                style={{
                    left: 100,
                    position: 'absolute',
                    transform: [{ translateX: scrollX.interpolate({ inputRange: [0, 50], outputRange: [0, -50] }) }],
                    top: 9,
                }}
            >
                <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeActiveLevel(4)}>
                    <Text color={activeLevel === 4 ? COLORS.blue60 : colors.text1} lineHeight={dp(18)} size={dp(13)}>
                        Level 4: Popup, ActionSheet
                    </Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View
                style={{
                    left: 100,
                    position: 'absolute',
                    transform: [{ translateX: scrollX.interpolate({ inputRange: [0, 50], outputRange: [0, -50] }) }],
                    top: 49,
                }}
            >
                <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeActiveLevel(3)}>
                    <Text color={activeLevel === 3 ? COLORS.blue60 : colors.text1} lineHeight={dp(18)} size={dp(13)}>
                        Level 3: Overlay
                    </Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View
                style={{
                    left: 100,
                    position: 'absolute',
                    transform: [{ translateX: scrollX.interpolate({ inputRange: [0, 50], outputRange: [0, -50] }) }],
                    top: 85,
                    width: dp(150),
                }}
            >
                <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeActiveLevel(2)}>
                    <Text color={activeLevel === 2 ? COLORS.blue60 : colors.text1} lineHeight={dp(18)} size={dp(13)}>
                        Level 2: Navigation, Header, Sticky
                    </Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View
                style={{
                    left: 100,
                    position: 'absolute',
                    transform: [{ translateX: scrollX.interpolate({ inputRange: [0, 50], outputRange: [0, -50] }) }],
                    top: 135,
                    width: dp(150),
                }}
            >
                <TouchableOpacity activeOpacity={0.9} onPress={() => onChangeActiveLevel(1)}>
                    <Text color={activeLevel === 1 ? COLORS.blue60 : colors.text1} lineHeight={dp(18)} size={dp(13)}>
                        Level 1: Main Content (bgprimary, bgsecondary)
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
};

export default memo(LevelOrganization);
