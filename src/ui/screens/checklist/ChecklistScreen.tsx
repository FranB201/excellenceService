import React from 'react';
import {View, FlatList, ListRenderItem, Text} from 'react-native';
import {CheckTask} from '../../components/checkTask/CheckTask'; // Asegúrate de importar CheckTask
import {styles} from './ChecklistStyle';
import WebView from 'react-native-webview';

interface Task {
  type: 'task' | 'header';
  description?: string;
  title?: string;
}

const tasks: Task[] = [
  {type: 'header', title: 'Apertura'},
  {type: 'task', description: 'Sacar cojines a la terraza'},
  {type: 'task', description: 'Encender lavabajillas'},
  {type: 'task', description: 'Hacer zumo de naranja'},
  {type: 'header', title: 'Mañanas 10-13h'},
  {
    type: 'task',
    description: 'Revisar/rellenar las estaciones de los camareros',
  },
  {type: 'task', description: 'Preparar ali-oli'},
  {type: 'task', description: 'Limpiar máquina de zumos'},
  {type: 'header', title: 'Medio-día 13-17h'},
  {type: 'task', description: 'Preparar cubiteras con vinos'},
  {type: 'task', description: 'Cambiar basuras'},

  {type: 'header', title: 'Tarde-noche 17-00h'},
  {
    type: 'task',
    description: 'Cambiar agua lavabajillas y rellenar detergente/abrillatador',
  },
  {type: 'task', description: 'Rellenar neveras'},
  {type: 'task', description: 'Pulir cubiertos'},

  {type: 'header', title: 'Cierre'},
  {type: 'task', description: 'Organizar almacen'},
  {type: 'task', description: 'Cerrar caja y revisar inventario'},
];

const renderTask: ListRenderItem<Task> = ({item}) => {
  if (item.type === 'header') {
    return <Text style={styles.headerStyle}>{item.title}</Text>;
  } else if (item.type === 'task') {
    return <CheckTask description={item.description!} />;
  }
  return null;
};

// Componente ChecklistScreen
export const ChecklistScreen: React.FC = () => {
  return (

    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
           

  );
};
