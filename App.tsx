import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Router } from 'src/router/entry';

export function App() {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
}
