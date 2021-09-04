import * as React from 'react';
import {Text, View } from 'react-native';

import HomeScreen from './screens/Home';
import IsslocationScreen from './screens/isslocation1';
import MeteorLocationScreen from './screens/MeteorLocationScreen';

import 'react-native-gesture-handler'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' 
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Meteor' component={MeteorLocationScreen}/>
        <Stack.Screen name='Isstracker' component={IsslocationScreen}/>
      </Stack.Navigator>
    </NavigationContainer>   

  );
}

const Stack = createStackNavigator();