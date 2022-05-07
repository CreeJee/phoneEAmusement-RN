import analytics from '@react-native-firebase/analytics';

export const createLogScreen = async (currentRouteName: string) => {
    await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
    });
};
