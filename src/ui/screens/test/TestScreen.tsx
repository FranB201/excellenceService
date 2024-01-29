import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';

const questions = [
  { 
    questionText: "¿Cuál es la capital de Francia?", 
    options: ["París", "Madrid", "Berlín", "Londres"], 
    answer: "París"
  },
  // Agrega más preguntas según sea necesario
];

export const TestScreen: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnswer = (option: string) => {
    // Aquí manejas la lógica de respuesta
    // Por ejemplo, aumentar el progreso, cambiar a la siguiente pregunta, etc.
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setProgress((currentQuestionIndex + 1) / questions.length);
    } else {
      // Lógica cuando el usuario completa todas las preguntas
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Progress.Bar progress={progress} width={null} />
        <Text>{questions[currentQuestionIndex].questionText}</Text>
        <View>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity key={index} style={styles.optionButton} onPress={() => handleAnswer(option)}>
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#f0f0f0',
    // Añade estilos según tu diseño
  },
});
