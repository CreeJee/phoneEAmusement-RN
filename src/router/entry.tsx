import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import React, { useCallback, useRef } from 'react';
import { EntryPage } from '../page/EntryPage';
import { createLogScreen } from '../third-party/firebase';
import { routingInstrumentation, sentryInit } from '../third-party/sentry';
import { StackNavigator } from './navigator';
import { RouterParamList } from './setting';

// Construct a new instrumentation instance.
// This is needed to communicate between the integration and React
sentryInit();
export function Router() {
    const navigationRef = useRef<NavigationContainerRef<RouterParamList>>(null);
    // 원래 재귀로 keyof 를 해야 하지만 그렇게 중요한 부분도 아니고 현제 이상태로 냅둠
    // @TODO
    const routeNameRef = useRef<string>();
    const onRouteReadySetup = useCallback(() => {
        routingInstrumentation.registerNavigationContainer(navigationRef);
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
    }, []);
    const onRouteStateChangeSetup = useCallback(async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

        if (previousRouteName !== currentRouteName) {
            createLogScreen(currentRouteName ?? 'UNKNOWN_SCREEN');
        }
        routeNameRef.current = currentRouteName;
    }, []);
    return (

        <NavigationContainer<RouterParamList>
            ref={navigationRef}
            onReady={onRouteReadySetup}
            onStateChange={onRouteStateChangeSetup}
        >
            <StackNavigator.Navigator initialRouteName="/">
                <StackNavigator.Screen
                    name="/"
                    component={EntryPage}
                    options={{ title: 'App' }}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}
