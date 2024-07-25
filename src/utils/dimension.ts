import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const dp = (size: number) => {
    return (width * size) / 360;
};
