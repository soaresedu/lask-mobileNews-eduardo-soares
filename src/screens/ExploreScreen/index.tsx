import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, TextInput, Text, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Container, ScreenTitle, TitleContainer, CategoriesContainer, CategoryName } from './style';
import axios from 'axios';

export function ExploreScreen(){

  const [text, setText] = useState('');
  const [category, setCategory] = useState('general');
  const [newsByCategory, setNewsByCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = {
    business: 'business',
    entertainment: 'entertainment',
    general: 'general',
    health: 'health',
    science: 'science',
    sports: 'sports',
    technology: 'technology'
  }

  useEffect(() => {
    const getNewsByCategory = async () => {
      try{
        const responses = await axios.get(
          `https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=API_KEY
          `);
        setNewsByCategory(responses.data.results);
      }catch (error){
        console.log("Error:", error)
      }
    };
    getNewsByCategory();
  }, []);

  return (
    <Container>
      <TitleContainer>
        <ScreenTitle>Explore</ScreenTitle>
        <Ionicons name="search-outline" size={20}></Ionicons>
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
    </Container>
  );
}

