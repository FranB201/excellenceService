import React, {useState} from 'react';
import {ScrollView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './MenuCategoriesStyle';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
const categories = ['Entrantes', 'Ensaladas', 'Carnes', 'Pescados'];

interface MenuCategoriesProps {
  categories: string[];
  selected: string;
}
export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  categories,
  selected,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Entrantes');
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };
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
            selectedCategory === category ? styles.selectedButton : null,
          ]}
          onPress={() => handleSelectCategory(category)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category ? styles.selectedText : null,
            ]}>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
