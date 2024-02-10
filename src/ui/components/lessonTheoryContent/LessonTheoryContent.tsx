import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from './LessonTheoryContentStyle';


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
      <Text style={styles.title}>{title}</Text>
      {subtitles && subtitles.map((subtitle, index) => (
        <View key={index} style={styles.contentContainer}>
          <Text style={styles.subtitle}>{subtitle}</Text>
          {/* Asegúrate de que bulletPoints también sea verificado antes de acceder a él */}
          {bulletPoints && <Text style={styles.bulletPoint}>{bulletPoints[index]}</Text>}
        </View>
      ))}
      {/* Si tienes un videoUrl, podrías querer mostrar algo aquí también */}
    </View>
  );
};