import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {ReactNode, createContext, useState} from "react";
import Parse from "parse/react-native.js";
import { Alert } from "react-native";

export const AuthContext = createContext(undefined);

export function AuthProvider({children}){
   
    const [name, setName] = useState('');
    const [user, setUser] = useState(null);

    /*Parse.setAsyncStorage(AsyncStorage); 
    Parse.initialize('TsXUleGyyEiCLKc9r1gJgGgUHFPel3NZlXeVdIoV','WWr1SXv7mPacYwnYkskLQWLNy8VymXPvUYlxAJvC');
    Parse.serverURL = 'https://parseapi.back4app.com/';
  
    const doUserRegistration = async function (usernameValue, passwordValue): Promise<boolean> {   
        return await Parse.User.signUp(usernameValue, passwordValue)
          .then((createdUser: Parse.User) => {
            Alert.alert(
              "Success!",
              `User ${createdUser.get("username")} was successfully created!`
            );
            navigation.navigate('LoginScreen');
            return true;
          })
          .catch((error) => {
            Alert.alert("Error!", error.message);
            return false;
          });
    };

    const doUserLogIn = async function (usernameValue, passwordValue): Promise<boolean> {
        return await Parse.User.logIn(usernameValue, passwordValue)
          .then(async (loggedInUser: Parse.User) => {
            Alert.alert(
              'Success!',
              `User ${loggedInUser.get('username')} has successfully signed in!`,
            );
            const currentUser: Parse.User = await Parse.User.currentAsync();
            console.log(loggedInUser === currentUser);
            navigation.navigate('HomeScreen');
            return true;
          })
          .catch((error) => {
            Alert.alert('Error!', error.message);
            return false;
          });
      };*/

    return(
        <AuthContext.Provider value={{name, setName, user, setUser}}>
            {children}
        </AuthContext.Provider>
    );
};