import React from 'react';

import { ButtonContainer, ButtonText } from './style';

export function Button(props){

    return(
        <ButtonContainer activeOpacity={0.8}>
            <ButtonText>{props}</ButtonText>
        </ButtonContainer>
    )
}

