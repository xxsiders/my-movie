import { useTheme } from '@react-navigation/native';
import { StyleSheet } from "react-native";
import Layout from '../../../constants/Layout';

const styles = () => {
    const { colors } = useTheme()
    return StyleSheet.create({
        container: {
            flex: 1,
        },
        title: {
            fontFamily: Layout.fontFamily.InterBold,
            fontSize: Layout.fonts.h1,
            color: colors.text,
            marginVertical: 10,
            marginHorizontal: '5%'
        },
    })
}

export default styles