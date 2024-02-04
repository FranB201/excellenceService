import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { styles } from './CardCategoryStyle';

interface CardProps {
  title: string;
  image: string;
  rating: string; 
  fullWidth: boolean;
}

export const CardCategory: React.FC<CardProps> = ({ title, image, rating,fullWidth }) => (
  <View style={fullWidth ? styles.fullWidthCard : styles.card}>
    <Image 
      source={typeof image === 'string' ? { uri: image } : image}
      style={styles.cardImage}
    />
    <Text style={[styles.cardTitle, fullWidth && styles.cardTitleFullWidth]}>{title}</Text>
  </View>
);
