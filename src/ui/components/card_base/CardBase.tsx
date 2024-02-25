import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './CardBaseStyle';
import { CustomText } from '../atoms/customText/CustomText';

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
  rating: string;
  fullWidth: boolean;
  onPress: () => void;
}

export const Card: React.FC<CardProps> = ({ title, subtitle, image, rating, fullWidth, onPress }) => (

  <TouchableOpacity onPress={onPress} style={fullWidth ? styles.fullWidthCard : styles.card}>
    <Image
      source={typeof image === 'string' ? { uri: image } : image}
      style={styles.cardImage}
    />
    <CustomText style={[styles.cardTitle, fullWidth && styles.cardTitleFullWidth]}>{title}</CustomText>
    <CustomText style={[styles.cardSubtitle, fullWidth && styles.cardTitleFullWidth]}>{subtitle}</CustomText>
  </TouchableOpacity>
);
