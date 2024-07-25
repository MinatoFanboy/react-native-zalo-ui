import React, { FC, memo, useCallback, useMemo, useRef } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@react-navigation/native';
import RBSheet from 'react-native-raw-bottom-sheet';
const { height } = Dimensions.get('window');

import { CustomTheme } from '~/types';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

type ValueProps = {
    name: number | string;
    type?: 'disabled' | 'default';
    value: number | string;
};

type ListValueProps = {
    title: string;
    child: ValueProps[];
};

type DropdownProps = {
    array?: ValueProps[] | ListValueProps[];
    helperText?: string;
    label?: string;
    onChangeText?: (value: ValueProps) => void;
    title?: string;
    value?: ValueProps;
};

const Dropdown: FC<DropdownProps> = ({ array = [], helperText, label, onChangeText, title, value }) => {
    const { colors } = useTheme() as CustomTheme;
    const insets = useSafeAreaInsets();

    const ref = useRef<RBSheet>(null);

    const arrayLength = useMemo(
        () =>
            array.reduce((accumulator, currentValue) => {
                const isGroup = 'title' in currentValue;

                return accumulator + (isGroup ? currentValue.child.length + 1 : 1);
            }, 0),
        [array],
    );

    const onClose = useCallback(() => {
        if (ref.current) {
            ref.current.close();
        }
    }, []);

    const onOpen = useCallback(() => {
        if (ref.current) {
            ref.current.open();
        }
    }, []);

    return (
        <Block>
            <Block gap={dp(4)}>
                {label && <Text textSmall>{label}</Text>}

                <Button onPress={onOpen} style={[styles.inputWrapper, { borderColor: colors.border2 }]}>
                    <Block flex={1}>
                        <Text textLarge>{value?.name}</Text>
                    </Block>

                    <Icon name={'chevron-down'} />
                </Button>

                {helperText && (
                    <Block align={'center'} gap={dp(4)} row>
                        <Icon color={colors.text2} name={'help-circle-solid'} size={dp(16)} />
                        <Text color={colors.text2} flex={1} textXSmall>
                            {helperText}
                        </Text>
                    </Block>
                )}
            </Block>

            <RBSheet
                customStyles={{
                    container: {
                        backgroundColor: colors.pageBackground2,
                        borderTopLeftRadius: dp(8),
                        borderTopRightRadius: dp(8),
                        paddingBottom: insets.bottom === 0 ? dp(24) : insets.bottom,
                        paddingTop: dp(8),
                    },
                }}
                height={Math.min(height * 0.7, dp(46) + arrayLength * dp(48)) + (insets.bottom || dp(24))}
                ref={ref}
            >
                {/* Header */}
                <Block align={'center'} px={dp(16)} py={dp(8)}>
                    {/* Label */}
                    <Text medium textLarge>
                        {title}
                    </Text>

                    {/* Button Close */}
                    <Button absolute onPress={onClose} right={dp(16)} top={dp(8)}>
                        <Icon name={'close'} />
                    </Button>
                </Block>
                <Block>
                    {array.map((item, index) => {
                        const isGroup = 'title' in item;

                        if (!isGroup) {
                            return (
                                <Button
                                    key={`Item-${index}`}
                                    onPress={() => {
                                        onChangeText?.(item);
                                        onClose();
                                    }}
                                >
                                    <Block gap={dp(16)} px={dp(16)} py={dp(12)} row>
                                        <Text
                                            color={item.value === value?.value ? COLORS.blue60 : colors.text1}
                                            flex={1}
                                            font={'Roboto-Regular'}
                                            lineHeight={dp(24)}
                                            size={dp(14)}
                                        >
                                            {item.name}
                                        </Text>

                                        {item.value === value?.value && <Icon color={COLORS.blue60} name={'check'} />}
                                    </Block>
                                    <Block color={colors.divider1} h={dp(0.5)} />
                                </Button>
                            );
                        } else {
                            return (
                                <Block key={`Item-${index}`}>
                                    <Block px={dp(16)} py={dp(12)}>
                                        <Text color={colors.text2} lineHeight={dp(24)} size={dp(13)}>
                                            {item.title}
                                        </Text>
                                    </Block>
                                    {item.child.map((child, index1) => (
                                        <Button
                                            key={`Child-${index1}`}
                                            onPress={() => {
                                                onChangeText?.(child);
                                                onClose();
                                            }}
                                        >
                                            <Block gap={dp(16)} px={dp(16)} py={dp(12)} row>
                                                <Text
                                                    color={child.value === value?.value ? COLORS.blue60 : colors.text1}
                                                    flex={1}
                                                    font={'Roboto-Regular'}
                                                    lineHeight={dp(24)}
                                                    size={dp(14)}
                                                >
                                                    {child.name}
                                                </Text>

                                                {child.value === value?.value && (
                                                    <Icon color={COLORS.blue60} name={'check'} />
                                                )}
                                            </Block>
                                            <Block color={colors.divider1} h={dp(0.5)} />
                                        </Button>
                                    ))}
                                </Block>
                            );
                        }
                    })}
                </Block>
            </RBSheet>
        </Block>
    );
};

const styles = StyleSheet.create({
    inputWrapper: {
        alignItems: 'center',
        borderRadius: dp(8),
        borderWidth: dp(1),
        flexDirection: 'row',
        gap: dp(12),
        height: dp(48),
        paddingHorizontal: dp(12),
    },
});

export default memo(Dropdown);
