import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigation } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import EditarScreen from './screens/EditarScreen';

const App = () => {

  const Stack = createStackNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Editar" component={EditarScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;