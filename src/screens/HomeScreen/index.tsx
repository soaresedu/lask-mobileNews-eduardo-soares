import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, FlatList, Image } from 'react-native';

import { Container, GreetingView, GreetingsSection, SalutationText, DateText, WeatherInfo, FlatListView, ImageNews, NewsTitle, ForYouTitle} from './style';
import axios from 'axios';

export function HomeScreen(){

    const [news, setNews] = useState([]);

    const apikeynews = '3a9bb8c60d1f46ffa570a16c27016da9';

    const apiKey = 'ba2df9b41c686b8796b7b42ee34f640f https://gnews.io/api/v4/top-headlines?category=general&apikey=${apiKey}';

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


  return (
    <Container>
      <GreetingView style={{backgroundColor: '#E9EEFA'}}>
        <GreetingsSection>
            <SalutationText>
                Good Morning,{'\n'}Trung{'\n'} 
                <DateText>Sun 9 April, 2023</DateText> 
            </SalutationText>    
            <WeatherInfo>☀️ Sunny 32ºC</WeatherInfo>
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
