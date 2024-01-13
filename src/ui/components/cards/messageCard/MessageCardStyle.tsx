import { StyleSheet } from "react-native";

export const MessageCardStyle = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF', // Fondo blanco para la tarjeta
        borderRadius: 6, // Bordes redondeados
        padding: 10, // Espaciado interno
        marginHorizontal: 10,
        marginBottom: 5,
        shadowOpacity: 0.1, // Sombra ligera para la tarjeta
        shadowRadius: 5, // Radio de la sombra
        shadowOffset: { height: 3, width: 3 }, // Desplazamiento de la sombra
        elevation: 3, // Elevación para Android
    },
    header: {
        flexDirection: 'row', // Disposición horizontal del encabezado
        alignItems: 'center', // Centrar elementos verticalmente
        marginBottom: 5, // Espaciado entre el encabezado y el texto del mensaje
    },
    avatar: {
        width: 40, // Tamaño del avatar
        height: 40, // Tamaño del avatar
        borderRadius: 20, // Redondear para hacerlo circular
        marginRight: 10, // Espaciado a la derecha del avatar
    },
    headerText: {
        flex: 1, // Tomar el espacio restante en el encabezado
    },
    name: {
        fontWeight: 'bold', // Nombre en negrita
        fontSize: 16, // Tamaño de fuente del nombre
    },
    date: {
        fontSize: 14, // Tamaño de fuente de la fecha
        color: '#6e6e6e', // Color gris para la fecha
    },
    messageText: {
        fontSize: 14, // Tamaño de fuente del mensaje
        color: '#333333', // Color oscuro para el texto del mensaje
        marginBottom: 5, // Espaciado debajo del mensaje
        padding: 10
    }
});
