import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RouterParamList } from './setting';

export const useTypedNavigation = () => useNavigation<NavigationProp<RouterParamList>>();
