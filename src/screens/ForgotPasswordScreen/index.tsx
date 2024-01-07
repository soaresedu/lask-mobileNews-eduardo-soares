import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, Title } from "./style";

export function ForgotScreen({navigation}){

    const [email, setEmail] = useState('');

    const handleRedefinePassword = () => {
        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
        .then(() => {
            navigation.navigate('LoginScreen')
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    return(
        <Container>
            <Title>Reset Password</Title>
            <Input label='Email' placeHolder='Email' secureTextEntry={undefined} keyboardType={undefined} value={email} onChangeText={setEmail}/>
            <ButtonInput title='REQUEST RESET' onPress={handleRedefinePassword} style={undefined} textStyle={undefined}/>
        </Container>
    )
}