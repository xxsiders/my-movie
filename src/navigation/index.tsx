import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import { RootStackParamList } from '../../types';
import { Theme } from '../constants/Theme';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      theme={Theme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return <Stack.Navigator screenOptions={{ headerShown: false }}>

  </Stack.Navigator>
}
