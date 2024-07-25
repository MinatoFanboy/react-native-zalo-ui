import React, { createContext, useState, useEffect, FC, PropsWithChildren } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { COLORS } from '~/constants';

export const ThemeContext = createContext<{ theme: string; toggleTheme: (value: string) => void }>({
    theme: 'light',
    toggleTheme: () => null,
});

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState<string>(colorScheme || 'light');

    useEffect(() => {
        const getTheme = async () => {
            try {
                const savedTheme = await AsyncStorage.getItem('theme');
                if (savedTheme) {
                    setTheme(savedTheme);
                }
            } catch {}
        };
        getTheme();
    }, []);

    useEffect(() => {
        if (colorScheme) {
            setTheme(colorScheme);
        }
    }, [colorScheme]);

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        if (newTheme === theme) {
            AsyncStorage.removeItem('theme');
        } else {
            AsyncStorage.setItem('theme', newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {Platform.OS === 'android' ? (
                <StatusBar
                    backgroundColor={theme === 'light' ? COLORS.white100 : COLORS.neutralGray100}
                    barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
                />
            ) : (
                <StatusBar barStyle={theme === 'light' ? 'dark-content' : 'light-content'} />
            )}
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
