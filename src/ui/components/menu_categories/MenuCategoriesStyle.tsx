import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
  },

  text: {
    fontSize: 16,
  },
  categoryButton: {
    marginRight: 16,
    marginBottom: 5,
    paddingHorizontal: 12,
    backgroundColor: '#ffffff', // Botones con fondo blanco
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#ddd', // Bordes sutiles para los botones
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000', // Sombra para dar profundidad
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    height:35,
  },
  categoryText: {
    color: '#333',
    fontSize: 14,
    fontWeight: '600',
  },

  selectedButton: {
    // Estilos para el botón seleccionado
    backgroundColor: '#525F7F', // Cambia el color para resaltar
    color: '#fff',
  },
  selectedText: {
    // Estilos para el botón seleccionado
    color: '#fff',
  },
});
