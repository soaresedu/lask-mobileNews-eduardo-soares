import { useState } from "react";

import { InputContainer, InputTitle, PlaceHolder } from "./style";

export function Input ({ label, placeHolder, secureTextEntry, keyboardType}){

    const [currentTitle, setCurrentTitle] = useState('');
    const [valueText, setValueText] = useState('');
    const [currentPlaceHolder, setCurrentPlaceHolder] = useState(placeHolder);
    
    return(
        <InputContainer>
            <InputTitle>{currentTitle}</InputTitle>
            <PlaceHolder
            secureTextEntry = {secureTextEntry}
            placeholder={currentPlaceHolder}
            keyboardType={keyboardType}
            value={valueText}
            onChangeText={setValueText}
            onFocus={() => {
            setCurrentPlaceHolder('');
            setCurrentTitle(label);
            }}
            />
        </InputContainer>
    );
};
