import { useContext, useState } from "react";

import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, Title } from "./style";
import { AuthContext } from "../../contexts/auth";

export function ForgotScreen(){

    const [email, setEmail] = useState('');
    const { handleRedefinePassword } = useContext(AuthContext);

    handleRedefinePassword();

    return(
        <Container>
            <Title>Reset Password</Title>
            <Input label='Email' placeHolder='Email' secureTextEntry={undefined} keyboardType={undefined} value={email} onChangeText={setEmail}/>
            <ButtonInput title='REQUEST RESET' onPress={handleRedefinePassword} style={undefined} textStyle={undefined}/>
        </Container>
    )
}