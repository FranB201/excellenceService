import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: 10,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Ajusta el padding top en Android
  },
  headerTitle: {
    fontSize: 22,
    marginLeft: 20,
    textAlign: 'center', 
    flex: 1,
  },
  image: {
    width: '85%', // Esto hará que la imagen ocupe todo el ancho disponible.
    height: undefined, // La altura será determinada por el aspectRatio.
    aspectRatio: 1.5, // Ajusta esto para que coincida con la relación de aspecto real de tus imágenes.
    resizeMode: 'cover', 
    alignSelf: 'center',
    borderRadius: 25, // Esto añade bordes redondeados a la imagen.
    marginTop: 10, // Esto añade un m
    marginBottom: 20, // Esto añade un m

  },

  backButton:{
    paddingLeft: 10 
  }, 

  backButtonPlaceholder: {
    width: '18%', 
  },

  detailsContainer: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rating: {
    fontSize: 16,
    marginBottom: 10,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },

  titleBody: {

    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,

  },

  subtitleIngredients: {

    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20
  },

  ingredientItem: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 10,
  },

  description: {
    fontSize: 16,
  },

  ratingAndAllergensContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  allergensContainer: {
    flexDirection: 'row',
  },

  allergenIcon: {
    marginLeft: 10, // Espacio entre íconos
  },


  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
  modalDescription: {
    fontSize: 16,
  },
  modalImage: {
    width: '100%', // Esto hará que la imagen ocupe todo el ancho del modal
    height: undefined, // Altura indefinida para mantener la proporción de la imagen
    aspectRatio: 1.5, // Puedes ajustar esto para la proporción deseada de tu imagen
    resizeMode: 'cover', // Esto asegura que la imagen se escale dentro del espacio asignado
    marginTop: 20,
    borderRadius: 20, 
  },

});
