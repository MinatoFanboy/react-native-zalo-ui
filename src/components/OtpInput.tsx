import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import OTPInputView from '@hirbod/react-native-otp-input';

import { CustomTheme } from '~/types';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const OtpInput: FC = () => {
    const { colors } = useTheme() as CustomTheme;

    return (
        <View>
            <OTPInputView
                autoFocusOnLoad={false}
                codeInputFieldStyle={{
                    borderColor: colors.border2,
                    borderRadius: dp(8),
                    borderWidth: dp(1),
                    color: colors.text1,
                    fontFamily: 'Roboto-Medium',
                    fontSize: dp(27),
                    height: dp(56),
                    lineHeight: dp(34),
                    width: dp(48),
                }}
                codeInputHighlightStyle={{ borderColor: COLORS.blue60, borderWidth: dp(2) }}
                onCodeFilled={(code) => console.log('Otp input >>:', code)}
                pinCount={4}
                style={{ height: dp(56), width: dp(217) }}
            />
        </View>
    );
};

export default memo(OtpInput);
