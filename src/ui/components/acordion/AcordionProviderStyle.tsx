import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  articuloNombre: {
    fontSize: 16,
    color: '#567568', // Color oscuro para el texto del artículo
    borderBottomWidth: 1,
    borderBottomColor: '#daebe8', // Línea de separación suave
    paddingTop: 5,
    paddingBottom: 5,
  },
});
