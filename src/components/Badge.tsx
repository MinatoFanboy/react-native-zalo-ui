import React, { FC, memo, useMemo, useRef, useState } from 'react';
import { Animated, ColorValue, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, IconName } from '~/types';
import { navigate } from '~/navigation';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { dp } from '~/utils';

type BadgeChildProps = {
    name: string;
    navigate?: string;
    options?: any;
};

type BadgeProps = {
    child?: Array<BadgeChildProps>;
    color: ColorValue;
    icon?: IconName;
    name: string;
    navigate?: string;
    options?: any;
};

const Badge: FC<BadgeProps> = ({ child = [], color, icon, name, navigate: navigateRoute }) => {
    const { colors } = useTheme() as CustomTheme;
    const heightConst = useMemo(() => dp(49) * child.length + dp(8) * (child.length - 1), [child]);

    const [expanded, setExpanded] = useState<boolean>(false);
    const heightValue = useRef<Animated.Value>(new Animated.Value(0)).current;

    const toggleCollapse = () => {
        Animated.timing(heightValue, {
            toValue: expanded ? 0 : heightConst,
            duration: 300,
            useNativeDriver: false,
        }).start();
        setExpanded((prev) => !prev);
    };

    return (
        <Block gap={8}>
            <Button
                color={colors.pageBackground3}
                onPress={() => {
                    if (navigateRoute) {
                        navigate(navigateRoute);
                    } else {
                        if (child.length > 0) {
                            toggleCollapse();
                        }
                    }
                }}
                style={styles.badgeWrapper}
            >
                <Text textNormal>{name}</Text>

                {icon && <Icon color={color} name={icon} />}
            </Button>

            <Animated.View style={{ gap: dp(8), height: heightValue, overflow: 'hidden' }}>
                {child.map((item, index) => (
                    <Button
                        key={`Child-${index}`}
                        onPress={() => {
                            if (item.navigate) {
                                if (item.options) {
                                    navigate(item.navigate, item.options);
                                } else {
                                    navigate(item.navigate);
                                }
                            }
                        }}
                        style={[
                            styles.badgeWrapper,
                            {
                                borderBottomWidth: index !== child.length - 1 ? 0.5 : 0,
                                borderColor: colors.divider1,
                            },
                        ]}
                    >
                        <Text textSmall>{item.name}</Text>

                        <Icon color={colors.text1} name={'chevron-right'} />
                    </Button>
                ))}
            </Animated.View>
        </Block>
    );
};

const styles = StyleSheet.create({
    badgeWrapper: {
        alignItems: 'center',
        borderRadius: dp(8),
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: dp(8),
        padding: dp(12),
    },
});

export default memo(Badge);
