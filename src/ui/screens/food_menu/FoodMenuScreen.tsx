import React, { useState } from 'react';
import {
  Text,
  Vibration,
  View,
  ScrollView,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { Card } from '../../components/card_base/CardBase';
import { styles } from './FoodMenuStyle';
import { MenuCategories } from '../../components/menu_categories/MenuCategories';


interface Item {
  title: string;
  image: string;
  rating: string;
  category: string;
}
const data: Item[] = [
  { title: 'Patatas Bravas', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.8', category: 'Entrantes' },
  { title: 'Tortilla española', image: require('../../assets/foodImgs/tortilla.jpeg'), rating: '4.7', category: 'Entrantes' },
  { title: 'Pimientos del padrón', image: require('../../assets/foodImgs/pimientos.jpeg'), rating: '4.7', category: 'Entrantes' },
  { title: 'Albondigas en salsa', image: require('../../assets/foodImgs/albondigas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { title: 'Gambas al ajillo', image: require('../../assets/foodImgs/gambas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { title: 'Calamares a la romana', image: require('../../assets/foodImgs/calamares.jpeg'), rating: '4.7', category: 'Entrantes' },
  { title: 'Croquetas', image: require('../../assets/foodImgs/croquetas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { title: 'Pulpo a la gallega', image: require('../../assets/foodImgs/pulpo.jpeg'), rating: '4.7', category: 'Entrantes' },
  { title: 'Ensalada Mediterránea', image: require('../../assets/foodImgs/ensalada-mediterranea.jpg'), rating: '4.7', category: 'Ensaladas' },
  { title: 'Ensalada Cesar', image: require('../../assets/foodImgs/ensalada-cesar.jpeg'), rating: '4.7', category: 'Ensaladas' },
  { title: 'Ensalada Mixta', image: require('../../assets/foodImgs/ensalada-mixta.jpeg'), rating: '4.7', category: 'Ensaladas' },
  { title: 'Chuletas de cordero', image: require('../../assets/foodImgs/chuletas de cordero.jpeg'), rating: '4.7', category: 'carnes' },
  { title: 'Solomillo al whisky', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Carnes' },
  { title: 'Estofado de ternera', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Carnes' },
  { title: 'Pollo al ajillo', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Carnes' },
  { title: 'Entrecot', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Carnes' },
  { title: 'Chuletón', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Carnes' },
  { title: 'Carrillera', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Carnes' },
  { title: 'Dorada a la sal', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Pescados' },
  { title: 'Atun a la plancha', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Pescados' },
  { title: 'Bacalao al Pil Pil', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Pescados' },
  { title: 'Gambas a la plancha', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Pescados' },
  { title: 'Merluza a la Vasca', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Pescados' },
  { title: 'Calamares rellenos', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Pescados' },
  { title: 'Paella Valenciana', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Paellas' },
  { title: 'Paella mixta', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Paellas' },
  { title: 'Paella de verduras', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Paellas' },
  { title: 'Paella de bacalao y coliflor', image: require('../../assets/foodImgs/bravas.jpg'), rating: '4.7', category: 'Paellas' },
  // ... más datos de tus tarjetas
];
const renderItem: ListRenderItem<Item> = ({ item }) => (
  <Card title={item.title} image={item.image} rating={item.rating} />
);

export const FoodMenuScreen: React.FC = () => {
  const categories = ['Entrantes', 'Ensaladas', 'Carnes', 'Pescados', 'Paellas',];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredData = data.filter(item => item.category === selectedCategory);
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
