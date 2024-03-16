import React, { useState } from 'react'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Text, Vibration, View, ScrollView, FlatList, ListRenderItem } from 'react-native'
import { Card } from '../../components/card_base/CardBase'
import { styles } from './DrinksMenuStyle'
import { MenuCategories } from '../../components/menu_categories/MenuCategories';

interface Item {
  itemId: number;
  title: string;
  image: string;
  rating: string;
  category: string;
}
const data: Item[] = [
  {itemId: 1, title: 'Cafe solo', image: require('../../assets/drinkImgs/coffes/cafe-solo.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 2, title: 'Cafe cortado', image: require('../../assets/drinkImgs/coffes/cafe-cortado.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 3, title: 'Cafe bombon', image: require('../../assets/drinkImgs/coffes/cafe-bombon.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 4, title: 'Cafe con leche', image: require('../../assets/drinkImgs/coffes/cafe-leche.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 5, title: 'Cafe americano', image: require('../../assets/drinkImgs/coffes/cafe-americano.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 6, title: 'Cafe con capucchino', image: require('../../assets/drinkImgs/coffes/cafe-capucchino.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 7, title: 'Cafe flat white', image: require('../../assets/drinkImgs/coffes/cafe-flatwhite.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 8, title: 'Cafe machiatto', image: require('../../assets/drinkImgs/coffes/cafe-machiatto.png'), rating: '4.8', category: 'Cafes' },
  {itemId: 9, title: 'Cafe frappe', image: require('../../assets/drinkImgs/coffes/cafe-frappe.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 10, title: 'Cafe affogato', image: require('../../assets/drinkImgs/coffes/cafe-affogato.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 11, title: 'Cafe cremaet', image: require('../../assets/drinkImgs/coffes/cafe-cremaet.jpeg'), rating: '4.8', category: 'Cafes' },
  {itemId: 12, title: 'Cafe irlandes', image: require('../../assets/drinkImgs/coffes/cafe-irlandes.jpeg'), rating: '4.8', category: 'Cafes' },

/* COCKTAILS */
  { itemId: 13, title: 'Mojito', image: require('../../assets/drinkImgs/cocktails/mojito.jpg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 14, title: 'Margarita', image: require('../../assets/drinkImgs/cocktails/margarita.jpg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 15, title: 'Aperol Spritz', image: require('../../assets/drinkImgs/cocktails/aperolSpritz.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 16, title: 'Negroni', image: require('../../assets/drinkImgs/cocktails/negroni.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 17, title: 'Daiquiri', image: require('../../assets/drinkImgs/cocktails/daiquiri.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 18, title: 'Piña colada', image: require('../../assets/drinkImgs/cocktails/pinaColada.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 19, title: 'Sex on the beach', image: require('../../assets/drinkImgs/cocktails/sexOnTheBeach.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 20, title: 'Cosmopolitan', image: require('../../assets/drinkImgs/cocktails/cosmopolitan.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 21, title: 'Pisco Sour', image: require('../../assets/drinkImgs/cocktails/piscoSour.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 22, title: 'Bloody Mary', image: require('../../assets/drinkImgs/cocktails/bloodyMary.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 23, title: 'Mai Tai', image: require('../../assets/drinkImgs/cocktails/MaiTai.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 24, title: 'Moscow Mule', image: require('../../assets/drinkImgs/cocktails/moscow-mule.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 25, title: 'Old Fashioned', image: require('../../assets/drinkImgs/cocktails/oldFashioned.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 26, title: 'Manhattan', image: require('../../assets/drinkImgs/cocktails/Manhattan.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 27, title: 'Tom collins', image: require('../../assets/drinkImgs/cocktails/tomCollins.jpeg'), rating: '4.8', category: 'Cocktails' },
  { itemId: 28, title: 'Martini', image: require('../../assets/drinkImgs/cocktails/martini.jpeg'), rating: '4.8', category: 'Cocktails' },

];



export const DrinksMenuScreen: React.FC = () => {

  const categories = ['Cafes', 'Zumos', 'Refrescos', 'Cervezas', 'Cocktails',];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const filteredData = data.filter(item => item.category === selectedCategory);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const renderItem: ListRenderItem<Item> = ({ item }) => (  
    <Card 
      title={item.title}
     image={item.image} 
     rating={item.rating} 
     fullWidth={false}
      subtitle={''} 
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
