import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { EamusementHcef } from 'react-native-eamusement';
import { PageWrapper } from '../component/atom/PageWrapper';

export function BroadcastInner() {
    useEffect(() => {
        const init = async () => {
            EamusementHcef.setSID('02FE000000000000');
            const t0 = performance.now();
            await EamusementHcef.enableService();
            const t1 = performance.now();
            console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
        };
        init();
        return () => {
            EamusementHcef.disableService();
        };
    }, []);
    return (
        <Text>BroadcastNFC</Text>
    );
}

export function BroadcastCard() {
    return (
        <PageWrapper>
            <BroadcastInner />
        </PageWrapper>
    );
}
