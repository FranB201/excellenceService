import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ProgressBarAndroid, Button, ScrollView, Dimensions } from 'react-native';
import { styles } from './LessonsStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/Navigator';

interface CardProps {
  lessonId: number,
  title: string;
  subtitle: string;
  content: string[];
  progress?: number;
}

interface CustomButtonProps {
  onPress: () => void;
  title: string;
}
const windowWidth = Dimensions.get('window').width;

const data = [
  {
    lessonId: 1,
    title: "Tema 1",
    subtitle: "¿Quienes somos?",
    progress: 0.5,
    content: ["1.1 História", "1.2 Lugar", "1.3 Filosofia", "1.4 ¿Que ofrecemos?"]
  },
  {
    lessonId: 2,
    title: "Tema 2",
    subtitle: "Uniforme",
    progress: 0.5,
    content: ["2.1 Lección", "Lección 2.2"]
  },
  {
    lessonId: 3,
    title: "Tema 3",
    subtitle: "Roles y funciones",
    content: ["3.1 Lección", "Lección 3.2"]
  },
  {
    lessonId: 4,
    title: "Tema 4",
    subtitle: "Camarero, técnicas básicas",
    content: ["3.1 Lección", "Lección 3.2"]
  },
  {
    lessonId: 5,
    title: "Tema 5",
    subtitle: "El arte del café",
    content: ["5.1 Lección", "Lección 5.2"]
  },
];

type LessonsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LessonsScreen'>;


export const LessonsScreen: React.FC = () => {

  const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title }) => (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  const Card: React.FC<CardProps> = ({ title, subtitle, progress = 0, lessonId }) => {

    const navigation = useNavigation<LessonsScreenNavigationProp>();

    return (
      <View style={[styles.card, { width: windowWidth }]}>
        <View style={styles.contentContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <CustomButton title="Ver información" onPress={() => navigation.navigate('TheoryTest', { lessonId })} />
          <CustomButton title="Hacer test" onPress={() => navigation.navigate('Test')}/>          
        </View>
      </View>

    );
  };


  const Carousel = () => {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.scrollView}>
        {data.map((item, index) => (
          <Card key={index} title={item.title} subtitle={item.subtitle} progress={item.progress} content={[]} lessonId={item.lessonId} />
        ))}
      </ScrollView>
    );
  };


  return <Carousel />;

};
