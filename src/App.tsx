import * as Sentry from '@sentry/react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Router } from './router/entry';

function InnerApp() {
    return (
        <SafeAreaProvider>
            <Router />
        </SafeAreaProvider>
    );
}
export const App = Sentry.wrap(InnerApp);
