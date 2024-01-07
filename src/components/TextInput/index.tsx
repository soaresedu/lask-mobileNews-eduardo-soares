import { useState } from "react";

import { InputContainer, InputTitle, PlaceHolder } from "./style";

export function Input ({ label, placeHolder, secureTextEntry, keyboardType, value, onChangeText}){

    const [currentTitle, setCurrentTitle] = useState('');
    const [currentPlaceHolder, setCurrentPlaceHolder] = useState(placeHolder);
    
    return(
        <InputContainer>
            <InputTitle>{currentTitle}</InputTitle>
            <PlaceHolder
            secureTextEntry = {secureTextEntry}
            placeholder={currentPlaceHolder}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            onFocus={() => {
            setCurrentPlaceHolder('');
            setCurrentTitle(label);
            }}
            />
        </InputContainer>
    );
};
