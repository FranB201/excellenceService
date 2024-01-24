import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flex: 1, // Toma el espacio disponible
        margin: 10, // Espaciado uniforme alrededor de la tarjeta
        height: 170, // Altura fija, pero podrías hacerla dinámica también
        justifyContent: 'center', // Centra el contenido en el eje vertical
        alignItems: 'center', 
        width: '40%'// Centra el contenido en el eje horizontal
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
    fullWidthCard: {
      width: '100%'

    },
    cardTitleFullWidth: {
      textAlign: 'center',
      fontSize: 18, // Aumentar el tamaño de la fuente
      fontWeight: 'bold', // Hacer el texto más grueso
      color: '#333', // Cambiar el color si es necesario para mejorar el contraste
      textShadowColor: 'rgba(0, 0, 0, 0.17)', // Opcional: Agregar sombra al texto
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10
    }
    // Estilos adicionales para rating, etc.
  });
  