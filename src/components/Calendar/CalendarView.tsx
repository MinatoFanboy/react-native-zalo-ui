import React, { FC, Fragment, memo, useCallback, useLayoutEffect, useMemo, useState } from 'react';
import { useTheme } from '@react-navigation/native';
import {
    addMonths,
    addYears,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isSameDay,
    isSameMonth,
    isSameYear,
    setMonth,
    setYear,
    startOfMonth,
    startOfWeek,
    subMonths,
    subYears,
} from 'date-fns';
import { vi } from 'date-fns/locale';

import { CustomTheme } from '~/types';
import Block from '../Block';
import Button from '../Button';
import Icon from '../Icon';
import Text from '../Text';
import { COLORS } from '~/constants';
import { dp, getRange, getRangeTen } from '~/utils';

interface DateLineProps {
    date: Date;
    onChange?: (value: Date) => void;
}

interface DateItemProps {
    date: Date;
    onChange?: (value: Date) => void;
    sameDate?: boolean;
    sameMonth?: boolean;
    selected?: boolean;
}

const isSame = (currentDate: Date, selectedDate: Date, type: 'date' | 'month' | 'range' | 'year', value: any) => {
    if (type === 'month') {
        return isSameYear(currentDate, selectedDate) && format(currentDate, 'M') === `${value}`;
    }

    return false;
};

const DateItem: FC<DateItemProps> = memo(({ date, onChange, sameDate, sameMonth, selected }) => {
    const { colors } = useTheme() as CustomTheme;

    return (
        <Button
            color={selected ? COLORS.blue60 : 'transparent'}
            flex={1}
            onPress={() => onChange?.(date)}
            py={dp(2)}
            radius={4}
            style={{ borderColor: sameDate ? COLORS.blue60 : 'transparent', borderWidth: 1 }}
        >
            <Text
                center
                color={selected ? COLORS.white100 : sameMonth ? colors.text1 : colors.text3}
                regular
                textNormal
            >
                {format(date, 'd')}
            </Text>
        </Button>
    );
});

const CalendarView: FC<DateLineProps> = ({ date, onChange }) => {
    const { colors } = useTheme() as CustomTheme;

    const [currentDate, setCurrentDate] = useState<Date>(new Date());
    const [type, setType] = useState<'date' | 'month' | 'range' | 'year'>('date');

    const dateLines = useMemo(
        () =>
            eachDayOfInterval({
                end: endOfWeek(endOfMonth(currentDate)),
                start: startOfWeek(startOfMonth(currentDate)),
            }),
        [currentDate],
    );

    const dateLinesArray = useMemo(() => {
        if (type === 'date') {
            const result = [];
            const chunkSize = 7;

            for (let i = 0; i < dateLines.length; i += chunkSize) {
                const chunk = dateLines.slice(i, i + chunkSize);
                result.push(chunk);
            }

            return result;
        } else if (type === 'month') {
            return [
                ['Tháng 1', 'Tháng 2', 'Tháng 3'],
                ['Tháng 4', 'Tháng 5', 'Tháng 6'],
                ['Tháng 7', 'Tháng 8', 'Tháng 9'],
                ['Tháng 10', 'Tháng 11', 'Tháng 12'],
            ];
        } else if (type === 'year') {
            const result = [];
            const year = +format(currentDate, 'yyyy');
            const rangeYear = getRangeTen(year);
            const chunkSize = 2;

            for (let i = rangeYear[0]; i <= rangeYear[1]; i += chunkSize) {
                result.push([`${i}`, `${i + 1}`]);
            }

            return result;
        } else {
            const result = [];
            const year = +format(currentDate, 'yyyy');
            const rangeYear = getRange(year);
            const chunkSize = 2;

            for (let i = 0; i < rangeYear.length; i += chunkSize) {
                result.push([rangeYear[i], rangeYear[i + 1]]);
            }

            return result;
        }
    }, [currentDate, dateLines, type]);

    /** Function to show previous data */
    const onPrev = useCallback(() => {
        if (type === 'date') {
            setCurrentDate((prev) => subMonths(startOfMonth(prev), 1));
        } else if (type === 'month') {
            setCurrentDate((prev) => subYears(startOfMonth(prev), 1));
        } else if (type === 'year') {
            setCurrentDate((prev) => subYears(startOfMonth(prev), 10));
        } else {
            setCurrentDate((prev) => subYears(startOfMonth(prev), 100));
        }
    }, [type]);

    /** Function to show next data */
    const onNext = useCallback(() => {
        if (type === 'date') {
            setCurrentDate((prev) => addMonths(startOfMonth(prev), 1));
        } else if (type === 'month') {
            setCurrentDate((prev) => addYears(startOfMonth(prev), 1));
        } else if (type === 'year') {
            setCurrentDate((prev) => addYears(startOfMonth(prev), 10));
        } else {
            setCurrentDate((prev) => addYears(startOfMonth(prev), 100));
        }
    }, [type]);

    /** Function to change type */
    const onChangeType = useCallback((value: 'date' | 'month' | 'range' | 'year') => {
        setType(value);
    }, []);

    /** Function to change month */
    const onChangeCurrent = useCallback((value: number | string) => {
        if (typeof value === 'number') {
            setCurrentDate((prev) => setMonth(prev, value));
            setType('date');
        } else {
            setType('month');
            setCurrentDate((prev) => setYear(prev, +value));
        }
    }, []);

    const onChangeRange = useCallback((value: number[]) => {
        setType('year');
        setCurrentDate((prev) => setYear(prev, value[0]));
    }, []);

    /** Layout effect update date changed */
    useLayoutEffect(() => {
        setCurrentDate(date);
    }, [date]);

    console.log(dateLinesArray);
    return (
        <>
            {/* Title */}
            <Block align={'center'} gap={dp(10)} row>
                {/** Left Icon */}
                <Button onPress={onPrev}>
                    <Icon color={COLORS.blue60} name={'arrow-left'} />
                </Button>

                {/**
                 * Label
                 * Date: show month and year
                 * Month: show year
                 * Range Year: show range
                 */}
                <Block flex={1} gap={dp(4)} justify={'center'} row>
                    {type === 'date' ? (
                        <>
                            <Button
                                align={'center'}
                                justify={'center'}
                                h={dp(48)}
                                onPress={() => onChangeType('month')}
                            >
                                <Text regular textNormal>
                                    {format(currentDate, 'MMMM', { locale: vi })}
                                </Text>
                            </Button>
                            <Button align={'center'} justify={'center'} h={dp(48)} onPress={() => onChangeType('year')}>
                                <Text regular textNormal>
                                    {format(currentDate, 'yyyy', { locale: vi })}
                                </Text>
                            </Button>
                        </>
                    ) : null}
                    {type === 'month' ? (
                        <Button align={'center'} justify={'center'} h={dp(48)} onPress={() => onChangeType('year')}>
                            <Text regular textNormal>
                                {format(currentDate, 'yyyy', { locale: vi })}
                            </Text>
                        </Button>
                    ) : null}
                    {type === 'range' ? (
                        <Block align={'center'} justify={'center'} h={dp(48)}>
                            <Text regular textNormal>
                                {`${Array.isArray(dateLinesArray[0][1]) ? dateLinesArray[0][1][0] : ''} - ${
                                    Array.isArray(dateLinesArray[dateLinesArray.length - 1][0])
                                        ? dateLinesArray[dateLinesArray.length - 1][0][1]
                                        : ''
                                }`}
                            </Text>
                        </Block>
                    ) : null}
                    {type === 'year' ? (
                        <Button align={'center'} justify={'center'} h={dp(48)} onPress={() => onChangeType('range')}>
                            <Text regular textNormal>
                                {`${dateLinesArray[0][1]} - ${dateLinesArray[dateLinesArray.length - 1][0]}`}
                            </Text>
                        </Button>
                    ) : null}
                </Block>

                {/** Right Icon */}
                <Button onPress={onNext}>
                    <Icon color={COLORS.blue60} name={'arrow-right'} />
                </Button>
            </Block>

            {/** Body */}
            <Block gap={dp(4)}>
                {/* Day line */}
                {type === 'date' ? (
                    <Block gap={dp(4)} py={dp(8)} row>
                        <Block align={'center'} flex={1} justify={'center'} py={dp(2)}>
                            <Text textNormal>CN</Text>
                        </Block>
                        <Block align={'center'} flex={1} justify={'center'} py={dp(2)}>
                            <Text textNormal>Th 2</Text>
                        </Block>
                        <Block align={'center'} flex={1} justify={'center'} py={dp(2)}>
                            <Text textNormal>Th 3</Text>
                        </Block>
                        <Block align={'center'} flex={1} justify={'center'} py={dp(2)}>
                            <Text textNormal>Th 4</Text>
                        </Block>
                        <Block align={'center'} flex={1} justify={'center'} py={dp(2)}>
                            <Text textNormal>Th 5</Text>
                        </Block>
                        <Block align={'center'} flex={1} justify={'center'} py={dp(2)}>
                            <Text textNormal>Th 6</Text>
                        </Block>
                        <Block align={'center'} flex={1} justify={'center'} py={dp(2)}>
                            <Text textNormal>Th 7</Text>
                        </Block>
                    </Block>
                ) : null}

                {/** Date line */}
                {dateLinesArray.map((row, index) => (
                    <Block
                        gap={type === 'date' ? dp(4) : 0}
                        key={`Row-${index}`}
                        py={type === 'date' ? dp(4) : 0}
                        row
                        wrap
                    >
                        {row.map((item, idx) => {
                            return (
                                <Fragment key={`Item-${idx}`}>
                                    {typeof item === 'string' ? (
                                        <Button
                                            align={'center'}
                                            flex={1}
                                            justify={'center'}
                                            onPress={() => {
                                                if (type === 'month') {
                                                    onChangeCurrent(3 * index + idx);
                                                } else {
                                                    if (index === 0 && idx === 0) {
                                                        onPrev();
                                                    } else if (index === dateLinesArray.length - 1 && idx === 1) {
                                                        onNext();
                                                    } else {
                                                        onChangeCurrent(item);
                                                    }
                                                }
                                            }}
                                            p={dp(6)}
                                        >
                                            <Block
                                                color={
                                                    isSame(currentDate, date, type, 3 * index + idx + 1)
                                                        ? COLORS.blue60
                                                        : 'transparent'
                                                }
                                                h={dp(24)}
                                                justify={'center'}
                                                px={dp(8)}
                                                radius={dp(4)}
                                            >
                                                <Text
                                                    center
                                                    color={
                                                        type === 'month'
                                                            ? isSame(currentDate, date, type, 3 * index + idx + 1)
                                                                ? COLORS.white100
                                                                : undefined
                                                            : (index === 0 && idx === 0) ||
                                                              (index === dateLinesArray.length - 1 && idx === 1)
                                                            ? colors.text3
                                                            : undefined
                                                    }
                                                    regular
                                                    textNormal
                                                >
                                                    {item}
                                                </Text>
                                            </Block>
                                        </Button>
                                    ) : (
                                        <>
                                            {Array.isArray(item) ? (
                                                <Button
                                                    align={'center'}
                                                    flex={1}
                                                    justify={'center'}
                                                    onPress={() => {
                                                        if (index === 0 && idx === 0) {
                                                            onPrev();
                                                        } else if (index === dateLinesArray.length - 1 && idx === 1) {
                                                            onNext();
                                                        } else {
                                                            onChangeRange(item);
                                                        }
                                                    }}
                                                    p={dp(6)}
                                                >
                                                    <Block h={dp(24)} justify={'center'} px={dp(8)} radius={dp(4)}>
                                                        <Text
                                                            center
                                                            color={
                                                                (index === 0 && idx === 0) ||
                                                                (index === dateLinesArray.length - 1 && idx === 1)
                                                                    ? colors.text3
                                                                    : undefined
                                                            }
                                                            regular
                                                            textNormal
                                                        >
                                                            {`${item[0]}-${item[1]}`}
                                                        </Text>
                                                    </Block>
                                                </Button>
                                            ) : (
                                                <DateItem
                                                    date={item}
                                                    sameDate={isSameDay(item, new Date())}
                                                    sameMonth={isSameMonth(currentDate, item)}
                                                    selected={isSameDay(item, date)}
                                                    onChange={onChange}
                                                />
                                            )}
                                        </>
                                    )}
                                </Fragment>
                            );
                        })}
                    </Block>
                ))}
            </Block>
        </>
    );
};

export default memo(CalendarView);
