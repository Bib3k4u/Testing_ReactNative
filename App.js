import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// external imports 
import HomeScreen from './Test/Screens/HomeScreen';
import Textinput from './Test/Textinput';
import FetchApi from './Test/FetchApi';
import ExampleuseState from './Test/ExampleuseState';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyled:{
            backgroundColor:'transparent'
        },
        headerTransparent:true,
        headerTitle:'',
        headerLeftContainerStyle: {
            paddingLeft:20
        }
      }} 
      initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Textinput" component={Textinput} />
        <Stack.Screen name="FetchApi" component={FetchApi} />
        <Stack.Screen name="ExampleuseState" component={ExampleuseState} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;