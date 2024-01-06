import { StyleSheet } from "react-native";


export const logoStyle = StyleSheet.create({
    
    logo_Position: {

        justifyContent: 'center', 
        alignItems: 'center',
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold',
        textShadowColor: 'black', // Agregar una sombra al texto
        textShadowOffset: { width: 1, height: 1 }, // Ajustar la sombra
        textShadowRadius: 5, // Ajustar la sombra
    },

});