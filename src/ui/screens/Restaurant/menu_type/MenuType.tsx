import { View, FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { Card } from "../../../components/card_base/CardBase";
import { useNavigation } from "@react-navigation/core";
import { CardCategory } from "../../../components/cards/cardCategory/CardCategory";
import { styles } from './MenuTypeStyle';



interface Item {
    title: string;
    image: string;
    rating: string;
    category: string;
  }
  const data: Item[] = [
    { title: '', image: require('../../../assets/categories/desayunos.png'), rating: '4.8', category: 'Entrantes' },
    { title: '', image: require('../../../assets/categories/platos.png'), rating: '4.7', category: 'Entrantes' },
    { title: '', image: require('../../../assets/categories/postres.png'), rating: '4.7', category: 'Entrantes' },
    { title: '', image: require('../../../assets/categories/bebidas.png'), rating: '4.7', category: 'Entrantes' },
  ];

  

export const MenuTypeScreen: React.FC = () => {

    const navigation = useNavigation();
    const handleCardPress = (item: Item) => {
        // Aquí puedes pasar parámetros adicionales si es necesario
        navigation.navigate('FoodMenu', { /* parámetros aquí si los hay */ });
      };
      const renderItem: ListRenderItem<Item> = ({ item }) => (
        <TouchableOpacity onPress={() => handleCardPress(item)}>
          <CardCategory title={item.title} image={item.image} rating={item.rating} fullWidth={true}/>
        </TouchableOpacity>
      );
      
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          //numColumns={2}
        />
      </View>
    );
  };