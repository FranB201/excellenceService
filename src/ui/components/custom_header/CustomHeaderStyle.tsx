import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
      height: 120, // Altura del encabezado personalizado
      backgroundColor: 'white', // O transparencia si la imagen tiene color
      flexDirection: 'row', // Asegura que el botón esté alineado horizontalmente
      alignItems: 'center', // Alinea verticalmente
      width:'100%'
    },
    headerBackground: {
      ...StyleSheet.absoluteFillObject, // Para que la imagen de fondo ocupe todo el contenedor
      width: '100%',
      height: '100%',
    },
    headerTitle: {
      fontWeight: 'bold',
      fontSize: 14,
      marginTop:35,
      marginLeft:20,
      color: '#262a2e'
      // Otros estilos para el título
    },
    menuIcon: {
        marginLeft: 10, // Espacio desde el lado izquierdo
        fontSize: 30, // Tamaño del icono del menú
        color:'#282c30'
        // Agrega más estilos para el icono aquí
      },
  });