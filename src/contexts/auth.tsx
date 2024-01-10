import { createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateEmail, updatePassword } from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState} from "react";
import { Alert } from "react-native";

import { app } from "../service/firebase/firebaseSDK";

export const AuthContext = createContext(undefined);

export function AuthProvider({children, navigation}){

    const [name, setName] = useState('');
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    const handleSignIn = (email, password, navigation) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setUser(userCredential.user.toJSON());
            const  storeUser = async() => {
                const {uid, email} = userCredential.user;
                const userData = { uid, email };
                const jsonValue = JSON.stringify(userData);
                await AsyncStorage.setItem('user_key', jsonValue);     
            }
            storeUser();
            navigation.navigate('HomeScreen');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        });
    };

    const handleSignUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate('LoginScreen');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Error', 'That email address is already in use!');
            }
        
            if (error.code === 'auth/invalid-email') {
            Alert.alert('Error','That email address is invalid!');
            }
        });
    };

    const handleRedefinePassword = (email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            navigation.navigate('LoginScreen');
            Alert.alert('Email Sent', 'Your password reset email has been sent!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        });
    };

    const handleUpdateEmail = (newEmail) => {
        updateEmail(auth.currentUser, newEmail).then(() => {
            
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
        });
    };

    const handleUpdatePassword = (newPassword) => {
        updatePassword(user, newPassword).then(() => {
            
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert(errorCode, errorMessage);
          });
    };

    return(
        <AuthContext.Provider value={{name, setName, handleSignIn, user, handleSignUp, handleRedefinePassword, setUser, handleUpdateEmail, handleUpdatePassword}}>
            {children}
        </AuthContext.Provider>
    );
};