import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from './QuestionStyle';

interface QuestionProps {
    questionText: string;
    options: string[];
    onAnswer: (option: string, isCorrect: boolean) => void; // Ajuste para incluir si la respuesta es correcta
    answer: string;
}

export const QuestionCard: React.FC<QuestionProps> = ({ questionText, options, onAnswer, answer }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isVerified, setIsVerified] = useState(false);

    const handleOptionPress = (option: string) => {
        setSelectedOption(option);
        // Si ya se ha verificado antes, resetear para nueva selección
        if (isVerified) setIsVerified(false);
    };

    const handleVerifyPress = () => {
        setIsVerified(true);
        const isCorrect = selectedOption === answer;
        onAnswer(selectedOption || '', isCorrect); // Notificar si la respuesta es correcta o no
    };

    return (
        <View style={styles.container}>
            <Text style={styles.questionText}>{questionText}</Text>
            {options.map((option, index) => (
                <TouchableOpacity
                    key={index}
                    style={[
                        styles.optionButton,
                        selectedOption === option ? { backgroundColor: isVerified ? (option === answer ? '#2D6A4F' : '#9B2C2C') : 'lightgreen' } : {},
                    ]}
                    onPress={() => handleOptionPress(option)}
                >
                    <Text>{option}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyPress}>
                <Text style={styles.verifyButtonText}>Comprobar</Text>
            </TouchableOpacity>
        </View>
    );
};