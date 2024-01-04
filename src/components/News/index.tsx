import { FlatList, TouchableOpacity } from 'react-native';
import { NewsImage, PublishedDate, FlatListView, NewsTitle } from './style';

export function News({data, navigate}){
    return (
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.title)}
          renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.4} onPress={() => navigate(item)}>
          <FlatListView>
            <NewsTitle numberOfLines={2}>{item.title}</NewsTitle>
            <NewsImage source={{uri: item.image}}/>
            <PublishedDate>{item.publishedAt}</PublishedDate>
          </FlatListView>
          </TouchableOpacity>
        )}/>
    )
}