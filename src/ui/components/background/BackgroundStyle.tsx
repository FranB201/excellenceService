import { StyleSheet } from "react-native";
import { width, height } from "./Background";


export const backgroundStyle = StyleSheet.create({
    backgroundImage: {

        flex:1,
        width: width, 
        height: height,
        justifyContent: 'center', 
        alignItems: 'center',
       
    },
    overlay: {

        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)',

    },

});