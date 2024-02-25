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
      fontSize: 20,
      marginTop: 35,
      marginLeft: 10,
      color: 'rgba(0, 0, 0, 0.7)',
      fontFamily: 'Montserrat'
      // Otros estilos para el título
    },
    menuIcon: {
        marginLeft: 20,
        marginTop:35, // Espacio desde el lado izquierdo
        fontSize: 35, // Tamaño del icono del menú
        color:'#567568'
        // Agrega más estilos para el icono aquí
      },
  });