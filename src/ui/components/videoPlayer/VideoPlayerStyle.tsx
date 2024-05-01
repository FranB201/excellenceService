import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({


  container: {
    flex: 1,
    justifyContent: 'center', // Center the video vertically
    alignItems: 'center', // Center the video horizontally
    backgroundColor: 'black',
    height: 300, // You can adjust this as needed or make sure it's calculated based on screen dimensions
    borderRadius: 20, // Esquinas redondeadas


  },
  video: {
    width: '100%',  // Take full width of the container
    height: '100%', // Take full height of the container+
    borderRadius: 20, // Esquinas redondeadas

  },
  
});