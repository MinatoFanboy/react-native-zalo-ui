import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

import {
    AliasTokens,
    AvatarScreen,
    BottomNavigation,
    ButtonScreen,
    Calendar,
    FormInput,
    GlobalTokenColor,
    Gradient,
    Home,
    ImageViewer,
    Layout,
    LevelSpecification,
    Library,
    ListItem,
    Loading,
    RadiusScreen,
    Selection,
    SheetAndModal,
    Snackbar,
    Spacing,
    Swiper,
    Tab,
    TextStyle,
    TimePicker,
    TokenSize,
} from '~/screens';

/** Interface */
export type ScreenProps = {
    component: any;
    name: string;
    options?: any;
};

export type MainStackParamList = {
    AliasTokens: undefined;
    AvatarScreen: undefined;
    BottomNavigation: undefined;
    ButtonScreen: undefined;
    Calendar: undefined;
    ChatScreen: undefined;
    FormInput: undefined;
    GlobalTokenColor: undefined;
    Gradient: undefined;
    Home: undefined;
    ImageViewer: undefined;
    Layout: undefined;
    LevelSpecification: undefined;
    Library: undefined;
    List: { id?: number };
    ListItem: undefined;
    Loading: undefined;
    MultiLanguage: undefined;
    Pagination: undefined;
    Payment: undefined;
    RadiusScreen: undefined;
    Selection: undefined;
    SheetAndModal: undefined;
    Snackbar: undefined;
    Spacing: undefined;
    SpinScreen: undefined;
    Swiper: undefined;
    Tab: undefined;
    TextStyle: undefined;
    TimePicker: undefined;
    TokenSize: undefined;
};

export type MainStackNavigation = NativeStackNavigationProp<MainStackParamList>;
export type M = keyof MainStackParamList;
export type MainStackScreenProps<RouteName extends M> = NativeStackScreenProps<MainStackParamList, RouteName>;

/** Constants */
export const MAIN_STACK_SCREEN: ScreenProps[] = [
    { component: AliasTokens, name: 'AliasTokens' },
    { component: AvatarScreen, name: 'AvatarScreen' },
    { component: BottomNavigation, name: 'BottomNavigation' },
    { component: ButtonScreen, name: 'ButtonScreen' },
    { component: Calendar, name: 'Calendar' },
    { component: FormInput, name: 'FormInput' },
    { component: GlobalTokenColor, name: 'GlobalTokenColor' },
    { component: Gradient, name: 'Gradient' },
    { component: Home, name: 'Home' },
    { component: ImageViewer, name: 'ImageViewer' },
    { component: Layout, name: 'Layout' },
    { component: LevelSpecification, name: 'LevelSpecification' },
    { component: Library, name: 'Library' },
    { component: ListItem, name: 'ListItem' },
    { component: Loading, name: 'Loading' },
    { component: RadiusScreen, name: 'RadiusScreen' },
    { component: Selection, name: 'Selection' },
    { component: SheetAndModal, name: 'SheetAndModal' },
    { component: Snackbar, name: 'Snackbar' },
    { component: Spacing, name: 'Spacing' },
    { component: Swiper, name: 'Swiper' },
    { component: Tab, name: 'Tab' },
    { component: TextStyle, name: 'TextStyle' },
    { component: TimePicker, name: 'TimePicker' },
    { component: TokenSize, name: 'TokenSize' },
];
