import styled from "styled-components/native";

import theme from '../../theme';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    margin-top: 60px;
    margin-left: 24px;
    margin-right: 24px;
`;

export const Logo = styled.Image`
    width: 60px;
    height: 30px;
    margin-bottom: 70px;
    margin-left: 10px;
`;

export const ScrennTitle = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.XL};
    text-align: center;
`;

export const TextButton = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    text-align: center;
    color: ${theme.COLORS.SECONDARY};
    margin-top: 5px;
`;