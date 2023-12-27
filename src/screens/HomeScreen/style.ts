import { FlatList } from 'react-native';
import styled from "styled-components/native";

import theme from '../../theme';

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.COLORS.BACKGROUNDSECUNDARY};
`;

export const GreetingView = styled.View`
    background-color: ${theme.COLORS.BACKGROUNDPRIMARY};
    margin-bottom: 24px;
`;

export const GreetingsSection = styled.View`
    position: fixed;
    flex-direction: row;
    margin-top: 52px;
    margin-left: 32px;
    margin-bottom: 12px;
    background-color: ${theme.COLORS.BACKGROUNDPRIMARY};
`;

export const SalutationText = styled.Text`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM};
    line-height: 20px;
    color: ${theme.COLORS.SECONDARY};
`;

export const DateText = styled.Text`
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.XMD};
    line-height: 24px;
    color: ${theme.COLORS.PRIMARY};
`;

export const WeatherInfo = styled.Text`
    justify-content: center;
    align-self: center;
    margin-left: 50px;
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.SM};
    color: ${theme.COLORS.SECONDARY};
`;

export const FlatListView = styled.View`
    margin-left: 24px;
    max-width: 240px;
    margin-right: 12px;
    margin-bottom: 24px;
`;

export const ImageNews = styled.Image`
    width: 240px;
    height: 240px;
    border-radius: 10px;
`;

export const NewsTitle = styled.Text`
    font-size: ${theme.FONT_SIZE.ML};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    margin-top: 16px;
    margin-bottom: 8px;
`;

export const ForYouTitle = styled.Text`
    font-size: ${theme.FONT_SIZE.ML};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    margin-left: 24px;
    margin-bottom: 24px;
`;