import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      // Estilos para el contenedor de la pregunta
    },
    questionText: {

        fontSize: 20,
        marginVertical: 40,
        marginBottom: 80, 

    },
    optionButton: {
      // Estilos para los botones de las opciones
      marginVertical: 5,
      padding: 20,
      backgroundColor: '#f0f0f0',
      borderRadius: 15,
      alignItems: 'center',
    },

    optionText: {
        // Estilos para el texto dentro de los botones de opción
      },
      verifyButton: {
        marginTop: 20,
        backgroundColor: 'blue', // Ajusta a tu preferencia
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
      },
      verifyButtonText: {
        color: 'white', // Ajusta a tu preferencia
        fontSize: 18,
      },
  });