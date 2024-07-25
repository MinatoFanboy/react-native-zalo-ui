import {
    ColorValue,
    GestureResponderEvent,
    ImageResizeMode,
    ImageSourcePropType,
    ImageStyle,
    LayoutChangeEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from 'react-native';

export type IconName =
    | 'add-melody-solid'
    | 'add-melody'
    | 'add-members-solid'
    | 'add-members'
    | 'add-photo'
    | 'add-quick-reply'
    | 'add-story'
    | 'add-user-solid'
    | 'add-user'
    | 'admin'
    | 'album-book-solid'
    | 'album-book'
    | 'album-delete'
    | 'album-solid'
    | 'album'
    | 'archive-story-solid'
    | 'archive-story'
    | 'arrow-down'
    | 'arrow-left'
    | 'arrow-right'
    | 'arrow-up'
    | 'at-solid'
    | 'auto-clockwise-solid'
    | 'auto-clockwise'
    | 'auto-counter-clockwise'
    | 'auto-reply-solid'
    | 'auto-reply'
    | 'backup-arrow-solid'
    | 'backup-solid'
    | 'backup-success-solid'
    | 'backup-warning-solid'
    | 'backup'
    | 'ban-solid'
    | 'ban'
    | 'bluetooth-solid'
    | 'book'
    | 'bookmark-delete-solid'
    | 'bookmark-delete'
    | 'bookmark-solid'
    | 'bookmark'
    | 'bubble-multiselect'
    | 'business-suite-solid'
    | 'business-suite'
    | 'calendar-solid'
    | 'calendar'
    | 'call-failed-solid'
    | 'call-failed'
    | 'call-in-solid'
    | 'call-in'
    | 'call-out-solid'
    | 'call-out'
    | 'call-solid'
    | 'call'
    | 'camera'
    | 'cart'
    | 'catalog-solid'
    | 'catalog'
    | 'category-broken'
    | 'center-dot'
    | 'chat-block'
    | 'chat-solid'
    | 'chat'
    | 'check-circle-solid'
    | 'check-circle'
    | 'check-solid'
    | 'check'
    | 'checkbox'
    | 'chevron-double-down'
    | 'chevron-double-up'
    | 'chevron-down'
    | 'chevron-left'
    | 'chevron-right'
    | 'chevron-up-circle-broken'
    | 'chevron-up'
    | 'circle-broken'
    | 'clock-1-solid'
    | 'clock-1'
    | 'clock-2-solid'
    | 'clock-2'
    | 'clock-block'
    | 'clock-eye'
    | 'close-circle-solid'
    | 'close-circle'
    | 'close-solid'
    | 'close'
    | 'collapse'
    | 'comment-solid'
    | 'comment'
    | 'contact-list-solid'
    | 'contact-list'
    | 'copy-solid'
    | 'copy'
    | 'countdown-1-on-8'
    | 'countdown-2-on-8'
    | 'countdown-3-on-8'
    | 'countdown-4-on-8'
    | 'countdown-5-on-8'
    | 'countdown-6-on-8'
    | 'countdown-7-on-8'
    | 'countdown-8-on-8'
    | 'countdown'
    | 'create-catalog-solid'
    | 'create-catalog'
    | 'create-group-solid'
    | 'create-group'
    | 'create-quick-reply-solid'
    | 'create-quick-reply'
    | 'delete-solid'
    | 'delete'
    | 'device-1'
    | 'device-2'
    | 'device-3'
    | 'device-4'
    | 'device-5'
    | 'device-6'
    | 'device'
    | 'double-circle-broken'
    | 'download-solid'
    | 'download'
    | 'drag-indicator'
    | 'edit-broken'
    | 'edit-delete-solid'
    | 'edit-delete'
    | 'edit-solid'
    | 'edit-text-solid'
    | 'edit-text'
    | 'edit'
    | 'end-call-solid'
    | 'end-call'
    | 'exclamation-solid'
    | 'expand'
    | 'face-filter-solid'
    | 'face-filter'
    | 'face-id'
    | 'favorite-list'
    | 'field-broken'
    | 'file-broken'
    | 'file-rolled-out'
    | 'file-transfer'
    | 'file'
    | 'filter-solid'
    | 'filter'
    | 'flash-off-solid'
    | 'flash-off'
    | 'flash-solid'
    | 'flash'
    | 'flip-cam-2-solid'
    | 'flip-cam-solid'
    | 'flip-cam'
    | 'float-right'
    | 'friend-suggestion-solid'
    | 'friend-suggestion'
    | 'full-view'
    | 'fullscreen'
    | 'gallery'
    | 'gif'
    | 'globe'
    | 'google-drive-solid'
    | 'graph-broken'
    | 'grid-view'
    | 'group-solid'
    | 'group'
    | 'heart-solid'
    | 'heart'
    | 'help-circle-solid'
    | 'help-circle'
    | 'hide'
    | 'home'
    | 'icloud-arrow-down-solid'
    | 'icloud-arrow-down'
    | 'inbox'
    | 'incoming-call-solid'
    | 'info-circle-solid'
    | 'info-circle'
    | 'item-bubble'
    | 'item-grid'
    | 'join'
    | 'jump-to-original'
    | 'key-solid'
    | 'key'
    | 'leave'
    | 'link-solid'
    | 'link'
    | 'list-1'
    | 'list-2'
    | 'livestream'
    | 'location-solid'
    | 'location'
    | 'lock-open-solid'
    | 'lock-solid'
    | 'lock'
    | 'low-data-mode-solid'
    | 'mail'
    | 'map'
    | 'melody-solid'
    | 'melody'
    | 'members-solid'
    | 'members'
    | 'menu'
    | 'mic-solid'
    | 'mic'
    | 'minimize'
    | 'minus-circle-solid'
    | 'minus-circle'
    | 'moon-solid'
    | 'more-diamond-solid'
    | 'more-diamond'
    | 'more-grid-solid'
    | 'more-grid'
    | 'more-horizontal-solid'
    | 'more-horizontal'
    | 'more-vertical'
    | 'multi-tag-horizontal-solid'
    | 'multi-tag-horizontal'
    | 'my-cloud-solid'
    | 'my-cloud'
    | 'newspaper-solid'
    | 'newspaper'
    | 'note-delete'
    | 'note-solid'
    | 'note'
    | 'notif-off-solid'
    | 'notif-off'
    | 'notif-ring'
    | 'notif'
    | 'numpad-solid'
    | 'oa'
    | 'off-cam-solid'
    | 'off-cam'
    | 'off-mic-solid'
    | 'off-mic'
    | 'off-speaker-solid'
    | 'on-this-day-solid'
    | 'on-this-day'
    | 'open-out-app'
    | 'outgoing-call-solid'
    | 'pause-solid'
    | 'pause'
    | 'pc'
    | 'photo-1-solid'
    | 'photo-1'
    | 'photo-2-solid'
    | 'photo-2'
    | 'photo-error-solid'
    | 'photo-error'
    | 'photo-search'
    | 'pin-solid'
    | 'pin'
    | 'play-solid'
    | 'play'
    | 'playground-solid'
    | 'playground'
    | 'plus-circle-solid'
    | 'plus-circle'
    | 'plus'
    | 'poll-solid'
    | 'poll'
    | 'post-notif-solid'
    | 'post-notif'
    | 'post-solid'
    | 'post'
    | 'posts-block-solid'
    | 'posts-block'
    | 'posts-hide-solid'
    | 'posts-hide'
    | 'posts-move-back-solid'
    | 'posts-move-back'
    | 'posts-move-solid'
    | 'posts-move'
    | 'qr-error'
    | 'qr-history'
    | 'qr-scan'
    | 'qr-wallet-solid'
    | 'qr-wallet'
    | 'qr'
    | 'quick-reply-solid'
    | 'quick-reply'
    | 'quote-solid'
    | 'quote'
    | 'radio-unchecked'
    | 'recall'
    | 'reminder-delete'
    | 'reminder-solid'
    | 'reminder'
    | 'reorder-solid'
    | 'reorder'
    | 'reply-solid'
    | 'reply'
    | 'retry-solid'
    | 'retry'
    | 'rotate'
    | 'save-to-collection'
    | 'search'
    | 'send-solid'
    | 'setting'
    | 'share-external-1'
    | 'share-external-2'
    | 'share-solid'
    | 'share'
    | 'shield-solid'
    | 'shield-star-solid'
    | 'shield-star'
    | 'shield-warning-solid'
    | 'shield-warning'
    | 'shield'
    | 'shuffle'
    | 'snapshot-solid'
    | 'snapshot'
    | 'sound-off-solid'
    | 'speaker-bluetooth-solid'
    | 'speaker-solid'
    | 'speaker-view'
    | 'speaker'
    | 'split-screen'
    | 'star-solid'
    | 'star'
    | 'sticker-solid'
    | 'sticker'
    | 'stop-solid'
    | 'stop'
    | 'storage'
    | 'story-notif-solid'
    | 'story-notif'
    | 'stranger-solid'
    | 'stranger'
    | 'sun-solid'
    | 'swap-broken'
    | 'switch-users-solid'
    | 'switch-users'
    | 'tag-horizontal-solid'
    | 'tag-horizontal'
    | 'tag-solid'
    | 'tag'
    | 'todo'
    | 'touch-id'
    | 'touch'
    | 'tune'
    | 'turn-off'
    | 'unhide'
    | 'unlock-solid'
    | 'unlock'
    | 'unpin'
    | 'untag-solid'
    | 'untag'
    | 'upload-broken'
    | 'upload-solid'
    | 'upload'
    | 'user-block-solid'
    | 'user-block'
    | 'user-check-solid'
    | 'user-check'
    | 'user-circle-solid'
    | 'user-circle'
    | 'user-group-broken'
    | 'user-rectangle-solid'
    | 'user-rectangle'
    | 'user-search-solid'
    | 'user-search'
    | 'user-settings-solid'
    | 'user-settings'
    | 'user-solid'
    | 'user-status'
    | 'user'
    | 'utility'
    | 'verified-solid'
    | 'verified'
    | 'video-1-solid'
    | 'video-1'
    | 'video-2-solid'
    | 'video-2'
    | 'video-added-solid'
    | 'video-added'
    | 'video-failed-solid'
    | 'video-failed'
    | 'video-in-solid'
    | 'video-in'
    | 'video-out-solid'
    | 'video-out'
    | 'voice-message'
    | 'wallpaper'
    | 'warning-circle-solid'
    | 'warning-circle'
    | 'warning-solid'
    | 'warning'
    | 'wifi-off'
    | 'wifi'
    | 'youtube-solid';

export type ImageViewRef = {
    show: (index?: number) => void;
};

export interface CheckboxItem {
    name: string;
    value: string;
}

export type ToastRef = {
    hide: () => void;
    show: ({
        duration,
        message,
        type,
        url,
    }: {
        duration?: number;
        message?: string;
        type?: ToastType;
        url?: string;
    }) => void;
};

export type ToastType =
    | 'default'
    | 'error'
    | 'loading'
    | 'success'
    | 'warning'
    | 'download'
    | 'connect-wifi'
    | 'disconnect-wifi';

/**
 * ## Block
 * Default usage:
 * ```
 * <Block>...</Block>
 * ```
 *
 */
export interface BlockProps {
    /**
     * Renders the View position = absolute
     * @see https://reactnative.dev/docs/layout-props#position
     */
    absolute?: boolean;
    /**
     * Renders a flex alignItems
     * Available values: 'auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
     * @see https://reactnative.dev/docs/layout-props#alignitems
     */
    align?: ViewStyle['alignItems'];
    /**
     * Renders the View bottom offset
     * @see https://reactnative.dev/docs/layout-props#bottom
     */
    bottom?: ViewStyle['bottom'];
    /**
     * Renders a View with predefined borderRadius, padding, gap
     * @see https://reactnative.dev/docs/shadow-props
     */
    card?: boolean;
    /**
     * Renders a custom backgroundColor
     * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
     */
    color?: ViewStyle['backgroundColor'];
    /**
     * Renders LinearGradient end points
     * @see https://github.com/react-native-linear-gradient/react-native-linear-gradient#props
     */
    end?: { x: number; y: number };
    /**
     * Renders a View flex style
     * @see https://reactnative.dev/docs/flexbox#proptypes
     * @see https://reactnative.dev/docs/layout-props
     */
    flex?: ViewStyle['flex'];
    /**
     * Renders a View gap style
     * @see https://reactnative.dev/docs/flexbox#gap
     */
    gap?: number;
    /**
     * Renders LinearGradient component, colors
     * @see https://docs.expo.io/versions/latest/sdk/linear-gradient/#props
     */
    gradient?: (string | number)[];
    /**
     * Renders a custom height value
     * @see https://reactnative.dev/docs/layout-props#height
     */
    h?: ViewStyle['height'];
    /**
     * Renders a flex justifyContent
     * Available values: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
     * @see https://reactnative.dev/docs/layout-props#justifycontent
     */
    justify?: ViewStyle['justifyContent'];
    /**
     * Renders the View left offset
     * @see https://reactnative.dev/docs/layout-props#left
     */
    left?: ViewStyle['left'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#margin
     */
    m?: ViewStyle['margin'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#marginbottom
     */
    mb?: ViewStyle['marginBottom'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#marginleft
     */
    ml?: ViewStyle['marginLeft'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#marginright
     */
    mr?: ViewStyle['marginRight'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#margintop
     */
    mt?: ViewStyle['marginTop'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#marginhorizontal
     */
    mx?: ViewStyle['marginHorizontal'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#marginvertical
     */
    my?: ViewStyle['marginVertical'];
    /**
     * Event onLayout
     */
    onLayout?: ((event: LayoutChangeEvent) => void) | undefined;
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#padding
     */
    p?: ViewStyle['padding'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddingbottom
     */
    pb?: ViewStyle['paddingBottom'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddingleft
     */
    pl?: ViewStyle['paddingLeft'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddingright
     */
    pr?: ViewStyle['paddingRight'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddingtop
     */
    pt?: ViewStyle['paddingTop'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddinghorizontal
     */
    px?: ViewStyle['paddingHorizontal'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddingvertical
     */
    py?: ViewStyle['paddingVertical'];
    /**
     * Renders a custom borderRadius value
     * @see https://reactnative.dev/docs/view-style-props#borderradius
     */
    radius?: ViewStyle['borderRadius'];
    /**
     * Renders the View right offset
     * @see https://reactnative.dev/docs/layout-props#right
     */
    right?: ViewStyle['right'];
    /**
     * Renders borderRadius value to maxSize / 2 using
     * maxSize value is calculated from the maximum value from width, minWidth, maxWidth, height, minHeight, maxHeight
     * @see https://reactnative.dev/docs/view-style-props#borderradius
     */
    rounded?: boolean;
    /**
     * Renders a View flexDirection: row style
     * @see https://reactnative.dev/docs/flexbox#flex-direction
     */
    row?: boolean;
    /**
     * Renders a View shadow 1 style
     */
    shadow1?: boolean;
    /**
     * Renders a View shadow 1 style
     */
    shadow2?: boolean;
    /**
     * Renders a View shadow 1 style
     */
    shadow3?: boolean;
    /**
     * Renders LinearGradient start points
     * @see https://github.com/react-native-linear-gradient/react-native-linear-gradient#props
     */
    start?: { x: number; y: number };
    /**
     * Renders the View top offset
     * @see https://reactnative.dev/docs/layout-props#top
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Renders the View top offset
     * @see https://reactnative.dev/docs/layout-props#top
     */
    top?: ViewStyle['top'];
    /**
     * Modify the appearance and position of your components using 2D or 3D transformations
     * @see https://reactnative.dev/docs/transforms#transform
     */
    transform?: ViewStyle['transform'];
    /**
     * Renders a custom width value
     * @see https://reactnative.dev/docs/layout-props#width
     */
    w?: ViewStyle['width'];
    /**
     * Renders a View flexWrap style
     * @see https://reactnative.dev/docs/flexbox#flex-wrap
     */
    wrap?: boolean;
    /**
     * Renders a View zIndex style
     * @see https://reactnative.dev/docs/flexbox#zindex
     */
    zIndex?: ViewStyle['zIndex'];
}

/**
 * ## Button
 * Default usage:
 * ```
 * <Button>...</Button>
 * ```
 *
 */
export interface ButtonProps {
    /**
     * Renders the View position = 'absolute'
     * @see https://reactnative.dev/docs/layout-props#position
     */
    absolute?: boolean;
    /**
     * Renders a Text with predefined fontFamily from theme fonts.bold
     * @see https://reactnative.dev/docs/text-style-props#fontfamily
     */
    activeOpacity?: number;
    /**
     * Renders a flex alignItems
     * Available values: 'auto', 'flex-start', 'flex-end', 'center', 'stretch', 'baseline'
     * @see https://reactnative.dev/docs/layout-props#alignitems
     */
    align?: ViewStyle['alignItems'];
    /**
     * Renders the View bottom offset
     * @see https://reactnative.dev/docs/layout-props#bottom
     */
    bottom?: ViewStyle['bottom'];
    /**
     * Renders Button content
     */
    children?: React.ReactNode;
    /**
     * Renders a custom backgroundColor
     * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
     */
    color?: ViewStyle['backgroundColor'];
    /**
     * Render Pressable component with type danger
     */
    danger?: boolean;
    /**
     * Renders the View disabled
     */
    disabled?: boolean;
    /**
     * Renders a View flex style
     * @see https://reactnative.dev/docs/flexbox#proptypes
     * @see https://reactnative.dev/docs/layout-props
     */
    flex?: ViewStyle['flex'];
    /**
     * Show the Button with large size
     */
    fullWidth?: boolean;
    /**
     * Renders a View gap style
     * @see https://reactnative.dev/docs/flexbox#gap
     */
    gap?: number;
    /**
     * Renders a custom height value
     * @see https://reactnative.dev/docs/layout-props#height
     */
    h?: ViewStyle['height'];
    /**
     * Render Pressable component with type danger
     */
    highlight?: boolean;
    /**
     * Renders a flex justifyContent
     * Available values: 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'
     * @see https://reactnative.dev/docs/layout-props#justifycontent
     */
    justify?: ViewStyle['justifyContent'];
    /**
     * Show the Button with large size
     */
    large?: boolean;
    /**
     * Renders the View left offset
     * @see https://reactnative.dev/docs/layout-props#left
     */
    left?: ViewStyle['left'];
    /**
     * Renders Button left icon
     */
    leftIcon?: React.ReactNode;
    /**
     * Show Indicator when loading
     */
    loading?: boolean;
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#marginbottom
     */
    mb?: ViewStyle['marginBottom'];
    /**
     * Show the Button with medium size
     */
    medium?: boolean;
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#margintop
     */
    mt?: ViewStyle['marginTop'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#marginhorizontal
     */
    mx?: ViewStyle['marginHorizontal'];
    /**
     * Render Pressable component with type neutral
     */
    neutral?: boolean;
    /**
     * Called when the touch is released,
     * but not if cancelled (e.g. by a scroll that steals the responder lock).
     */
    onPress?: ((event: GestureResponderEvent) => void) | undefined;
    /**
     * Renders the View padding
     * @see https://reactnative.dev/docs/layout-props#padding
     */
    p?: ViewStyle['padding'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddinghorizontal
     */
    px?: ViewStyle['paddingHorizontal'];
    /**
     * Renders the View position
     * @see https://reactnative.dev/docs/layout-props#paddingvertical
     */
    py?: ViewStyle['paddingVertical'];
    /**
     * Render Pressable component with background color when pressed
     */
    pressedColor?: ColorValue;
    /**
     * Render Pressable component with type primary
     */
    primary?: boolean;
    /**
     * Renders a custom borderRadius value
     * @see https://reactnative.dev/docs/view-style-props#borderradius
     */
    radius?: ViewStyle['borderRadius'];
    /**
     * Renders the View top offset
     * @see https://reactnative.dev/docs/layout-props#right
     */
    right?: ViewStyle['right'];
    /**
     * Renders Button right icon
     */
    rightIcon?: React.ReactNode;
    /**
     * Renders borderRadius value to maxSize / 2 using
     * maxSize value is calculated from the maximum value from width, minWidth, maxWidth, height, minHeight, maxHeight
     * @see https://reactnative.dev/docs/view-style-props#borderradius
     */
    rounded?: boolean;
    /**
     * Render Pressable component with flex direction row
     */
    row?: boolean;
    /**
     * Render Pressable component with type secondary
     */
    secondary?: boolean;
    /**
     * Show the Button with small size
     */
    small?: boolean;
    /**
     * Renders the View top offset
     * @see https://reactnative.dev/docs/layout-props#top
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Render Pressable component with type tertiary
     */
    tertiary?: boolean;
    /**
     * Render Pressable component with text
     */
    title?: string;
    /**
     * Renders the View top offset
     * @see https://reactnative.dev/docs/layout-props#top
     */
    top?: ViewStyle['top'];
    /**
     * Renders a custom width value
     * @see https://reactnative.dev/docs/layout-props#width
     */
    w?: ViewStyle['width'];
}

/**
 * ## Text
 * Default usage:
 * ```
 * <Text>...</Text>
 * ```
 *
 */
export interface ITextProps {
    /**
     * Renders a Text with predefined fontSize from theme SIZES.avatar
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    avatar?: boolean;
    /**
     * Renders a Text with predefined fontFamily from theme fonts.bold
     * @see https://reactnative.dev/docs/text-style-props#fontfamily
     */
    bold?: boolean;
    /**
     * Renders a Text with predefined textAlign: center
     * @see https://reactnative.dev/docs/text-style-props#textalign
     */
    center?: boolean;
    /**
     * Renders a custom backgroundColor
     * @see https://reactnative.dev/docs/view-style-props#backgroundcolor
     */
    color?: ViewStyle['backgroundColor'];
    /**
     * Renders a View flex style
     * @see https://reactnative.dev/docs/flexbox#proptypes
     * @see https://reactnative.dev/docs/layout-props
     */
    flex?: ViewStyle['flex'];
    /**
     * Renders a Text with custom fontFamily
     * @see https://reactnative.dev/docs/text-style-props#fontfamily
     */
    font?: string;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.heading
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    heading?: boolean;
    /**
     * Renders a Text with custom lineHeight
     * @see https://reactnative.dev/docs/text-style-props#lineheight
     */
    lineHeight?: number;
    /**
     * Renders a Text with predefined fontFamily from theme fonts.medium
     * @see https://reactnative.dev/docs/text-style-props#fontfamily
     */
    medium?: boolean;
    /**
     * Renders a Text with predefined fontFamily from theme fonts.medium
     * @see https://reactnative.dev/docs/text-style-props#fontfamily
     */
    numberOfLines?: number;
    /**
     * Renders a Text with predefined fontFamily from theme fonts.regular
     * @see https://reactnative.dev/docs/text-style-props#fontfamily
     */
    regular?: boolean;
    /**
     * Renders a Text with custom fontSize
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    size?: number;
    /**
     * Renders the View top offset
     * @see https://reactnative.dev/docs/layout-props#top
     */
    style?: StyleProp<TextStyle>;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.textNormalLarge
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    textLarge?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.textNormal
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    textNormal?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.textSmall
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    textSmall?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.textXSmall
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    textXSmall?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.textXXSmall
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    textXXSmall?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.textXXXSmall
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    textXXXSmall?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.titleLarge
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    titleLarge?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.titleNormal
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    titleNormal?: boolean;
    /**
     * Renders a Text with predefined fontSize from theme SIZES.titleSmall
     * @see https://reactnative.dev/docs/text-style-props#fontsize
     */
    titleSmall?: boolean;
    /**
     * Renders a Text with custom fontWeight
     * @see https://reactnative.dev/docs/text-style-props#fontweight
     */
    weight?: TextStyle['fontWeight'];
}

/**
 * ## Image
 * Default usage:
 * ```
 * <Image>...</Image>
 * ```
 *
 */
export interface IImageProps {
    /**
     * Renders a custom width value
     * @see https://reactnative.dev/docs/image#alt
     */
    alt?: string;
    /**
     * Renders a custom width value
     * @see https://reactnative.dev/docs/image#height
     */
    h?: ImageStyle['height'];
    /**
     * Renders a custom width value
     * @see https://reactnative.dev/docs/image#marginLeft
     */
    ml?: ImageStyle['marginLeft'];
    /**
     * Renders a custom width value
     * @see https://reactnative.dev/docs/image#marginTop
     */
    mt?: ImageStyle['marginTop'];
    /**
     * Renders borderRadius value
     * @see https://reactnative.dev/docs/view-style-props#borderradius
     */
    radius?: number;
    /**
     * Renders the Image component with custom style, overwrite existing/predefined styles
     * @see https://reactnative.dev/docs/image#resizeMode
     */
    resizeMode?: ImageResizeMode;
    /**
     * Renders borderRadius value to maxSize / 2 using
     * maxSize value is calculated from the maximum value from width, minWidth, maxWidth, height, minHeight, maxHeight
     * @see https://reactnative.dev/docs/view-style-props#borderradius
     */
    rounded?: boolean;
    /**
     * Renders the Image component with custom style, overwrite existing/predefined styles
     * @see https://reactnative.dev/docs/image#source
     */
    source: ImageSourcePropType;
    /**
     * Renders the Image component with custom style, overwrite existing/predefined styles
     * @see https://reactnative.dev/docs/image#style
     */
    style?: StyleProp<ImageStyle>;
    /**
     * Renders a custom width value
     * @see https://reactnative.dev/docs/image#width
     */
    w?: ImageStyle['width'];
    /**
     * Renders a View zIndex style
     * @see https://reactnative.dev/docs/flexbox#zindex
     */
    zIndex?: ImageStyle['zIndex'];
}
