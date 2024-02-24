import { Dimensions, Platform, StyleSheet } from "react-native";


export const loginStyle = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#b5d4cc',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: '20%'
    },


    logoAndQuoteContainer: {
        marginTop: 80, // Ajusta según la necesidad para el logo y la cita
        alignItems: 'center',
        marginBottom: 60, // Espacio antes de los campos de entrada

    },
    quote: {
        color: "rgba(0, 0, 0, 0.7)",
        fontSize: 18,
        marginBottom: 20,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    loginInputsContainer: {
        width: 370,
        height: 400,
        borderRadius: 25,
        backgroundColor: 'rgba(248, 248, 255, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        marginTop: Dimensions.get('window').height / 2 - 400, // Para que el formulario aparezca a media altura
        // Estilo para iOS
        ...(Platform.OS === 'ios' && { width: Dimensions.get('window').width - 50 }),

    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15, // Espacio entre campos de entrada
        paddingHorizontal: 10,

    },
    inputField: {
        height: 40,
        color: "rgba(0, 0, 0, 0.7)",
        borderColor: 'transparent',
        borderBottomColor: "rgba(0, 0, 0, 0.7)",
        borderWidth: 1,
        paddingHorizontal: 10,
        flex: 1, // Asegura que el input ocupe el espacio restante
    },
    icon: {
    },
    button: {
        height: 47,
        width: '95%', // Ancho del botón
        backgroundColor: '#567568',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 20, // Espacio después del último campo de entrada
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },

    forgotPassword:{

        alignSelf:'center',
        color:'#8491A3',
        marginBottom:20

    },

    buttonForget: {

        fontSize:18,
        color:'#8491A3'

    },



});