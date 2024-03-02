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
    width: '85%',
    height: '80%',
    borderRadius: 25,
    alignSelf: 'center',

  },

  backButton:{
    paddingLeft: 10 
  }, 

  backButtonPlaceholder: {
    width: '18%', 
  },

  imageShadow: {
    marginTop: 5,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
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
    marginBottom: 10,
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },

});
