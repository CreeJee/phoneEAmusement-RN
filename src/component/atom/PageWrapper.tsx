import React, { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export type PageWrapperProps = {};
export function PageWrapper({ children }: PropsWithChildren<PageWrapperProps>) {
    return <SafeAreaView style={{ flex: 1 }}>{children}</SafeAreaView>;
}
