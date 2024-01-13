import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flex: 1, // Toma el espacio disponible
        margin: 10, // Espaciado uniforme alrededor de la tarjeta
        height: 170, // Altura fija, pero podrías hacerla dinámica también
        justifyContent: 'center', // Centra el contenido en el eje vertical
        alignItems: 'center', // Centra el contenido en el eje horizontal
    },
    cardImage: {
      width: '100%',
      height: 140,
      borderRadius:16
      // Estilos para la imagen
    },
    cardTitle: {
        flex: 1, 
      // Estilos para el título
    },
    // Estilos adicionales para rating, etc.
  });
  