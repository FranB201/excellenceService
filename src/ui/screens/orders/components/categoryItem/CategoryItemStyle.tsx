import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  articuloNombre: {
    fontSize: 16,
    color: '#567568',
    borderBottomWidth: 1,
    borderBottomColor: '#daebe8',
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    backgroundColor: '567568',
  },
  checkboxContainer: {
    padding: 2,
  },
  buttonsContainer: {
    flexDirection: 'row', // Alinea los botones horizontalmente
  },
});
