import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Home({ navigation }) {
  const press = () => {
    navigation.navigate('ReviewDetails');
    // navigation.push('ReviewDetails');
  };
  const pressHand = () => {
    // navigation.push('ReviewDetails');
    navigation.navigate('Important');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Welcome</Text>
      <Button title='Tasks' onPress={press} />
      <Button title='Important' onPress={pressHand} color='orange' />

    </View>
  );
}
