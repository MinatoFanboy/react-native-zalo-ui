import React, { FC, memo } from 'react';
import { ColorValue, StyleProp, ViewStyle } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, IconName } from '~/types';
import icoMoonConfig from '~/assets/config/selection.json';
import { dp } from '~/utils';

type IconProps = {
    color?: ColorValue;
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
};

const Icon: FC<IconProps> = ({ color, name, size = dp(24), style }) => {
    const { colors } = useTheme() as CustomTheme;

    const FontICon = createIconSetFromIcoMoon(icoMoonConfig);

    return <FontICon color={color || colors.text1} name={name} size={size} style={style} />;
};

export default memo(Icon);
