import { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { NewsImage, PublishedDate, FlatListView, NewsTitle } from './style';
import { LikedNewsContext } from '../../contexts/likedNews';

export function News({data, navigate}){

  const { addReadArticles } = useContext(LikedNewsContext);
  
    return (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.title)}
          renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.4} onPress={() => 
            {navigate(item)
            addReadArticles()}}>
          <FlatListView>
            <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
            <NewsImage source={{uri: item.image}}/>
            <PublishedDate>{item.publishedAt}</PublishedDate>
          </FlatListView>
          </TouchableOpacity>
        )}/>
    )
}