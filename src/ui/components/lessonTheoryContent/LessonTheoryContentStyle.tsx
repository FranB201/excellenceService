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
      color: 'rgba(107, 108, 112, 10)',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
    color: 'rgba(107, 108, 112, 10)',
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(107, 108, 112, 10)',
    paddingBottom: 4,
  },
  bulletPoint: {
      fontSize: 16,
      lineHeight: 24,
      marginTop: 5,
      marginLeft: 10, // Para indentar los bullet points
      borderRadius:20
  },
  bulletPointContainer: {
      marginTop: 10,
  },

    contentContainer: {
      marginBottom: 20, // Espacio extra al final de cada sección de contenido
  },



  });
  