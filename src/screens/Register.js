import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const $bgButtomColor = '#4286f4';
const $buttomColorText = '#FFF';
const $bgInputColor = '#EEE';
const $borderInputColor = '#333';
const styles = StyleSheet.create({
  buttom: {
    backgroundColor: $bgButtomColor,
    marginTop: 30,
    padding: 10,
  },
  buttomText: {
    color: $buttomColorText,
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: $bgInputColor,
    borderColor: $borderInputColor,
    borderWidth: 1,
    height: 40,
    marginTop: 20,
    paddingLeft: 15,
    width: '90%',
  },
});

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  render() {
    const { name, email, password } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          autoFocus={true}
          value={name}
          onChangeText={nameValue => this.setState({ name: nameValue })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={emailValue => this.setState({ email: emailValue })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={passwordValue => this.setState({ password: passwordValue })}
        />

        <TouchableOpacity onPress={() => { navigation.navigate('Login'); }} style={styles.buttom}>
          <Text style={styles.buttomText}>Salvar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

export default Register;
