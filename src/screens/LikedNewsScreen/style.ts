import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUNDSECUNDARY};
`;

export const TitleContainer = styled.View`
    position: fixed;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 24px;
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