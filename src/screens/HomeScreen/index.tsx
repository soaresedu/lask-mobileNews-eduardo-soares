import React, { useEffect, useState, useContext } from 'react';
import {Text, FlatList, TouchableOpacity, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

import { Container, GreetingView, GreetingsSection, SalutationText, DateText, WeatherInfo, FlatListView, ImageNews, NewsTitle} from './style';
import { GNewsapiKey } from '../../service/api/apiKey';
import { AuthContext } from "../../contexts/auth";
import { LikedNewsContext } from '../../contexts/likedNews';

export function HomeScreen(){

  type RootStackParamList = {
    NewsScreen: { data: any };
  };
  
  type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsScreen'>;

    const [news, setNews] = useState<any>([]);
    const [weather, setWeather] = useState<any>(null);

    const newsCategories = [
      { title: 'Top Headlines', category: 'general' },
      { title: 'Technology News', category: 'technology' },
      { title: 'Business News', category: 'business' },
      { title: 'Entertainment News', category: 'entertainment'},
      { title: 'Health News', category: 'health'},
      { title: 'World News', category: 'world'},
      { title: 'Nation News', category: 'nation'},
      { title: 'Science News', category: 'science'},
      { title: 'Sports News', category: 'sports'}
    ];

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    const navigation: NewsScreenNavigationProp = useNavigation();
    const { name } = useContext(AuthContext);
    const { addReadArticles } = useContext(LikedNewsContext);

    const fetchNews = async (category) => {
      try {
        const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=${category}&apikey=${GNewsapiKey}`);
        return response.data.articles;
      } catch (error) {
        console.error(`Erro ao buscar notícias (${category}):`, error);
        return [];
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        const newsData = await Promise.all(newsCategories.map(async (categoryObj) => {
          const articles = await fetchNews(categoryObj.category);
          return { title: categoryObj.title, articles };
        }));
  
        setNews(newsData);
      };
  
      fetchData();
    }, []);

    const navigate = (item) => {      
      navigation.navigate("NewsScreen", {data: item})
    };

    useEffect(() => {
      const getWeatherData = async () => {
        try{
          const responses = await axios.get(
            `https://api.hgbrasil.com/weather?format=json-cors&woeid=456257`);
          setWeather(responses.data.results);
        }catch (error){
          console.log("Error:", error)
        }
      };
      getWeatherData();
    }, []);

  return (
    <Container>
      <GreetingView>
        <GreetingsSection>
            <SalutationText>
                Good {weather?.currently.toString() === 'dia' ? 'Morning' : 'Night'},{'\n'}{name}{'\n'} 
                <DateText>{formattedDate}</DateText> 
            </SalutationText>    
            <WeatherInfo> 
              {weather?.description}<Text> </Text> 
              {weather?.temp}ºC
            </WeatherInfo>
        </GreetingsSection>
      </GreetingView>
      <ScrollView>
        {news.map((category) => (
          <FlatList
            key={category.title}
            data={category.articles}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.4} onPress={() => {
                navigate(item)
                addReadArticles()}}>
                <FlatListView>
                  <ImageNews source={{ uri: item.image }} />
                  <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
                  <Text>{item.source.name}</Text>
                </FlatListView>
              </TouchableOpacity>
            )}/>
        ))}
      </ScrollView>
    </Container>
   );
};
