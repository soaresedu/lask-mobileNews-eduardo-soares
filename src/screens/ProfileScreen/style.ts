import Ionicons from 'react-native-vector-icons/Ionicons';
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

export const Icon = styled(Ionicons)`
    margin-left: 190px;
    margin-top: -65px;
`;

export const LevelName = styled.Text`
    margin-left: 220px;
    margin-top: -25px;
    color: ${theme.COLORS.LINK};
`;

export const AccountInfoContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
    margin-bottom: 49px;
`;

export const AccountStatiscsContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const StatiscsTitle = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
`;

export const StaticsContent = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.ML};
`;

export const SettingsTitle = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.ML};
`;