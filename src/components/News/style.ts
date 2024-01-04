import styled from "styled-components/native";
import theme from "../../theme";

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
