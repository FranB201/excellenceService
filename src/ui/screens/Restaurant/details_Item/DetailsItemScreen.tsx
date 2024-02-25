import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View } from 'react-native'




interface ItemDetail {
  itemId: number;
  title: string;
  image: string;
  rating: string;
  category: string;
}
const data: ItemDetail[] = [
  { itemId: 1, title: 'Patatas Bravas', image: require('../../../assets/foodImgs/bravas.jpg'), rating: '4.8', category: 'Entrantes' },
  { itemId: 2, title: 'Tortilla española', image: require('../../../assets/foodImgs/tortilla.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 3, title: 'Pimientos del padrón', image: require('../../../assets/foodImgs/pimientos.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 4, title: 'Albondigas en salsa', image: require('../../../assets/foodImgs/albondigas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 5, title: 'Gambas al ajillo', image: require('../../../assets/foodImgs/gambas.jpeg'), rating: '4.7', category: 'Entrantes' },
  { itemId: 6, title: 'Calamares a la romana', image: require('../../../assets/foodImgs/calamares.jpeg'), rating: '4.7', category: 'Entrantes' },
];

export const DetailsItemScreen: React.FC = () => {
  
  const route = useRoute();
  const { itemId } = route.params;
  return (

        <View>


            
        </View>


    )
}
