import React, { useState } from 'react';

import { ButtonContainer, ButtonText } from './style';
import { Button, Image, Pressable, TouchableOpacity, View } from 'react-native';

import HomeSelected from '../../assets/images/HomeTabSelected.svg'
import HomeDefault from '../../assets/images/HomeTabDefault.svg'

export function BottomTab(){

    const [homeIsPressed, setHomeIsPressed] = useState(false);
    const [exploreIsPressed, setExploreIsPressed] = useState(false);
    const [bookmarkIsPressed, setBookmarkIsPressed] = useState(false);
    const [profileIsPressed, setProfileIsPressed] = useState(false);

    const HomehandlePress = () => {
        setHomeIsPressed(!homeIsPressed);
    };

    const ExplorehandlePress = () => {
        setExploreIsPressed(!exploreIsPressed);
    };

    const BookmarkshandlePress = () => {
        setBookmarkIsPressed(!bookmarkIsPressed);
    };

    const ProfilehandlePress = () => {
        setProfileIsPressed(!profileIsPressed);
    };

    return(
       <View style={{backgroundColor: 'blue'}}>
        <View>
           <TouchableOpacity onPress={HomehandlePress}>
           <Image source={exploreIsPressed ? require( '../../assets/images/HomeTabSelected.svg') : require('../../assets/images/HomeTabDefault.svg')}/>
           </TouchableOpacity>
        </View>
        <View>
           <TouchableOpacity onPress={ExplorehandlePress}>
                <Image source={exploreIsPressed ? require( '../../assets/images/HomeTabSelected.png') : require('../../assets/images/HomeTabDefault.png')}/>
           </TouchableOpacity>
        </View>
        <View>
           <TouchableOpacity onPress={BookmarkshandlePress}>
                <Image source={bookmarkIsPressed ? require( '../../assets/images/HomeTabSelected.png') : require('../../assets/images/HomeTabDefault.png')}/>
           </TouchableOpacity>
        </View>
        <View>
           <TouchableOpacity onPress={ProfilehandlePress}>
                <Image source={profileIsPressed ? require( '../../assets/images/HomeTabSelected.png') : require('../../assets/images/HomeTabDefault.png')}/>
           </TouchableOpacity>
        </View>
       </View>
    )
}

