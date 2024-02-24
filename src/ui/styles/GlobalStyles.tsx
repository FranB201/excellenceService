import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8ff',
  },
  button: {
    height: 47,
    backgroundColor: '#567568',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20, // Espacio después del último campo de entrada
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  pl5: {
    paddingLeft: 5,
  },
  pl4: {
    paddingLeft: 4,
  },

  pl3: {
    paddingLeft: 3,
  },

  pr5: {
    paddingRight: 5,
  },
  pr4: {
    paddingRight: 4,
  },

  pr3: {
    paddingRight: 3,
  },
  p5: {
    padding: 5,
  },
  p4: {
    padding: 4,
  },

  p3: {
    padding: 3,
  },
  // Añade más estilos globales según necesites
});
