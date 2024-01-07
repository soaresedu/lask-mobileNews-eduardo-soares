import { TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, Title, TextButton } from "./style";
import { AuthContext } from "../../contexts/auth";

export function SignUpScreen({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { name, setName, handleSignUp } = useContext(AuthContext);

    const handleSignInScreenNavigation = () => {
        navigation.navigate('LoginScreen');
    }

    const handleSignUpPress = () => {
        handleSignUp(email, password);
        storeData(name);
    };

    const storeData = async (name) => {
        try {
          await AsyncStorage.setItem('userName_key', name);
        } catch (e) {
          // saving error
        }
    };

    storeData(name);
    
    return(
        <Container>
            <Title>Sign Up</Title>
            <Input label='Name' placeHolder='Name' secureTextEntry={false} keyboardType={undefined} value={name} onChangeText={setName}/>
            <Input label='Email' placeHolder='Email' secureTextEntry={undefined} keyboardType={undefined} value={email} onChangeText={setEmail}/>
            <Input label='Password' placeHolder='Password' secureTextEntry={true} keyboardType={undefined} value={password} onChangeText={setPassword}/>
            <ButtonInput title="Sign Up" onPress={handleSignUpPress} style={undefined} textStyle={undefined}/>
            <TouchableOpacity onPress={handleSignInScreenNavigation}>
                <TextButton>Already have an account?</TextButton>
            </TouchableOpacity>
        </Container>
    )
}