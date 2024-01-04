import React, { useContext, useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { LikedNewsContext } from '../../contexts/likedNews';
import { NewsImage, PublishedDate } from '../ExploreScreen/style';
import { FlatListView, NewsTitle } from '../HomeScreen/style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

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

  return <View>
    <FlatList
          showsHorizontalScrollIndicator={false}
          data={likedNews}
          keyExtractor={(item) => String(item.title)}
          renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.4} onPress={() => navigate(item)}>
          <FlatListView>
            <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
            <NewsImage source={{uri: item.image}}/>
            <PublishedDate>{item.publishedAt}</PublishedDate>
          </FlatListView>
          </TouchableOpacity>
        )}/>
  </View>;
}

