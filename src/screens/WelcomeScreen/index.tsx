import React from 'react';
import { LinearGradient} from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons/faArrowRightLong';

import { TextBox,  BuildingImage, TitleBox, ParagraphText, Button, ButtonText } from './style';

export function WelcomeScreen({navigation}){

  const buttonPress = () => {
    navigation.replace('LoginScreen')
  }

  return (
    <>
        <LinearGradient colors={['#577CD9','#EAEFFA']}>
            <BuildingImage source={require('../../assets/images/buildingsImage.png')}/>
            <TextBox>
              <TitleBox>Get The Latest News And Updates</TitleBox>
              <ParagraphText>From Politics to Entertainment: Your One-Stop Source for Comprehensive Coverage of the Latest News and Developments Across the Glob will be right on your hand.</ParagraphText>
              <Button activeOpacity={0.8} onPress={buttonPress}>
              <ButtonText>
                Explore  <FontAwesomeIcon icon={faArrowRightLong} style={{color: '#fff'}}/>
              </ButtonText>
            </Button>
            </TextBox>
        </LinearGradient> 
    </>
  );
}
