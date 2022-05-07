import * as Sentry from '@sentry/react-native';

export const routingInstrumentation = new Sentry.ReactNavigationInstrumentation();
export const sentryInit = () => {
    Sentry.init({
        dsn: 'https://e9a6d5d1652542c9b91a9bd7a055a339@o1235765.ingest.sentry.io/6385837',
        // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
        // We recommend adjusting this value in production.
        tracesSampleRate: 1.0,
        integrations: [
            new Sentry.ReactNativeTracing({
            // Pass instrumentation to be used as `routingInstrumentation`
                routingInstrumentation,
            // ...
            }),
        ],
    });
};
