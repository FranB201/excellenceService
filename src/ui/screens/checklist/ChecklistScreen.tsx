import React from 'react';
import { View, FlatList, ListRenderItem, Text, ScrollView, Dimensions } from 'react-native';
import { CheckTask } from '../../components/checkTask/CheckTask'; // Asegúrate de importar CheckTask
import { styles } from './ChecklistStyle';
import { CustomText } from '../../components/atoms/customText/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

interface Task {
  type: 'task' | 'header';
  description?: string;
  title?: string;
}

interface Checklist {
  title: string;
  tasks: Task[];
}

const checklists: Checklist[] = [

  {
    title: 'Checklist',
    tasks: [
      { type: 'header', title: 'Apertura' },
      { type: 'task', description: 'Barrer tarima' },
      { type: 'task', description: 'Limpiar mesas y sillas' },
      { type: 'task', description: 'Encender lavabajillas' },
      { type: 'task', description: 'Cortar fruta para bebidas' },
      { type: 'header', title: 'Mañanas 10-13h' },
      { type: 'task', description: 'Revisar/rellenar las estaciones de los camareros', },
      { type: 'task', description: 'Abrir sombrillas' },
      { type: 'task', description: 'Realizar la limpieza pertinente' },
      { type: 'header', title: 'Medio-día 13-17h' },
      { type: 'task', description: 'Preparar cubiteras con vinos' },
      { type: 'task', description: 'Cambiar basuras' },

      { type: 'header', title: 'Tarde-noche 17-00h' },
      {
        type: 'task',
        description: 'Cambiar agua lavabajillas y rellenar detergente/abrillatador',
      },
      { type: 'task', description: 'Rellenar neveras' },
      { type: 'task', description: 'Pulir cubiertos' },

      { type: 'header', title: 'Cierre' },
      { type: 'task', description: 'Organizar almacen' },
      { type: 'task', description: 'Cerrar caja y revisar inventario' },
    ]
  },
  {
    title: 'Checklist Terraza',
    tasks: [
      { type: 'header', title: 'Apertura' },
      { type: 'task', description: 'Sacar cojines a la terraza' },
      { type: 'task', description: 'Encender lavabajillas' },
      { type: 'task', description: 'Hacer zumo de naranja' },
      { type: 'header', title: 'Mañanas 10-13h' },
      {
        type: 'task',
        description: 'Revisar/rellenar las estaciones de los camareros',
      },
      { type: 'task', description: 'Preparar ali-oli' },
      { type: 'task', description: 'Limpiar máquina de zumos' },
      { type: 'header', title: 'Medio-día 13-17h' },
      { type: 'task', description: 'Preparar cubiteras con vinos' },
      { type: 'task', description: 'Cambiar basuras' },

      { type: 'header', title: 'Tarde-noche 17-00h' },
      {
        type: 'task',
        description: 'Cambiar agua lavabajillas y rellenar detergente/abrillatador',
      },
      { type: 'task', description: 'Rellenar neveras' },
      { type: 'task', description: 'Pulir cubiertos' },

      { type: 'header', title: 'Cierre' },
      { type: 'task', description: 'Organizar almacen' },
      { type: 'task', description: 'Cerrar caja y revisar inventario' },
    ]
  },
  {
    title: 'Checklist Patio',
    tasks: [
      { type: 'header', title: 'Apertura' },
      { type: 'task', description: 'Sacar cojines a la terraza' },
      { type: 'task', description: 'Encender lavabajillas' },
      { type: 'task', description: 'Hacer zumo de naranja' },
      { type: 'header', title: 'Mañanas 10-13h' },
      {
        type: 'task',
        description: 'Revisar/rellenar las estaciones de los camareros',
      },
      { type: 'task', description: 'Preparar ali-oli' },
      { type: 'task', description: 'Limpiar máquina de zumos' },
      { type: 'header', title: 'Medio-día 13-17h' },
      { type: 'task', description: 'Preparar cubiteras con vinos' },
      { type: 'task', description: 'Cambiar basuras' },

      { type: 'header', title: 'Tarde-noche 17-00h' },
      {
        type: 'task',
        description: 'Cambiar agua lavabajillas y rellenar detergente/abrillatador',
      },
      { type: 'task', description: 'Rellenar neveras' },
      { type: 'task', description: 'Pulir cubiertos' },

      { type: 'header', title: 'Cierre' },
      { type: 'task', description: 'Organizar almacen' },
      { type: 'task', description: 'Cerrar caja y revisar inventario' },
    ]
  }
];




const renderTask: ListRenderItem<Task> = ({ item }) => {
  if (item.type === 'header') {
    return <CustomText style={styles.headerStyle}>{item.title}</CustomText>;
  } else if (item.type === 'task') {
    return <CheckTask description={item.description!} />;
  }
  return null;
};

// Componente ChecklistScreen
export const ChecklistScreen: React.FC = () => {
  return (

    <ScrollView horizontal pagingEnabled style={styles.container}>
      {checklists.map((checklist, index) => (
        <View key={index} style={{ width: width }}>


          <View style={styles.titleContainer}>
            <Ionicons style={styles.iconArrow} name="caret-back-outline" size={24} color="rgba(0, 0, 0, 0.7)" />
            <Text style={styles.title}>{checklist.title}</Text>
            <Ionicons style={styles.iconArrow} name="caret-forward-outline" size={24} color="rgba(0, 0, 0, 0.7)" />
          </View>
          <FlatList
            data={checklist.tasks}
            renderItem={renderTask}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      ))}
    </ScrollView>

  );
};
