import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './TheoryTestStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { LessonTheoryContent } from '../../components/lessonTheoryContent/LessonTheoryContent';
import { RootStackParamList } from '../../navigation/Navigator';
import { pagesContent, LessonData } from './lessonData';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer';


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
