import styled from "styled-components/native";

import theme from '../../theme'

export const ButtonContainer = styled.TouchableOpacity`
    margin-top: 24px;
    margin-bottom: 20px;
    width: 140px;
    height: 54px;
    border-radius: 30px;
    background-color: ${theme.COLORS.BLUEBUTTON};
    align-items: center;
    justify-content: center;
    align-self: center;
`;

export const ButtonText = styled.Text`
    color: ${theme.COLORS.BACKGROUNDPRIMARY};
    font-size: ${theme.FONT_SIZE.LG};
    text-align: center;
`;