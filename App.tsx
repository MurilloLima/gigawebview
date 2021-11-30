import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <WebView style={styles.container}
      source={{ uri: 'http://www.exsol.com.br/' }}
    >
    </WebView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
    marginTop:35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
