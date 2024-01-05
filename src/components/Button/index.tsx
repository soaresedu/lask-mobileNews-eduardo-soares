import { ButtonContainer, Button, ButtonTitle } from './style';

export const ButtonInput = ({title, onPress, style, textStyle}) => {
    return( 
        <ButtonContainer>
            <Button style={style} onPress={onPress}>
                <ButtonTitle style={textStyle}>{title}</ButtonTitle>
            </Button>
        </ButtonContainer>
    );
}


