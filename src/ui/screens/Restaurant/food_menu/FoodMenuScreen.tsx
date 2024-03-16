import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { Card } from '../../../components/card_base/CardBase';
import { MenuCategories } from '../../../components/menu_categories/MenuCategories';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/Navigator';


interface Item {
  itemId: number;
  title: string;
  subtitle: string;
  image: string;
  rating: string;
  subCategory: string;
}
const data: Item[] = [

  /* TAPAS */
  { itemId: 1, subtitle: 'con salsa brava', title: 'Patatas Bravas', image: require('../../../assets/foodImgs/bravas.jpg'), rating: '4.8', subCategory: 'Entrantes' },
  { itemId: 2, subtitle: 'con cebolla', title: 'Tortilla española', image: require('../../../assets/foodImgs/tortilla.jpeg'), rating: '4.7', subCategory: 'Entrantes' },
  { itemId: 3, subtitle: 'a la brasa', title: 'Pimientos del padrón', image: require('../../../assets/foodImgs/pimientos.jpeg'), rating: '4.7', subCategory: 'Entrantes' },
  { itemId: 4, subtitle: 'en salsa de estofado', title: 'Albondigas', image: require('../../../assets/foodImgs/albondigas.jpeg'), rating: '4.7', subCategory: 'Entrantes' },
  { itemId: 5, subtitle: 'del puerto de Dénia', title: 'Gambas al ajillo', image: require('../../../assets/foodImgs/gambas.jpeg'), rating: '4.7', subCategory: 'Entrantes' },
  { itemId: 6, subtitle: 'en harina de garbanzo', title: 'Calamares a la romana', image: require('../../../assets/foodImgs/calamares.jpeg'), rating: '4.7', subCategory: 'Entrantes' },
  { itemId: 7, subtitle: 'de jamon ibérico', title: 'Croquetas', image: require('../../../assets/foodImgs/croquetas.jpeg'), rating: '4.7', subCategory: 'Entrantes' },
  { itemId: 8, subtitle: 'con patata y piménton', title: 'Pulpo a la gallega', image: require('../../../assets/foodImgs/pulpo.jpeg'), rating: '4.7', subCategory: 'Entrantes' },

  /* ENSALADAS */
  { itemId: 9, subtitle: '', title: 'Ensalada Mediterránea', image: require('../../../assets/foodImgs/ensalada-mediterranea.jpg'), rating: '4.7', subCategory: 'Ensaladas' },
  { itemId: 10, subtitle: '', title: 'Ensalada Cesar', image: require('../../../assets/foodImgs/ensalada-cesar.jpeg'), rating: '4.7', subCategory: 'Ensaladas' },
  { itemId: 11, subtitle: '', title: 'Ensalada Mixta', image: require('../../../assets/foodImgs/ensalada-mixta.jpeg'), rating: '4.7', subCategory: 'Ensaladas' },

  /* CARNES */
  { itemId: 12, subtitle: '', title: 'Chuletas de cordero', image: require('../../../assets/foodImgs/chuletas de cordero.jpeg'), rating: '4.7', subCategory: 'carnes' },
  { itemId: 13, subtitle: '', title: 'Solomillo al whisky', image: require('../../../assets/foodImgs/solomillo.jpeg'), rating: '4.7', subCategory: 'Carnes' },
  { itemId: 14, subtitle: '', title: 'Estofado de ternera', image: require('../../../assets/foodImgs/estofado-ternera.jpeg'), rating: '4.7', subCategory: 'Carnes' },
  { itemId: 15, subtitle: '', title: 'Pollo al ajillo', image: require('../../../assets/foodImgs/pollo-ajillo.jpeg'), rating: '4.7', subCategory: 'Carnes' },
  { itemId: 16, subtitle: '', title: 'Entrecot', image: require('../../../assets/foodImgs/entrecot.jpeg'), rating: '4.7', subCategory: 'Carnes' },
  { itemId: 17, subtitle: '', title: 'Chuletón', image: require('../../../assets/foodImgs/chuleton.jpeg'), rating: '4.7', subCategory: 'Carnes' },
  { itemId: 18, subtitle: '', title: 'Carrillera', image: require('../../../assets/foodImgs/carilleras.jpeg'), rating: '4.7', subCategory: 'Carnes' },

  /* PESCADOS */
  { itemId: 19, subtitle: '', title: 'Dorada a la sal', image: require('../../../assets/foodImgs/dorada.jpeg'), rating: '4.7', subCategory: 'Pescados' },
  { itemId: 20, subtitle: '', title: 'Atun a la plancha', image: require('../../../assets/foodImgs/atun.jpeg'), rating: '4.7', subCategory: 'Pescados' },
  { itemId: 21, subtitle: '', title: 'Bacalao al Pil Pil', image: require('../../../assets/foodImgs/bacalao.jpeg'), rating: '4.7', subCategory: 'Pescados' },
  { itemId: 22, subtitle: '', title: 'Gambas a la plancha', image: require('../../../assets/foodImgs/gambas-plancha.jpeg'), rating: '4.7', subCategory: 'Pescados' },
  { itemId: 23, subtitle: '', title: 'Merluza a la Vasca', image: require('../../../assets/foodImgs/Merluza.jpeg'), rating: '4.7', subCategory: 'Pescados' },
  { itemId: 24, subtitle: '', title: 'Calamares rellenos', image: require('../../../assets/foodImgs/calamares-rellenos.jpeg'), rating: '4.7', subCategory: 'Pescados' },
  
  /* PAELLAS */
  { itemId: 25, subtitle: '', title: 'Paella Valenciana', image: require('../../../assets/foodImgs/paella-val.jpeg'), rating: '4.7', subCategory: 'Paellas' },
  { itemId: 26, subtitle: '', title: 'Paella mixta', image: require('../../../assets/foodImgs/paella-mixta.jpg'), rating: '4.7', subCategory: 'Paellas' },
  { itemId: 27, subtitle: '', title: 'Paella de verduras', image: require('../../../assets/foodImgs/paella-verduras.jpeg'), rating: '4.7', subCategory: 'Paellas' },
  { itemId: 28, subtitle: '', title: 'Paella de bacalao y coliflor', image: require('../../../assets/foodImgs/paella-bacalao.jpeg'), rating: '4.7', subCategory: 'Paellas' },

  /* POSTRES */
  { itemId: 25, subtitle: '', title: 'Tiramisu', image: require('../../../assets/foodImgs/desserts/tiramisu.jpg'), rating: '4.7', subCategory: 'Tartas' },
  { itemId: 25, subtitle: 'con helado de vainilla', title: 'Tatín de manzana', image: require('../../../assets/foodImgs/desserts/tatin.jpg'), rating: '4.7', subCategory: 'Tartas' },
  { itemId: 25, subtitle: 'con chocolate caliente', title: 'Brownie', image: require('../../../assets/foodImgs/desserts/brownie.jpg'), rating: '4.7', subCategory: 'Tartas' },
  { itemId: 25, subtitle: '', title: 'Vainilla bourbon', image: require('../../../assets/foodImgs/dorada.jpeg'), rating: '4.7', subCategory: 'Helados' },
  { itemId: 25, subtitle: '', title: 'Chocolate Belga', image: require('../../../assets/foodImgs/dorada.jpeg'), rating: '4.7', subCategory: 'Helados' },
  { itemId: 25, subtitle: '', title: 'Pistacho', image: require('../../../assets/foodImgs/dorada.jpeg'), rating: '4.7', subCategory: 'Helados' },




  /* BEBIDAS *************/

  /* CAFES */
  { itemId: 29, subtitle: '', title: 'Cafe solo', image: require('../../../assets/drinkImgs/coffes/cafe-solo.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 30, subtitle: '', title: 'Cafe cortado', image: require('../../../assets/drinkImgs/coffes/cafe-cortado.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 31, subtitle: '', title: 'Cafe bombon', image: require('../../../assets/drinkImgs/coffes/cafe-bombon.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 32, subtitle: '', title: 'Cafe con leche', image: require('../../../assets/drinkImgs/coffes/cafe-leche.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 33, subtitle: '', title: 'Cafe americano', image: require('../../../assets/drinkImgs/coffes/cafe-americano.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 34, subtitle: '', title: 'Cafe con capucchino', image: require('../../../assets/drinkImgs/coffes/cafe-capucchino.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 35, subtitle: '', title: 'Cafe flat white', image: require('../../../assets/drinkImgs/coffes/cafe-flatwhite.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 36, subtitle: '', title: 'Cafe machiatto', image: require('../../../assets/drinkImgs/coffes/cafe-machiatto.png'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 37, subtitle: '', title: 'Cafe frappe', image: require('../../../assets/drinkImgs/coffes/cafe-frappe.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 38, subtitle: '', title: 'Cafe affogato', image: require('../../../assets/drinkImgs/coffes/cafe-affogato.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 39, subtitle: '', title: 'Cafe cremaet', image: require('../../../assets/drinkImgs/coffes/cafe-cremaet.jpeg'), rating: '4.8', subCategory: 'Cafes' },
  { itemId: 40, subtitle: '', title: 'Cafe irlandes', image: require('../../../assets/drinkImgs/coffes/cafe-irlandes.jpeg'), rating: '4.8', subCategory: 'Cafes' },


  /* COCKTAILS */
  { itemId: 41, subtitle: '', title: 'Mojito', image: require('../../../assets/drinkImgs/cocktails/mojito.jpg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 42, subtitle: '', title: 'Margarita', image: require('../../../assets/drinkImgs/cocktails/margarita.jpg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 15, subtitle: '', title: 'Aperol Spritz', image: require('../../../assets/drinkImgs/cocktails/aperolSpritz.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 16, subtitle: '', title: 'Negroni', image: require('../../../assets/drinkImgs/cocktails/negroni.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 17, subtitle: '', title: 'Daiquiri', image: require('../../../assets/drinkImgs/cocktails/daiquiri.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 18, subtitle: '', title: 'Piña colada', image: require('../../../assets/drinkImgs/cocktails/pinaColada.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 19, subtitle: '', title: 'Sex on the beach', image: require('../../../assets/drinkImgs/cocktails/sexOnTheBeach.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 20, subtitle: '', title: 'Cosmopolitan', image: require('../../../assets/drinkImgs/cocktails/cosmopolitan.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 21, subtitle: '', title: 'Pisco Sour', image: require('../../../assets/drinkImgs/cocktails/piscoSour.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 22, subtitle: '', title: 'Bloody Mary', image: require('../../../assets/drinkImgs/cocktails/bloodyMary.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 23, subtitle: '', title: 'Mai Tai', image: require('../../../assets/drinkImgs/cocktails/MaiTai.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 24, subtitle: '', title: 'Moscow Mule', image: require('../../../assets/drinkImgs/cocktails/moscow-mule.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 25, subtitle: '', title: 'Old Fashioned', image: require('../../../assets/drinkImgs/cocktails/oldFashioned.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 26, subtitle: '', title: 'Manhattan', image: require('../../../assets/drinkImgs/cocktails/Manhattan.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 27, subtitle: '', title: 'Tom collins', image: require('../../../assets/drinkImgs/cocktails/tomCollins.jpeg'), rating: '4.8', subCategory: 'Cocktails' },
  { itemId: 28, subtitle: '', title: 'Martini', image: require('../../../assets/drinkImgs/cocktails/martini.jpeg'), rating: '4.8', subCategory: 'Cocktails' },

];



export const FoodMenuScreen: React.FC = () => {


  const route = useRoute<RouteProp<RootStackParamList, 'Platos'>>();
  const mainCategory = route.params?.mainCategory;

  const determineSubcategories = (mainCategory: string): string[] => {
    // Implementa tu lógica aquí, este es solo un ejemplo
    switch(mainCategory) {


      case 'Desayunos':
        return ['Bakery', 'Tostadas', 'Bowls', 'Combos'];
      case 'Platos':
        return ['Entrantes', 'Ensaladas', 'carnes', 'Pescados', 'Paellas'];
      case 'Bebidas':
        return ['Cafes', 'Zumos', 'refrescos', 'Vinos', 'cavas', 'Cocktails'];  
      case 'Postres':
        return ['Tartas', 'Helados'];

      default:
        return [];
    }
  };

  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<Item[]>([]);

  useEffect(() => {
    const subs = determineSubcategories(mainCategory || '');
    setSubcategories(subs);
    setSelectedSubcategory(subs[0] || '');
  }, [mainCategory]);

  useEffect(() => {
    setFilteredData(data.filter(item => item.subCategory === selectedSubcategory));
  }, [selectedSubcategory]);

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
        categories={subcategories}
        selected={selectedSubcategory}
        onSelectCategory={setSelectedSubcategory}
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
