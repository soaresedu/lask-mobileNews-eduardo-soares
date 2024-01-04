import React, { useContext } from 'react';
import { LikedNewsContext } from '../../contexts/likedNews';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { News } from '../../components/News';
import { Container, ScreenTitle, TitleContainer } from './style';

export function LikedNewsScreen(){

  type RootStackParamList = {
    NewsScreen: { data: any };
  };
  
  type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsScreen'>;

  const { likedNews } = useContext(LikedNewsContext);
  const navigation: NewsScreenNavigationProp = useNavigation();

  const navigate = (item) => {
    navigation.navigate('NewsScreen', { data: item });
  };

  return (
  <Container>
    <TitleContainer>
        <ScreenTitle>You Liked</ScreenTitle>
    </TitleContainer>
    <News data={likedNews} navigate={navigate}/>
  </Container>
  );
}

