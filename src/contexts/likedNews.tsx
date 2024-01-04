import React, {createContext, useState} from "react";

export const LikedNewsContext = createContext({});

export function LikedNewsProvider({children}){
    const [likedNews, setLikedNews] = useState([]);

    const addLikedNews = (news) => {
        setLikedNews((prevLikedNews) => [...prevLikedNews, news]);
    };
    
    return(
        <LikedNewsContext.Provider value={{likedNews, addLikedNews}}>
            {children}
        </LikedNewsContext.Provider>
    );
};
