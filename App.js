import { StatusBar } from 'expo-status-bar';
import React,{Component} from 'react';
import {Button,StyleSheet,Text,View,TextInput,TouchableOpacity,Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import Dashboard from './screens/Dashboard';
import Second from './screens/Second';
import EditActivity from './screens/EditActivity';

const Stack = createStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen}  options={{title:'Register'}} /> 
        <Stack.Screen name="Login" component={LoginScreen}  options={{title:'Login'}} /> 
        <Stack.Screen name="Dashboard" component={Dashboard}  options={{title:'User Dashboard'}} /> 
        <Stack.Screen name="Second" component={Second}  options={{title:'List of CEO'}} /> 
        <Stack.Screen name="EditActivity" component={EditActivity}  options={{title:'Edit Details'}} /> 
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;