import styled from "styled-components/native";

import theme from '../../theme'

export const ButtonContainer = styled.View`
`;

export const Button = styled.TouchableOpacity`
        width: 319px;
        height: 63px;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 7px;
        background-color: ${theme.COLORS.BLUEBUTTON};
        border-radius: 25px;
        justify-content: center;
`;

export const ButtonTitle = styled.Text`
        color: ${theme.COLORS.TEXTSECONDARY};
        font-size: ${theme.FONT_SIZE.XMD};
        font-family: ${theme.FONT_FAMILY.SEMIBOLD};
        text-align: center;
`;