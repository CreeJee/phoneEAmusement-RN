import { useNavigation } from '@react-navigation/core';
import { RouterParamList } from './setting';

export const useTypedNavigation = () => useNavigation<RouterParamList>();
