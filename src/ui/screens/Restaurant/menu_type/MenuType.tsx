import { View, FlatList, ListRenderItem, TouchableOpacity } from "react-native";
import { Card } from "../../../components/card_base/CardBase";
import { useNavigation } from "@react-navigation/core";
import { CardCategory } from "../../../components/cards/cardCategory/CardCategory";
import { styles } from './MenuTypeStyle';



interface Item {
    title: string;
    image: string;
    rating: string;
    mainCategory: string;
  }
  const data: Item[] = [
    { title: '', image: require('../../../assets/categories/desayunos.png'), rating: '4.8', mainCategory: 'Desayunos' },
    { title: '', image: require('../../../assets/categories/platos.png'), rating: '4.7', mainCategory: 'Platos' },
    { title: '', image: require('../../../assets/categories/postres.png'), rating: '4.7', mainCategory: 'Postres' },
    { title: '', image: require('../../../assets/categories/bebidas.png'), rating: '4.7', mainCategory: 'Bebidas' },
  ];

  

export const MenuTypeScreen: React.FC = () => {

  const navigation = useNavigation<MenuTypeNavigationProp>();
  const handleCardPress = (mainCategory : string) => {

        navigation.navigate('Platos', { mainCategory });
      };
      const renderItem: ListRenderItem<Item> = ({ item }) => (
        <TouchableOpacity onPress={() => handleCardPress(item.mainCategory)}>
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