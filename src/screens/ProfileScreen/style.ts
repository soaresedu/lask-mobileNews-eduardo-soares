import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
    flex: 1;
    padding: 25px;
    background-color: ${theme.COLORS.BACKGROUNDSECUNDARY};
`;

export const UserInfoContainer = styled.View`
    flex-direction: row;
`;

export const ProfileImage = styled.Image`
    width: 150px;
    height: 150px;
    margin-right: 10px;
    border-radius: 75px;
    margin-top: 24px;
`;

export const UserName = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.ML};
    align-self: center;
    max-width: 200px;
`;