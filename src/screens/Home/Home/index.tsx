import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoviesList from '../../../components/MoviesList';
import TopPicker from '../../../components/TopPicker';
import theme from './styles';

export default function index(props: any) {
    const styles = theme()

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Movies</Text>
            <TopPicker {...props} />
            <MoviesList {...props} />
        </SafeAreaView>
    )
}

