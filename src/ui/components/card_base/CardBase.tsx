import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { styles } from './CardBaseStyle';

interface CardProps {
  title: string;
  image: string;
  rating: string; // or number, depending on how you want to handle the rating
}

export const Card: React.FC<CardProps> = ({ title, image, rating }) => (
  <View style={[styles.card, { width: '40%' }]}>
    <Image source={require('../../assets/login/loginBackg.jpg')} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    {/* Agregar más detalles como el rating */}
  </View>
);
