module.exports = function config(api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        plugins: [
            '@emotion',
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-transform-runtime', { helpers: true }],
            // ['transform-remove-console', { exclude: ['error', 'warn'] }],
            [
                'transform-inline-environment-variables',
                {
                    include: [
                        'DEPLOY_MODE',
                        // appcenter
                        'APPCENTER_BUILD_ID',
                        'APPCENTER_BRANCH',
                        'APPCENTER_SOURCE_DIRECTORY',
                        'APPCENTER_OUTPUT_DIRECTORY',
                        'APPCENTER_TRIGGER',
                        // appcenter-rn
                        'APPCENTER_REACTNATIVE_PACKAGE',
                    ],
                },
            ],
        ],
    };
};
