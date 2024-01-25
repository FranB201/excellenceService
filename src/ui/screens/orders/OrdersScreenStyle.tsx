import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        flex: 1,
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
      },
      inputBusqueda: {
        flexDirection: 'row',
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '90%', // O un ancho específico si prefieres
      },
  inputText: {
    flex: 1,
  },
  proveedorContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  proveedorNombre: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  articuloNombre: {
    fontSize: 16,
    color: 'gray',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  backIcon: {
    marginRight: 10, // Espacio entre el ícono de regreso y el campo de búsqueda
  },
});
