import { View, TouchableOpacity, Text, Image, Alert, Modal } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import { useState, useContext } from "react";

import { ProfileImage, Container, UserInfoContainer, UserName, Icon, LevelName, AccountInfoContainer, AccountStatiscsContainer, StaticsContent, StatiscsTitle, SettingsTitle, ModalContainer, HeaderContainer, HeaderIcon, HeaderTitle, ContentContainer } from "./style";
import { AuthContext } from "../../contexts/auth";
import { LikedNewsContext } from "../../contexts/likedNews";
import { Input } from "../../components/TextInput";
import { ButtonInput } from "../../components/Button";
import { ProfileScreenButton } from "../../components/ProfileScreenButton";

export function ProfileScreen(){

  const [image, setImage] = useState(null);
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [emailModalIsVisible, setEmailModalIsVisible] = useState(false);
  const [passwordModalIsVisible, setPasswordModalIsVisible] = useState(false);
  const { name, setName, handleUpdateEmail, handleUpdatePassword } = useContext(AuthContext);
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

  const handleFunctionUpdateEmail = (newEmail) => {
    Alert.alert('Warning!', 'Do you really want to change your email?', [
      {
        text: 'Cancel'
      },
      {
        text: 'Yes, i want!',
        onPress: () => handleUpdateEmail(newEmail)
      }
    ])
  };

  const handleFunctionUpdatePassword = (newPassword) => {
    Alert.alert('Warning!', 'Do you really want to change your password?', [
      {
        text: 'Cancel'
      },
      {
        text: 'Yes, i want!',
        onPress: () => handleUpdatePassword(newPassword)
      }
    ])
  };

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
      <ProfileScreenButton buttonTitle='My Account' iconName='chevron-forward-outline' onPress={() => setModalIsVisible(!modalIsVisible)}/>
      <ProfileScreenButton buttonTitle='Privacy Settings' iconName='chevron-forward-outline' onPress={undefined}/>
      <ProfileScreenButton buttonTitle='Offline Reading' iconName='chevron-forward-outline' onPress={undefined}/>
      <ProfileScreenButton buttonTitle='About Us' iconName='chevron-forward-outline' onPress={undefined}/>
      <ModalContainer
      animationType='slide'
      visible={modalIsVisible}
      onRequestClose={() => {
        setModalIsVisible(!modalIsVisible);
      }}>
        <HeaderContainer>
          <HeaderIcon onPress={() => setModalIsVisible(!modalIsVisible)}>
            <Ionicons name='arrow-back-outline' size={25}/>
          </HeaderIcon>
          <HeaderTitle>My Account</HeaderTitle>
        </HeaderContainer>
        <ContentContainer>
          <ProfileScreenButton buttonTitle='Update Email' iconName='chevron-forward-outline' onPress={() => setEmailModalIsVisible(!emailModalIsVisible)}/>
          <ProfileScreenButton buttonTitle='Update Password' iconName='chevron-forward-outline' onPress={() => setPasswordModalIsVisible(!passwordModalIsVisible)}/>
        </ContentContainer>
      </ModalContainer>
      <ModalContainer
      animationType='slide'
      visible={emailModalIsVisible}
      onRequestClose={() => {
        setModalIsVisible(!emailModalIsVisible);
      }}>
        <HeaderContainer>
          <HeaderIcon onPress={() => setEmailModalIsVisible(!emailModalIsVisible)}>
            <Ionicons name='arrow-back-outline' size={25}/>
          </HeaderIcon>
          <HeaderTitle>Update Email</HeaderTitle>
          <Text></Text>
        </HeaderContainer>
        <ContentContainer>
          <Input label='Email' placeHolder='Email' secureTextEntry={false} keyboardType={undefined} value={newEmail} onChangeText={setNewEmail}/>
          <ButtonInput title='Confirm' onPress={() => handleFunctionUpdateEmail(newEmail)} style={undefined} textStyle={undefined}/>
        </ContentContainer>
      </ModalContainer>
      <ModalContainer
      animationType='slide'
      visible={passwordModalIsVisible}
      onRequestClose={() => {
        setModalIsVisible(!passwordModalIsVisible);
      }}>
        <HeaderContainer>
          <HeaderIcon onPress={() => setPasswordModalIsVisible(!passwordModalIsVisible)}>
            <Ionicons name='arrow-back-outline' size={25}/>
          </HeaderIcon>
          <HeaderTitle>Update Password</HeaderTitle>
          <Text></Text>
        </HeaderContainer>
        <ContentContainer>
          <Input label='Password' placeHolder='Password' secureTextEntry={true} keyboardType={undefined} value={newPassword} onChangeText={setNewPassword}/>
          <ButtonInput title='Confirm' onPress={() => handleFunctionUpdatePassword(newPassword)} style={undefined} textStyle={undefined}/>
        </ContentContainer>
      </ModalContainer>
  </Container>
  );
};