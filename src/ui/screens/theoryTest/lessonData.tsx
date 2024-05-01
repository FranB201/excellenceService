export interface LessonData {
    lessonId: number;
    title: string;
    subtitles: string[];
    bulletPoints: string[];
    videoId?: any; // O ajusta el tipo según el tipo real de tus videoIds
}

export const pagesContent: LessonData[] = [
    {
        lessonId: 1,
        title: "¿Quienes somos?",
        subtitles: ["Subtítulo 1.1", "Subtítulo 1.2"],
        videoId: require('../../assets/video/artecalentarleche.mp4'),
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
        videoId: require('../../assets/video/artecalentarleche.mp4'),
    },
        {
        lessonId: 6,
        title: "La caña perfecta",
        subtitles: [
            "1. Historia de la cerveza",
            "2. Tipos y características",
            "3. Pasos para servir una caña perfecta",
            "4. Limpieza de los utensilios"
        ],
        bulletPoints: [
            "La cerveza tiene una larga historia que se remonta a miles de años atrás, con evidencia de su producción en la antigua Mesopotamia.",
            "Existen numerosos tipos de cerveza, incluyendo Lager, Ale, Stout, IPA, y más, cada una con sus propias características de sabor, aroma y color.",
            "Para servir una caña perfecta, es importante seguir los pasos adecuados, como enjuagar el vaso con agua fría, inclinarlo a un ángulo de 45 grados al verter la cerveza, y dejar que la espuma se asiente antes de completar el llenado.",
            "La limpieza regular de los utensilios de servicio de cerveza, como grifos y vasos, es esencial para garantizar la calidad y el sabor óptimos, así como para prevenir la contaminación bacteriana."
        ],
        videoId: require('../../assets/video/canaperfecta.mp4'),
    }
];
