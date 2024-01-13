import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './MenuCategoriesStyle';

const categories = ['Entrantes', 'Ensaladas', 'Carnes', 'Pescados'];

export const MenuCategories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity key={index} style={styles.button}>
          <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};