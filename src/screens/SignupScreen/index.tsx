import { Alert, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { app } from "../../service/firebase/firebaseSDK";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, Title, TextButton } from "./style";

export function SignUpScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth(app);

    const handleSignInScreenNavigation = () => {
        navigation.navigate('LoginScreen');
    }

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            handleSignInScreenNavigation();
        })
        .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error','That email address is invalid!');
        }
    
        console.error(error);
        });
    }
    
    return(
        <Container>
            <Title>Sign Up</Title>
            <Input label='Email' placeHolder='Email' secureTextEntry={undefined} keyboardType={undefined} value={email} onChangeText={setEmail}/>
            <Input label='Password' placeHolder='Password' secureTextEntry={true} keyboardType={undefined} value={password} onChangeText={setPassword}/>
            
            <ButtonInput title="Sign Up" onPress={handleSignUp} style={undefined} textStyle={undefined}/>
            <TouchableOpacity onPress={handleSignInScreenNavigation}>
                <TextButton>Already have an account?</TextButton>
            </TouchableOpacity>
        </Container>
    )
}