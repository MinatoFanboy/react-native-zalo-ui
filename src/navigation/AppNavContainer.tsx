import React, { FC, useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeContext, darkTheme, lightTheme } from '~/themes';
import Router from './Router';
import { navigationRef } from './SideMenu';
import { Button, Icon } from '~/components';
import { COLORS } from '~/constants';
import { dp } from '~/utils';

const AppNavContainer: FC = () => {
    const insets = useSafeAreaInsets();
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme} ref={navigationRef}>
                <Router />
            </NavigationContainer>

            <Button
                align={'center'}
                absolute
                bottom={insets.bottom + dp(24)}
                color={theme === 'dark' ? COLORS.white100 : COLORS.neutralGray100}
                h={dp(44)}
                justify={'center'}
                left={dp(16)}
                onPress={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
                rounded
                style={{ borderColor: theme === 'dark' ? COLORS.black20 : COLORS.white20, borderWidth: dp(2) }}
                w={dp(44)}
            >
                <Icon
                    color={theme === 'dark' ? COLORS.neutralGray100 : COLORS.white100}
                    name={theme === 'dark' ? 'sun-solid' : 'moon-solid'}
                />
            </Button>
        </>
    );
};

export default AppNavContainer;
