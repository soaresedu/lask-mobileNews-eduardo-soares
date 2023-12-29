import styled from "styled-components/native";

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUNDSECUNDARY};
`;

export const TitleContainer = styled.View`
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 12px;
    height: 100px;
    padding-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    background-color: ${theme.COLORS.BACKGROUNDPRIMARY};
`;

export const ScreenTitle = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.XL};
`;

export const CategoriesContainer = styled.TouchableOpacity`
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 10px;
`;

export const CategoryName = styled.Text`
    border-width: 1px;
    border-radius: 20px;
    border-color: ${theme.COLORS.BACKGROUNDPRIMARY};
    padding: 10px;
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    text-transform: capitalize;
`;

export const CategoryNameSelected = styled.Text`
    border-width: 1px;
    border-radius: 20px;
    border-color: ${theme.COLORS.BACKGROUNDPRIMARY};
    background-color: ${theme.COLORS.BACKGROUNDPRIMARY};
    padding: 10px;
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    text-transform: capitalize;
`;
