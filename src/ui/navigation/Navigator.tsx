import { createStackNavigator } from '@react-navigation/stack';
import { login_screen } from '../screens/login/login_screen';

const Stack = createStackNavigator();

export const  Navigator = () => {
 
    return (
      <Stack.Navigator screenOptions={{
        
        headerStyle:{
        elevation:0,
        shadowColor:'transparent'
        },
        cardStyle: {
            backgroundColor:'white'
        }
    }}>
        <Stack.Screen name="LoginScreen" options={{ title: 'Login' }} component={login_screen} />
      </Stack.Navigator>
    );
  }