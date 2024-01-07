import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { WelcomeScreen } from '../screens/WelcomeScreen';
import { MyTabs } from './BottomTabRoutes';
import { NewsScreen } from '../screens/NewsScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ForgotScreen } from '../screens/ForgotPasswordScreen';
import { SignUpScreen } from '../screens/SignupScreen';
import { AuthContext } from '../contexts/auth';

const Stack = createStackNavigator();

export function StackRoutes(){
    const { user, setUser } = useContext(AuthContext);

    const getData = async () => {
        try {
        const storedUser = await AsyncStorage.getItem('user_key');
        if (storedUser) {
        setUser(storedUser);
        }
        } catch (e) {
        // error reading value
        }
    };

    getData();

    return(
        <NavigationContainer >
            <Stack.Navigator screenOptions={{cardStyle:{backgroundColor: '#FFF'}}} initialRouteName={user && Object.keys(user).length > 0 ? 'HomeScreen' : 'WelcomeScreen'}>
                <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown: false}}/>
                <Stack.Screen name='ForgotScreen' component={ForgotScreen} options={{title: null,}}/>
                <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown: false}}/>
                <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
                <Stack.Screen name='HomeScreen' component={MyTabs} options={{headerShown: false}}/>
                <Stack.Screen name='NewsScreen' component={NewsScreen} options={{title: null,}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}