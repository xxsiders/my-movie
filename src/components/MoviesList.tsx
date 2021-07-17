import { useTheme } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Movie } from '../../types'
import { Configs } from '../constants/Configs'
import Layout from '../constants/Layout'
import LoadingScreen from '../screens/LoadingScreen'

export default function MoviesList(props: any) {
    const styles = theme()

    const renderItem = ({ item }: { item: Movie }) => {
        const relaeaseDate = new Date(item.release_date)
        return <TouchableOpacity key={item.id} activeOpacity={.9} style={styles.card}>
            <View style={styles.block}>
                <Image defaultSource={require('../assets/image/placeholder.png')} style={styles.image} source={{ uri: Configs.imageBaseUrl + item.poster_path }} />
                <View style={styles.content}>
                    <Text style={styles.title}>{item.original_title}</Text>
                    <Text style={styles.date}>{relaeaseDate.toDateString()}</Text>
                    <Text style={styles.vote}>{item.vote_average * 10}%</Text>
                    <View style={styles.genreContainer}>
                        {item.genres.map(item => <View style={styles.genre} key={item.id}>
                            <Text style={styles.genreTitle}>{item.name}</Text>
                        </View>)}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    }

    return <View style={styles.container}>
        {props.loading ? <LoadingScreen /> : <FlatList keyExtractor={item => item.id.toString()} contentContainerStyle={styles.contentContainer} data={props.data} renderItem={renderItem} />}
    </View>
}

const theme = () => {
    const { colors } = useTheme()
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        contentContainer: {
            paddingHorizontal: '5%',
            marginVertical: 20,
            paddingBottom: 40
        },
        card: {
            marginVertical: 6,
            backgroundColor: colors.card,
            padding: 10,
            borderRadius: 8,
            overflow: 'hidden'
        },
        block: {
            flexDirection: Layout.styles.flexDirection,
        },
        image: {
            height: 130,
            width: 90,
            borderRadius: 10,
            margin: 8
        },
        title: {
            fontFamily: Layout.fontFamily.InterBold,
            fontSize: Layout.fonts.h5,
            color: colors.text,
            opacity: 0.85,
            marginTop: 16,
        },
        date: {
            fontFamily: Layout.fontFamily.InterMedium,
            fontSize: Layout.fonts.h6,
            color: colors.text,
            opacity: 0.6,
            marginTop: 6,
        },
        content: {
            flex: 1,
            marginHorizontal: 8
        },
        vote: {
            color: colors.primary,
            fontFamily: Layout.fontFamily.InterBold,
            fontSize: Layout.fonts.h4,
            position: 'absolute',
            right: 0,
            bottom: 2
        },
        genre: {
            backgroundColor: colors.border,
            borderRadius: 20,
            paddingHorizontal: 6,
            paddingVertical: 6,
            margin: 2
        },
        genreTitle: {
            fontFamily: Layout.fontFamily.InterMedium,
            fontSize: Layout.fonts.h6,
        },
        genreContainer: {
            flexWrap: 'wrap',
            flexDirection: Layout.styles.flexDirection,
            marginVertical: 4
        }
    })
}