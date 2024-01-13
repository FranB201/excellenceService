import React from 'react';
import {
  Text,
  Vibration,
  View,
  ScrollView,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {Card} from '../../components/card_base/CardBase';
import {styles} from './FoodMenuStyle';
import {MenuCategories} from '../../components/menu_categories/MenuCategories';
interface Item {
  title: string;
  image: string;
  rating: string; // or number, depending on how you want to handle the rating
}
const data: Item[] = [
  {title: 'Arroz Caldoso', image: '', rating: '4.8'},
  {title: 'Paella', image: '', rating: '4.7'},
  {title: 'Paella', image: '', rating: '4.7'},
  {title: 'Paella', image: '', rating: '4.7'},
  {title: 'Paella', image: '', rating: '4.7'},
  {title: 'Paella', image: '', rating: '4.7'},
  {title: 'Paella', image: '', rating: '4.7'},
  // ... más datos de tus tarjetas
];
const renderItem: ListRenderItem<Item> = ({item}) => (
  <Card title={item.title} image={item.image} rating={item.rating} />
);

export const FoodMenuScreen: React.FC = () => {
  const categories = ['Entrantes', 'Ensaladas', 'Carnes', 'Pescados'];
  const selectedCategory = 'Entrantes';
  return (
    <View>
      <MenuCategories
        categories={categories}
        selected={selectedCategory}></MenuCategories>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </View>
  );
};
