import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './CategoryItemStyle';
import { Categoria } from '../../../../../common/interfaces/prov/category';
import { Pedido } from '../../../../../common/interfaces/prov/order';
import { Proveedor } from '../../../../../common/interfaces/prov/provider';
import { globalStyles } from '../../../../styles/GlobalStyles';
import { Accordion } from '../../../../components/acordion/AcordionProvider';
import { CustomText } from '../../../../components/atoms/customText/CustomText';
interface CategoriaItemProps {
  categoria: Categoria;
  provider:Proveedor;
  pedidos:Pedido[];
  onPedidosChange: (pedidos: Pedido[]) => void;
}

const CategoriaItem: React.FC<CategoriaItemProps> = ({
  categoria,
  provider,
  pedidos,
  onPedidosChange,
}) => {
  const handleIncrement = (articuloId: string, name: string) => {
    console.log(name)
    const newPedidos = pedidos.slice();
    const index = newPedidos.findIndex(p => p.articuloId === articuloId);
    if (index >= 0) {
      newPedidos[index].cantidad += 1;
    } else {
      newPedidos.push({ articuloId,itemName:name, cantidad: 1, proveedor:provider.nombre});
    }

    onPedidosChange(newPedidos);
  };
  const handleDecrement = (articuloId: string) => {
    const newPedidos = pedidos.slice();
    const index = newPedidos.findIndex(p => p.articuloId === articuloId);
    if (index >= 0) {
      newPedidos[index].cantidad -= 1;
      if (newPedidos[index].cantidad < 1) {
        newPedidos.splice(index, 1);
      }
    }
    onPedidosChange(newPedidos);
  };
  

  /*return (
    <View>
      {categoria.articulos.map(articulo => (

        <View key={articulo.id} style={styles.row}>
          <Text style={styles.articuloNombre}>{articulo.nombre}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => handleDecrement(articulo.id,)}>
              <Ionicons name="remove-circle-outline" style={globalStyles.iconStyle} />
            </TouchableOpacity>
            <Text style={[globalStyles.p4,styles.quantityText]}>
              {pedidos.find(p => p.articuloId === articulo.id)?.cantidad || 0}
            </Text>
            <TouchableOpacity onPress={() => handleIncrement(articulo.id,articulo.nombre)}>
              <Ionicons name="add-circle-outline" style={globalStyles.iconStyle} />
            </TouchableOpacity>
          </View>
        </View>
       
      ))}
    </View>
  );*/
  return (
    <View>
      {provider.categorias.map((categoria) => (
        <Accordion
          title={categoria.nombre}
          
        >
          {categoria.articulos.map((articulo) => (
            <View key={articulo.id} style={styles.row}>
              <CustomText style={styles.articuloNombre}>{articulo.nombre}</CustomText>
              <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => handleDecrement(articulo.id,)}>
              <Ionicons name="remove-circle-outline" style={globalStyles.iconStyle} />
            </TouchableOpacity>
            <CustomText style={[globalStyles.p4,styles.quantityText]}>
              {pedidos.find(p => p.articuloId === articulo.id)?.cantidad || 0}
            </CustomText>
                <TouchableOpacity onPress={() => handleIncrement(articulo.id,articulo.nombre)}>
                  <Ionicons name="add-circle-outline" style={globalStyles.iconStyle} />
              </TouchableOpacity>
              </View>
            </View>
          ))}
        </Accordion>
      ))}
    </View>
  );
};

export default CategoriaItem;
