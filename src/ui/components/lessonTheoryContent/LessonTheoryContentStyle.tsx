import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      paddingTop: 0,
      paddingRight: 10,
      paddingBottom: 20,
      paddingLeft: 10,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#6B4E31', // Color café oscuro para el título
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: '#9C7A54', // Un color café más claro para los subtítulos
    borderBottomWidth: 2,
    borderBottomColor: '#D9A760', // Una línea para subrayar los subtítulos
    paddingBottom: 4,
  },
  bulletPoint: {
      fontSize: 16,
      lineHeight: 24,
      marginTop: 5,
      marginLeft: 10, // Para indentar los bullet points
  },
  bulletPointContainer: {
      marginTop: 10,
  },

    contentContainer: {
      marginBottom: 20, // Espacio extra al final de cada sección de contenido
  },



  });
  