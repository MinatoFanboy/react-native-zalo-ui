import React, { FC, useCallback, useContext, useState } from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';
const { width } = Dimensions.get('window');

import { CheckboxItem, CustomTheme, MainStackScreenProps } from '~/types';
import { ThemeContext } from '~/themes';
import { Block, CheckboxList, Container, Icon, List, RadioList, Slider, Switch, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const Selection: FC<MainStackScreenProps<'Selection'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;
    const { theme } = useContext(ThemeContext);

    const [priceRange, setPriceRange] = useState<number[]>([500000, 5000000]);

    /** Checkbox */
    const [checkboxValue, setCheckboxValue] = useState<CheckboxItem[]>([{ name: 'Label', value: 'value 1' }]);
    const [checkboxValueDisabled, setCheckboxValueDisabled] = useState<CheckboxItem[]>([
        { name: 'Label', value: 'value 4' },
    ]);
    const [checkboxValueSmall, setCheckboxValueSmall] = useState<CheckboxItem[]>([{ name: 'Label', value: 'value 1' }]);
    const [checkboxValueSmallDisabled, setCheckboxValueSmallDisabled] = useState<CheckboxItem[]>([
        { name: 'Label', value: 'value 4' },
    ]);

    /** Radio */
    const [radioValue, setRadioValue] = useState<CheckboxItem>({ name: 'Label', value: 'value 1' });
    const [radioValueDisabled, setRadioValueDisabled] = useState<CheckboxItem>({ name: 'Label', value: 'value 4' });
    const [radioValueSmall, setRadioValueSmall] = useState<CheckboxItem>({ name: 'Label', value: 'value 1' });
    const [radioValueSmallDisabled, setRadioValueSmallDisabled] = useState<CheckboxItem>({
        name: 'Label',
        value: 'value 4',
    });

    /** Switch */
    const [switchValue, setSwitchValue] = useState({
        switch1: false,
        switch2: true,
        switchDisabled1: false,
        switchDisabled2: true,
        switchSmall1: false,
        switchSmall2: true,
        switchDisabledSmall1: false,
        switchDisabledSmall2: true,
    });

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onChangeCheckbox = useCallback((value: CheckboxItem) => {
        setCheckboxValue((prev) => {
            const isCheck = prev.filter((e) => e.value === value.value);
            if (isCheck.length > 0) {
                return prev.filter((e) => e.value !== value.value);
            } else {
                return [...prev, value];
            }
        });
    }, []);

    const onChangeCheckboxDisabled = useCallback((value: CheckboxItem) => {
        setCheckboxValueDisabled((prev) => {
            const isCheck = prev.filter((e) => e.value === value.value);
            if (isCheck.length > 0) {
                return prev.filter((e) => e.value !== value.value);
            } else {
                return [...prev, value];
            }
        });
    }, []);

    const onChangeCheckboxSmall = useCallback((value: CheckboxItem) => {
        setCheckboxValueSmall((prev) => {
            const isCheck = prev.filter((e) => e.value === value.value);
            if (isCheck.length > 0) {
                return prev.filter((e) => e.value !== value.value);
            } else {
                return [...prev, value];
            }
        });
    }, []);

    const onChangeCheckboxSmallDisabled = useCallback((value: CheckboxItem) => {
        setCheckboxValueSmallDisabled((prev) => {
            const isCheck = prev.filter((e) => e.value === value.value);
            if (isCheck.length > 0) {
                return prev.filter((e) => e.value !== value.value);
            } else {
                return [...prev, value];
            }
        });
    }, []);

    const onChangeRadio = useCallback((value: CheckboxItem) => {
        setRadioValue(value);
    }, []);

    const onChangeRadioDisabled = useCallback((value: CheckboxItem) => {
        setRadioValueDisabled(value);
    }, []);

    const onChangeRadioSmall = useCallback((value: CheckboxItem) => {
        setRadioValueSmall(value);
    }, []);

    const onChangeRadioSmallDisabled = useCallback((value: CheckboxItem) => {
        setRadioValueSmallDisabled(value);
    }, []);

    const onChangeSwitch = useCallback(({ name, value }: { name: string; value: boolean }) => {
        setSwitchValue((prev) => ({ ...prev, [name]: value }));
    }, []);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Selection'}>
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>Checkbox</Text>
                    <List
                        array={[
                            'Cho phép người dùng chọn 1 hoặc nhiều mục trong 1 danh sách',
                            'Dùng để bật/tắt lựa chọn.',
                        ]}
                    />
                </Block>

                <Text color={colors.selectionLabel} medium textXSmall>
                    Medium Size
                </Text>

                <CheckboxList
                    array={[
                        { name: 'Label', value: 'value 1' },
                        { name: 'Label', value: 'value 2' },
                    ]}
                    onChange={(value) => onChangeCheckbox(value)}
                    value={checkboxValue}
                    wrapperStyle={{ gap: dp(24) }}
                />
                <CheckboxList
                    array={[
                        { name: 'Label', value: 'value 3' },
                        { name: 'Label', value: 'value 4' },
                    ]}
                    disabled
                    onChange={(value) => onChangeCheckboxDisabled(value)}
                    value={checkboxValueDisabled}
                    wrapperStyle={{ gap: dp(24) }}
                />

                <Text color={colors.selectionLabel} medium textXSmall>
                    Small Size
                </Text>

                <CheckboxList
                    array={[
                        { name: 'Label', value: 'value 1' },
                        { name: 'Label', value: 'value 2' },
                    ]}
                    small
                    onChange={(value) => onChangeCheckboxSmall(value)}
                    value={checkboxValueSmall}
                    wrapperStyle={{ gap: dp(24) }}
                />
                <CheckboxList
                    array={[
                        { name: 'Label', value: 'value 3' },
                        { name: 'Label', value: 'value 4' },
                    ]}
                    disabled
                    small
                    onChange={(value) => onChangeCheckboxSmallDisabled(value)}
                    value={checkboxValueSmallDisabled}
                    wrapperStyle={{ gap: dp(24) }}
                />
            </Block>

            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>Radio Button</Text>
                    <Text color={colors.text2} textXSmall>
                        Cho phép chọn 1 mục trong danh sách
                    </Text>
                </Block>

                <Text color={colors.selectionLabel} medium textXSmall>
                    Medium Size
                </Text>

                <RadioList
                    array={[
                        { name: 'Label', value: 'value 1' },
                        { name: 'Label', value: 'value 2' },
                    ]}
                    onChange={(value) => onChangeRadio(value)}
                    value={radioValue}
                    wrapperStyle={{ gap: dp(24) }}
                />
                <RadioList
                    array={[
                        { name: 'Label', value: 'value 3' },
                        { name: 'Label', value: 'value 4' },
                    ]}
                    disabled
                    onChange={(value) => onChangeRadioDisabled(value)}
                    value={radioValueDisabled}
                    wrapperStyle={{ gap: dp(24) }}
                />

                <Text color={colors.selectionLabel} medium textXSmall>
                    Small Size
                </Text>

                <RadioList
                    array={[
                        { name: 'Label', value: 'value 1' },
                        { name: 'Label', value: 'value 2' },
                    ]}
                    small
                    onChange={(value) => onChangeRadioSmall(value)}
                    value={radioValueSmall}
                    wrapperStyle={{ gap: dp(24) }}
                />
                <RadioList
                    array={[
                        { name: 'Label', value: 'value 3' },
                        { name: 'Label', value: 'value 4' },
                    ]}
                    disabled
                    small
                    onChange={(value) => onChangeRadioSmallDisabled(value)}
                    value={radioValueSmallDisabled}
                    wrapperStyle={{ gap: dp(24) }}
                />
            </Block>

            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>Switch</Text>
                    <Text color={colors.text2} textXSmall>
                        Bật / Tắt trạng thái của một mục
                    </Text>
                </Block>

                <Text color={colors.selectionLabel} medium textXSmall>
                    Medium Size
                </Text>

                <Switch
                    active={switchValue.switch1}
                    onChange={(value) => onChangeSwitch({ name: 'switch1', value })}
                    title={'Label'}
                />
                <Switch
                    active={switchValue.switch2}
                    onChange={(value) => onChangeSwitch({ name: 'switch2', value })}
                    title={'Label'}
                />
                <Switch
                    active={switchValue.switchDisabled1}
                    disabled={true}
                    onChange={(value) => onChangeSwitch({ name: 'switchDisabled1', value })}
                    title={'Label'}
                />
                <Switch
                    active={switchValue.switchDisabled2}
                    disabled={true}
                    onChange={(value) => onChangeSwitch({ name: 'switchDisabled2', value })}
                    title={'Label'}
                />

                <Text color={colors.selectionLabel} medium textXSmall>
                    Small Size
                </Text>

                <Switch
                    active={switchValue.switchSmall1}
                    onChange={(value) => onChangeSwitch({ name: 'switchSmall1', value })}
                    small
                    title={'Label'}
                />
                <Switch
                    active={switchValue.switchSmall2}
                    onChange={(value) => onChangeSwitch({ name: 'switchSmall2', value })}
                    small
                    title={'Label'}
                />
                <Switch
                    active={switchValue.switchDisabledSmall1}
                    disabled={true}
                    onChange={(value) => onChangeSwitch({ name: 'switchDisabledSmall1', value })}
                    small
                    title={'Label'}
                />
                <Switch
                    active={switchValue.switchDisabledSmall2}
                    disabled={true}
                    onChange={(value) => onChangeSwitch({ name: 'switchDisabledSmall2', value })}
                    small
                    title={'Label'}
                />
            </Block>

            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>Slider</Text>
                    <Text color={colors.text2} textXSmall>
                        Cho phép người dùng thay đổi, lựa chọn nội dung từ 1 dãy giá trị
                    </Text>
                </Block>

                {/* Slider speaker with label */}
                <Block gap={dp(4)} px={dp(16)}>
                    <Block row>
                        <Text color={colors.text2} flex={1} textSmall>
                            {'Label'}
                        </Text>
                        <Text medium textSmall>
                            {'Value'}
                        </Text>
                    </Block>
                    <Block align={'center'} gap={dp(16)} row>
                        <Icon
                            color={theme === 'dark' ? COLORS.neutralGray30 : COLORS.neutralGray50}
                            name={'off-speaker-solid'}
                        />

                        <Slider sliderLength={width - dp(176)} values={[33]} />

                        <Icon
                            color={theme === 'dark' ? COLORS.neutralGray30 : COLORS.neutralGray50}
                            name={'speaker-solid'}
                        />
                    </Block>
                </Block>

                {/* Slider speaker with label and step */}
                <Block gap={dp(4)} px={dp(16)}>
                    <Block row>
                        <Text color={colors.text2} flex={1} textSmall>
                            {'Label'}
                        </Text>
                        <Text medium textSmall>
                            {'Value'}
                        </Text>
                    </Block>
                    <Block align={'center'} gap={dp(16)} row>
                        <Icon
                            color={theme === 'dark' ? COLORS.neutralGray30 : COLORS.neutralGray50}
                            name={'off-speaker-solid'}
                        />

                        <Slider isSeparated sliderLength={width - dp(176)} snapped step={25} values={[25]} />

                        <Icon
                            color={theme === 'dark' ? COLORS.neutralGray30 : COLORS.neutralGray50}
                            name={'speaker-solid'}
                        />
                    </Block>
                </Block>

                {/* Normal slider */}
                <Block gap={dp(4)} px={dp(16)}>
                    <Slider sliderLength={width - dp(97)} values={[25]} />
                </Block>

                {/* Multi slider */}
                <Block gap={dp(4)} px={dp(16)}>
                    <Slider sliderLength={width - dp(97)} values={[25, 50]} />
                </Block>

                {/* Slider price */}
                <Block gap={dp(4)} px={dp(16)}>
                    <Block row>
                        <Text color={colors.text2} flex={1} textSmall>
                            {'Khoảng giá'}
                        </Text>
                        <Text medium textSmall>{`${priceRange[0].toLocaleString(
                            'vi',
                        )}đ - ${priceRange[1].toLocaleString('vi')}đ`}</Text>
                    </Block>
                    <Slider
                        max={10000000}
                        onValuesChange={setPriceRange}
                        sliderLength={width - dp(97)}
                        snapped
                        step={1000}
                        values={[500000, 5000000]}
                    />
                </Block>

                {/* Slider time */}
                <Block align={'center'} gap={dp(16)} px={dp(16)} row>
                    <Text color={colors.text2} textXXSmall>
                        00:00
                    </Text>

                    <Slider max={30} sliderLength={width - dp(189)} values={[10]} />

                    <Text color={colors.text2} textXXSmall>
                        00:30
                    </Text>
                </Block>

                {/* Slider speaker */}
                <Block align={'center'} gap={dp(16)} px={dp(16)} row>
                    <Icon
                        color={theme === 'dark' ? COLORS.neutralGray30 : COLORS.neutralGray50}
                        name={'off-speaker-solid'}
                    />

                    <Slider sliderLength={width - dp(176)} values={[25]} />

                    <Icon
                        color={theme === 'dark' ? COLORS.neutralGray30 : COLORS.neutralGray50}
                        name={'speaker-solid'}
                    />
                </Block>
            </Block>
        </Container>
    );
};

export default Selection;
