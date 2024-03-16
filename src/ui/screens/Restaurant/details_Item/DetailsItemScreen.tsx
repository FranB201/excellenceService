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
        description: 'Las gambas son crustáceos marinos valorados en la gastronomía por su carne tierna, sabor suave y ligeramente dulce. Habitan en las profundidades del océano y son capturadas respetando su ciclo natural para garantizar su sostenibilidad. Ricas en proteínas y bajas en grasa, las gambas no solo son deliciosas, sino también una elección saludable que se adapta a una variedad de métodos culinarios.',  
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

  {
    itemId: 41, title: 'Mojito',
    subtitle: 'con ron',
    description: 'El Mojito es un cóctel tradicional cubano que combina ron, azúcar, lima, hierbabuena y soda para crear una bebida refrescante y aromática. Ideal para disfrutar en un día caluroso, su equilibrio perfecto de dulzura, cítricos y hierbas lo convierte en un favorito mundial.',
    ingredients: [
      { name: '1/2 Lima', 
      description: 'Para cortar la lima, primero se descartan las puntas que proporcionan una acidez indeseada. Cortamos por la mitad y otra vez por la mitad obteniendo 4 piezas las cuales utilizaremos para el cocktail.',  
      image: require('../../../assets/drinkImgs/cocktails//ingredients/limaCortada.jpeg') },
      { name: '2 cucharadas de azúcar moreno', description: 'El azúcar moreno es el perfecto balanceador de sabores. Crea un perfecto balance entre el cítrico de la lima con el dulce. No debemos olvidar que el ron está hecho de caña de azúcar por lo que el azúcar es el ingrediente que no puede faltar en un mojito.' },
      { name: '8 hojas de hierbabuena', description: 'La hierbabuena, con su distintivo aroma fresco y sabor mentolado, es un ingrediente esencial en la coctelería, donde se utiliza para agregar una dimensión refrescante y aromática a una variedad de bebidas. Su uso más famoso es en el Mojito. Además, la hierbabuena se emplea en la elaboración de otros cócteles, como el Mint Julep, aportando un toque fresco que realza los sabores de los demás ingredientes y brinda una experiencia sensorial única. Su presencia en los cócteles no solo mejora el sabor, sino que también añade un elemento decorativo y aromático.' },
      { name: '50ml Ron blanco', description: 'El ron blanco, también conocido como ron ligero o ron claro, es un destilado del jugo de caña de azúcar o de su subproducto, la melaza, que se caracteriza por su color transparente y su sabor suave y ligeramente dulce. A diferencia del ron añejo, que se envejece en barricas de madera y adquiere un color ámbar junto con un sabor más complejo y robusto, el ron blanco suele ser filtrado después de la destilación para eliminar cualquier coloración y luego se envejece por un período corto, a menudo menos de tres años, en barricas de roble o tanques de acero inoxidable. Esta breve maduración contribuye a su perfil de sabor más ligero y menos complejo, haciéndolo especialmente popular en coctelería, donde se utiliza como base para una amplia variedad de cócteles, como el Mojito, el Daiquirí y la Piña Colada, debido a su capacidad para mezclarse armoniosamente con otros ingredientes sin dominar el sabor de la bebida.' },
      { name: 'Top Soda', description: '' },
      { name: 'Hielo Picado', description: '' },
    ],

    image: require('../../../assets/drinkImgs/cocktails/mojito.jpg'), rating: '4.8',
    allergens: [
      { name: 'vaso', icon: require('../../../assets/icons/cocktailMojito.png'),},
      { name: 'lima', icon: require('../../../assets/icons/lima.png'),},
      { name: 'menta', icon: require('../../../assets/icons/menta.png'),},
    ], category: 'Entrantes',
    funFact: "El Mojito tiene sus raíces en el siglo XVI Cuba, donde se creía originalmente como un remedio medicinal. La combinación de lima y menta no solo era refrescante, sino que también ayudaba a disimular el sabor del aguardiente de caña, el precursor del ron moderno."

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
              {item.allergens.map((allergen, index) => {
               if (typeof allergen.icon === 'string') {
                return <Ionicons key={index} name={allergen.icon} size={24} style={styles.allergenIcon} />;
              } else {
                return <Image key={index} source={allergen.icon} style={styles.allergenIcon} />;
              }
            })}

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