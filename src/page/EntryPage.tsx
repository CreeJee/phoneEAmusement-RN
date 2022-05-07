import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { PageWrapper } from '../component/atom/PageWrapper';

export function EntryPage() {
    useEffect(() => {
        // alert('asdf');
    }, []);
    return (
        <PageWrapper>
            <View style={{ flex: 1, display: 'flex' }}>
                <Text style={{ fontSize: 22, color: '#000' }}>EntryPage</Text>
            </View>
        </PageWrapper>
    );
}
