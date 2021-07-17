import { useTheme } from '@react-navigation/native'
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Categroy } from '../../types'
import { Configs } from '../constants/Configs'
import Layout from '../constants/Layout'

export default function TopPicker(props: any) {
    const styles = theme()

    const menuItems = [
        { name: 'Upcomming', value: Configs.listFilter.upcoming },
        { name: 'Popular', value: Configs.listFilter.popular },
        { name: 'Top Rated', value: Configs.listFilter.best },
    ]

    const renderItem = ({ item, index }: { item: Categroy, index: number }) => {
        return <TouchableOpacity key={index} onPress={() => props.setCurrentCategory(item.value)} style={[styles.buttonContainer, props.currentCategory === item.value && styles.selectedButton]}>
            <Text style={[styles.title, props.currentCategory === item.value && styles.selectedTitle]}>{item.name}</Text>
        </TouchableOpacity>
    }

    return <View style={styles.container}>
        <FlatList horizontal contentContainerStyle={styles.contentContainer} data={menuItems} renderItem={renderItem} />
    </View>

}

const theme = () => {
    const { colors } = useTheme()
    return StyleSheet.create({
        container: {
            marginBottom: 16,
        },
        contentContainer: {
            paddingHorizontal: '5%',
        },
        buttonContainer: {
            marginRight: 8,
            height: 30,
            width: 90,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 40,
            backgroundColor: colors.border,
        },
        title: {
            fontFamily: Layout.fontFamily.InterMedium,
            fontSize: Layout.fonts.h6,
            color: colors.text,
        },
        selectedButton: {
            backgroundColor: colors.primary
        },
        selectedTitle: {
            color: colors.background
        }
    })
}