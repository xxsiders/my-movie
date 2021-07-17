import { Inter_400Regular, Inter_600SemiBold, Inter_900Black } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          Inter_900Black,
          Inter_400Regular,
          Inter_600SemiBold
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
