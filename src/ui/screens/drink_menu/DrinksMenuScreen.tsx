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
  { title: 'Cafe solo', image: require('../../assets/drinkImgs/coffes/cafe-solo.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe cortado', image: require('../../assets/drinkImgs/coffes/cafe-cortado.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe bombon', image: require('../../assets/drinkImgs/coffes/cafe-bombon.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe con leche', image: require('../../assets/drinkImgs/coffes/cafe-leche.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe americano', image: require('../../assets/drinkImgs/coffes/cafe-americano.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe con capucchino', image: require('../../assets/drinkImgs/coffes/cafe-capucchino.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe flat white', image: require('../../assets/drinkImgs/coffes/cafe-flatwhite.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe machiatto', image: require('../../assets/drinkImgs/coffes/cafe-machiatto.png'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe frappe', image: require('../../assets/drinkImgs/coffes/cafe-frappe.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe affogato', image: require('../../assets/drinkImgs/coffes/cafe-affogato.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe cremaet', image: require('../../assets/drinkImgs/coffes/cafe-cremaet.jpeg'), rating: '4.8', category: 'Cafes' },
  { title: 'Cafe irlandes', image: require('../../assets/drinkImgs/coffes/cafe-irlandes.jpeg'), rating: '4.8', category: 'Cafes' },

/* COCKTAILS */
  { title: 'Mojito', image: require('../../assets/drinkImgs/cocktails/mojito.jpg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Margarita', image: require('../../assets/drinkImgs/cocktails/margarita.jpg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Aperol Spritz', image: require('../../assets/drinkImgs/cocktails/aperolSpritz.jpeg'), rating: '4.8', category: 'Cocktails' },
   { title: 'Negroni', image: require('../../assets/drinkImgs/cocktails/negroni.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Daiquiri', image: require('../../assets/drinkImgs/cocktails/daiquiri.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Piña colada', image: require('../../assets/drinkImgs/cocktails/pinaColada.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Sex on the beach', image: require('../../assets/drinkImgs/cocktails/sexOnTheBeach.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Cosmopolitan', image: require('../../assets/drinkImgs/cocktails/cosmopolitan.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Pisco Sour', image: require('../../assets/drinkImgs/cocktails/piscoSour.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Bloody Mary', image: require('../../assets/drinkImgs/cocktails/bloodyMary.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Mai Tai', image: require('../../assets/drinkImgs/cocktails/MaiTai.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Moscow Mule', image: require('../../assets/drinkImgs/cocktails/moscow-mule.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Old Fashioned', image: require('../../assets/drinkImgs/cocktails/oldFashioned.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Manhattan', image: require('../../assets/drinkImgs/cocktails/Manhattan.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Tom collins', image: require('../../assets/drinkImgs/cocktails/tomCollins.jpeg'), rating: '4.8', category: 'Cocktails' },
  { title: 'Martini', image: require('../../assets/drinkImgs/cocktails/martini.jpeg'), rating: '4.8', category: 'Cocktails' },

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
