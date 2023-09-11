import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabOneScreen from './TabOneScreen'; // Tela de Login
import TabTwoScreen from './TabTwoScreen'; // Tela de Cadastro

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TabOneScreen} />
        <Stack.Screen name="Cadastro" component={TabTwoScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <AppStack />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//export default App;