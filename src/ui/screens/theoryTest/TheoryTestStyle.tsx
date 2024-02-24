import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F8FF', // Un color de fondo suave

    },

    scrollViewContainer: {
        flexGrow: 1, // Asegura que el contenedor pueda expandirse para ajustarse al contenido
        justifyContent: 'center', // Centra el contenido cuando no es más alto que la pantalla
        paddingHorizontal: 20, // Agrega relleno horizontal para no pegar el contenido a los bordes
    },
    

    mainContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8F8FF',


    },

    closeButton:{

    },

    


});