import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, Image } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { Container, GreetingView, GreetingsSection, SalutationText, DateText, WeatherInfo, FlatListView, ImageNews, NewsTitle, ForYouTitle} from './style';
import axios from 'axios';

export function HomeScreen(){

    const [news, setNews] = useState([]);
    const [weather, setWeather] = useState(null);

    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    const apikeynews = '3a9bb8c60d1f46ffa570a16c27016da9';

    useEffect(() => {

      const getData = async () => {
        try {
            const response = await axios.get(
              `https://newsapi.org/v2/top-headlines?country=us&apiKey=3a9bb8c60d1f46ffa570a16c27016da9`);
            setNews(response.data.articles);
            } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
      };

      getData();
    }, []);

    useEffect(() => {
      const getWeatherData = async () => {
        try{
          const responses = await axios.get(
            `https://api.hgbrasil.com/weather?format=json-cors&woeid=456257`);
          setWeather(responses.data.results);
        }catch (error){
          console.log("Error:", error)
        }
      }

      getWeatherData();
    }, []);

  return (
    <Container>
      <GreetingView style={{backgroundColor: '#E9EEFA'}}>
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
      data={[0,1,2,3,4]}
      keyExtractor={(index) => String(index)}
      renderItem={({index}) => (
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={news}
        keyExtractor={(item) => String(item.title)}
        renderItem={({item}) => (
          <FlatListView>
            <ImageNews source={{uri: item.urlToImage}}/>
            <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
            <Text>{item.source.name}</Text>
          </FlatListView>
        )}/>
      )}/>
    </Container>
   );
}
