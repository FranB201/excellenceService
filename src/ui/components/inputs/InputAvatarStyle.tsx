import { StyleSheet } from "react-native";

export const InputAvatarStyle = StyleSheet.create({
    
    board: {
      flexDirection: 'row',
      padding: 10,
      margin: 8,
      backgroundColor: 'white',
      borderRadius: 6,
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0 },

    },
      image: {
        // Estilos para la imagen
        width: 50,
        height: 50,
        borderRadius: 25,
      },
      input: {
        flex: 1, // Permite que el input se expanda para llenar el espacio
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,
        marginLeft: 10,
        // No fijes un width para permitir que el input se expanda
      },
      // Añade un nuevo estilo para el botón de enviar
      sendButton: {
        padding: 10, // Añade un poco de padding para facilitar la pulsación
        justifyContent: 'center', // Centra el ícono verticalmente
      },
    });
