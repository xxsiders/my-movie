import React from 'react';
import { StatusBar } from 'react-native';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return <>
      <StatusBar barStyle='dark-content' />
      <Navigation colorScheme={colorScheme} />
    </>
  }
}
