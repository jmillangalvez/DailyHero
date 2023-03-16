import * as React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { WelcomeView, LoginView, RegisterView } from './src/views';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <RegisterView></RegisterView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
