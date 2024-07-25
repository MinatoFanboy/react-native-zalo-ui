import React, { FC, PropsWithChildren, memo } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { BlockProps } from '~/types';
import { dp } from '~/utils';

const Block: FC<PropsWithChildren<BlockProps>> = ({
    absolute,
    align,
    bottom,
    card,
    children,
    color,
    end,
    flex,
    gap,
    gradient,
    h,
    justify,
    left,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    onLayout,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    radius,
    right,
    rounded,
    row,
    shadow1,
    shadow2,
    shadow3,
    start,
    style,
    top,
    transform,
    w,
    wrap,
    zIndex,
}) => {
    const blockStyles = StyleSheet.flatten([
        {
            ...(card && { borderRadius: dp(8), gap: dp(24), padding: dp(16) }),
            ...(absolute && { position: 'absolute' }),
            ...(align && { alignItems: align }),
            ...(bottom !== undefined && { bottom }),
            ...(color && { backgroundColor: color }),
            ...(flex !== undefined && { flex }),
            ...(gap && { gap }),
            ...(h && { height: h }),
            ...(justify && { justifyContent: justify }),
            ...(left !== undefined && { left }),
            ...(m && { margin: m }),
            ...(mb && { marginBottom: mb }),
            ...(ml && { marginLeft: ml }),
            ...(mr && { marginRight: mr }),
            ...(mt && { marginTop: mt }),
            ...(mx && { marginHorizontal: mx }),
            ...(my && { marginVertical: my }),
            ...(p && { padding: p }),
            ...(pb && { paddingBottom: pb }),
            ...(pl && { paddingLeft: pl }),
            ...(pr && { paddingRight: pr }),
            ...(pt && { paddingTop: pt }),
            ...(px && { paddingHorizontal: px }),
            ...(py && { paddingVertical: py }),
            ...(radius && { borderRadius: radius }),
            ...(row && { flexDirection: 'row' }),
            ...(right !== undefined && { right }),
            ...(rounded && { borderRadius: 999 }),
            ...(rounded && { borderRadius: 999 }),
            ...(shadow1 && {
                elevation: dp(6),
                shadowColor: 'rgb(20, 20, 21)',
                shadowOffset: { height: dp(2), width: 0 },
                shadowOpacity: dp(0.14),
                shadowRadius: dp(6),
            }),
            ...(shadow2 && {
                elevation: dp(14),
                shadowColor: 'rgb(20, 20, 21)',
                shadowOffset: { height: dp(5), width: 0 },
                shadowOpacity: dp(0.12),
                shadowRadius: dp(14),
            }),
            ...(shadow3 && {
                elevation: dp(24),
                shadowColor: 'rgb(20, 20, 21)',
                shadowOffset: { height: dp(10), width: 0 },
                shadowOpacity: dp(0.09),
                shadowRadius: dp(24),
            }),
            ...(top !== undefined && { top }),
            ...(transform && { transform }),
            ...(w && { width: w }),
            ...(wrap && { flexWrap: 'wrap' }),
            ...(zIndex && { zIndex }),
        },
        style,
    ]) as ViewStyle;

    if (gradient) {
        return (
            <LinearGradient
                colors={gradient}
                end={end || { x: 1, y: 0 }}
                start={start || { x: 0, y: 0 }}
                style={blockStyles}
            >
                {children}
            </LinearGradient>
        );
    }

    return (
        <View onLayout={onLayout} style={blockStyles}>
            {children}
        </View>
    );
};

export default memo(Block);
