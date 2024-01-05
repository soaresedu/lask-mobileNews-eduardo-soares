import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { WelcomeScreen } from '../screens/WelcomeScreen';
import { MyTabs } from './BottomTabRoutes';
import { NewsScreen } from '../screens/NewsScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ForgotScreen } from '../screens/ForgotPasswordScreen';
import { SignUpScreen } from '../screens/SignupScreen';

const Stack = createStackNavigator();

export function StackRoutes(){
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{cardStyle:{backgroundColor: '#FFF'}}}>
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='ForgotScreen' component={ForgotScreen} options={{title: null,}}/>
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{title: null,}}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name='HomeScreen' component={MyTabs} options={{headerShown: false}}/>
                <Stack.Screen name='NewsScreen' component={NewsScreen} options={{title: null,}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}