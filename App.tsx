import React, { FC } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import ThemeProvider from '~/themes';
import AppNavContainer from '~/navigation';
import { Toast } from '~/components';
import { toastRef } from '~/utils';

const App: FC = () => {
    return (
        <ThemeProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaProvider style={{ flex: 1 }}>
                    <AppNavContainer />
                </SafeAreaProvider>
            </GestureHandlerRootView>

            <Toast ref={toastRef} />
        </ThemeProvider>
    );
};

export default App;
