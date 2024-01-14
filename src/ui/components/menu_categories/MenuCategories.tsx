import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './MenuCategoriesStyle';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';


interface MenuCategoriesProps {
  categories: string[];
  selected: string;
  onSelectCategory: (category: string) => void;

}
export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  categories,
  selected,
  onSelectCategory,
}) => {
/*   const [selectedCategory, setSelectedCategory] = useState('Entrantes');
  const handleSelectCategory = (category: string) => {
    onSelectCategory(category);
  }; */
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity
          key={category}
          style={[
            styles.categoryButton,
            selected === category ? styles.selectedButton : null,
          ]}
          onPress={() => onSelectCategory(category)}>
          <Text
            style={[
              styles.categoryText,
              selected === category ? styles.selectedText : null,
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
