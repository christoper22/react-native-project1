import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
import {UrlContext} from '../../App';
import ModalLogin from './component/ModalLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const handleLogin = async () => {
    // Perform authentication logic here (e.g., check username and password)
    await axios
      .post(`${url}user/login`, {
        user_name: username,
        password: password,
      })
      .then(async function (response) {
        const resData = response.data;

        await AsyncStorage.setItem('token', resData.token);
        await AsyncStorage.setItem('user', resData.user.name);
        await AsyncStorage.setItem('user_name', resData.user.user_name);
        await AsyncStorage.setItem('user_id', `${resData.user.id}`);

        setMessage('Login success');
        // console.log(resData.token);
        // console.log(resData.user.name);
        // console.log(resData.user.user_name);
        // console.log(JSON.stringify(resData.user.id));

        return await navigation.replace('Chat');
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        console.log(error.response.request.status);
        setMessage(error.response.data.message);
        openModal();
      });
  };

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      }}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/image/logo.png')}
        />
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
      </View>
      {modalVisible && (
        <ModalLogin
          message={message}
          modalVisible={modalVisible}
          setClose={closeModal}
        />
      )}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginBottom: 20,
    position: 'relative',
    opacity: 1,
  },
  logo: {
    height: 120,
    width: 110,
    marginBottom: 20,
    position: 'relative',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'grey',
    opacity: 1,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
