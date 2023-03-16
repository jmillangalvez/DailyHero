import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeView, LoginView, RegisterView } from './src/views';
import { colors } from './src/theme';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.primary,
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeView}
        />
        <Stack.Screen 
          name="Login"
          component={LoginView}
        />
        <Stack.Screen 
          name="Register"
          component={RegisterView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
