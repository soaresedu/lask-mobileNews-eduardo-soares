import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, Title, TextButton } from "./style";


export function SignUpScreen({navigation}){

    const handleSignInScreenNavigation = () => {
        navigation.navigate('LoginScreen');
    }
    
    return(
        <Container>
            <Title>Sign Up</Title>
            <Input label='Email' placeHolder='Email' secureTextEntry={undefined} keyboardType={undefined}/>
            <Input label='Password' placeHolder='Password' secureTextEntry={true} keyboardType={undefined}/>
            <Input label='Confirm Password' placeHolder='Confirm Password' secureTextEntry={true} keyboardType={undefined}/>
            <ButtonInput title="Sign Up" onPress={undefined} style={undefined} textStyle={undefined}/>
            <TouchableOpacity onPress={handleSignInScreenNavigation}>
                <TextButton>Already have an account?</TextButton>
            </TouchableOpacity>
        </Container>
    )
}