import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { login } from '../store/actions/user';

const $bgColorButtom = '#4286f4';
const $bgColorButtomtext = '#FFF';
const $borderColorInput = '#333';
const $bgColorInput = '#EEE';
const styles = StyleSheet.create({
  buttom: {
    backgroundColor: $bgColorButtom,
    marginTop: 20,
    padding: 10,
  },
  buttomText: {
    color: $bgColorButtomtext,
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: $bgColorInput,
    borderColor: $borderColorInput,
    borderWidth: 1,
    height: 40,
    marginTop: 20,
    width: '90%',
  },

});

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  login = () => {
    const { navigation } = this.props;
    navigation.navigate('Feed');
  };

  render() {
    const { email, password } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          autoFocus
          keyboardType="email-address"
          value={email}
          onChangeText={emailValue => this.setState({ email: emailValue })}
        />
        <TextInput
          placeholder="Senha"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={passwordValue => this.setState({ password: passwordValue })}
        />
        <TouchableOpacity onPress={this.login} style={styles.buttom}>
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('Register'); }} style={styles.buttom}>
          <Text style={styles.buttomText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(login(user)),
});

export default connect(null, mapDispatchToProps)(Login);
