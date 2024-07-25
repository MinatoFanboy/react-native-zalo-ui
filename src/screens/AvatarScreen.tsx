import React, { FC, PropsWithChildren, useCallback } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Circle, Defs, RadialGradient, Stop, Svg } from 'react-native-svg';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Container, Block, Icon, Image, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <Svg fill={'none'} height={dp(48)} viewBox={`0 0 ${dp(48)} ${dp(48)}`} width={dp(48)}>
        {children}
        <Circle
            cx={`${dp(24)}`}
            cy={`${dp(24)}`}
            r={`${dp(22.5)}`}
            stroke={'url(#paint0_linear_6764_9148)'}
            strokeWidth={'2'}
        />
        <Defs>
            <RadialGradient gradientUnits={'userSpaceOnUse'} id={'paint0_linear_6764_9148'}>
                <Stop stopColor={'#006AF5'} />
                <Stop offset={'1'} stopColor={'#5FCBF2'} />
            </RadialGradient>
        </Defs>
    </Svg>
);

const AvatarScreen: FC<MainStackScreenProps<'AvatarScreen'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(24) }} onBack={onBack} title={'Avatar'}>
            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Size</Text>

                <ScrollView contentContainerStyle={{ gap: dp(24) }} horizontal style={{ flexGrow: 0 }}>
                    <Block align={'center'} gap={dp(8)}>
                        <Text color={colors.text1} style={styles.text}>
                            {'16px'}
                        </Text>

                        <Image
                            h={dp(16)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(16)}
                        />
                    </Block>

                    <Block align={'center'} gap={dp(8)}>
                        <Text style={styles.text}>{'24px'}</Text>

                        <Image
                            h={dp(24)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(24)}
                        />
                    </Block>

                    <Block align={'center'} gap={dp(8)}>
                        <Text style={styles.text}>{'32px'}</Text>

                        <Image
                            h={dp(32)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(32)}
                        />
                    </Block>

                    <Block align={'center'} gap={dp(8)}>
                        <Text style={styles.text}>{'40px'}</Text>

                        <Image
                            h={dp(40)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(40)}
                        />
                    </Block>

                    <Block align={'center'} gap={dp(8)}>
                        <Text style={styles.text}>{'48px'}</Text>

                        <Image
                            h={dp(48)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(48)}
                        />
                    </Block>

                    <Block align={'center'} gap={dp(8)}>
                        <Text style={styles.text}>{'64px'}</Text>

                        <Image
                            h={dp(64)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(64)}
                        />
                    </Block>

                    <Block align={'center'} gap={dp(8)}>
                        <Text style={styles.text}>{'96px'}</Text>

                        <Image
                            h={dp(96)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(96)}
                        />
                    </Block>

                    <Block align={'center'} gap={dp(8)}>
                        <Text style={styles.text}>{'128px'}</Text>

                        <Image
                            h={dp(128)}
                            source={require('~/assets/images/avatar.jpeg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(128)}
                        />
                    </Block>
                </ScrollView>

                <Text color={colors.selectionLabel} style={styles.text}>
                    {'Scroll để xem thêm >>>'}
                </Text>
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Variation</Text>

                <Block gap={dp(24)} row wrap>
                    <Block gap={dp(8)}>
                        <Text style={styles.text}>Group 1</Text>
                        <Block row py={dp(12)}>
                            <Image
                                source={require('~/assets/images/replace.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Block
                                align={'center'}
                                color={COLORS.neutralGray20}
                                justify={'center'}
                                ml={-dp(4)}
                                style={styles.avatar}
                            >
                                <Text avatar color={COLORS.neutralGray60}>
                                    1
                                </Text>
                            </Block>
                        </Block>
                    </Block>

                    <Block gap={dp(8)}>
                        <Text style={styles.text}>Group 2</Text>
                        <Block py={dp(12)} row>
                            <Image
                                source={require('~/assets/images/replace.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(4)}
                                source={require('~/assets/images/avatar-1.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                        </Block>
                    </Block>

                    <Block gap={dp(8)}>
                        <Text style={styles.text}>Group 3</Text>
                        <Block align={'center'}>
                            <Block py={dp(2)} row zIndex={2}>
                                <Image
                                    source={require('~/assets/images/replace.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                                <Image
                                    ml={-dp(4)}
                                    source={require('~/assets/images/avatar-1.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                            </Block>
                            <Image
                                mt={-dp(12)}
                                source={require('~/assets/images/avatar-2.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                                zIndex={1}
                            />
                        </Block>
                    </Block>

                    <Block gap={dp(8)}>
                        <Text style={styles.text}>Group 4</Text>
                        <Block align={'center'} row>
                            <Block>
                                <Image
                                    source={require('~/assets/images/replace.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                                <Image
                                    mt={-dp(8)}
                                    source={require('~/assets/images/avatar-2.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                            </Block>
                            <Block ml={-dp(4)}>
                                <Image
                                    source={require('~/assets/images/avatar-1.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                                <Image
                                    mt={-dp(8)}
                                    source={require('~/assets/images/avatar-3.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                            </Block>
                        </Block>
                    </Block>

                    <Block gap={dp(8)}>
                        <Text style={styles.text}>Group 4+</Text>
                        <Block align={'center'} row>
                            <Block>
                                <Image
                                    source={require('~/assets/images/replace.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                                <Image
                                    mt={-dp(8)}
                                    source={require('~/assets/images/avatar-2.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                            </Block>
                            <Block ml={-dp(4)}>
                                <Image
                                    source={require('~/assets/images/avatar-1.jpg')}
                                    resizeMode={'cover'}
                                    style={styles.avatar}
                                />
                                <Block
                                    align={'center'}
                                    color={COLORS.neutralGray20}
                                    justify={'center'}
                                    mt={-dp(8)}
                                    style={styles.avatar}
                                >
                                    <Text avatar color={COLORS.neutralGray60}>
                                        +5
                                    </Text>
                                </Block>
                            </Block>
                        </Block>
                    </Block>
                </Block>

                <Block gap={dp(24)} row>
                    <Block gap={dp(8)}>
                        <Text color={colors.text1} style={styles.text}>
                            {'Group 2\nHorizontal'}
                        </Text>
                        <Block py={dp(12)} row>
                            <Image
                                source={require('~/assets/images/avatar.jpeg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-1.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                        </Block>
                    </Block>

                    <Block gap={dp(8)}>
                        <Text style={styles.text}>{'Group 3\nHorizontal'}</Text>
                        <Block py={dp(12)} row>
                            <Image
                                source={require('~/assets/images/replace.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-1.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-2.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                        </Block>
                    </Block>

                    <Block gap={dp(8)}>
                        <Text style={styles.text}>{'Group 4\nHorizontal'}</Text>
                        <Block py={dp(12)} row>
                            <Image
                                source={require('~/assets/images/replace.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-1.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-2.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-3.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                        </Block>
                    </Block>
                </Block>

                <Block gap={dp(24)} row>
                    <Block gap={dp(8)}>
                        <Text style={styles.text}>{'Group 4+\nHorizontal'}</Text>
                        <Block py={dp(12)} row>
                            <Image
                                source={require('~/assets/images/replace.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-1.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Image
                                ml={-dp(12)}
                                source={require('~/assets/images/avatar-2.jpg')}
                                resizeMode={'cover'}
                                style={styles.avatar}
                            />
                            <Block
                                align={'center'}
                                color={COLORS.neutralGray20}
                                justify={'center'}
                                ml={-dp(12)}
                                style={styles.avatar}
                            >
                                <Text avatar color={COLORS.neutralGray60}>
                                    +5
                                </Text>
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>

            <Block card color={colors.pageBackground2}>
                <Text titleSmall>Add-on</Text>

                <Block gap={dp(24)} row>
                    <Block gap={dp(8)}>
                        <Text style={styles.text}>Online</Text>

                        <Block h={dp(48)} w={dp(48)}>
                            <Image
                                h={dp(48)}
                                source={require('~/assets/images/replace.jpg')}
                                resizeMode={'cover'}
                                rounded
                                w={dp(48)}
                            />

                            <Block
                                absolute
                                bottom={0}
                                color={'green'}
                                h={dp(12)}
                                right={0}
                                rounded
                                style={{ borderColor: 'white', borderWidth: dp(2) }}
                                w={dp(12)}
                            />
                        </Block>
                    </Block>

                    <Block gap={dp(5)}>
                        <Text style={styles.text}>Online + Story</Text>

                        <Wrapper>
                            <Block align={'center'} h={'100%'} justify={'center'} w={'100%'}>
                                <Image h={dp(40)} rounded source={require('~/assets/images/replace.jpg')} w={dp(40)} />
                            </Block>
                        </Wrapper>
                    </Block>
                </Block>

                <Block gap={dp(8)}>
                    <Text style={styles.text}>Blocked</Text>

                    <Block h={dp(48)} w={dp(48)}>
                        <Image
                            h={dp(48)}
                            source={require('~/assets/images/replace.jpg')}
                            resizeMode={'cover'}
                            rounded
                            w={dp(48)}
                        />

                        <Block
                            absolute
                            bottom={0}
                            color={'white'}
                            right={0}
                            rounded
                            style={{ borderColor: 'white', borderWidth: dp(1.5) }}
                        >
                            <Icon color={COLORS.red60} name={'ban'} size={dp(12)} />
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Container>
    );
};

const styles = StyleSheet.create({
    avatar: { borderColor: 'white', borderRadius: 999, borderWidth: dp(2), height: dp(24), width: dp(24) },
    text: { fontFamily: 'RobotoCondensed-Regular', fontSize: dp(12), lineHeight: dp(18) },
});

export default AvatarScreen;
