import React, { useState } from 'react';
import {
  Text,
  View,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { Card } from '../../../components/card_base/CardBase';
import { MenuCategories } from '../../../components/menu_categories/MenuCategories';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/Navigator';


interface Item {
  itemId: number;
  title: string;
  subtitle: string;
  image: string;
  rating: string;
  category: string;
}
const data: Item[] = [
  { itemId: 1, subtitle:'con salsa brava', title: 'Patatas Bravas', image: require('../../../assets/foodImgs/bravas.jpg'), rating: '4.8', category: 'Entrantes' },
  { itemId: 2, subtitle:'con cebolla', title: 'Tortilla española', image: require('../../../assets/foodImgs/tortilla.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 3, subtitle:'a la brasa', title: 'Pimientos del padrón', image: require('../../../assets/foodImgs/pimientos.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 4, subtitle:'en salsa de estofado', title: 'Albondigas', image: require('../../../assets/foodImgs/albondigas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 5, subtitle:'del puerto de Dénia', title: 'Gambas al ajillo', image: require('../../../assets/foodImgs/gambas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 6, subtitle:'en harina de garbanzo', title: 'Calamares a la romana', image: require('../../../assets/foodImgs/calamares.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 7, subtitle:'de jamon ibérico', title: 'Croquetas', image: require('../../../assets/foodImgs/croquetas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 8, subtitle:'con patata y piménton', title: 'Pulpo a la gallega', image: require('../../../assets/foodImgs/pulpo.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 9, subtitle:'', title: 'Ensalada Mediterránea', image: require('../../../assets/foodImgs/ensalada-mediterranea.jpg'), rating: '4.7', category: 'Ensaladas' },
  { itemId: 10, subtitle:'', title: 'Ensalada Cesar', image: require('../../../assets/foodImgs/ensalada-cesar.jpeg'), rating: '4.7', category: 'Ensaladas' },
  { itemId: 11, subtitle:'', title: 'Ensalada Mixta', image: require('../../../assets/foodImgs/ensalada-mixta.jpeg'), rating: '4.7', category: 'Ensaladas' },
  { itemId: 12, subtitle:'', title: 'Chuletas de cordero', image: require('../../../assets/foodImgs/chuletas de cordero.jpeg'), rating: '4.7', category: 'carnes' },
  { itemId: 13, subtitle:'', title: 'Solomillo al whisky', image: require('../../../assets/foodImgs/solomillo.jpeg'), rating: '4.7', category: 'Carnes' },
  { itemId: 14, subtitle:'', title: 'Estofado de ternera', image: require('../../../assets/foodImgs/estofado-ternera.jpeg'), rating: '4.7', category: 'Carnes' },
  { itemId: 15, subtitle:'', title: 'Pollo al ajillo', image: require('../../../assets/foodImgs/pollo-ajillo.jpeg'), rating: '4.7', category: 'Carnes' },
  { itemId: 16, subtitle:'', title: 'Entrecot', image: require('../../../assets/foodImgs/entrecot.jpeg'), rating: '4.7', category: 'Carnes' },
  { itemId: 17, subtitle:'', title: 'Chuletón', image: require('../../../assets/foodImgs/chuleton.jpeg'), rating: '4.7', category: 'Carnes' },
  { itemId: 18, subtitle:'', title: 'Carrillera', image: require('../../../assets/foodImgs/carilleras.jpeg'), rating: '4.7', category: 'Carnes' },
  { itemId: 19, subtitle:'', title: 'Dorada a la sal', image: require('../../../assets/foodImgs/dorada.jpeg'), rating: '4.7', category: 'Pescados' },
  { itemId: 20, subtitle:'', title: 'Atun a la plancha', image: require('../../../assets/foodImgs/atun.jpeg'), rating: '4.7', category: 'Pescados' },
  { itemId: 21, subtitle:'', title: 'Bacalao al Pil Pil', image: require('../../../assets/foodImgs/bacalao.jpeg'), rating: '4.7', category: 'Pescados' },
  { itemId: 22, subtitle:'', title: 'Gambas a la plancha', image: require('../../../assets/foodImgs/gambas-plancha.jpeg'), rating: '4.7', category: 'Pescados' },
  { itemId: 23, subtitle:'', title: 'Merluza a la Vasca', image: require('../../../assets/foodImgs/Merluza.jpeg'), rating: '4.7', category: 'Pescados' },
  { itemId: 24, subtitle:'', title: 'Calamares rellenos', image: require('../../../assets/foodImgs/calamares-rellenos.jpeg'), rating: '4.7', category: 'Pescados' },
  { itemId: 25, subtitle:'', title: 'Paella Valenciana', image: require('../../../assets/foodImgs/paella-val.jpeg'), rating: '4.7', category: 'Paellas' },
  { itemId: 26, subtitle:'', title: 'Paella mixta', image: require('../../../assets/foodImgs/paella-mixta.jpg'), rating: '4.7', category: 'Paellas' },
  { itemId: 27, subtitle:'', title: 'Paella de verduras', image: require('../../../assets/foodImgs/paella-verduras.jpeg'), rating: '4.7', category: 'Paellas' },
  { itemId: 28, subtitle:'', title: 'Paella de bacalao y coliflor', image: require('../../../assets/foodImgs/paella-bacalao.jpeg'), rating: '4.7', category: 'Paellas' },
  // ... más datos de tus tarjetas
];



export const FoodMenuScreen: React.FC = () => {
  const categories = ['Entrantes', 'Ensaladas', 'Carnes', 'Pescados', 'Paellas',];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredData = data.filter(item => item.category === selectedCategory);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem: ListRenderItem<Item> = ({ item }) => (
  
    <Card 
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
      rating={item.rating}
      fullWidth={false}
      onPress={() => navigation.navigate('DetailsItemScreen', { itemId: item.itemId })}
    />
  );

  return (
    <View>
      <MenuCategories
        categories={categories}
        selected={selectedCategory}
        onSelectCategory={setSelectedCategory}
      ></MenuCategories>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};
