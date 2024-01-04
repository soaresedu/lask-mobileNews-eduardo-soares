import React, {createContext, useState} from "react";

type News = {
    id: string;
    title: string;
    image: string;
    publishedAt: string;
  };
  
  type LikedNewsContextType = {
    likedNews: News[];
    addLikedNews: (news: News) => void;
  };

  export const LikedNewsContext = createContext<LikedNewsContextType | undefined>(undefined);

export function LikedNewsProvider({children}){

    const [likedNews, setLikedNews] = useState([]);

    const addLikedNews = (news: News) => {
        setLikedNews((prevLikedNews) => [...prevLikedNews, news]);
    };
    
    return(
        <LikedNewsContext.Provider value={{likedNews, addLikedNews}}>
            {children}
        </LikedNewsContext.Provider>
    );
};
