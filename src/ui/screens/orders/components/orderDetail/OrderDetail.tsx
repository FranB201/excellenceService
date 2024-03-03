/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './OrderDetailStyle';
import { Pedido } from '../../../../../common/interfaces/prov/order';
import { globalStyles } from '../../../../styles/GlobalStyles';


interface OrderDetailProps {
    pedidos: Pedido[];
}
const agruparPedidosPorProveedor = (pedidos: Pedido[]) => {
  const resultado = pedidos.reduce((acc, pedido) => {
    const {proveedor, articuloId, cantidad, itemName} = pedido;
    if (!acc[proveedor]) {
      acc[proveedor] = [];
    }
    acc[proveedor].push({articuloId, cantidad, itemName});
    return acc;
  }, {} as Record<string, {articuloId: string; cantidad: number, itemName:string}[]>);
 
  return resultado;
};
const OrderDetail: React.FC<OrderDetailProps> = ({pedidos}) => {
  const pedidosAgrupados = agruparPedidosPorProveedor(pedidos);
  return (
<View>
      {Object.entries(pedidosAgrupados).map(([proveedor, articulos]) => (
        <View key={proveedor} style={styles.proveedorContainer}>
          <Text style={styles.proveedorTitulo}>{proveedor}</Text>
          {articulos.map((item, index) => (
            <Text key={index} style={styles.articuloTexto}>
              - {item.itemName}: {item.cantidad}
            </Text>
          ))}
        </View>
      ))}
        <TouchableOpacity activeOpacity={0.8} style={globalStyles.button}>
            <Text style={globalStyles.buttonText}>Hacer pedido</Text>
        </TouchableOpacity>  
    </View>
  );
};



export default OrderDetail;
