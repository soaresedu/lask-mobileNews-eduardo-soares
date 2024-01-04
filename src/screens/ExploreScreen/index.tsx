import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, TextInput, Text, ScrollView, FlatList, TouchableOpacity, Modal, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Container, ScreenTitle, TitleContainer, CategoriesContainer, CategoryName, FlatListView, NewsImage, NewsTitle, PublishedDate, SearchBarContainer, SearchBar, CancelButton } from './style';
import { GNewsapiKey } from '../../service/api/apiKey';

export function ExploreScreen(){

  type RootStackParamList = {
    NewsScreen: { data: any };
  };
  
  type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsScreen'>;

  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [newsByCategory, setNewsByCategory] = useState([]);
  const [searchedNews, setSearchedNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const navigation: NewsScreenNavigationProp = useNavigation();
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
    navigation.navigate('NewsScreen', { data: item });
  };

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

  useEffect(() => {
    const getSearchedNews = async () => {
      try{
        const responses = await axios.get(
          `https://gnews.io/api/v4/search?q=${searchText}&apikey=${GNewsapiKey}`);
        setSearchedNews(responses.data.articles);
      }catch (error){
        console.log("Error:", error)
      }
    };
    getSearchedNews();
  }, [searchText]);

  return (
    <Container>
      <TitleContainer>
        <ScreenTitle>Explore</ScreenTitle>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
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
        <Modal
        animationType='slide'
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
          <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <SearchBarContainer>
                <SearchBar
                onChangeText={setSearchText}
                value={searchText}
                placeholder='Search something'
                />
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <CancelButton>Cancel</CancelButton>
                </TouchableOpacity>
              </SearchBarContainer>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <FlatList
          showsHorizontalScrollIndicator={false}
          data={searchedNews}
          keyExtractor={(item, index) => String(index)}
          renderItem={({item}) => (
            <TouchableOpacity activeOpacity={0.4} onPress={() => navigate(item)}>
            <FlatListView>
              <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
              <NewsImage source={{uri: item.image}}/>
              <PublishedDate>{item.publishedAt}</PublishedDate>
            </FlatListView>
            </TouchableOpacity>
          )}/>
        </Modal>
    </Container>
  );
}

