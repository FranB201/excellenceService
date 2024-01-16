import React, { useState } from 'react'
import { View, Text, TouchableOpacity, ProgressBarAndroid, Button, ScrollView, Dimensions } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { styles } from './LessonsStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CardProps {
  title: string;
  content: string[];
  progress?: number;

}

const windowWidth = Dimensions.get('window').width;

const data = [
  {
    title: "Tema 1. ¿Quienes somos?",
    progress: 0.5, 
    content: ["1.1 História", "1.2 Lugar", "1.3 Filosofia", "1.4 ¿Que ofrecemos?"]
  },
  {
    title: "Tema 2. Uniforme",
    progress: 0.5, 
    content: ["2.1 Lección", "Lección 2.2"]
  },
  {
    title: "Tema 3. Roles y funciones",
    content: ["3.1 Lección", "Lección 3.2"]
  },
  {
    title: "Tema 4. Camarero, técnicas básicas",
    content: ["3.1 Lección", "Lección 3.2"]
  },
];


export const LessonsScreen: React.FC = () => {

  const Card: React.FC<CardProps> = ({ title, progress = 0 }) => {


    return (
      <View style={[styles.card, { width: windowWidth }]}>
      <Text style={styles.cardTitle}>{title}</Text>
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={progress} />
        <View style={styles.buttonContainer}>
          <Button title="Ver información" onPress={() => {/* acción */}} />
          <Button title="Hacer test" onPress={() => {/* acción */}} />
        </View>
      </View>
    );
  };


  const Carousel = () => {
    return (
      <ScrollView horizontal={true} pagingEnabled={true} style={styles.scrollView}>
        {data.map((item, index) => (
          <Card key={index} title={item.title} progress={item.progress} content={[]} />
        ))}
      </ScrollView>
    );
  };


  return <Carousel />;

};
