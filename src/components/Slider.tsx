import React, {
    FC,
    createRef,
    forwardRef,
    memo,
    useCallback,
    useEffect,
    useImperativeHandle,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import MultiSlider, { MultiSliderProps } from '@ptomasroos/react-native-multi-slider';

import { COLORS } from '~/constants';
import { dp } from '~/utils';

type SliderProps = {
    isSeparated?: boolean;
    max?: number;
    min?: number;
    onValuesChange?: (values: number[]) => void;
    step?: number;
    values?: number[];
} & MultiSliderProps;

type SeparateFunc = {
    active: () => void;
    inActive: () => void;
};

const Separate = memo(
    forwardRef<SeparateFunc, {}>(({}, ref) => {
        const [isActive, setIsActive] = useState<boolean>(false);
        const stateAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

        useImperativeHandle(ref, () => ({
            active: () => {
                setIsActive(true);
            },
            inActive: () => {
                setIsActive(false);
            },
        }));

        useEffect(() => {
            Animated.timing(stateAnim, { duration: 100, toValue: isActive ? 1 : 0, useNativeDriver: true }).start();
        }, [isActive, stateAnim]);

        return (
            <Animated.View
                style={[
                    styles.separate,
                    {
                        backgroundColor: stateAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: ['#D6D9DC', '#006AF5'],
                        }),
                    },
                ]}
            />
        );
    }),
);

const Slider: FC<SliderProps> = ({
    isSeparated,
    max = 100,
    min = 0,
    onValuesChange = () => {},
    step = 1,
    values = [0],
    ...props
}) => {
    const separatedNum = useMemo(() => (max - min) / step, [max, min, step]);
    const separatedArray = useMemo(() => {
        return Array(separatedNum + 1)
            .fill(null)
            .map((_, index) => {
                return { key: index, ref: createRef<SeparateFunc>() };
            });
    }, [separatedNum]);

    const _renderMarker = () => (
        <View style={{ backgroundColor: COLORS.blue60, borderRadius: 999, height: dp(16), width: dp(16) }} />
    );

    const onChange = useCallback(
        (vals: number[]) => {
            if (isSeparated) {
                separatedArray.forEach((item) => {
                    if (item.key * step <= vals[0]) {
                        item.ref.current?.active();
                    } else {
                        item.ref.current?.inActive();
                    }
                });
            }
            onValuesChange(vals);
        },
        [isSeparated, onValuesChange, separatedArray, step],
    );

    useEffect(() => {
        if (isSeparated) {
            separatedArray.forEach((item) => {
                if (item.key * step <= values[0]) {
                    item.ref.current?.active();
                } else {
                    item.ref.current?.inActive();
                }
            });
        }
    }, [isSeparated, separatedArray, step, values]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', height: dp(40) }}>
            {isSeparated && (
                <View style={styles.separateWrapper}>
                    {separatedArray && separatedArray.map((item) => <Separate key={item.key} ref={item.ref} />)}
                </View>
            )}

            <MultiSlider
                customMarker={_renderMarker}
                markerOffsetY={dp(1)}
                min={min}
                max={max}
                onValuesChange={onChange}
                selectedStyle={{ backgroundColor: COLORS.blue60 }}
                step={step}
                trackStyle={{ backgroundColor: COLORS.neutralGray30, borderRadius: 0, height: dp(4) }}
                values={values}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    separate: {
        borderRadius: 999,
        height: dp(8),
        width: dp(4),
    },
    separateWrapper: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        left: 0,
        position: 'absolute',
        right: 0,
    },
});

export default memo(Slider);
