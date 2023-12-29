import React, { useEffect, useState } from 'react';
import {Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, GreetingView, GreetingsSection, SalutationText, DateText, WeatherInfo, FlatListView, ImageNews, NewsTitle} from './style';
import axios from 'axios';

export function HomeScreen(){

    const [news, setNews] = useState<any>([]);
    const [weather, setWeather] = useState<any>(null);

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();
    const navigation = useNavigation();

    const apikeynews = '3a9bb8c60d1f46ffa570a16c27016da9';

    useEffect(() => {
      const getData = async () => {
        try {
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikeynews}`);
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
                Good {weather?.currently.toString() === 'dia' ? 'Morning' : 'Night'},{'\n'}Trung{'\n'} 
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
          <TouchableOpacity activeOpacity={0.4} onPress={() => navigate(item)}>
          <FlatListView>
            <ImageNews source={{uri: item.urlToImage}}/>
            <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
            <Text>{item.source.name}</Text>
          </FlatListView>
          </TouchableOpacity>
        )}/>
      )}/>
    </Container>
   );
}
