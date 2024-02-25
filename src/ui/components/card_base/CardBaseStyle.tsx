import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flex: 1, // Toma el espacio disponible
        margin: 10, // Espaciado uniforme alrededor de la tarjeta
        height: 190, // Altura fija, pero podrías hacerla dinámica también
        justifyContent: 'center', // Centra el contenido en el eje vertical
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
        paddingTop: 10,
        fontWeight: '600',
        color: 'rgba(0, 0, 0, 0.7)',

    },

    cardSubtitle: {
      
      color: 'rgba(0, 0, 0, 0.7)',

    },
    
    fullWidthCard: {
      width: '100%'

    },
    cardTitleFullWidth: {
      textAlign: 'left',
      fontSize: 18, // Aumentar el tamaño de la fuente
      fontWeight: 'bold', // Hacer el texto más grueso
      color: '#333', // Cambiar el color si es necesario para mejorar el contraste
      textShadowColor: 'rgba(0, 0, 0, 0.17)', // Opcional: Agregar sombra al texto
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10
    }
    // Estilos adicionales para rating, etc.
  });
  