import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export function StackRoutes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}