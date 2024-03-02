import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  modalContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    overflow: 'hidden', // Esto asegura que la barra de color no se desborde de los bordes redondeados
  },

  modalContent: {
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },

  // Añade un nuevo estilo para la barra de color
  colorBar: {
    height: 40, // Altura de la barra de color
    backgroundColor: '#b5d4cc', // Color de la barra de color
    width: '100%', // Ancho al 100% para que cubra todo el ancho del modal

  },
  closeButton: {
    position: 'absolute', // Esto posiciona la X sobre la barra de color
    right: 10,
    top: 10,
    zIndex: 10, // Esto asegura que el botón esté sobre la barra de color
  },


});
