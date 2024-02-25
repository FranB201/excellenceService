import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './LessonTheoryContentStyle';
import { CustomText } from '../atoms/customText/CustomText';


// Define una interfaz para los props
interface ContentProps {
  title: string;
  subtitles?: string[];
  videoUrl?: string;
  bulletPoints?: string[];
}

// Componente de contenido que puede variar
export const LessonTheoryContent: React.FC<ContentProps> = ({ title, subtitles, videoUrl, bulletPoints }) => {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>{title}</CustomText>
      {subtitles && subtitles.map((subtitle, index) => (
        <View key={index} style={styles.contentContainer}>
          <CustomText style={styles.subtitle}>{subtitle}</CustomText>
          {/* Asegúrate de que bulletPoints también sea verificado antes de acceder a él */}
          {bulletPoints && <CustomText style={styles.bulletPoint}>{bulletPoints[index]}</CustomText>}
        </View>
      ))}
      {/* Si tienes un videoUrl, podrías querer mostrar algo aquí también */}
    </View>
  );
};