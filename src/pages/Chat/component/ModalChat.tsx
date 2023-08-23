import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';

type modal = {
  modalVisible: boolean;
  setClose: any;
  id: number;
};

const ModalChat = ({modalVisible, setClose, id}: modal) => {
  return (
    <Modal
      animationType="none"
      // transparent={true}
      visible={modalVisible}
      onRequestClose={setClose}>
      <View style={styles.centeredView}>
        <Text>hello ?{id}</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'gray',
  },
});

export default ModalChat;
