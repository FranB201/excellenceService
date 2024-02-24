/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native';
import {styles} from './OrdersScreenStyle';
import {Accordion} from '../../components/acordion/AcordionProvider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../../styles/GlobalStyles';
import CategoriaItem from './components/categoryItem/CategoryItem';

interface Articulo {
  id: string;
  nombre: string;
  tipo: 'bebida_alcoholica' | 'refresco' | 'otro';
  categoria: string;
}

interface Categoria {
  nombre: string;
  articulos: Articulo[];
}

interface Proveedor {
  id: string;
  nombre: string;
  categorias: Categoria[];
}

// Datos de ejemplo con categorías añadidas
const proveedores: Proveedor[] = [
  {
    id: '1',
    nombre: 'Proveedor A',
    categorias: [
      {
        nombre: 'Bebidas Alcohólicas',
        articulos: [
          {
            id: 'a1',
            nombre: 'Vino Tinto',
            tipo: 'bebida_alcoholica',
            categoria: 'Vinos',
          },
          {
            id: 'a3',
            nombre: 'Vino Blanco',
            tipo: 'bebida_alcoholica',
            categoria: 'Vinos',
          },
          {
            id: 'a5',
            nombre: 'Champagne',
            tipo: 'bebida_alcoholica',
            categoria: 'Espumosos',
          },
          {
            id: 'a7',
            nombre: 'Cerveza Lager',
            tipo: 'bebida_alcoholica',
            categoria: 'Cervezas',
          },
          {
            id: 'a9',
            nombre: 'Cerveza Stout',
            tipo: 'bebida_alcoholica',
            categoria: 'Cervezas',
          },
        ],
      },
      {
        nombre: 'Refrescos',
        articulos: [
          {id: 'a2', nombre: 'Coca Cola', tipo: 'refresco', categoria: 'Colas'},
          {id: 'a4', nombre: 'Pepsi', tipo: 'refresco', categoria: 'Colas'},
          {id: 'a6', nombre: '7 Up', tipo: 'refresco', categoria: 'Limonadas'},
          {
            id: 'a8',
            nombre: 'Fanta Naranja',
            tipo: 'refresco',
            categoria: 'Naranjadas',
          },
          {
            id: 'a10',
            nombre: 'Sprite Zero',
            tipo: 'refresco',
            categoria: 'Limonadas',
          },
        ],
      },
      // Más categorías si son necesarias...
    ],
  },
  {
    id: '2',
    nombre: 'Proveedor B',
    categorias: [
      {
        nombre: 'Destilados',
        articulos: [
          {
            id: 'b1',
            nombre: 'Whisky Escocés',
            tipo: 'bebida_alcoholica',
            categoria: 'Whiskys',
          },
          {
            id: 'b3',
            nombre: 'Ginebra',
            tipo: 'bebida_alcoholica',
            categoria: 'Ginebras',
          },
          {
            id: 'b5',
            nombre: 'Ron Caribeño',
            tipo: 'bebida_alcoholica',
            categoria: 'Rones',
          },
          {
            id: 'b7',
            nombre: 'Vodka Ruso',
            tipo: 'bebida_alcoholica',
            categoria: 'Vodkas',
          },
          {
            id: 'b9',
            nombre: 'Tequila',
            tipo: 'bebida_alcoholica',
            categoria: 'Tequilas',
          },
        ],
      },
      {
        nombre: 'Energizantes y Aguas',
        articulos: [
          {
            id: 'b2',
            nombre: 'Mountain Dew',
            tipo: 'refresco',
            categoria: 'Energizantes',
          },
          {id: 'b4', nombre: 'Dr Pepper', tipo: 'refresco', categoria: 'Sodas'},
          {
            id: 'b6',
            nombre: 'Tonic Water',
            tipo: 'refresco',
            categoria: 'Aguas Tónicas',
          },
          {
            id: 'b8',
            nombre: 'Red Bull',
            tipo: 'refresco',
            categoria: 'Energizantes',
          },
          {
            id: 'b10',
            nombre: 'Monster Energy',
            tipo: 'refresco',
            categoria: 'Energizantes',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    nombre: 'Proveedor C',
    categorias: [
      {
        nombre: 'Importados',
        articulos: [
          {
            id: 'c1',
            nombre: 'Sake Japonés',
            tipo: 'bebida_alcoholica',
            categoria: 'Sakes',
          },
          {
            id: 'c3',
            nombre: 'Cava Español',
            tipo: 'bebida_alcoholica',
            categoria: 'Cavas',
          },
          {
            id: 'c5',
            nombre: 'Brandy',
            tipo: 'bebida_alcoholica',
            categoria: 'Brandys',
          },
          {
            id: 'c7',
            nombre: 'Mezcal',
            tipo: 'bebida_alcoholica',
            categoria: 'Mezcales',
          },
          {
            id: 'c9',
            nombre: 'Cóctel Mojito',
            tipo: 'bebida_alcoholica',
            categoria: 'Cócteles',
          },
        ],
      },
      {
        nombre: 'Sin Alcohol',
        articulos: [
          {
            id: 'c2',
            nombre: 'Agua Mineral',
            tipo: 'refresco',
            categoria: 'Aguas',
          },
          {
            id: 'c4',
            nombre: 'Limonada',
            tipo: 'refresco',
            categoria: 'Limonadas',
          },
          {
            id: 'c6',
            nombre: 'Iced Tea',
            tipo: 'refresco',
            categoria: 'Tés Helados',
          },
          {
            id: 'c8',
            nombre: 'Ginger Ale',
            tipo: 'refresco',
            categoria: 'Gaseosas',
          },
          {
            id: 'c10',
            nombre: 'Gatorade',
            tipo: 'refresco',
            categoria: 'Bebidas Deportivas',
          },
        ],
      },
    ],
  },
  // Más proveedores si son necesarios...
];

const OrdersScreen: React.FC = () => {
  const [textoBusqueda, setTextoBusqueda] = useState<string>('');
  const [resultadosBusqueda, setResultadosBusqueda] =
    useState<Proveedor[]>(proveedores);

  const buscarArticulo = (texto: string) => {
    setTextoBusqueda(texto);
    if (texto === '') {
      setResultadosBusqueda(proveedores);
    } else {
      const filtrados = proveedores
        .map(proveedor => {
          const categoriasFiltradas = proveedor.categorias
            .map(categoria => {
              const articulosFiltrados = categoria.articulos.filter(articulo =>
                articulo.nombre.toLowerCase().includes(texto.toLowerCase()),
              );
              return {...categoria, articulos: articulosFiltrados};
            })
            .filter(categoria => categoria.articulos.length > 0);

          return {...proveedor, categorias: categoriasFiltradas};
        })
        .filter(proveedor => proveedor.categorias.length > 0);

      setResultadosBusqueda(filtrados);
    }
  };

  const renderProveedor: ListRenderItem<Proveedor> = ({item}) => (
    <View style={styles.proveedorContainer}>
      <Accordion
        title={item.nombre}
        titleStyle={styles.proveedorNombre}
        headerStyle={styles.proveedorContainer}>
        <FlatList
          data={item.categorias}
          keyExtractor={item => item.nombre}
          renderItem={({item: categoria}) => (
            <CategoriaItem
              categoria={categoria}
              onPedidosChange={pedidos => {
                // Aquí deberías implementar cómo manejas los cambios en los pedidos
                // Esto podría implicar actualizar un estado en OrdersScreen o realizar otras acciones
              }}
            />
          )}
        />
      </Accordion>
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
        keyExtractor={item => item.id}
        renderItem={renderProveedor}
      />
      <View style={globalStyles.p5}>
        <TouchableOpacity activeOpacity={0.8} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Hacer pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrdersScreen;
