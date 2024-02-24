import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './TheoryTestStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { LessonTheoryContent } from '../../components/lessonTheoryContent/LessonTheoryContent';
import { RootStackParamList } from '../../navigation/Navigator';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';


const pagesContent = [
    {
        lessonId: 1,
        title: "¿Quienes somos?",
        subtitles: ["Subtítulo 1.1", "Subtítulo 1.2"],
        videoId: "911978678",
        bulletPoints: ["Punto 1.1", "Punto 1.2", "Punto 1.3"],
    },
    {
        lessonId: 2,
        title: "Uniforme",
        subtitles: ["Subtítulo 2.1", "Subtítulo 2.2"],

        bulletPoints: ["Punto 2.1", "Punto 2.2"],
    },

    {
        lessonId: 5,
        title: "El arte del café",
        subtitles: ["1. Origen del Café", "2. Variedades y Características", "3. Pasos para un Buen Café", "4. Limpieza de la Máquina de Café"],
        bulletPoints: [
            "El café tiene su origen en Etiopía, con registros que datan del siglo IX.",
            "Las principales variedades de café son Arábica y Robusta, cada una con características distintivas en sabor, nivel de cafeína y condiciones de cultivo.",
            "Para realizar un buen café es crucial la calidad del grano, la molienda adecuada, la temperatura y la presión del agua.",
            "La limpieza regular de la máquina de café es esencial para mantener un sabor óptimo y la higiene.",
        ],
        videoId: "911978678",


    }
];

type TheoryTestRouteProp = RouteProp<RootStackParamList, 'TheoryTest'>;


export const TheoryTestScreen: React.FC = () => {

    const navigation = useNavigation();
    const route = useRoute<TheoryTestRouteProp>();
    const { lessonId } = route.params;
    const specificContent = pagesContent.find(content => content.lessonId === lessonId);



    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>

                <View style={styles.mainContainer}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
                            <Ionicons name="close" size={30} color="#000" />
                        </TouchableOpacity>

                    </View>

                    <View>
                        {specificContent ? (
                            <>
                                <LessonTheoryContent
                                    key={specificContent.lessonId}
                                    title={specificContent.title}
                                    subtitles={specificContent.subtitles}
                                    videoUrl={specificContent.videoId}
                                    bulletPoints={specificContent.bulletPoints}
                                />
                                {/* Solo renderiza VideoPlayer si specificContent tiene un videoId */}
                                {specificContent.videoId && <VideoPlayer videoId={specificContent.videoId} />}
                            </>
                        ) : (
                            <Text>No se encontró el contenido para esta lección.</Text>
                        )}
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>

    );
};
