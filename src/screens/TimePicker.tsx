import React, { useCallback, useState } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Button, Container, MultiPicker, SinglePicker, Text } from '~/components';

const TimePicker: React.FC<MainStackScreenProps<'TimePicker'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const [singleValue, setSingleValue] = useState<Date>(new Date());
    const [multiValue, setMultiValue] = useState<Date>(new Date());

    const onChangeSingleValue = useCallback((value: Date) => {
        setSingleValue(value);
    }, []);

    const onChangeMultiValue = useCallback((value: Date) => {
        setMultiValue(value);
    }, []);

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container onBack={onBack} title={'Time Picker'}>
            <Block card color={colors.pageBackground2} gap={0}>
                <Text titleSmall>Type</Text>

                <SinglePicker onChange={onChangeSingleValue} value={singleValue}>
                    {({ open }) => <Button fullWidth onPress={open} secondary title={'Single Column'} />}
                </SinglePicker>

                <MultiPicker onChange={onChangeMultiValue} value={multiValue}>
                    {({ open }) => <Button fullWidth onPress={open} secondary title={'Multi Column'} />}
                </MultiPicker>
            </Block>
        </Container>
    );
};

export default TimePicker;
