import React, { FC } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Badge, Block, Container, Text } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const Home: FC<MainStackScreenProps<'Home'>> = () => {
    const { colors } = useTheme() as CustomTheme;

    return (
        <Container>
            <Block card color={colors.pageBackground2} gap={dp(16)}>
                <Block gap={dp(8)}>
                    <Text heading weight={'600'}>
                        ZaUI
                    </Text>
                    <Text color={colors.text2} textSmall>
                        Zalo Mini Program Framework là thư viện thiết kế cơ bản phù hợp với trải nghiệm của Zalo.
                    </Text>
                </Block>

                <Badge
                    child={[
                        { name: 'Forms Input', navigate: 'FormInput' },
                        { name: 'Selection', navigate: 'Selection' },
                        { name: 'Time Picker', navigate: 'TimePicker' },
                        { name: 'List Item', navigate: 'ListItem' },
                    ]}
                    color={COLORS.blue60}
                    icon={'file-broken'}
                    name={'Input field'}
                />
                <Badge
                    child={[
                        { name: 'Token Size', navigate: 'TokenSize' },
                        { name: 'Text Style', navigate: 'TextStyle' },
                    ]}
                    color={COLORS.skyBlue60}
                    icon={'edit-broken'}
                    name={'Typography'}
                />
                <Badge
                    child={[
                        { name: 'Global Token Color', navigate: 'GlobalTokenColor' },
                        { name: 'Gradients', navigate: 'Gradient' },
                        { name: 'Alias Tokens Color', navigate: 'AliasTokens' },
                    ]}
                    color={COLORS.purple60}
                    icon={'graph-broken'}
                    name={'Colors'}
                />
                <Badge
                    color={COLORS.green60}
                    icon={'upload-broken'}
                    name={'Sheet & Modal'}
                    navigate={'SheetAndModal'}
                />
                <Badge color={COLORS.red60} icon={'cart'} name={'Buttons'} navigate={'ButtonScreen'} />
                <Badge color={COLORS.pink60} icon={'user-group-broken'} name={'Avatars'} navigate={'AvatarScreen'} />
                <Badge color={COLORS.orange60} icon={'category-broken'} name={'Radius'} navigate={'RadiusScreen'} />
                <Badge color={COLORS.pink60} icon={'circle-broken'} name={'Loading, Toast'} navigate={'Loading'} />
                <Badge color={COLORS.purple60} name={'Snackbar'} navigate={'Snackbar'} />
                <Badge
                    color={COLORS.blue50}
                    icon={'swap-broken'}
                    name={'Level Specification, Shadow'}
                    navigate={'LevelSpecification'}
                />
                <Badge
                    color={COLORS.yellow60}
                    icon={'chevron-up-circle-broken'}
                    name={'Spacing System'}
                    navigate={'Spacing'}
                />
                <Badge color={COLORS.red60} icon={'double-circle-broken'} name={'Library Icons'} navigate={'Library'} />
                <Badge
                    child={[
                        { name: 'Layout', navigate: 'Layout' },
                        { name: 'Bottom Navigation', navigate: 'BottomNavigation' },
                        { name: 'Tab', navigate: 'Tab' },
                    ]}
                    color={COLORS.blue50}
                    icon={'field-broken'}
                    name={'Layouts, Navigation'}
                />
                <Badge color={COLORS.green60} icon={'touch'} name={'Swiper'} navigate={'Swiper'} />
                <Badge color={COLORS.purple60} icon={'photo-2'} name={'Image Viewer'} navigate={'ImageViewer'} />
                <Badge color={COLORS.red60} icon={'calendar'} name={'Calendar'} navigate={'Calendar'} />
            </Block>
        </Container>
    );
};

export default Home;
