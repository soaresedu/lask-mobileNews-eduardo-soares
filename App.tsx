import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';

import { StackRoutes } from './src/routes/StackRoutes';
import { LikedNewsProvider } from './src/contexts/likedNews';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold
  });

  return (
    <LikedNewsProvider>
      <StackRoutes/>
    </LikedNewsProvider>
  );
}

