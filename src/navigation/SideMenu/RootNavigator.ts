import { createNavigationContainerRef } from '@react-navigation/native';
import { MainStackParamList } from '~/types';

export const navigationRef = createNavigationContainerRef<MainStackParamList>();

export const navigate = (name: string, params?: any) => {
    if (navigationRef.current) {
        navigationRef.current?.navigate(name as keyof MainStackParamList, params);
    }
};
