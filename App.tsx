import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter';

import { WelcomeScreen } from './src/screens/WelcomeScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_600SemiBold, Inter_700Bold
  });

  return (
    <WelcomeScreen/>
  );
}

