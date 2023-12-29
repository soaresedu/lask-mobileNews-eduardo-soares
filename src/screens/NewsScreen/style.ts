import styled from "styled-components/native";

import theme from '../../theme';

export const TextContainer = styled.ScrollView`
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 16px;
    margin-top: 16px;
    margin-bottom: 290px;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    background-color: white;
    z-index: 99;
`;

export const NewsImage = styled.Image`
    width: 430px;
    height: 316px;
    margin-bottom: -30px;

`;

export const Title = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.XL};
`;

export const AuthorInfo = styled.View`
    flex-direction: row;
    align-content: center;
    margin-top: 20px;
`;

export const AuthorImage = styled.Image`
    margin-right: 10px;
`;

export const Author = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    color: ${theme.COLORS.SECONDARY};
`;

export const NewsText = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD};
    margin-bottom: 30px;
    margin-top: 30px;
`;