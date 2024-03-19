import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useEffect, useState} from "react";
import { Alert } from "react-native";

export const AuthContext = createContext(undefined);

export function AuthProvider({children}){
   
    const [name, setName] = useState<string>(undefined);

    useEffect(() => {
      getStoredName();
    }, []);

    useEffect(() => {
      storeName(name);
    }, [name]); // Depende do estado 'name'
  
    const storeName = async (name: string) => {
      try {
        if (name) {
          await AsyncStorage.setItem('userName', name);
        } else {
          await AsyncStorage.removeItem('userName');
        }
      } catch (error) {
        console.error('Erro ao salvar o nome:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao salvar o nome.');
      }
    };
  
    const getStoredName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('userName');
        if (storedName !== null) {
          setName(storedName);
        }
      } catch (error) {
        console.error('Erro ao obter o nome:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao obter o nome.');
      }
    };
  
    const handleNameChange = (newName: string) => {
      setName(newName);
      storeName(name);
    };

    return(
        <AuthContext.Provider value={{name, setName, handleNameChange}}>
            {children}
        </AuthContext.Provider>
    );
};