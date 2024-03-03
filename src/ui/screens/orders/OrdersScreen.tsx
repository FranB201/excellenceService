/* eslint-disable prettier/prettier */
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
import {globalStyles} from '../../styles/GlobalStyles';
import CategoriaItem from './components/categoryItem/CategoryItem';
import {CustomModal} from '../../components/pop_ups/customModal/CustomModal';
import OrderDetail from './components/orderDetail/OrderDetail';
import { proveedores } from '../../data/proveedoresData'; 
import { Proveedor } from '../../../common/interfaces/prov/provider';
import { Pedido } from '../../../common/interfaces/prov/order';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrdersScreen: React.FC = () => {
  const [isVisible, setInvisible] = React.useState(false);
  const [isVisibleProviderInfo, setInvisibleProviderInfo] = React.useState(false);
const handleCloseModal = () => {
  setInvisible(false);
};
const handleOpenModal = () => {
  setInvisible(true);
};
const handleCloseModalProviderInfo = () => {
  setInvisibleProviderInfo(false);
};
const handleOpenModalProviderInfo = () => {
  setInvisibleProviderInfo(true);
};
  const [textoBusqueda, setTextoBusqueda] = useState<string>('');
  const [resultadosBusqueda, setResultadosBusqueda] =
    useState<Proveedor[]>(proveedores);
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
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
      <View style={{ flex: 1 }}>
      <Accordion
        title={item.nombre}
        titleStyle={styles.proveedorNombre}
        headerStyle={{...styles.proveedorContainer}}
        buttoninformation={
          <><TouchableOpacity onPress={handleOpenModalProviderInfo}>
            <Ionicons name="information-circle-outline" size={30} />
          </TouchableOpacity><CustomModal isVisible={isVisibleProviderInfo} onClose={handleCloseModalProviderInfo}>
              <Text>Reponsable: Nombre1</Text>
              <Text>Telf: 690 234 456</Text>
              <Text>Días de pedido: martes-miercoles</Text>
              <Text>Días de reparto: lunes</Text>
            </CustomModal></>         
        }
      >
        <FlatList
          data={item.categorias}
          keyExtractor={item => item.nombre}
          renderItem={({item: categoria}) => (
            <CategoriaItem
              provider={item}
              categoria={categoria}
              pedidos={pedidos}
              onPedidosChange={nuevosPedidos => {
                setPedidos(nuevosPedidos);
              }}
            />
          )}
        />
      </Accordion>       
      </View>

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
        <TouchableOpacity onPress={() => handleOpenModal()} activeOpacity={0.8} style={globalStyles.button}>
          <Text style={globalStyles.buttonText}>Hacer pedido</Text>
        </TouchableOpacity>
        <CustomModal isVisible={isVisible} onClose={handleCloseModal}>
            <OrderDetail pedidos={pedidos}></OrderDetail>
        </CustomModal>
      </View>
    </View>
  );
};

export default OrdersScreen;
