import { StyleSheet } from "react-native";


export const HomeStyle = StyleSheet.create({
    
    container:{
      flex: 1,
      paddingTop:10,
      backgroundColor:'#f6fff5'
    },

    card: {
      // Estilos para la tarjeta
      flexDirection: 'row',
      padding: 10,
      marginVertical: 10,
      backgroundColor: 'white',
      borderRadius: 6,
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },
    },
    avatar: {
      // Estilos para el avatar
      width: 40,
      height: 40,
      borderRadius: 20,
    },
    cardContent: {
      // Estilos para el contenido de la tarjeta
      marginLeft: 10,
    },
    name: {
      // Estilos para el nombre
      fontWeight: 'bold',
    },
    date: {
      // Estilos para la fecha
      fontSize: 12,
      color: 'gray',
    },
    message: {
      // Estilos para el mensaje
    },
    
  });
  