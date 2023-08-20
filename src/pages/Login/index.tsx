import React, {useContext, useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import {UrlContext} from '../../App';
import ModalLogin from './component/modal_login';

const LoginScreen = ({navigation}: any) => {
  const url = useContext(UrlContext);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState('');

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  function openModal() {
    return setModalVisible(true);
  }
  function closeModal() {
    return setModalVisible(false);
  }

  const handleLogin = () => {
    // Perform authentication logic here (e.g., check username and password)
    axios
      .post(`${url}user/login`, {
        user_name: username,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        console.log(response.status);
        setMessage('Login success');
        return navigation.replace('Dashboard');
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        console.log(error.response.request.status);
        setMessage(error.response.data.message);
        openModal();
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />

      {modalVisible && (
        <ModalLogin
          message={message}
          modalVisible={modalVisible}
          setClose={closeModal}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});

export default LoginScreen;
