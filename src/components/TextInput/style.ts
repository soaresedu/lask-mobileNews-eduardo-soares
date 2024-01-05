import styled from "styled-components/native";

import theme from '../../theme';

export const InputContainer = styled.View`
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 2px;
    margin-bottom: 12px;
    padding: 12px;
    width: 343px;
    height: 64px;
`;

export const InputTitle = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XXS};
    color: ${theme.COLORS.SECONDARY};
`;

export const PlaceHolder = styled.TextInput`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XMD};
`;