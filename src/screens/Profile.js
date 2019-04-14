import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Gravatar } from 'react-native-gravatar';

const $bgColorButtom = '#4286f4';
const $buttomColor = '#FFF';
const styles = StyleSheet.create({
  avatar: {
    borderRadius: 75,
    height: 150,
    marginTop: 100,
    width: 150,
  },
  buttom: {
    backgroundColor: $bgColorButtom,
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  buttomText: {
    color: $buttomColor,
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  email: {
    fontSize: 25,
    marginTop: 20,
  },
  nickname: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
  },
});

class Profile extends Component {

  logout = () => {
    const { navigation } = this.props;
    navigation.navigate('Auth');
  }

  render() {
    const options = { email: 'dmattos340@gmail.com', secure: true };
    return (
      <View style={styles.container}>
        <Gravatar options={options} style={styles.avatar} />
        <Text style={styles.nickname}>Davi Mattos</Text>
        <Text style={styles.email}>dmattos340@gmail.com</Text>
        <TouchableOpacity onPress={this.logout} style={styles.buttom}>
          <Text style={styles.buttomText}>Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
