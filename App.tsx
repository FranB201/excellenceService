import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';



// Definiendo los componentes de las pantallas
function HomeScreen() {

  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

// Configuración de la navegación por pestañas
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// Configuración del menú lateral
const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen name="Tabs" component={MyTabs} />
      {/* Puedes agregar más pantallas aquí */}
    </Drawer.Navigator>
  );
}

// Componente App
export default function App() {
  return (
    <>
        <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
    </>

  );
}