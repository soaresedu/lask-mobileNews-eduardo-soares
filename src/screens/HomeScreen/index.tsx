import React, { useEffect, useState, useContext } from 'react';
import {Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { Container, GreetingView, GreetingsSection, SalutationText, DateText, WeatherInfo, FlatListView, ImageNews, NewsTitle} from './style';
import { GNewsapiKey } from '../../service/api/apiKey';
import axios from 'axios';
import { AuthContext } from "../../contexts/auth";
import { LikedNewsContext } from '../../contexts/likedNews';

export function HomeScreen(){

  type RootStackParamList = {
    NewsScreen: { data: any };
  };
  
  type NewsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'NewsScreen'>;

    const [news, setNews] = useState<any>([]);
    const [weather, setWeather] = useState<any>(null);

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    const navigation: NewsScreenNavigationProp = useNavigation();
    const { name } = useContext(AuthContext);
    const { addReadArticles, readArticles } = useContext(LikedNewsContext);

    useEffect(() => {
      const getData = async () => {
        try {
            const response = await axios.get(
              `https://gnews.io/api/v4/top-headlines?category=general&apikey=${GNewsapiKey}`);
            setNews(response.data.articles);
            } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
      };
      getData();
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
      <FlatList
      data={news}
      keyExtractor={(item) => String(item.title)}
      renderItem={({item}) => (
          <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={news}
          keyExtractor={(item) => String(item.title)}
          renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.4} onPress={() => {
            navigate(item)
            addReadArticles()
          }}>
          <FlatListView>
            <ImageNews source={{uri: item.image}}/>
            <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
            <Text>{item.source.name}</Text>
          </FlatListView>
          </TouchableOpacity>
        )}/>
      )}/>
    </Container>
   );
}
