import { TouchableOpacity, Platform, Keyboard, TouchableWithoutFeedback, View, Text } from "react-native";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, ScrennTitle, Logo, TextButton } from "./style";

export function LoginScreen({navigation}){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = getAuth();

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('HomeScreen')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    const handleSignUpScreenNavigation = () => {
        navigation.navigate('SignUpScreen');
    }

    const handleForgotScreenNavigation = () => {
        navigation.navigate('ForgotScreen');
    }

    return(
        <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Logo source={require('../../assets/images/SplashLogo.png')}/>
            <ScrennTitle>Log In</ScrennTitle>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Input label='Email' placeHolder='Email' secureTextEntry={false} keyboardType={undefined} value={email} onChangeText={setEmail}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Input label='Password' placeHolder='Password' secureTextEntry={true} keyboardType={undefined} value={password} onChangeText={setPassword}/>
            </TouchableWithoutFeedback>
            <ButtonInput style={undefined} title='Log In' onPress={handleSignIn} textStyle={undefined}/>
            <ButtonInput style={{ backgroundColor: '#E9EEFA'}} title='Sign Up' onPress={handleSignUpScreenNavigation} textStyle={{color: '#000'}}/>
            <TouchableOpacity onPress={handleForgotScreenNavigation}>
                <TextButton>Forgot Password?</TextButton>
            </TouchableOpacity>
        </Container>
    )
}