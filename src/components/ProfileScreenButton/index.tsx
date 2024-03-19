import Ionicons from 'react-native-vector-icons/Ionicons';

import { ButtonContainer, ButtonTitle } from './style';

export function ProfileScreenButton({buttonTitle, iconName}){
    return(
        <ButtonContainer activeOpacity={0.8}>
            <ButtonTitle>{buttonTitle}</ButtonTitle>
            <Ionicons name={iconName} size={20}/>
        </ButtonContainer>
    );
}