import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, ImageSourcePropType, Platform, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './DetailsItemsStyle';
import { CustomText } from '../../../components/atoms/customText/CustomText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomModal } from '../../../components/pop_ups/customModal/CustomModal';


interface Allergen {
  name: string;
  icon: string;
}

interface Ingredient {
  name: string;
  description?: string;
  image?: ImageSourcePropType;
}

interface ItemDetail {
  itemId: number;
  title: string;
  subtitle: string;
  description: string;
  ingredients: Ingredient[];
  image: ImageSourcePropType;
  rating: string;
  allergens: Allergen[];
  category: string;
  funFact?: string;
}


const data: ItemDetail[] = [
  {
    itemId: 1, title: 'Patatas Bravas',
    subtitle: 'con salsa brava',
    description: 'Una ración de patatas cortadas en dados y fritas, acompañadas de una salsa picante.',
    ingredients: [
      { name: 'Patatas', 
      description: 'Originarias de Sudamérica y traídas a Europa en el siglo XVI, las patatas son un alimento básico en muchas culturas. Las patatas en esta receta son cuidadosamente seleccionadas, cortadas en dados uniformes para una cocción perfecta y luego fritas hasta alcanzar una textura dorada y crujiente por fuera, mientras se mantienen suaves y esponjosas por dentro. Son una excelente fuente de vitaminas C y B6, potasio y fibra, especialmente si se consumen con su piel.',  
      image: require('../../../assets/foodImgs/ingredients/patatas.jpeg') },
      { name: 'Salsa brava', description: 'Salsa picante tradicional' },
    ], image: require('../../../assets/foodImgs/bravas.jpg'), rating: '4.8',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
      { name: 'Pescado', icon: 'fish-outline' },
    ], category: 'Entrantes',
    funFact: 'Aunque hoy en día las consideramos una base de la alimentación mundial, las patatas no fueron bien recibidas inicialmente en Europa y se cultivaban solo como una curiosidad botánica. No fue hasta que la nobleza empezó a adorarlas, y se descubrieron sus propiedades nutricionales, que comenzaron a ser un alimento esencial en la dieta de muchos países.'

  },
  {
    itemId: 2, title: 'Tortilla española',
    subtitle: '',
    description: 'La clásica receta, de patata y cebolla.',
    ingredients: [
      { name: 'Patatas', description: 'Cortadas en dados y fritas' },
      { name: 'Cebolla', description: 'Salsa picante tradicional' },
      { name: 'Huevo', description: 'Salsa picante tradicional' },
      // más ingredientes...
    ], image: require('../../../assets/foodImgs/tortilla.jpeg'), rating: '4.7',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 3, title: 'Pimientos del padrón',
    subtitle: '',
    description: '',
    ingredients: [
      { name: 'Patatas', description: 'Cortadas en dados y fritas' },
      { name: 'Salsa brava', description: 'Salsa picante tradicional' },
      // más ingredientes...
    ], image: require('../../../assets/foodImgs/pimientos.jpeg'), rating: '4.7',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 4, title: 'Albondigas en salsa',
    subtitle: 'de ternera',
    description: '',
    ingredients: [
      { name: 'Carne picada', description: 'Cortadas en dados y fritas' },
      { name: 'Guiso de ternera', description: 'Salsa picante tradicional' },
      // más ingredientes...
    ], image: require('../../../assets/foodImgs/albondigas.jpeg'), rating: '4.7',
    allergens: [
      { name: 'Gluten', icon: 'pizza-outline' },
      { name: 'Nueces', icon: 'nutrition-outline' },
    ], category: 'Entrantes'
  },
  {
    itemId: 5, title: 'Gambas al ajillo',
    subtitle: 'con aceite de oliva y chile fresco',
    description: 'Este plato tradicional de la gastronomía española consiste en gambas frescas salteadas en aceite de oliva con ajo picado y guindilla, lo que les da un sabor picante y muy característico. Se sirven con pan fresco para no desperdiciar el sabroso aceite.',
    ingredients: [
      { 
        name: 'Gambas', 
        description: 'Las gambas son crustáceos marinos valorados en la gastronomía por su carne tierna y sabor suave y ligeramente dulce. Habitan en las profundidades del océano y son capturadas respetando su ciclo natural para garantizar su sostenibilidad. Ricas en proteínas y bajas en grasa, las gambas no solo son deliciosas, sino también una elección saludable que se adapta a una variedad de métodos culinarios.',  
        image: require('../../../assets/foodImgs/ingredients/gamba.jpeg') 
      },
      { 
        name: 'Ajo', 
        description: 'El ajo se corta finamente y se fríe ligeramente hasta dorar, aportando un aroma y sabor inconfundible que se fusiona con las gambas durante la cocción.', 
      },
      { 
        name: 'Guindilla', 
        description: 'Añade un toque picante al plato, su uso se ajusta al gusto por el picante, pero es esencial para darle a las gambas al ajillo su carácter distintivo.', 
      },
      { 
        name: 'Aceite de oliva', 
        description: 'Usamos un aceite de oliva virgen extra de la mejor calidad, que no solo es el medio de cocción sino que también aporta un sabor profundo y enriquece la salsa.', 
      },
      // Puedes agregar más ingredientes si lo deseas.
    ],
    image: require('../../../assets/foodImgs/gambas.jpeg'), 
    rating: '4.7', 
    allergens: [
      { name: 'Crustáceos', icon: 'fish-outline' }, // Cambiado de 'Gluten' a 'Crustáceos' ya que las gambas pertenecen a este grupo.
      // Elimina o ajusta los alérgenos según los ingredientes reales de tu plato.
    ],
    category: 'Entrantes',
    funFact: 'Las gambas al ajillo tienen una historia entrelazada con las tabernas españolas, donde tradicionalmente se servían en un pequeño plato de barro caliente para mantenerlas calientes. Se dice que la costumbre de servir tapas comenzó como una manera de evitar que las moscas cayeran en el vino, cubriendo las copas con un plato que contenía estos deliciosos crustáceos. Hoy en día, es uno de los platos más icónicos de España, disfrutado tanto por locales como por visitantes de todo el mundo.'

  },
  {
    itemId: 6, title: 'Calamares a la romana',
    subtitle: '',
    description: '',
    ingredients: [
      { name: 'Patatas', description: 'Cortadas en dados y fritas' },
      { name: 'Salsa brava', description: 'Salsa picante tradicional' },
      // más ingredientes...
    ], image: require('../../../assets/foodImgs/calamares.jpeg'), rating: '4.7',
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

  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  if (!item) {
    return <Text>Item no encontrado</Text>;
  }

  // Función para abrir el modal y establecer el ingrediente seleccionado
  const handleOpenModal = (ingredientName: string) => {
    const ingredient = item.ingredients.find(ing => ing.name === ingredientName);
    setSelectedIngredient(ingredient || null);
    setModalVisible(true);
  };




  return (
    <SafeAreaView style={{ flex: 1,
      paddingTop: Platform.OS === 'android' ? 25 : 0, 
      paddingBottom: Platform.OS === 'android' ? 25 : 0,  }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={30} />
        </TouchableOpacity>
        <CustomText style={styles.headerTitle}>Detalles</CustomText>
        <View style={styles.backButtonPlaceholder} />
      </View>
      <ScrollView style={styles.container}>
          <Image source={item.image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <CustomText style={styles.title}>{item.title}</CustomText>
          <CustomText style={styles.subtitle}>{item.subtitle}</CustomText>
          <View style={styles.ratingAndAllergensContainer}>
            <CustomText style={styles.rating}>{item.rating}</CustomText>
            <View style={styles.allergensContainer}>
              {item.allergens.map((allergen, index) => (
                <Ionicons key={index} name={allergen.icon} size={24} style={styles.allergenIcon} />
              ))}
            </View>
          </View>
          <View style={styles.separator} />
          <CustomText style={styles.titleBody}>Descripción</CustomText>
          <CustomText style={styles.description}>{item.description}</CustomText>
          <CustomText style={styles.subtitleIngredients}>Ingredientes</CustomText>
          {item.ingredients.map((ingredient, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
              <CustomText style={styles.ingredientItem}>
                • {ingredient.name}
              </CustomText>
              <TouchableOpacity onPress={() => handleOpenModal(ingredient.name)}>
                <Ionicons name="information-circle-outline" size={24} style={{ marginLeft: 5 }} />
              </TouchableOpacity>
            </View>
          ))}
          
          <CustomText style={styles.subtitleIngredients}>Sabías que...</CustomText>
          <CustomText style={styles.modalDescription}>{item.funFact}</CustomText>


        </View>
      </ScrollView>
      <CustomModal isVisible={isModalVisible} onClose={() => setModalVisible(false)}>
        <View style={{ padding: 20 }}>
          <CustomText style={styles.modalTitle}>Descripción {selectedIngredient?.name}</CustomText>
          {selectedIngredient?.description && (
            <CustomText style={styles.modalDescription}>{selectedIngredient.description}</CustomText>
          )}
          {selectedIngredient?.image && (
            <Image source={selectedIngredient.image} style={styles.modalImage} />
          )}
        </View>
      </CustomModal>


    </SafeAreaView>
  );
}