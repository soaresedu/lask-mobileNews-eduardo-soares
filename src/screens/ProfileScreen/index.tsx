import { View, TouchableOpacity, Text, Image, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useState, useContext } from "react";

import { ProfileImage, Container, UserInfoContainer, UserName, Icon, LevelName, AccountInfoContainer, AccountStatiscsContainer, StaticsContent, StatiscsTitle, SettingsTitle } from "./style";
import { AuthContext } from "../../contexts/auth";
import { LikedNewsContext } from "../../contexts/likedNews";

export function ProfileScreen(){

  const [image, setImage] = useState(null);
  const { name, setName } = useContext(AuthContext);
  const { readArticles } = useContext(LikedNewsContext);

  const pickImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;
      try {
        await AsyncStorage.setItem('image_key', imageUri);
        setImage(imageUri);
      }catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(errorCode, errorMessage);
      }
    }
  };

  const getData = async () => {
    try {
      const storedImage = await AsyncStorage.getItem('image_key');
      if (storedImage) {
        setImage(storedImage);
      }
      const storedName = await AsyncStorage.getItem('userName_key');
      if (storedName !== null) {
        setName(storedName);
      }
    }catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(errorCode, errorMessage);
    }
  };

  getData();

    return(
      <Container>
        <UserInfoContainer>
          <TouchableOpacity onPress={pickImage} activeOpacity={0.8}>
            {image ? (<ProfileImage source={{ uri: image }}/>) : (<ProfileImage source={require('../../assets/images/inicialImage.png')}/>)}
          </TouchableOpacity>
          <UserName>{name}</UserName>
        </UserInfoContainer>
        <View>
          <Icon name='medal-outline' size={25} color='#2D5BD0'/>
          <LevelName>Bookworm</LevelName>
        </View>
        <AccountInfoContainer>
          <AccountStatiscsContainer>
            <StatiscsTitle>Article Read</StatiscsTitle>
            <StaticsContent>{readArticles}</StaticsContent>
          </AccountStatiscsContainer>
          <AccountStatiscsContainer>
            <StatiscsTitle>Streak</StatiscsTitle>
            <StaticsContent>345 Days</StaticsContent>
          </AccountStatiscsContainer>
          <AccountStatiscsContainer>
            <StatiscsTitle>Level</StatiscsTitle>
            <StaticsContent>125</StaticsContent>
          </AccountStatiscsContainer>
        </AccountInfoContainer>
        <SettingsTitle>Settings</SettingsTitle>  
    </Container>
    )
}

