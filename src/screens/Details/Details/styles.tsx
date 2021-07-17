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
            fontSize: Layout.fonts.h3,
            color: colors.text,
            marginVertical: 12,
            alignSelf: 'center',
            marginHorizontal: '10%',
            textAlign: 'center'
        },
        backContainer: {
            padding: 4,
            marginHorizontal: '5%',
            marginVertical: 10
        },
        icon: {
            fontSize: Layout.fonts.h2,
            opacity: .7
        },
        image: {
            width: 'auto',
            height: Layout.window.height * .3,
            aspectRatio: 12 / 16,
            borderRadius: 10,
            alignSelf: 'center',
            marginBottom: 12,
            minHeight: 250
        },
        vote: {
            color: colors.primary,
            fontFamily: Layout.fontFamily.InterBold,
            fontSize: Layout.fonts.h4,
            alignSelf: 'center',
        },
        subTitle: {
            fontFamily: Layout.fontFamily.InterMedium,
            fontSize: Layout.fonts.h4,
            color: colors.text,
            marginHorizontal: '5%',
            marginTop: 24
        },
        overview: {
            fontFamily: Layout.fontFamily.InterRegular,
            fontSize: Layout.fonts.h5,
            color: colors.text,
            marginHorizontal: '5%',
            marginTop: 4
        },
        genre: {
            backgroundColor: colors.border,
            borderRadius: 20,
            padding: 8,
            margin: 4
        },
        genreTitle: {
            fontFamily: Layout.fontFamily.InterMedium,
            fontSize: Layout.fonts.h6,
        },
        genreContainer: {
            flexWrap: 'wrap',
            flexDirection: Layout.styles.flexDirection,
            marginVertical: 4,
            paddingHorizontal: '5%'
        }
    })
}

export default styles