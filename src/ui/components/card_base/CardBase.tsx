import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Animated } from 'react-native';
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

export const Card: React.FC<CardProps> = ({ title, subtitle, image, rating, fullWidth, onPress }) => {
  // Estado para la opacidad de la animación
  const opacity = new Animated.Value(0);  // Comienza con opacidad de 0

  const handleImageLoaded = () => {
    // Animar la opacidad de 0 a 1 una vez que la imagen se haya cargado
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500, // Duración de la animación en milisegundos
      useNativeDriver: true // Utiliza el driver nativo para mejorar el rendimiento
    }).start();
  };

  return (
    <TouchableOpacity onPress={onPress} style={fullWidth ? styles.fullWidthCard : styles.card}>
      <Animated.Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={[styles.cardImage, { opacity }]} // Aplica la opacidad animada aquí
        onLoad={handleImageLoaded} // Llama a la función cuando la imagen se carga
      />
      <CustomText style={[styles.cardTitle, fullWidth && styles.cardTitleFullWidth]}>{title}</CustomText>
      <CustomText style={[styles.cardSubtitle, fullWidth && styles.cardTitleFullWidth]}>{subtitle}</CustomText>
    </TouchableOpacity>
  );
};
