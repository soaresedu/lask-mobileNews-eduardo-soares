import { ButtonInput } from "../../components/Button";
import { Input } from "../../components/TextInput";
import { Container, Title } from "./style";

export function ForgotScreen(){
    return(
        <Container>
            <Title>Reset Password</Title>
            <Input label='Email' placeHolder='Email' secureTextEntry={undefined} keyboardType={undefined}/>
            <ButtonInput title='REQUEST RESET' onPress={undefined} style={undefined} textStyle={undefined}/>
        </Container>
    )
}