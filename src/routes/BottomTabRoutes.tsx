import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from 'react-native-vector-icons/Ionicons'

import { HomeScreen } from '../screens/HomeScreen';
import { ExploreScreen } from '../screens/ExploreScreen';
import { LikedNewsScreen } from '../screens/LikedNewsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Group screenOptions={{tabBarShowLabel: false, tabBarHideOnKeyboard: true, tabBarStyle: {borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, height: 60, marginBottom: 10, marginHorizontal: 10, backgroundColor: 'rgba(91, 93, 98, 0.09)', elevation: 0, width: 330, alignSelf: 'center'}}}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false, tabBarIcon: ({focused}) => {
       const iconName = focused ? "home" : "home-outline";
       return <Ionicons name={iconName} size={30}/>}}}/>
      <Tab.Screen name="Explore" component={ExploreScreen} options={{headerShown: false, tabBarIcon: ({focused}) => {
       const iconName = focused ? "globe" : "globe-outline";
       return <Ionicons name={iconName} size={30}/>}}}/>
      <Tab.Screen name="LikedNews" component={LikedNewsScreen} options={{headerShown: false, tabBarIcon: ({focused}) => {
       const iconName = focused ? "heart" : "heart-outline";
       return <Ionicons name={iconName} size={30}/>}}} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, tabBarIcon: ({focused}) => {
       const iconName = focused ? "person-circle" : "person-circle-outline";
       return <Ionicons name={iconName} size={35}/>}}} />
      </Tab.Group>
    </Tab.Navigator>
  );
}