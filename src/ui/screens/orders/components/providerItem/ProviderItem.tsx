// ProveedorItem.tsx
import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Accordion} from '../../../../components/acordion/AcordionProvider';
// Importa tu archivo de estilos
import {styles} from './ProviderItemStyle';
import { Proveedor } from '../../../../../common/interfaces/prov/provider';
import { Categoria } from '../../../../../common/interfaces/prov/category';


// Definir las props del componente
interface ProveedorItemProps {
  proveedor: Proveedor;
}

export const ProveedorItem: React.FC<ProveedorItemProps> = ({proveedor}) => {
  const renderCategoria = ({item}: {item: Categoria}) => (
    <Text>{item.nombre}</Text>
  );

  return (
    <View style={styles.proveedorContainer}>
      
      <Accordion
        title={proveedor.nombre}
        headerStyle={styles.proveedorContainer}>
        <FlatList
          data={proveedor.categorias}
          keyExtractor={item => item.id}
          renderItem={renderCategoria}
        />
      </Accordion>
    </View>
  );
};
