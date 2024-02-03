import {Platform, StatusBar, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch', // Cambiado de 'center' a 'stretch'
    backgroundColor: '#f7fff6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10, // Añadir un margen superior si es necesario
  },
  backButton: {
    marginRight: 10, // Espacio entre el ícono de regreso y el campo de búsqueda
  },
  inputText: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f7fff6',
  },
  list: {
    flex: 1, // Asegurarse de que la lista ocupe todo el espacio disponible
  },
  proveedorContainer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#b5d4cc',
    borderRadius: 5,
  },
  proveedorNombre: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#000000b3',
  },
  articuloNombre: {
    fontSize: 16,
    color: '#567568', // Color oscuro para el texto del artículo
    borderBottomWidth: 1,
    borderBottomColor: '#daebe8', // Línea de separación suave
    paddingTop: 5,
    paddingBottom: 5,
  },

  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#daebe8', // Un tono más claro del color corporativo
    borderBottomWidth: 1,
    borderBottomColor: '#c1cec3', // Un tono más oscuro para el borde
  },
  titleStyle: {
    fontWeight: 'bold',
    color: '#567568', // Una versión más oscura del color corporativo para el texto
  },
  iconStyle: {
    // Considera usar un paquete como react-native-vector-icons para un diseño más pulido
    fontSize: 18,
    color: '#567568',
  },
  contentStyle: {
    padding: 10,
    backgroundColor: '#ffffff', // Fondo blanco para el contenido expandido
  },
});
