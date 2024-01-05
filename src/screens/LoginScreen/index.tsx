import { TouchableOpacity, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, ScrennTitle, Logo, TextButton } from "./style";

export function LoginScreen({navigation}){

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
                <Input label='Email' placeHolder='Email' secureTextEntry={false} keyboardType={undefined}/>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Input label='Password' placeHolder='Password' secureTextEntry={true} keyboardType={undefined}/>
            </TouchableWithoutFeedback>
            <ButtonInput style={undefined} title='Log In' onPress={undefined} textStyle={undefined}/>
            <ButtonInput style={{ backgroundColor: '#E9EEFA'}} title='Sign Up' onPress={handleSignUpScreenNavigation} textStyle={{color: '#000'}}/>
            <TouchableOpacity onPress={handleForgotScreenNavigation}>
                <TextButton>Forgot Password?</TextButton>
            </TouchableOpacity>
        </Container>
    )
}