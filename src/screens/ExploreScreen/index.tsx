import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, TextInput, Text, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Container, ScreenTitle, TitleContainer, CategoriesContainer, CategoryName } from './style';
import { GNewsapiKey } from '../../service/api/apiKey';
import axios from 'axios';
import { FlatListView, NewsImage, NewsTitle, PublishedDate } from './style';
import { useNavigation } from '@react-navigation/native';

export function ExploreScreen(){

  const [searchText, setSearchText] = useState('');
  const [newsByCategory, setNewsByCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigation = useNavigation();

  const categories = {
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    science: 'science',
    sports: 'sports',
    technology: 'technology',
    world: 'world',
    nation: 'nation'
  }

  const navigate = (item) => {
    navigation.navigate("NewsScreen", {data: item})
  };

  const apiKey = 'ba2df9b41c686b8796b7b42ee34f640f';

  useEffect(() => {
    const getNewsByCategory = async () => {
      try{
        const responses = await axios.get(
          `https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&apikey=${GNewsapiKey}`);
        setNewsByCategory(responses.data.articles);
      }catch (error){
        console.log("Error:", error)
      }
    };
    getNewsByCategory();
  }, [selectedCategory]);

  return (
    <Container>
      <TitleContainer>
        <ScreenTitle>Explore</ScreenTitle>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={20}></Ionicons>
        </TouchableOpacity>
      </TitleContainer>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Object.keys(categories)}
        keyExtractor={(item) => item}
        renderItem={({item}) => (
          <CategoriesContainer>
            <CategoryName 
            style={selectedCategory === item ? {backgroundColor: '#E9EEFA'} : {backgroundColor: '#FFF'}} 
            onPress={() => setSelectedCategory(item)}>
              {categories[item]}
            </CategoryName>
          </CategoriesContainer>
        )}/>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={newsByCategory}
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
    </Container>
  );
}

