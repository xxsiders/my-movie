import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Genre } from '../../../../types';
import CreditsList from '../../../components/CreditsList';
import { Configs } from '../../../constants/Configs';
import LoadingScreen from '../../LoadingScreen';
import theme from './styles';

export default function index(props: any) {
    const styles = theme()
    const { loading, movie, data } = props

    if (loading) return <LoadingScreen />

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backContainer}>
                    <Ionicons name='chevron-back' style={styles.icon} />
                </TouchableOpacity>
                <Image defaultSource={require('../../../assets/image/placeholder.png')} style={styles.image} source={{ uri: Configs.imageBaseUrl + movie.poster_path }} />
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.vote}>{movie.vote_average * 10}%</Text>

                <Text style={styles.subTitle}>Overview</Text>
                <Text style={styles.overview}>{data.overview}</Text>

                <Text style={styles.subTitle}>Genres</Text>
                <View style={styles.genreContainer}>
                    {movie.genres.map((item: Genre) => <View style={styles.genre} key={item.id}>
                        <Text style={styles.genreTitle}>{item.name}</Text>
                    </View>)}
                </View>

                <Text style={styles.subTitle}>Credits</Text>
                <CreditsList data={data.credits} />
            </ScrollView>
        </SafeAreaView>
    )
}

