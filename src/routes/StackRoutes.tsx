import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { MyTabs } from './BottomTabRoutes';

const Stack = createStackNavigator();

export function StackRoutes(){
    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{cardStyle:{backgroundColor: '#FFF'}}}>
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='HomeScreen' component={MyTabs} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>

        
    )
}