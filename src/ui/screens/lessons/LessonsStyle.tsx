import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

// Suponiendo que tienes acceso a las dimensiones de la pantalla para el ancho de la tarjeta
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({

  scrollView: {
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#f6fff5'
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // Centra el contenido verticalmente en el espacio que toma
    alignItems: 'center', // Centra horizontalmente
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000000b6'
  },
  cardSubtitle: {
    fontSize: 24,
    color: 'gray',
    marginTop: 4,
  },

  buttonContainer: {
    flexDirection: 'column',

  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#567568',
    borderColor: 'transparent',
    borderRadius: 6,
    borderWidth: 0,
    elevation: 3,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 16,
    shadowColor: '#2D2342',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: windowWidth - 32,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontWeight:'bold'
  },
});