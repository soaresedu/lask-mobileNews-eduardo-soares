import React, {createContext, useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

export const LikedNewsContext = createContext(undefined);

export function LikedNewsProvider({children}){

    const [likedNews, setLikedNews] = useState([]);
    const [readArticles, setReadArticles] = useState(0);

    const addLikedNews = (news) => {
        setLikedNews((prevLikedNews) => [...prevLikedNews, news]);
    };

    const storeLikedNews = async (likedNews) => {
        try {
            if (likedNews !== undefined && likedNews !== null) {
                const jsonValue = JSON.stringify(likedNews);
                await AsyncStorage.setItem('likedNews_key', jsonValue);
            } else {
                await AsyncStorage.removeItem('likedNews_key');
            }
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        }
    };

    const getStoredLikedNews = async () => {
        try {
            const storedLikedNews = await AsyncStorage.getItem('likedNews_key'); 
            if (storedLikedNews !== null) {
            setLikedNews(JSON.parse(storedLikedNews));
            }
        }catch(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        }
    };

    const addReadArticles = () => {
        setReadArticles((prevReadArticles) => prevReadArticles + 1);
    }

    useEffect(() => {
        getStoredLikedNews();
    }, []);
    
    return(
        <LikedNewsContext.Provider value={{likedNews, addLikedNews, storeLikedNews, getStoredLikedNews, setLikedNews, addReadArticles, readArticles}}>
            {children}
        </LikedNewsContext.Provider>
    );
};
