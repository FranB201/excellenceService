import { Dimensions, Platform, StyleSheet } from "react-native";


export const loginStyle = StyleSheet.create({
    
    quote: {

        color: 'white',
        fontSize: 18,
        margin: 20,
        fontStyle: 'italic',
        textAlign: 'center'
    },

    inputField: {

        height: 40,
        color:'black',
        width: '90%',
        borderColor:'transparent',
        borderBottomColor:'#ADB5BD',
        borderWidth: 1,
        marginBottom: 10,
        marginRight:20,
        paddingHorizontal: 10,


    },
    
    inputContainer:  {
        flexDirection: 'row', 
        alignItems: 'center',
        
    },

    inputFieldIOS: {
        // Estilo específico para dispositivos iOS
        borderWidth: 0,
        borderBottomColor: '#ADB5BD',
        borderBottomWidth: 1,
        
        marginBottom: 10,
        paddingHorizontal: 10,
        marginRight:10,
        ...(Platform.OS === 'ios' && { width: Dimensions.get('window').width - 150 }),

      },

      button:{
        height: 47,
        width: 290,
        backgroundColor: '#525F7F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom:20,
    },

    buttonText: {
        fontSize:18,
        color:'white',
        fontWeight:'bold',

    }, 

    loginInputsContainer: {

       

    }



});