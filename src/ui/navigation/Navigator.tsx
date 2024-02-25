import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/LoginScreen';
import { HomeScreen } from '../screens/home/HomeScreen';
import MyDrawer from './DrawerNavigator';
import { CustomHeader } from '../components/custom_header/CustomHeader';
import { TestScreen } from '../screens/test/TestScreen';
import { TheoryTestScreen } from '../screens/theoryTest/TheoryTestScreen';
import { DetailsItemScreen } from '../screens/Restaurant/details_Item/DetailsItemScreen';



export type RootStackParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
  Test: undefined;
  TheoryTest: { lessonId: number };
  DetailsItemScreen: { itemId: number };
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const  Navigator = () => {
 
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
            backgroundColor:'white'
        }
    }}>
        <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} component={LoginScreen} />
        <Stack.Screen name="HomeScreen" options={{title:"Home", headerBackTitle:"Home"}} component={HomeScreen} />
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="TheoryTest" component={TheoryTestScreen} />
        <Stack.Screen name="DetailsItemScreen" component={DetailsItemScreen} />

        <Stack.Screen name="Main" component={MyDrawer} />

      </Stack.Navigator>
    );
  }