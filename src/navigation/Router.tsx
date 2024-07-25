import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MAIN_STACK_SCREEN, MainStackParamList } from '~/types';

const { Navigator, Screen } = createNativeStackNavigator<MainStackParamList>();

const Router = () => {
    return (
        <Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
            {MAIN_STACK_SCREEN.map((item) => (
                <Screen
                    component={item.component}
                    key={item.name}
                    name={item.name as keyof MainStackParamList}
                    options={item.options}
                />
            ))}
        </Navigator>
    );
};

export default Router;
