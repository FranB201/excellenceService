import 'react-native-gesture-handler';
import React, { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/ui/navigation/Navigator';
import { AuthContext, AuthProvider } from './src/context/AuthContext';
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, View } from 'react-native';


const Stack = createStackNavigator();


const AppState= ({ children }: { children: JSX.Element | JSX.Element[] } ) => {

  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )

}

const App = () => {

  const { status } = useContext(AuthContext);


  useEffect(() => {

  }, [status]);

  if (status === 'checking') {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (

  <NavigationContainer>
    <AppState>
      <Navigator/>
    </AppState>
  </NavigationContainer>
  
  );

}

export default App;
