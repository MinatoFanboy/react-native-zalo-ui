import React, {
    forwardRef,
    memo,
    useCallback,
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import { ActivityIndicator, Animated, StyleSheet } from 'react-native';

import { ToastRef, ToastType } from '~/types';
import { ThemeContext } from '~/themes';
import Block from './Block';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const getColor = (type: ToastType) => {
    if (type === 'error') {
        return COLORS.red60;
    }
    if (type === 'success') {
        return COLORS.green60;
    }
    if (type === 'warning') {
        return COLORS.yellow60;
    }
    if (type === 'loading') {
        return COLORS.blue60;
    }
    if (type === 'connect-wifi') {
        return COLORS.green50;
    }
    if (type === 'disconnect-wifi') {
        return COLORS.neutralGray50;
    }
    return COLORS.white100;
};

const getIcon = (type: ToastType) => {
    if (type === 'error') {
        return 'close-circle-solid';
    }
    if (type === 'success') {
        return 'check-circle-solid';
    }
    if (type === 'warning') {
        return 'warning-solid';
    }
    if (type === 'connect-wifi') {
        return 'wifi';
    }
    if (type === 'disconnect-wifi') {
        return 'wifi-off';
    }
    if (type === 'download') {
        return 'download-solid';
    }
    return 'info-circle-solid';
};

const Toast = forwardRef<ToastRef, {}>(({}, ref) => {
    const { theme } = useContext(ThemeContext);

    const opacityAnim = useRef<Animated.Value>(new Animated.Value(0)).current;
    const translateAnim = useRef<Animated.Value>(new Animated.Value(0)).current;
    const [duration, setDuration] = useState<number>(0);
    const [message, setMessage] = useState<string>('Snackbar');
    const [type, setType] = useState<ToastType>('default');
    const [url, setUrl] = useState<string>('');

    const onHide = useCallback(() => {
        Animated.parallel([
            Animated.timing(opacityAnim, { duration: 100, toValue: 0, useNativeDriver: true }),
            Animated.timing(translateAnim, { duration: 500, toValue: 0, useNativeDriver: true }),
        ]).start();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onShow = useCallback(
        ({
            thisDuration = 2500,
            thisMessage,
            thisType = 'default',
        }: {
            thisDuration?: number;
            thisMessage?: string;
            thisType?: ToastType;
        }) => {
            setDuration(0);
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(opacityAnim, { duration: 80, toValue: 0, useNativeDriver: true }),
                    Animated.timing(translateAnim, { duration: 100, toValue: 0, useNativeDriver: true }),
                ]),
                Animated.parallel([
                    Animated.timing(opacityAnim, { duration: 100, toValue: 1, useNativeDriver: true }),
                    Animated.timing(translateAnim, { duration: 100, toValue: 1, useNativeDriver: true }),
                ]),
            ]).start(() => {
                setDuration(thisType === 'default' ? 0 : thisDuration);
            });
            let timer = setTimeout(() => {
                if (thisMessage) {
                    setMessage(thisMessage);
                }
                setType(thisType || 'default');
            }, 100);

            return () => {
                clearInterval(timer);
            };
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [onHide],
    );

    const onOpen = useCallback(async () => {
        setDuration(0);
        onHide();
    }, [onHide]);

    useEffect(() => {
        let timer: undefined | NodeJS.Timeout;

        if (duration > 0) {
            timer = setTimeout(() => {
                onHide();
            }, duration);
        }

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [duration]);

    useImperativeHandle(ref, () => ({
        hide: () => {
            onHide();
        },
        show: ({ duration: thisDuration, message: thisMessage, type: thisType, url: thisUrl }) => {
            if (thisUrl) {
                setUrl(thisUrl);
            }
            onShow({ thisDuration, thisMessage, thisType });
        },
    }));

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    backgroundColor: theme === 'dark' ? COLORS.neutralGray60 : COLORS.neutralGray80,
                    bottom: dp(40),
                    opacity: opacityAnim,
                    transform: [
                        { translateY: translateAnim.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) },
                    ],
                },
            ]}
        >
            <Block align={'center'} flex={1} gap={dp(8)} py={dp(8)} row>
                {type === 'loading' ? (
                    <ActivityIndicator color={COLORS.blue60} size={dp(20)} />
                ) : (
                    <Icon color={getColor(type)} name={getIcon(type)} size={dp(20)} />
                )}
                <Text color={COLORS.white100} flex={1} textXSmall>
                    {message}
                </Text>
            </Block>

            {type === 'default' && (
                <Button onPress={onHide} p={dp(10)}>
                    <Text color={COLORS.blue50} lineHeight={dp(20)} medium textXSmall>
                        {'close'}
                    </Text>
                </Button>
            )}

            {type === 'download' && (
                <Button onPress={onOpen} p={dp(10)}>
                    <Text color={COLORS.blue50} lineHeight={dp(20)} medium textXSmall>
                        {'Mở file'}
                    </Text>
                </Button>
            )}
        </Animated.View>
    );
});

const styles = StyleSheet.create({
    container: {
        borderRadius: dp(8),
        flexDirection: 'row',
        left: dp(16),
        paddingLeft: dp(16),
        paddingRight: dp(8),
        paddingVertical: dp(4),
        position: 'absolute',
        right: dp(16),
    },
});

export default memo(Toast);
