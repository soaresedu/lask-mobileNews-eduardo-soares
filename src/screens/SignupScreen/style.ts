import styled from "styled-components/native";

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    margin: 30px;
    margin-top: 70px;
`;

export const Title = styled.Text`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL};
    text-align: center;
    margin-bottom: 10px;
`;

export const TextButton = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    text-align: center;
    color: ${theme.COLORS.SECONDARY};
    margin-top: 5px;
`;