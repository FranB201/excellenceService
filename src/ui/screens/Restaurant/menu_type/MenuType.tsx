import { View, FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { Card } from "../../../components/card_base/CardBase";
import { useNavigation } from "@react-navigation/core";


interface Item {
    title: string;
    image: string;
    rating: string;
    category: string;
  }
  const data: Item[] = [
    { title: 'Comida', image: require('../../../assets/foodImgs/bravas.jpg'), rating: '4.8', category: 'Entrantes' },
    { title: 'Bebidas', image: require('../../../assets/foodImgs/tortilla.jpeg'), rating: '4.7', category: 'Entrantes' },
    { title: 'Postres', image: require('../../../assets/foodImgs/tortilla.jpeg'), rating: '4.7', category: 'Entrantes' },
  ];

  

export const MenuTypeScreen: React.FC = () => {

    const navigation = useNavigation();
    const handleCardPress = (item: Item) => {
        // Aquí puedes pasar parámetros adicionales si es necesario
        navigation.navigate('FoodMenu', { /* parámetros aquí si los hay */ });
      };
      const renderItem: ListRenderItem<Item> = ({ item }) => (
        <TouchableOpacity onPress={() => handleCardPress(item)}>
          <Card title={item.title} image={item.image} rating={item.rating} fullWidth={true}/>
        </TouchableOpacity>
      );
      
    return (
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          //numColumns={2}
        />
      </View>
    );
  };