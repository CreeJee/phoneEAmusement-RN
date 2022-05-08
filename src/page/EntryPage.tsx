import React, { useCallback } from 'react';
import { Button, Text, View } from 'react-native';
import { PageWrapper } from '../component/atom/PageWrapper';
import { useTypedNavigation } from '../router/hook';

export function EntryPage() {
    const navigation = useTypedNavigation();
    const onRoute = useCallback(() => {
        navigation.navigate('/broadcastCard', {});
    }, [navigation]);
    return (
        <PageWrapper>
            <View style={{ flex: 1, display: 'flex' }}>
                <Text style={{ fontSize: 22, color: '#000' }}>EntryPage</Text>
                <Button title="broadcast test" onPress={onRoute} />
            </View>
        </PageWrapper>
    );
}
