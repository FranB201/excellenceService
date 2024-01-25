import React, { useState, ChangeEvent } from 'react';
import { View, Text, TextInput, FlatList, ListRenderItem } from 'react-native';
import { styles } from './OrdersScreenStyle'; // Tus estilos personalizados
import Ionicons from 'react-native-vector-icons/Ionicons';
// Definición de tipos
interface Articulo {
  id: string;
  nombre: string;
  tipo: 'bebida_alcoholica' | 'refresco' | 'otro';
}

interface Proveedor {
  id: string;
  nombre: string;
  articulos: Articulo[];
}

// Datos de ejemplo
const proveedores: Proveedor[] = [
    { 
      id: '1', 
      nombre: 'Proveedor A', 
      articulos: [
        { id: 'a1', nombre: 'Vino Tinto', tipo: 'bebida_alcoholica' },
        { id: 'a2', nombre: 'Coca Cola', tipo: 'refresco' },
        { id: 'a3', nombre: 'Vino Blanco', tipo: 'bebida_alcoholica' },
        { id: 'a4', nombre: 'Pepsi', tipo: 'refresco' },
        { id: 'a5', nombre: 'Champagne', tipo: 'bebida_alcoholica' },
        { id: 'a6', nombre: '7 Up', tipo: 'refresco' },
        { id: 'a7', nombre: 'Cerveza Lager', tipo: 'bebida_alcoholica' },
        { id: 'a8', nombre: 'Fanta Naranja', tipo: 'refresco' },
        { id: 'a9', nombre: 'Cerveza Stout', tipo: 'bebida_alcoholica' },
        { id: 'a10', nombre: 'Sprite Zero', tipo: 'refresco' }
      ]
    },
    { 
      id: '2', 
      nombre: 'Proveedor B', 
      articulos: [
        { id: 'b1', nombre: 'Whisky Escocés', tipo: 'bebida_alcoholica' },
        { id: 'b2', nombre: 'Mountain Dew', tipo: 'refresco' },
        { id: 'b3', nombre: 'Ginebra', tipo: 'bebida_alcoholica' },
        { id: 'b4', nombre: 'Dr Pepper', tipo: 'refresco' },
        { id: 'b5', nombre: 'Ron Caribeño', tipo: 'bebida_alcoholica' },
        { id: 'b6', nombre: 'Tonic Water', tipo: 'refresco' },
        { id: 'b7', nombre: 'Vodka Ruso', tipo: 'bebida_alcoholica' },
        { id: 'b8', nombre: 'Red Bull', tipo: 'refresco' },
        { id: 'b9', nombre: 'Tequila', tipo: 'bebida_alcoholica' },
        { id: 'b10', nombre: 'Monster Energy', tipo: 'refresco' }
      ]
    },
    { 
      id: '3', 
      nombre: 'Proveedor C', 
      articulos: [
        { id: 'c1', nombre: 'Sake Japonés', tipo: 'bebida_alcoholica' },
        { id: 'c2', nombre: 'Agua Mineral', tipo: 'refresco' },
        { id: 'c3', nombre: 'Cava Español', tipo: 'bebida_alcoholica' },
        { id: 'c4', nombre: 'Limonada', tipo: 'refresco' },
        { id: 'c5', nombre: 'Brandy', tipo: 'bebida_alcoholica' },
        { id: 'c6', nombre: 'Iced Tea', tipo: 'refresco' },
        { id: 'c7', nombre: 'Mezcal', tipo: 'bebida_alcoholica' },
        { id: 'c8', nombre: 'Ginger Ale', tipo: 'refresco' },
        { id: 'c9', nombre: 'Cóctel Mojito', tipo: 'bebida_alcoholica' },
        { id: 'c10', nombre: 'Gatorade', tipo: 'refresco' }
      ]
    },
    // Puedes seguir agregando más proveedores y artículos si es necesario
  ];
  

// Componente de búsqueda
export const OrdersScreen: React.FC = () => {
    const [textoBusqueda, setTextoBusqueda] = useState<string>('');
    const [resultadosBusqueda, setResultadosBusqueda] = useState<Proveedor[]>(proveedores);
  (proveedores);

   const buscarArticulo = (texto: string) => {
    setTextoBusqueda(texto);
    if (texto === '') {
      setResultadosBusqueda(proveedores);
      return;
    }
    const filtrados = proveedores.map(proveedor => ({
      ...proveedor,
      articulos: proveedor.articulos.filter(articulo => articulo.nombre.toLowerCase().includes(texto.toLowerCase())),
    })).filter(proveedor => proveedor.articulos.length > 0);
    setResultadosBusqueda(filtrados);
  };

  const renderProveedor: ListRenderItem<Proveedor> = ({ item }) => (
    <View style={styles.proveedorContainer}>
      <Text style={styles.proveedorNombre}>{item.nombre}</Text>
      {item.articulos.map(articulo => (
        <Text key={articulo.id} style={styles.articuloNombre}>{articulo.nombre}</Text>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
    <View style={styles.header}>


      <TextInput 
        style={styles.inputText}
        placeholder="Buscar Artículo..."
        value={textoBusqueda}
        onChangeText={buscarArticulo}
      />
    </View>
    <FlatList
        data={resultadosBusqueda}
        keyExtractor={(item) => item.id}
        renderItem={renderProveedor}
      />
  </View>
  );
};

export default OrdersScreen;