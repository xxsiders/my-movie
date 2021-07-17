import { useTheme } from '@react-navigation/native'
import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Configs } from '../constants/Configs'
import Layout from '../constants/Layout'

export default function CreditsList(props: any) {
    const styles = theme()

    const renderItem = ({ item }) => {
        return <View key={item.id} style={styles.actorContainer}>
            <Image defaultSource={require('../assets/image/placeholder.png')} style={styles.image} source={{ uri: Configs.imageBaseUrl + item.profile_path }} />
            <Text style={styles.title}>{item.name}</Text>
        </View>
    }

    return <View>
        <FlatList showsHorizontalScrollIndicator={false} keyExtractor={item => item.id} contentContainerStyle={styles.container} horizontal data={props.data} renderItem={renderItem} />
    </View>
}

const theme = () => {
    const { colors } = useTheme()
    return StyleSheet.create({
        container: {
            paddingHorizontal: '5%',
            marginTop: 10,
            paddingBottom: 200
        },
        actorContainer: {
            alignItems: 'center',
            marginRight: 10,
            width: 100
        },
        image: {
            height: 80,
            width: 80,
            borderRadius: 40
        },
        title: {
            textAlign: 'center',
            marginTop: 4,
            fontFamily: Layout.fontFamily.InterMedium,
            fontSize: Layout.fonts.h6,
            color: colors.text,
        }
    })
}