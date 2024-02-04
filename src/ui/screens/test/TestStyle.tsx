import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-between', // Esto ayuda a empujar el contenido hacia abajo


    },
    questionContainer: {

    },

    questionText: {
        fontSize: 20
    },

    buttonsContainer: {
        // Si necesitas estilos específicos para el contenedor de los botones
    },

    optionButton: {
        marginVertical: 5,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 15,
        alignItems: 'center',
    },
    progressBar: {
        transform: [{ scaleY: 2 }], // Ajusta el valor para cambiar la "altura"
        marginTop: 10
    },
    closeButton: {
    },

    feedbackContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      feedbackMessage: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      continueButton: {
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
      },
      continueButtonText: {
        color: 'black',
        fontSize: 16,
      },
});