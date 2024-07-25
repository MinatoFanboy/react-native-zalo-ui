import React, { FC, ReactNode, memo, useCallback, useMemo, useRef, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import { addYears, eachYearOfInterval, format, subYears } from 'date-fns';

import { CustomTheme } from '~/types';
import Button from '../Button';
import Icon from '../Icon';
import ScrollPicker from './ScrollPicker';
import { COLORS, FONTS } from '~/constants';
import { dp, getDaysInFeb } from '~/utils';

interface MultiPickerProps {
    children: (methods: { open: () => void }) => ReactNode;
    onChange?: (value: Date) => void;
    value?: Date;
}

type ScrollPickerHandle = {
    scrollToTargetIndex: (val: number) => void;
};

const monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const MultiPicker: FC<MultiPickerProps> = ({ children, onChange, value = new Date() }) => {
    const insets = useSafeAreaInsets();
    const { colors } = useTheme() as CustomTheme;

    const ref = useRef<RBSheet>(null);
    const dateRef = useRef<ScrollPickerHandle>(null);
    const monthRef = useRef<ScrollPickerHandle>(null);
    const yearRef = useRef<ScrollPickerHandle>(null);
    const selectTempt = useRef<Date>(value);
    const [dateArray, setDateArray] = useState<number[]>([]);
    const min = useMemo(() => {
        return value.getFullYear() - 70;
    }, [value]);

    const years = useMemo(() => {
        return eachYearOfInterval({
            end: addYears(value, 30),
            start: subYears(value, 70),
        }).map((e) => +format(e, 'yyyy'));
    }, [value]);

    const handleInit = useCallback(() => {
        const date = +format(value, 'd');
        const month = +format(value, 'M');
        const year = +format(value, 'yyyy');

        if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
            setDateArray(Array.from({ length: 31 }, (_, i) => i + 1));
        } else if ([4, 6, 9, 11].includes(month)) {
            setDateArray(Array.from({ length: 30 }, (_, i) => i + 1));
        } else {
            setDateArray(Array.from({ length: getDaysInFeb(year) }, (_, i) => i + 1));
        }

        const timer = setTimeout(() => {
            dateRef.current?.scrollToTargetIndex(date - 1);
            monthRef.current?.scrollToTargetIndex(month - 1);
            yearRef.current?.scrollToTargetIndex(year - min);
        }, 0);

        return () => clearTimeout(timer);
    }, [min, value]);

    const handleChange = useCallback(() => {
        ref.current?.close();
        onChange?.(selectTempt.current);
    }, [onChange]);

    const onChangeDate = useCallback(
        (index: number) => {
            selectTempt.current = new Date(selectTempt.current.setDate(index));
        },
        [selectTempt],
    );

    const onChangeMonth = useCallback(
        (index: string) => {
            let newDateArray: number[] = [];

            const date = +format(selectTempt.current, 'd');
            const year = +format(selectTempt.current, 'yyyy');

            if (['January', 'March', 'May', 'July', 'August', 'October', 'December'].includes(index)) {
                newDateArray = Array.from({ length: 31 }, (_, i) => i + 1);
            } else if (['April', 'June', 'September', 'December'].includes(index)) {
                newDateArray = Array.from({ length: 30 }, (_, i) => i + 1);
            } else {
                newDateArray = Array.from({ length: getDaysInFeb(year) }, (_, i) => i + 1);
            }
            setDateArray((prev) => {
                return prev.length !== newDateArray.length ? newDateArray : prev;
            });
            selectTempt.current = new Date(selectTempt.current.setMonth(monthArray.findIndex((e) => e === index)));
            if (date > newDateArray.length) {
                selectTempt.current = new Date(selectTempt.current.setDate(newDateArray.length));
            }
        },
        [selectTempt],
    );

    const onChangeYear = useCallback((index: number) => {
        const date = +format(selectTempt.current, 'd');
        const month = +format(selectTempt.current, 'M');
        if (month === 2) {
            const newDateArray = Array.from({ length: getDaysInFeb(index) }, (_, i) => i + 1);
            setDateArray((prev) => {
                return prev.length !== newDateArray.length ? newDateArray : prev;
            });
            if (date > newDateArray.length) {
                selectTempt.current = new Date(selectTempt.current.setDate(newDateArray.length));
            }
        }

        selectTempt.current = new Date(selectTempt.current.setFullYear(index));
    }, []);

    const onOpen = useCallback(() => {
        if (ref.current) {
            ref.current.open();
        }
    }, []);

    return (
        <View>
            {children({
                open: () => onOpen(),
            })}

            <RBSheet
                customStyles={{
                    container: {
                        backgroundColor: colors.pageBackground2,
                        borderTopLeftRadius: dp(8),
                        borderTopRightRadius: dp(8),
                        gap: dp(16),
                        paddingBottom: insets.bottom === 0 ? dp(24) : insets.bottom,
                        paddingHorizontal: dp(16),
                        paddingTop: dp(8),
                    },
                }}
                height={dp(410) + (insets.bottom || dp(24))}
                onOpen={handleInit}
                ref={ref}
            >
                {/* Header */}
                <View
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingHorizontal: dp(16),
                        paddingVertical: dp(8),
                    }}
                >
                    {/* Label */}
                    <Text style={[FONTS.textXLargeM, { color: colors.text1 }]}>Multi column selector</Text>

                    {/* Button Close */}
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() => {
                            if (ref.current) {
                                ref.current.close();
                            }
                        }}
                        style={{ position: 'absolute', right: 0, top: dp(8) }}
                    >
                        <Icon color={colors.text1} name={'close'} />
                    </TouchableOpacity>
                </View>

                {/* Body */}
                <View style={{ flex: 1, flexDirection: 'row', gap: dp(8) }}>
                    <ScrollPicker
                        activeItemTextStyle={{ color: COLORS.blue60, fontSize: 18, lineHeight: 24 }}
                        dataSource={dateArray}
                        highlightColor={colors.uiBackgroundSelected}
                        itemTextStyle={{ color: colors.text2, fontSize: 18, lineHeight: 24 }}
                        onValueChange={onChangeDate}
                        ref={dateRef}
                    />

                    <ScrollPicker
                        activeItemTextStyle={{ color: COLORS.blue60, fontSize: 18, lineHeight: 24 }}
                        dataSource={monthArray}
                        highlightColor={colors.uiBackgroundSelected}
                        itemTextStyle={{ color: colors.text2, fontSize: 18, lineHeight: 24 }}
                        onValueChange={onChangeMonth}
                        ref={monthRef}
                    />

                    <ScrollPicker
                        activeItemTextStyle={{ color: COLORS.blue60, fontSize: 18, lineHeight: 24 }}
                        dataSource={years}
                        highlightColor={colors.uiBackgroundSelected}
                        itemTextStyle={{ color: colors.text2, fontSize: 18, lineHeight: 24 }}
                        onValueChange={onChangeYear}
                        ref={yearRef}
                    />
                </View>

                {/* Button */}
                <Button fullWidth onPress={handleChange} primary title={'Button'} />
            </RBSheet>
        </View>
    );
};

export default memo(MultiPicker);
