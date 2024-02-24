// ProveedorItem.tsx
import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {Accordion} from '../../../../components/acordion/AcordionProvider';
// Importa tu archivo de estilos
import {styles} from './ProviderItemStyle';

// Definir la estructura de los datos de categoría
interface Categoria {
  id: string;
  nombre: string;
  // Añade más propiedades según sea necesario
}

// Definir la estructura de los datos del proveedor
interface Proveedor {
  id: string;
  nombre: string;
  categorias: Categoria[];
}

// Definir las props del componente
interface ProveedorItemProps {
  proveedor: Proveedor;
}

export const ProveedorItem: React.FC<ProveedorItemProps> = ({proveedor}) => {
  // Definir cómo se renderiza cada categoría
  const renderCategoria = ({item}: {item: Categoria}) => (
    // Implementa tu lógica de renderización aquí, por ejemplo:
    <Text>{item.nombre}</Text>
    // Asegúrate de retornar un elemento de React válido
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
