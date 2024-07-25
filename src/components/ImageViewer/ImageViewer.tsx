import React, { forwardRef, memo, useCallback, useImperativeHandle, useRef, useState } from 'react';
import {
    Animated,
    Dimensions,
    ImageRequireSource,
    ImageURISource,
    Modal,
    NativeScrollEvent,
    NativeSyntheticEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    VirtualizedList,
} from 'react-native';
const { width } = Dimensions.get('window');
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '../Icon';
import ImageItem from './ImageItem';
import { dp } from '~/utils';

type ImageViewRef = {
    show: (index?: number) => void;
};

const ImageView = forwardRef<ImageViewRef, { images: ImageURISource[] | ImageRequireSource[] }>(
    ({ images = [] }, ref): JSX.Element => {
        const insets = useSafeAreaInsets();

        const [imageIndex, setImageIndex] = useState<number>(0);
        const [visible, setVisible] = useState<boolean>(false);

        const positionRef = useRef<number>(0);
        const imageListRef = useRef<VirtualizedList<ImageURISource | ImageRequireSource>>(null);
        const openAnim = useRef<Animated.Value>(new Animated.Value(0)).current;

        const onMomentumScrollEnd = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
            const digit = Math.round(event.nativeEvent.contentOffset.x / width);
            positionRef.current = digit;
        }, []);

        const onNextScreen = useCallback(() => {
            if (positionRef.current < images.length - 1) {
                positionRef.current += 1;
                imageListRef?.current?.scrollToOffset({ animated: true, offset: positionRef.current * width });
            }
        }, [images]);

        const onPrevScreen = useCallback(() => {
            if (positionRef.current > 0) {
                positionRef.current -= 1;
                imageListRef?.current?.scrollToOffset({ animated: true, offset: positionRef.current * width });
            }
        }, []);

        const onRequestClose = () => {
            Animated.timing(openAnim, { duration: 200, toValue: 0, useNativeDriver: true }).start(() =>
                setVisible(false),
            );
        };

        const onShow = () => {
            setVisible(true);
            Animated.timing(openAnim, { duration: 200, toValue: 1, useNativeDriver: true }).start();
        };

        useImperativeHandle(ref, () => ({
            show: (index) => {
                onShow();
                setImageIndex(index || 0);
                positionRef.current = index ? index : 0;
            },
        }));

        return (
            <Modal
                hardwareAccelerated
                statusBarTranslucent
                supportedOrientations={['portrait']}
                onRequestClose={onRequestClose}
                transparent
                visible={visible}
            >
                <Animated.View
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        flex: 1,
                        justifyContent: 'center',
                        opacity: openAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] }),
                        transform: [{ scale: openAnim.interpolate({ inputRange: [0, 1], outputRange: [0.5, 1] }) }],
                    }}
                >
                    <VirtualizedList
                        bounces={false}
                        data={images}
                        getItem={(_, index) => images[index]}
                        getItemCount={() => images.length}
                        getItemLayout={(_, index) => ({
                            index,
                            length: width,
                            offset: width * index,
                        })}
                        horizontal
                        initialNumToRender={1}
                        initialScrollIndex={imageIndex}
                        keyExtractor={(_, index) => `Image ${index}`}
                        maxToRenderPerBatch={1}
                        onMomentumScrollEnd={onMomentumScrollEnd}
                        pagingEnabled
                        ref={imageListRef}
                        renderItem={({ item: imageSrc }) => <ImageItem imageSrc={imageSrc} />}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                        windowSize={2}
                    />

                    <View style={[styles.header, { top: insets.top || dp(24) }]}>
                        <TouchableOpacity activeOpacity={0.7} onPress={onRequestClose}>
                            <Text style={styles.headerTitle}>Đóng lại</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Button */}
                    <Animated.View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            left: 0,
                            paddingHorizontal: 16,
                            position: 'absolute',
                            right: 0,
                        }}
                    >
                        <TouchableOpacity activeOpacity={0.7} onPress={onPrevScreen} style={styles.iconWrapper}>
                            <Icon color={'white'} name={'chevron-left'} size={16} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.7} onPress={onNextScreen} style={styles.iconWrapper}>
                            <Icon color={'white'} name={'chevron-right'} size={16} />
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </Modal>
        );
    },
);

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        left: 0,
        paddingVertical: 16,
        paddingHorizontal: 12,
        position: 'absolute',
        right: 0,
    },
    headerTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: '500', lineHeight: 18 },
    iconWrapper: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 999,
        justifyContent: 'center',
        height: 24,
        width: 24,
    },
});

export default memo(ImageView);
