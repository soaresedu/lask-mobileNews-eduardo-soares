import styled from "styled-components/native";

import theme from '../../theme';

export const BuildingImage = styled.Image`
    margin-bottom: -40px;
    margin-top: -40px;
`;

export const TextBox = styled.View`
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    padding-top: 52px;
    padding-bottom: 52px;
    padding-left: 32px;
    padding-right: 32px;
    background-color: white;
    z-index: 99;
`;

export const TitleBox = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.XL};
    text-align: center;
    margin-bottom: 12px;
`;

export const ParagraphText = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XMD};
    color: ${theme.COLORS.SECONDARY};
    text-align: center;
    line-height: 26px;
`;

export const Button = styled.TouchableOpacity`
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