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
    margin-bottom: 24px;
    min-height: 65px;
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

export const FlatListView = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: last baseline;
    margin-right: 32px;
    margin-left: 32px;
    margin-bottom: 24px;
`;

export const NewsImage = styled.Image`
    width: 112px;
    height: 80px;
    border-radius: 10px;
`;

export const NewsTitle = styled.Text`
    max-width: 200px;
    margin-right: 16px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.XMD};
`;

export const PublishedDate = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XXS};
    margin-top: -20px;
    color: ${theme.COLORS.SECONDARY};
`;

export const SearchBarContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 32px;
`;

export const SearchBar = styled.TextInput`
    border-width: 1px;
    border-color: ${theme.COLORS.LINK};
    border-radius: 12px;
    padding: 12px;
    min-width: 270px;
`;

export const CancelButton = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.LINK};
`;
