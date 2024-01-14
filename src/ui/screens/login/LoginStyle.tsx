import { Dimensions, Platform, StyleSheet } from "react-native";


export const loginStyle = StyleSheet.create({


    logoAndQuoteContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '40%', // Ajusta según necesites para bajar el logo y el quote
      },

    quote: {

        color: 'white',
        fontSize: 18,
        margin: 20,
        fontStyle: 'italic',
        textAlign: 'center'
    },

    loginInputsContainer: {
        alignItems: 'center', // Centra los hijos horizontalmente
        justifyContent: 'center', // Centra los hijos verticalmente
        flex: 1, // Ocupa todo el espacio disponible
    },


    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    inputField: {
        height: 40,
        color: 'black',
        width: '75%',
        borderColor: 'transparent',
        borderBottomColor: '#ADB5BD',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    inputFieldIOS: {
        borderBottomWidth: 1,
        borderBottomColor: '#ADB5BD',
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '75%',
    },


    button: {
        height: 47,
        width: 330,
        backgroundColor: '#525F7F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },

    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',

    },





});