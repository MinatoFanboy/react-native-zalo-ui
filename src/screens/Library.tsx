import React, { FC, useCallback } from 'react';
import { useTheme } from '@react-navigation/native';

import { CustomTheme, MainStackScreenProps } from '~/types';
import { Block, Container, Icon, Text } from '~/components';
import { dp } from '~/utils';
import { LINE_HEIGHTS, SIZES } from '~/constants';

const Library: FC<MainStackScreenProps<'Library'>> = ({ navigation }) => {
    const { colors } = useTheme() as CustomTheme;

    const onBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <Container containerStyle={{ gap: dp(40) }} onBack={onBack} title={'Library Icons'}>
            {/* Color */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Color</Text>

                <Block gap={dp(40)} row wrap>
                    <Block align={'center'} gap={dp(8)}>
                        <Text
                            font={'RobotoCondensed-Regular'}
                            lineHeight={LINE_HEIGHTS.textXSmall}
                            size={SIZES.textXXSmall}
                        >
                            icon-01
                        </Text>

                        <Icon name={'more-diamond'} />
                    </Block>
                    <Block align={'center'} gap={dp(8)}>
                        <Text
                            font={'RobotoCondensed-Regular'}
                            lineHeight={LINE_HEIGHTS.textXSmall}
                            size={SIZES.textXXSmall}
                        >
                            icon-02
                        </Text>

                        <Icon color={colors.text2} name={'more-diamond'} />
                    </Block>
                    <Block align={'center'} gap={dp(8)}>
                        <Text
                            font={'RobotoCondensed-Regular'}
                            lineHeight={LINE_HEIGHTS.textXSmall}
                            size={SIZES.textXXSmall}
                        >
                            icon-03
                        </Text>

                        <Icon color={colors.text3} name={'more-diamond'} />
                    </Block>
                </Block>
            </Block>

            {/* Size */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Size</Text>

                <Block gap={dp(40)} row wrap>
                    <Block align={'center'} gap={dp(8)}>
                        <Text
                            font={'RobotoCondensed-Regular'}
                            lineHeight={LINE_HEIGHTS.textXSmall}
                            size={SIZES.textXXSmall}
                        >
                            16px
                        </Text>

                        <Icon name={'more-diamond'} size={dp(16)} />
                    </Block>
                    <Block align={'center'} gap={dp(8)}>
                        <Text
                            font={'RobotoCondensed-Regular'}
                            lineHeight={LINE_HEIGHTS.textXSmall}
                            size={SIZES.textXXSmall}
                        >
                            24px
                        </Text>

                        <Icon name={'more-diamond'} />
                    </Block>
                    <Block align={'center'} gap={dp(8)}>
                        <Text
                            font={'RobotoCondensed-Regular'}
                            lineHeight={LINE_HEIGHTS.textXSmall}
                            size={SIZES.textXXSmall}
                        >
                            32px
                        </Text>

                        <Icon name={'more-diamond'} size={dp(32)} />
                    </Block>
                    <Block align={'center'} gap={dp(8)}>
                        <Text
                            font={'RobotoCondensed-Regular'}
                            lineHeight={LINE_HEIGHTS.textXSmall}
                            size={SIZES.textXXSmall}
                        >
                            40px
                        </Text>

                        <Icon name={'more-diamond'} size={dp(40)} />
                    </Block>
                </Block>
            </Block>

            {/* User */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>User</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'add-members'} />
                    <Icon name={'add-members-solid'} />
                    <Icon name={'add-user'} />
                    <Icon name={'add-user-solid'} />
                    <Icon name={'admin'} />
                    <Icon name={'create-group'} />
                    <Icon name={'create-group-solid'} />
                    <Icon name={'group'} />
                    <Icon name={'group-solid'} />
                    <Icon name={'members'} />
                    <Icon name={'members-solid'} />
                    <Icon name={'stranger'} />
                    <Icon name={'stranger-solid'} />
                    <Icon name={'switch-users'} />
                    <Icon name={'switch-users-solid'} />
                    <Icon name={'user'} />
                    <Icon name={'user-solid'} />
                    <Icon name={'user-settings'} />
                    <Icon name={'user-settings-solid'} />
                    <Icon name={'user-search'} />
                    <Icon name={'user-search-solid'} />
                    <Icon name={'user-circle'} />
                    <Icon name={'user-circle-solid'} />
                    <Icon name={'user-check'} />
                </Block>
            </Block>

            {/* Media */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Media</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'add-photo'} />
                    <Icon name={'camera'} />
                    <Icon name={'gallery'} />
                    <Icon name={'link'} />
                    <Icon name={'livestream'} />
                    <Icon name={'pause'} />
                    <Icon name={'pause-solid'} />
                    <Icon name={'photo-1'} />
                    <Icon name={'photo-search'} />
                    <Icon name={'photo-1-solid'} />
                    <Icon name={'play'} />
                    <Icon name={'play-solid'} />
                </Block>
            </Block>

            {/* Basic */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Basic</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'add-story'} />
                    <Icon name={'ban'} />
                    <Icon name={'center-dot'} />
                    <Icon name={'check'} />
                    <Icon name={'check-circle'} />
                    <Icon name={'check-circle-solid'} />
                    <Icon name={'close'} />
                    <Icon name={'close-circle'} />
                    <Icon name={'close-circle-solid'} />
                    <Icon name={'copy'} />
                    <Icon name={'delete'} />
                    <Icon name={'drag-indicator'} />
                    <Icon name={'home'} />
                    <Icon name={'list-1'} />
                    <Icon name={'list-2'} />
                    <Icon name={'minus-circle'} />
                    <Icon name={'minus-circle-solid'} />
                    <Icon name={'more-diamond'} />
                    <Icon name={'more-grid'} />
                    <Icon name={'more-grid-solid'} />
                    <Icon name={'more-horizontal'} />
                    <Icon name={'more-horizontal-solid'} />
                    <Icon name={'plus'} />
                    <Icon name={'plus-circle'} />
                    <Icon name={'plus-circle-solid'} />
                    <Icon name={'radio-unchecked'} />
                    <Icon name={'save-to-collection'} />
                    <Icon name={'search'} />
                    <Icon name={'setting'} />
                    <Icon name={'tune'} />
                </Block>
            </Block>

            {/* Arrow */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Arrows</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'arrow-down'} />
                    <Icon name={'arrow-left'} />
                    <Icon name={'arrow-right'} />
                    <Icon name={'arrow-up'} />
                    <Icon name={'auto-clockwise'} />
                    <Icon name={'auto-clockwise-solid'} />
                    <Icon name={'chevron-double-down'} />
                    <Icon name={'chevron-double-up'} />
                    <Icon name={'chevron-down'} />
                    <Icon name={'chevron-left'} />
                    <Icon name={'chevron-right'} />
                    <Icon name={'chevron-up'} />
                    <Icon name={'download'} />
                    <Icon name={'download-solid'} />
                    <Icon name={'reorder'} />
                    <Icon name={'reply'} />
                    <Icon name={'reply-solid'} />
                    <Icon name={'retry-solid'} />
                    <Icon name={'retry'} />
                    <Icon name={'share'} />
                    <Icon name={'share-external-1'} />
                    <Icon name={'share-external-2'} />
                    <Icon name={'collapse'} />
                    <Icon name={'expand'} />
                    <Icon name={'upload'} />
                </Block>
            </Block>

            {/* Communication */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Communication</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'at-solid'} />
                    <Icon name={'bubble-multiselect'} />
                    <Icon name={'call'} />
                    <Icon name={'call-solid'} />
                    <Icon name={'chat'} />
                    <Icon name={'chat-solid'} />
                    <Icon name={'location'} />
                    <Icon name={'location-solid'} />
                    <Icon name={'mic'} />
                    <Icon name={'quote'} />
                    <Icon name={'quote-solid'} />
                    <Icon name={'recall'} />
                    <Icon name={'send-solid'} />
                    <Icon name={'user-rectangle'} />
                    <Icon name={'video-1'} />
                    <Icon name={'video-1-solid'} />
                    <Icon name={'video-added'} />
                    <Icon name={'wifi'} />
                    <Icon name={'wifi-off'} />
                </Block>
            </Block>

            {/* Backup */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Backup</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'backup-solid'} />
                    <Icon name={'backup-success-solid'} />
                    <Icon name={'backup-warning-solid'} />
                </Block>
            </Block>

            {/* Bookmark */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Bookmark</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'bookmark'} />
                    <Icon name={'bookmark-delete'} />
                    <Icon name={'favorite-list'} />
                    <Icon name={'heart'} />
                    <Icon name={'heart-solid'} />
                    <Icon name={'tag'} />
                    <Icon name={'tag-solid'} />
                    <Icon name={'star'} />
                    <Icon name={'star-solid'} />
                    <Icon name={'unpin'} />
                </Block>
            </Block>

            {/* Time */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Time</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'calendar'} />
                    <Icon name={'calendar-solid'} />
                    <Icon name={'clock-1'} />
                    <Icon name={'clock-1-solid'} />
                    <Icon name={'clock-2'} />
                    <Icon name={'clock-2-solid'} />
                    <Icon name={'reminder'} />
                    <Icon name={'reminder-solid'} />
                    <Icon name={'reminder-delete'} />
                </Block>
            </Block>

            {/* Edit */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Edit</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'edit'} />
                    <Icon name={'edit-solid'} />
                    <Icon name={'edit-delete'} />
                    <Icon name={'edit-delete-solid'} />
                    <Icon name={'edit-text'} />
                    <Icon name={'edit-text-solid'} />
                    <Icon name={'post'} />
                </Block>
            </Block>

            {/* Signage */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Signage</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'exclamation-solid'} />
                    <Icon name={'help-circle'} />
                    <Icon name={'info-circle'} />
                    <Icon name={'info-circle-solid'} />
                    <Icon name={'warning-circle'} />
                    <Icon name={'warning-circle-solid'} />
                    <Icon name={'warning'} />
                    <Icon name={'warning-solid'} />
                </Block>
            </Block>

            {/* Tool */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Tool</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'file'} />
                    <Icon name={'inbox'} />
                    <Icon name={'note'} />
                    <Icon name={'note-delete'} />
                    <Icon name={'pc'} />
                    <Icon name={'poll'} />
                    <Icon name={'poll-solid'} />
                    <Icon name={'qr'} />
                    <Icon name={'file-transfer'} />
                    <Icon name={'wallpaper'} />
                </Block>
            </Block>

            {/* Privacy */}
            <Block card color={colors.pageBackground2}>
                {/* Title */}
                <Text titleSmall>Privacy</Text>

                <Block gap={dp(16)} row wrap>
                    <Icon name={'hide'} />
                    <Icon name={'unhide'} />
                    <Icon name={'lock'} />
                    <Icon name={'lock-solid'} />
                    <Icon name={'lock-open-solid'} />
                    <Icon name={'notif'} />
                    <Icon name={'notif-off'} />
                    <Icon name={'notif-off-solid'} />
                    <Icon name={'notif-ring'} />
                    <Icon name={'shield-solid'} />
                    <Icon name={'unlock'} />
                    <Icon name={'unlock-solid'} />
                </Block>
            </Block>
        </Container>
    );
};

export default Library;
