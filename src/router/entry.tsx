import React from 'react';
import { EntryPage } from 'src/page/EntryPage';
import { StackNavigator } from './navigator';

export function Router() {
    return (
        <StackNavigator.Navigator initialRouteName="/">
            <StackNavigator.Screen name="/" component={EntryPage} />
        </StackNavigator.Navigator>
    );
}
