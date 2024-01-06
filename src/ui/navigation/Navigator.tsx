import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login/login_screen';

const Stack = createStackNavigator();

export const  Navigator = () => {
 
    return (
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} component={LoginScreen} />
      </Stack.Navigator>
    );
  }