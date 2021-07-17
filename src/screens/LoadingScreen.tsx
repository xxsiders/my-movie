import { useTheme } from '@react-navigation/native'
import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

export default function LoadingScreen() {

    const { colors } = useTheme()
    return (
        <View style={styles.container}>
            <ActivityIndicator color={colors.primary} size='large' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})