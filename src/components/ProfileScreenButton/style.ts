import styled from "styled-components/native";
import theme from "../../theme";

export const ButtonContainer = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    height: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
`;

export const ButtonTitle = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
`;