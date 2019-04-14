import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import { logout } from '../store/actions/user';

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
    const { navigation, onLogout } = this.props;

    onLogout();
    navigation.navigate('Auth');
  }

  render() {
    const { email } = this.props;
    const options = { email, secure: true };
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

const mapStateToProps = ({ user }) => {
  return {
    name: user.name,
    email: user.email,
  };
};

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
