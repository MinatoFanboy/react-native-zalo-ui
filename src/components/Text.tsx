import React, { FC, PropsWithChildren, memo } from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, ITextProps } from '~/types';
import { LINE_HEIGHTS, SIZES } from '~/constants';

const Typography: FC<PropsWithChildren<ITextProps>> = ({
    avatar,
    center,
    children,
    color,
    flex,
    font,
    lineHeight,
    numberOfLines,
    size,
    style,
    /** Font family */
    bold,
    medium,
    regular,
    /* Font type */
    heading,
    textLarge,
    textNormal,
    textSmall,
    textXSmall,
    textXXSmall,
    textXXXSmall,
    titleLarge,
    titleNormal,
    titleSmall,
    weight,
}) => {
    const { colors } = useTheme() as CustomTheme;

    const textStyles = StyleSheet.flatten([
        {
            color: colors.text1,
            fontFamily: 'Roboto-Regular',
            /** Other style */
            ...(color && { color }),
            ...(center && { textAlign: 'center' }),
            ...(flex && { flex }),
            /** Font type */
            ...(avatar && {
                fontFamily: 'Roboto-Medium',
                fontSize: SIZES.avatar,
                lineHeight: LINE_HEIGHTS.avatar,
            }),
            ...(heading && {
                fontSize: SIZES.heading,
                lineHeight: LINE_HEIGHTS.heading,
            }),
            ...(textLarge && {
                fontSize: SIZES.textLarge,
                lineHeight: LINE_HEIGHTS.textLarge,
            }),
            ...(textNormal && {
                fontFamily: 'Roboto-Medium',
                fontSize: SIZES.textLarge,
                lineHeight: LINE_HEIGHTS.textLarge,
            }),
            ...(textSmall && {
                fontSize: SIZES.textSmall,
                lineHeight: LINE_HEIGHTS.textSmall,
            }),
            ...(textXSmall && {
                fontSize: SIZES.textXSmall,
                lineHeight: LINE_HEIGHTS.textXSmall,
            }),
            ...(textXXSmall && {
                fontSize: SIZES.textXXSmall,
                lineHeight: LINE_HEIGHTS.textXXSmall,
            }),
            ...(textXXXSmall && {
                fontSize: SIZES.textXXXSmall,
                lineHeight: LINE_HEIGHTS.textXXXSmall,
            }),
            ...(titleLarge && {
                fontFamily: 'Roboto-Medium',
                fontSize: SIZES.titleLarge,
                lineHeight: LINE_HEIGHTS.titleLarge,
            }),
            ...(titleNormal && {
                fontFamily: 'Roboto-Medium',
                fontSize: SIZES.titleNormal,
                lineHeight: LINE_HEIGHTS.titleNormal,
            }),
            ...(titleSmall && {
                fontFamily: 'Roboto-Medium',
                fontSize: SIZES.titleSmall,
                lineHeight: LINE_HEIGHTS.titleSmall,
            }),
            /* Font size */
            ...(font && { fontFamily: font }),
            ...(lineHeight && { lineHeight }),
            ...(size && { fontSize: size }),
            ...(weight && { fontWeight: weight }),
            /** Font family */
            ...(bold && { fontFamily: 'Roboto-Bold' }),
            ...(medium && { fontFamily: 'Roboto-Medium' }),
            ...(regular && { fontFamily: 'Roboto-Regular' }),
        },
        style,
    ]) as TextStyle;

    return (
        <Text numberOfLines={numberOfLines} style={textStyles}>
            {children}
        </Text>
    );
};

export default memo(Typography);
