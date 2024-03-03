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
    fontSize:15,
    color: '#567568', 
  },
  headerStyleProvider: {
    marginTop:10
  },
  contentStyle: {
    padding: 10,
    backgroundColor: '#ffffff', 
  },
  articuloNombre: {
    fontSize: 16,
    color: '#567568',
    borderBottomWidth: 1,
    borderBottomColor: '#daebe8',
    paddingTop: 5,
    paddingBottom: 5,
  },
});
