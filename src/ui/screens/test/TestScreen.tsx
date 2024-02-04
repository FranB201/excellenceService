import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { styles } from './TestStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { QuestionCard } from '../../components/testTypes/questionCard/QuestionCard';


const questions = [
    {
        questionText: "¿Cuál es la capital de Francia?",
        options: ["París", "Madrid", "Berlín", "Londres"],
        answer: "París"
    },
    {
        questionText: "¿Cuál es nuestra oferta gastronómica?",
        options: ["Fusión", "Mediterranea", "Thailandesa", "Todas las anteriores"],
        answer: "Mediterranea"
    },
    {
        questionText: "¿Cuantos años de experiencia tenemos en el sector?",
        options: ["1 año", "6 meses", "2 años", "16 años"],
        answer: "2 años"
    },

];

export const TestScreen: React.FC = () => {

    const navigation = useNavigation();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const [feedbackVisible, setFeedbackVisible] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');
    const [feedbackColor, setFeedbackColor] = useState('green'); // o rojo para incorrecto
    const feedbackPosition = useRef(new Animated.Value(-100)).current;

    const handleAnswer = (selectedOption: string, isCorrect: boolean) => {
        const correctAnswer = questions[currentQuestionIndex].answer;
        setFeedbackMessage(isCorrect ? "Correcto!!!" : `Incorrecto, Respuesta correcta: ${correctAnswer}`);
        setFeedbackColor(isCorrect ? 'green' : 'red');
        setFeedbackVisible(true);

        // Animar el banner de retroalimentación
        Animated.timing(feedbackPosition, {
            toValue: 0, // Desliza hacia arriba
            duration: 500, // Duración en milisegundos
            useNativeDriver: true,
        }).start();
    };

    // Lógica para ocultar el banner y pasar a la siguiente pregunta
    const handleContinue = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setProgress((currentQuestionIndex + 2) / questions.length);
        } else {
            // Final del cuestionario
            console.log("Cuestionario completado");
        }
        // Ocultar el banner
        Animated.timing(feedbackPosition, {
            toValue: -100, // Desliza hacia abajo
            duration: 500,
            useNativeDriver: true,
        }).start(() => setFeedbackVisible(false)); // Ocultar después de animar
    };
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.mainContainer}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                        <Ionicons name="close" size={30} color="#000" />
                    </TouchableOpacity>

                    <Progress.Bar progress={progress} width={null} style={styles.progressBar} />
                </View>

                <View>
                    <QuestionCard
                        questionText={questions[currentQuestionIndex].questionText}
                        options={questions[currentQuestionIndex].options}
                        answer={questions[currentQuestionIndex].answer}
                        onAnswer={handleAnswer}
                    />

                </View>
            </View>

            {feedbackVisible && (
                <Animated.View style={[styles.feedbackContainer, { backgroundColor: feedbackColor, transform: [{ translateY: feedbackPosition }] }]}>
                    <Text style={styles.feedbackMessage}>{feedbackMessage}</Text>
                    <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
                        <Text style={styles.continueButtonText}>Continuar</Text>
                    </TouchableOpacity>
                </Animated.View>
            )}
        </SafeAreaView>

    );
};
