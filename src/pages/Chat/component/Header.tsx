import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Header = () => {
  const [search, setSearch] = useState<string>('');
  const [statusSearch, setStatusSearch] = useState<boolean>(false);

  function pressSearch() {
    setStatusSearch(true);
  }

  function pressBack() {
    setStatusSearch(false);
  }

  function submitSearch() {
    console.log('test');
  }
  return (
    <>
      <View style={styles.container}>
        {!statusSearch && <Text style={styles.logo}>WorldChat</Text>}
        {statusSearch && (
          <>
            <TouchableOpacity onPress={pressBack}>
              <Image
                style={styles.iconBack}
                source={require('../../../assets/icon/back_icon.png')}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Search"
              onChangeText={text => {
                console.log(text);
                setSearch(text);
              }}
              value={search}
            />
          </>
        )}
        <View style={styles.container}>
          <TouchableOpacity onPress={statusSearch ? submitSearch : pressSearch}>
            <Image
              style={styles.iconSearch}
              source={require('../../../assets/icon/search_icon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.iconDots}
              source={require('../../../assets/icon/three_dots_icon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    textShadowColor: 22,
  },
  logo: {
    marginLeft: 4,
    fontSize: 20,
    color: 'white',
  },
  input: {
    flex: 1,
  },
  iconSearch: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  iconDots: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  iconBack: {
    height: 20,
    width: 50,
    marginRight: 5,
  },
});
export default Header;
