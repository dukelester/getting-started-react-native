import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cat from './Cat';
import FullName from './FullName';
import HandleTextInput from './HandleTextInput';
import ScrollView2 from './ScrollView2';
import MyListViews from './MyListViews';
import MyStyles from './MyStyles';
import HeightAndWidth from './HeightAndWidth';
export default function App() {

  return (
    <View style={styles.container}>
      <Text>Welcome Duke to React Native</Text>
      <Cat/>
      <FullName/>
       <FullName/>
        <FullName/>
        <HandleTextInput/>
        <ScrollView2/>
        <MyListViews/>
        <MyStyles/>
        <HeightAndWidth/>
      <StatusBar style="auto" />
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
