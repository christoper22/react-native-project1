import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

type eventChat = {
  photo: string;
  name: string;
  last_message: string;
  time_send_message: string;
  unread_message?: string;
};
const EventChat = ({
  photo,
  name,
  last_message,
  time_send_message,
  unread_message,
}: eventChat) => {
  return (
    <View style={styles.container}>
      <Image style={styles.photo} source={{uri: photo}} />
      <View style={styles.message_section}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{last_message}</Text>
      </View>
      <View style={styles.time_section}>
        <Text style={styles.time}>{time_send_message}</Text>
        <Text style={styles.unread_message}>{unread_message}</Text>
      </View>
    </View>
  );
};

export default EventChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    padding: 10,
    backgroundColor: '#BDB6B6',
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  message_section: {
    flex: 8,
    height: 60,
    marginLeft: 15,
  },
  time_section: {
    flex: 2,
    height: 60,
  },
  message: {
    fontSize: 15,
  },
  time: {fontWeight: 'bold', textAlign: 'right'},

  unread_message: {
    borderRadius: 50,
    height: 25,
    width: 25,
    backgroundColor: '#9B9B9B',
    position: 'absolute',
    paddingLeft: 8,
    paddingTop: 3,
    right: 5,
    bottom: 13,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 18,
    color: 'black',
  },
});
