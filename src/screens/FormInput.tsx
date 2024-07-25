import React, { FC, useCallback, useState } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import {
    Block,
    Container,
    DatePicker,
    Dropdown,
    List,
    MultiPicker,
    OtpInput,
    PhoneField,
    SearchInput,
    Text,
    TextInput,
    Textarea,
} from '~/components';
import { dp } from '~/utils';

interface DropDownField {
    name: string | number;
    value: string | number;
}

const FormInput: FC<MainStackScreenProps<'FormInput'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const [formInput, setFormInput] = useState<{
        input: string;
        inputWithLabel: string;
        inputWithLabelChecked: string;
        inputWithLabelDisabled: string;
        inputWithLabelError: string;
        inputWithLabelFilled: string;
        inputWithLabelFocused: string;
        inputWithLabelRules: string;
        password: string;
        passwordWithLabel: string;
        search: string;
        searchSmall: string;
        textarea: string;
        textareaWithLabel: string;
        textareaWithLabelFocused: string;
        textareaWithLabelMultiple: string;
    }>({
        input: '',
        inputWithLabel: '',
        inputWithLabelChecked: 'Filled',
        inputWithLabelDisabled: 'Filled',
        inputWithLabelError: 'Filled',
        inputWithLabelFilled: 'Filled',
        inputWithLabelFocused: 'Filled',
        inputWithLabelRules: 'Filled',
        password: '',
        passwordWithLabel: 'Password',
        search: '',
        searchSmall: '',
        textarea: '',
        textareaWithLabel: 'Text',
        textareaWithLabelFocused: 'Text',
        textareaWithLabelMultiple:
            "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    });

    const [dropdown, setDropdown] = useState<{ dropdownWithLabel: DropDownField; dropdownValue: DropDownField }>({
        dropdownWithLabel: { name: 'Text', value: 'text' },
        dropdownValue: { name: 'Text', value: 'text' },
    });
    const [timeWithLabel, setTimeWithLabel] = useState<Date>();
    const [timeValue, setTimeValue] = useState<Date>();

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    const onChange = useCallback(({ name, value }: { name: string; value: string }) => {
        setFormInput((prev) => ({ ...prev, [name]: value }));
    }, []);

    const onChangeDropdown = useCallback(({ name, value }: { name: string; value: DropDownField }) => {
        setDropdown((prev) => ({ ...prev, [name]: value }));
    }, []);

    const onChangeTimeLabel = useCallback((value?: Date) => {
        setTimeWithLabel(value);
    }, []);

    const onChangeTime = useCallback((value?: Date) => {
        setTimeValue(value);
    }, []);

    return (
        <Container containerStyle={{ gap: dp(24) }} keyboard onBack={onBack} title={'Forms Input'}>
            {/* TextInput */}
            <Block card color={colors.pageBackground2}>
                <TextInput
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'inputWithLabel', value: text })}
                    placeholder={'Placeholder'}
                    value={formInput.inputWithLabel}
                />
                <TextInput
                    focused={true}
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'inputWithLabelFocused', value: text })}
                    placeholder={'Placeholder'}
                    value={formInput.inputWithLabelFocused}
                />
                <TextInput
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'inputWithLabelFilled', value: text })}
                    placeholder={'Placeholder'}
                    value={formInput.inputWithLabelFilled}
                />
                <TextInput
                    checked
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'inputWithLabelChecked', value: text })}
                    placeholder={'Placeholder'}
                    value={formInput.inputWithLabelChecked}
                />
                <TextInput
                    error={'Error text'}
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'inputWithLabelError', value: text })}
                    placeholder={'Placeholder'}
                    value={formInput.inputWithLabelError}
                />
                <TextInput
                    disabled
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'inputWithLabelDisabled', value: text })}
                    placeholder={'Placeholder'}
                    value={formInput.inputWithLabelDisabled}
                />
            </Block>

            {/* Text field */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>Text Field</Text>
                    <Text color={colors.text2} textXSmall>
                        Để nhập nội dung đơn giản, trong 1 dòng
                    </Text>
                </Block>
                <TextInput
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'inputWithLabelRules', value: text })}
                    placeholder={'Placeholder'}
                    rules
                    value={formInput.inputWithLabelRules}
                />
                <TextInput
                    onChangeText={(text) => onChange({ name: 'input', value: text })}
                    placeholder={'Placeholder'}
                    value={formInput.input}
                />
            </Block>

            {/* Password field */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>PasswordField</Text>
                    <Text color={colors.text2} textXSmall>
                        Để nhập mật khẩu
                    </Text>
                </Block>
                <TextInput
                    defaultValue={'123456'}
                    helperText={'Helper text'}
                    isPassword
                    label={'Password'}
                    onChangeText={(text) => onChange({ name: 'passwordWithLabel', value: text })}
                    placeholder={'Password'}
                    value={formInput.passwordWithLabel}
                />
                <TextInput
                    isPassword
                    onChangeText={(text) => onChange({ name: 'password', value: text })}
                    placeholder={'Password'}
                    value={formInput.password}
                />
            </Block>

            {/* Dropdown filed */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>DropdownField</Text>
                    <Text color={colors.text2} textXSmall>
                        Để chọn trong các nội dung có sẵn.
                    </Text>
                    <Text color={colors.selectionLabel} medium textXSmall>
                        Interaction
                    </Text>
                    <Text color={colors.text2} textXSmall>
                        Bấm chỗ nào cũng trigger chung 1 action, ko cho nhập text
                    </Text>
                </Block>
                <Dropdown
                    array={[
                        {
                            child: [
                                { name: 'Text', value: 'text' },
                                { name: 'Text', value: 'text 1' },
                            ],
                            title: 'Group 1',
                        },
                        {
                            child: [
                                { name: 'Text', value: 'text 2' },
                                { name: 'Text', value: 'text 3' },
                                { name: 'Text', value: 'text 4', type: 'disabled' },
                                { name: 'Text', value: 'text 5' },
                            ],
                            title: 'Group 2',
                        },
                    ]}
                    helperText={'Helper text'}
                    label={'Label'}
                    onChangeText={(value) => onChangeDropdown({ name: 'dropdownWithLabel', value })}
                    title={'Label'}
                    value={dropdown.dropdownWithLabel}
                />
                <Dropdown
                    array={[
                        { name: 'Text', value: 'text' },
                        { name: 'Text', value: 'text 1' },
                        { name: 'Text', value: 'text 2' },
                        { name: 'Text', value: 'text 3' },
                    ]}
                    onChangeText={(value) => onChangeDropdown({ name: 'dropdownValue', value })}
                    value={dropdown.dropdownValue}
                />
            </Block>

            {/* Search field */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>SearchField</Text>
                    <Text color={colors.text2} textXSmall>
                        Để nhập nội dung tìm kiếm, trong 1 dòng
                    </Text>
                    <Text color={colors.selectionLabel} medium textXSmall>
                        Interaction
                    </Text>
                    <Text color={colors.text2} textXSmall>
                        Bấm chỗ nào cũng trigger action nhập text
                    </Text>
                </Block>
                <SearchInput
                    onChangeText={(text) => onChange({ name: 'search', value: text })}
                    placeholder={'Search'}
                    value={formInput.search}
                />
                <SearchInput
                    onChangeText={(text) => onChange({ name: 'searchSmall', value: text })}
                    placeholder={'Search'}
                    small
                    value={formInput.searchSmall}
                />
            </Block>

            {/* DatePicker field */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>DatePickerField</Text>
                    <Text color={colors.text2} textXSmall>
                        Để chọn nội dung ngày/tháng/năm
                    </Text>
                    <Text color={colors.selectionLabel} medium textXSmall>
                        Interaction
                    </Text>
                    <Text color={colors.text2} textXSmall>
                        Bấm chỗ nào cũng trigger chung 1 action, ko cho nhập text
                    </Text>
                </Block>
                <MultiPicker onChange={onChangeTimeLabel} value={timeWithLabel}>
                    {({ open }) => (
                        <DatePicker
                            helperText={'Helper text'}
                            label={'Placeholder'}
                            onClear={() => onChangeTimeLabel()}
                            onPress={open}
                            value={timeWithLabel}
                        />
                    )}
                </MultiPicker>
                <MultiPicker onChange={onChangeTime} value={timeValue}>
                    {({ open }) => (
                        <DatePicker
                            helperText={'Helper text'}
                            label={'Placeholder'}
                            onClear={() => onChangeTime()}
                            onPress={open}
                            value={timeValue}
                        />
                    )}
                </MultiPicker>
            </Block>

            {/* Phone field */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>PhoneField</Text>
                    <Text color={colors.text2} textXSmall>
                        Để nhập nội dung đơn giản, trong 1 dòng
                    </Text>
                    <Text color={colors.selectionLabel} medium textXSmall>
                        Interaction
                    </Text>

                    <List
                        array={[
                            'Bấm section dropdown thì trigger chung 1 action, kh cho nhập text',
                            'Bấm section bên phải thì cho nhập text',
                        ]}
                    />
                </Block>

                <PhoneField helperText={'Helper text'} label={'Label'} />

                <PhoneField helperText={'Helper text'} label={'Label'} value={'987654321'} />

                <PhoneField />
            </Block>

            {/* OTP field */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>OTPField</Text>
                    <Text color={colors.text2} textXSmall>
                        Để nhập OTP. Highlight từng số do string ngắn và mỗi character thì quan trọng
                    </Text>
                    <Text color={colors.selectionLabel} medium textXSmall>
                        Interaction
                    </Text>
                    <Text color={colors.text2} textXSmall>
                        Bấm chỗ nào cũng trigger chung 1 action, ko cho nhập text
                    </Text>

                    <List
                        array={[
                            'Bấm xoá: nghĩa là user muốn xoá kí tự được nhập gần nhất',
                            'Nếu ô đó đã filled, thì chuyển về empty',
                            'Nếu ô đó empty thì xoá ô trước',
                            'Không cho chọn từng ô riêng biệt',
                            'Nếu tất cả ô đều empty thì khi user activate field, focus vào ô empty đầu tiên',
                            'Nếu đã có ít nhất 1 ô đã filled thì khi user activate field, focus vào ô filled cuối cùng',
                        ]}
                    />
                </Block>

                <OtpInput />
            </Block>

            {/* Textarea */}
            <Block card color={colors.pageBackground2}>
                <Block gap={dp(8)}>
                    <Text titleSmall>TextArea</Text>
                    <Text color={colors.text2} textXSmall>
                        Để nhập nội dung nhiều
                    </Text>
                </Block>

                <Textarea
                    helperText={'Helper text'}
                    maxLength={1000}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'textareaWithLabel', value: text })}
                    placeholder={'Hint text'}
                    value={formInput.textareaWithLabel}
                />
                <Textarea
                    helperText={'Helper text'}
                    maxLength={1000}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'textareaWithLabelFocused', value: text })}
                    placeholder={'Hint text'}
                    value={formInput.textareaWithLabelFocused}
                />
                <Textarea
                    focused
                    helperText={'Helper text'}
                    maxLength={1000}
                    label={'Label'}
                    onChangeText={(text) => onChange({ name: 'textareaWithLabelMultiple', value: text })}
                    placeholder={'Hint text'}
                    value={formInput.textareaWithLabelMultiple}
                />
                <Textarea
                    onChangeText={(text) => onChange({ name: 'textarea', value: text })}
                    placeholder={'Hint text'}
                    value={formInput.textarea}
                />
            </Block>
        </Container>
    );
};

export default FormInput;
