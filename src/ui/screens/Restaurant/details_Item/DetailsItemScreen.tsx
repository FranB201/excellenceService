import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './DetailsItemsStyle';
import { CustomText } from '../../../components/atoms/customText/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';


interface Allergen {
  name: string;
  icon: string;
}

interface ItemDetail {
  itemId: number;
  title: string;
  subtitle: string;
  description: string;
  ingredients: string[];
  image: ImageSourcePropType;
  rating: string;
  allergens: Allergen[];
  category: string;
}


const data: ItemDetail[] = [
  {
    itemId: 1, title: 'Patatas Bravas',
    subtitle: 'con salsa brava',
    description: 'Una ración de patatas cortadas en dados y fritas, acompañadas de una salsa picante.',
    ingredients: ['Patatas', 'Salsa brava', 'Perejil'],
    image: require('../../../assets/foodImgs/bravas.jpg'), rating: '4.8',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
      { name: 'Pescado', icon: 'fish-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 2, title: 'Tortilla española',
    subtitle: '',
    description: 'La clásica receta, de patata y cebolla.',
    ingredients: ['Patatas', 'Salsa brava', 'Perejil'],
    image: require('../../../assets/foodImgs/tortilla.jpeg'), rating: '4.7',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 3, title: 'Pimientos del padrón',
    subtitle: '',
    description: '',
    ingredients: ['Patatas', 'Salsa brava', 'Perejil'],
    image: require('../../../assets/foodImgs/pimientos.jpeg'), rating: '4.7',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 4, title: 'Albondigas en salsa',
    subtitle: '',
    description: '',
    ingredients: ['Patatas', 'Salsa brava', 'Perejil'],
    image: require('../../../assets/foodImgs/albondigas.jpeg'), rating: '4.7',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 5, title: 'Gambas al ajillo',
    subtitle: '',
    description: '',
    ingredients: ['Patatas', 'Salsa brava', 'Perejil'],
    image: require('../../../assets/foodImgs/gambas.jpeg'), rating: '4.7', allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 6, title: 'Calamares a la romana',
    subtitle: '',
    description: '',
    ingredients: ['Patatas', 'Salsa brava', 'Perejil'],
    image: require('../../../assets/foodImgs/calamares.jpeg'), rating: '4.7',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
];

export const DetailsItemScreen: React.FC = () => {

  const navigation = useNavigation();
  const route = useRoute();
  const { itemId } = route.params;
  const item = data.find((item) => item.itemId === itemId);

  if (!item) {
    return <Text>Item no encontrado</Text>;
  }


  return (

    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <CustomText style={styles.headerTitle}>Detalles</CustomText>
        <View style={styles.backButtonPlaceholder} /> 
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imageShadow}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.detailsContainer}>
          <CustomText style={styles.title}>{item.title}</CustomText>
          <CustomText style={styles.subtitle}>{item.subtitle}</CustomText>
          <View style={styles.ratingAndAllergensContainer}>
            <CustomText style={styles.rating}>{item.rating}</CustomText>
            <View style={styles.allergensContainer}>
              {item.allergens.map((allergen, index) => (
                <Ionicons
                  key={index}
                  name={allergen.icon}
                  size={24}
                  style={styles.allergenIcon}
                />
              ))}
            </View>
          </View>
          <View style={styles.separator} />
          <CustomText style={styles.titleBody}>Descripción</CustomText>
          <CustomText style={styles.description}>{item.description}</CustomText>
          <CustomText style={styles.subtitleIngredients}>Ingredientes</CustomText>
          {item.ingredients.map((ingredient, index) => (
            <CustomText key={index} style={styles.ingredientItem}>
              • {ingredient}
            </CustomText>
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}
