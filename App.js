import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home';
import RegisterScreen from './src/views/Register';
import LoginScreen from './src/views/Login';
import { useState } from 'react';
import BluetoothDevices from './src/views/BluetoothDevices';

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  return !user ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login'>
          {props => <LoginScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name='Register'>
          {props => <RegisterScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name='Devices' component={BluetoothDevices} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Login'>
          {props => <LoginScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name='Register'>
          {props => <RegisterScreen {...props} setUser={setUser} />}
        </Stack.Screen>
        <Stack.Screen name='Devices' component={BluetoothDevices} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
