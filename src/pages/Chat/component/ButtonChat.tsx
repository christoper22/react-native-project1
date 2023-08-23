import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

export default function ButtonChat() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/icon/chat_icon.png')}
        style={styles.stretch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    opacity: 10,
    height: 50,
    width: 50,
    position: 'absolute',
    right: 20,
    bottom: 50,
  },
  stretch: {
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
});
