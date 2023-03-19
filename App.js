import * as React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeView, LoginView, RegisterView, HomepageView } from './src/views';
import { colors } from './src/theme';
import { store } from './src/redux/store/store';

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
    <Provider store={store}>
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
          <Stack.Screen 
            name="Homepage"
            component={HomepageView}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
