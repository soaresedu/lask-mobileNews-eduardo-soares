import { Alert, TouchableOpacity, View} from 'react-native';
import { useContext, useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NewsImage, TextContainer, Title, AuthorInfo, AuthorImage,Author, NewsText, ButtonContainer } from './style';
import { LikedNewsContext } from '../../contexts/likedNews';


export function NewsScreen({route}){

  const [isPressed, setIsPressed] = useState(false);
  const { likedNews, storeLikedNews, setLikedNews } = useContext(LikedNewsContext);
  
  const {data} = route.params;

  const handlePress = async () => {
    try {
      const isAlreadyLiked = likedNews.some((likedItem) => likedItem.title === data.title);
  
      let updatedLikedNews;
  
      if (isAlreadyLiked) {
        updatedLikedNews = likedNews.filter((likedItem) => likedItem.title !== data.title);
      } else {
        updatedLikedNews = [...likedNews, data];
      }
      setLikedNews(updatedLikedNews);
      await storeLikedNews(updatedLikedNews);
      await storePressedState(!isPressed);
    } catch (error) {
      console.error(error);
    }
  };
  
  const storePressedState = async (isPressed) => {
    try {
      if(isPressed !== undefined && isPressed !== null){
      const jsonValue = JSON.stringify(isPressed);
      await AsyncStorage.setItem('pressed_key', jsonValue);
    }else{
      await AsyncStorage.removeItem('pressed_key');
    }
    }catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorCode, errorMessage);
    }
  };

  useEffect(() => {
    const getPressedState = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('pressed_key');
        setIsPressed(JSON.parse(jsonValue));
      }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      }
    };
    getPressedState();
  }, [])

  return (
    <View>
      <NewsImage source={{ uri: data.image }} />
      <ButtonContainer>
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="heart-circle-outline" size={40} color={likedNews.some((likedItem) => likedItem.title === data.title) ? 'red' : 'black'}/>
        </TouchableOpacity>
      </ButtonContainer>
      <TextContainer> 
        <Title>{data.title}</Title>
        <AuthorInfo>
          <AuthorImage source={require('../../assets/images/authorpicture.png')}/>
          <Author>{data?.source?.name}</Author>
        </AuthorInfo>
        <NewsText>
        {data.content}{'\n'}
        {'\n'}
        Forests are one of the most important natural resources that our planet possesses. Not only do they provide us with a diverse range of products such as timber, medicine, and food, but they also play a vital role in mitigating climate change and maintaining the overall health of our planet's ecosystems. In this article, we will explore the ways in which forests are helping our world.{'\n'}
        {'\n'}
        One of the most important roles that forests play is in absorbing carbon dioxide from the atmosphere. Trees absorb carbon dioxide through photosynthesis and store it in their trunks, branches, and leaves. This carbon sequestration helps to mitigate climate change by reducing the amount of greenhouse gases in the atmosphere. Forests are estimated to absorb approximately 2.4 billion tonnes of carbon dioxide each year, which is equivalent to around 10% of global greenhouse gas emissions.
        Forests also play a crucial role in maintaining the water cycle. Trees absorb water from the soil and release it back into the atmosphere through a process known as transpiration. This helps to regulate the local climate and prevents soil erosion and flooding. Forests also act as natural water filters, helping to purify water that flows through them.{'\n'}
        {'\n'}
        Forests are also important sources of biodiversity. They provide habitat for countless species of plants and animals, many of which are found nowhere else on earth. Forests also provide a source of food and medicine for many communities around the world. In fact, it is estimated that around 80% of the world's population relies on traditional medicine derived from plants, many of which are found in forests.
        In addition to their ecological and cultural importance, forests also provide economic benefits. They provide jobs and income for millions of people around the world, particularly in rural areas. Forests also provide timber, paper, and other products that are essential to many industries.
        </NewsText>
      </TextContainer>
    </View>
  );
};
