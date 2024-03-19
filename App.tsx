import { useCallback, } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';

import { StackRoutes } from './src/routes/StackRoutes';
import { LikedNewsProvider } from './src/contexts/likedNews';
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <AuthProvider>
      <LikedNewsProvider>
          <StackRoutes/>
      </LikedNewsProvider>
    </AuthProvider>
  );
}

