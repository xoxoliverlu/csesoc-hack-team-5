import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './views/Home';
import Tags from './views/Tags';

const Stack = createNativeStackNavigator();

export default function App() { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="Home" component = {Home} /> 
        <Stack.Screen name="Tags" component = {Tags} /> 
      </Stack.Navigator> 
    </NavigationContainer> 
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181922',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: "#fff"
  }
});
