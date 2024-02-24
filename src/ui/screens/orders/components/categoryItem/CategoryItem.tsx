import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {styles} from './CategoryItemStyle';

// Definiendo los tipos de tus props y estados
interface Articulo {
  id: string;
  nombre: string;
}

interface Categoria {
  articulos: Articulo[];
}

interface Pedido {
  articuloId: string;
  cantidad: number;
}

interface CategoriaItemProps {
  categoria: Categoria;
  onPedidosChange: (pedidos: Pedido[]) => void;
}

// Componente CategoriaItem con TypeScript
const CategoriaItem: React.FC<CategoriaItemProps> = ({
  categoria,
  onPedidosChange,
}) => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);

  const handleIncrement = (articuloId: string) => {
    setPedidos(currentPedidos => {
      const index = currentPedidos.findIndex(p => p.articuloId === articuloId);
      const newPedidos = [...currentPedidos];
      if (index >= 0) {
        newPedidos[index].cantidad += 1;
      } else {
        newPedidos.push({articuloId, cantidad: 1});
      }
      onPedidosChange(newPedidos);
      return newPedidos;
    });
  };

  const handleDecrement = (articuloId: string) => {
    setPedidos(currentPedidos => {
      const index = currentPedidos.findIndex(p => p.articuloId === articuloId);
      if (index >= 0) {
        const newPedidos = [...currentPedidos];
        if (newPedidos[index].cantidad > 1) {
          newPedidos[index].cantidad -= 1;
        } else {
          newPedidos.splice(index, 1);
        }
        onPedidosChange(newPedidos);
        return newPedidos;
      }
      return currentPedidos;
    });
  };

  return (
    <View>
      {categoria.articulos.map(articulo => (
        <View key={articulo.id} style={styles.row}>
          <Text style={styles.articuloNombre}>{articulo.nombre}</Text>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity onPress={() => handleDecrement(articulo.id)}>
              <Ionicons name="remove-circle-outline" size={20} color="green" />
            </TouchableOpacity>
            <Text>
              {pedidos.find(p => p.articuloId === articulo.id)?.cantidad || 0}
            </Text>
            <TouchableOpacity onPress={() => handleIncrement(articulo.id)}>
              <Ionicons name="add-circle-outline" size={20} color="green" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

export default CategoriaItem;
