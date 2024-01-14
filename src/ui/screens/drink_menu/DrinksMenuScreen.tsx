import React, { useState } from 'react'
import { Text, Vibration, View, ScrollView, FlatList, ListRenderItem } from 'react-native'
import { Card } from '../../components/card_base/CardBase'
import { styles } from './DrinksMenuStyle'
import { MenuCategories } from '../../components/menu_categories/MenuCategories';

interface Item {
  title: string;
  image: string;
  rating: string;
  category: string;
}
const data: Item[] = [
  { title: 'Patatas Bravas', image: '', rating: '4.8', category: 'Entrantes' },
  { title: 'Tortilla española', image: '', rating: '4.7', category: 'Entrantes' },
  { title: 'Pimientos del padrón', image: '', rating: '4.7', category: 'Entrantes' },
  { title: 'Albondigas en salsa', image: '', rating: '4.7', category: 'Entrantes' },
  { title: 'Gambas al ajillo', image: '', rating: '4.7', category: 'Entrantes' },
  { title: 'Calamares a la romana', image: '', rating: '4.7', category: 'Entrantes' },
  { title: 'Croquetas', image: '', rating: '4.7', category: 'Entrantes' },
  { title: 'Pulpo a la gallega', image: '', rating: '4.7', category: 'Entrantes' },
  { title: 'Ensalada Mediterránea', image: '', rating: '4.7', category: 'Ensaladas' },
  { title: 'Ensalada Cesar', image: '', rating: '4.7', category: 'Ensaladas' },
  { title: 'Ensalada Mixta', image: '', rating: '4.7', category: 'Ensaladas' },
  { title: 'Chuletas de cordero', image: '', rating: '4.7', category: 'Ensaladas' },
  { title: 'Solomillo al whisky', image: '', rating: '4.7', category: 'Carnes' },
  { title: 'Estofado de ternera', image: '', rating: '4.7', category: 'Carnes' },
  { title: 'Pollo al ajillo', image: '', rating: '4.7', category: 'Carnes' },
  { title: 'Entrecot', image: '', rating: '4.7', category: 'Carnes' },
  { title: 'Chuletón', image: '', rating: '4.7', category: 'Carnes' },
  { title: 'Carrillera', image: '', rating: '4.7', category: 'Carnes' },
  { title: 'Dorada a la sal', image: '', rating: '4.7', category: 'Pescados' },
  { title: 'Atun a la plancha', image: '', rating: '4.7', category: 'Pescados' },
  { title: 'Bacalao al Pil Pil', image: '', rating: '4.7', category: 'Pescados' },
  { title: 'Gambas a la plancha', image: '', rating: '4.7', category: 'Pescados' },
  { title: 'Merluza a la Vasca', image: '', rating: '4.7', category: 'Pescados' },
  { title: 'Calamares rellenos', image: '', rating: '4.7', category: 'Pescados' },
  { title: 'Paella Valenciana', image: '', rating: '4.7', category: 'Paellas' },
  { title: 'Paella mixta', image: '', rating: '4.7', category: 'Paellas' },
  { title: 'Paella de verduras', image: '', rating: '4.7', category: 'Paellas' },
  { title: 'Paella de bacalao y coliflor', image: '', rating: '4.7', category: 'Paellas' },
  // ... más datos de tus tarjetas
];
const renderItem: ListRenderItem<Item> = ({ item }) => (
  <Card title={item.title} image={item.image} rating={item.rating} />
);

export const DrinksMenuScreen: React.FC = () => {
  const categories = ['Cafes', 'Zumos', 'Refrescos', 'Cervezas', 'Cocktails',];
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
