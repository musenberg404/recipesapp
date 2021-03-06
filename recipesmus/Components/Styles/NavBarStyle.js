import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Theme/Index';


export default StyleSheet.create({
    navBar: {
        marginTop: Metrics.statusBarHeight,
        height: Metrics.navBarHeight,
        backgroundColor: Colors.whiteFull,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        display: "flex"
    },
    title: {
        ...Fonts.style.recipeNameCard,
        fontWeight: "bold"
    },
    favico: {
        fontSize: Metrics.navBarIconSIze
    },
    leftContainer: {
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"
    },
    rightContainer: {
        width: Metrics.buttonSize,
        alignItems: "center",
        justifyContent: "center"
    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    favorite: {
        color: Colors.darkOrange
    }
});