import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from './styles';

export default function index(props: any) {
    const styles = theme()

    return (
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    )
}

