import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const $colorContainer = '#EEE';
const $colorButtom = '#4286f4';
const $colorButtomText = '#FFF';
const styles = StyleSheet.create({
  buttom: {
    backgroundColor: $colorButtom,
    marginTop: 30,
    padding: 10,
  },
  buttomText: {
    color: $colorButtomText,
    fontSize: 20,
  },
  container: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
    width: '100%',
  },
  imageContainer: {
    backgroundColor: $colorContainer,
    height: Dimensions.get('window').width / 2,
    marginTop: 10,
    width: '90%',
  },
  input: {
    marginTop: 20,
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: Platform.OS === 'ios' ? 30 : 10,
  },
});

class AddPhoto extends Component {
  state= {
    image: null,
    comment: '',
  }

  pickImage = () => {
    ImagePicker.showImagePicker({
      title: 'Escolha a imagem',
      maxHeight: 600,
      maxWidth: 800,
    }, (res) => {
      if (!res.didCancel) {
        this.setState({ image: { uri: res.uri, base64: res.data } });
      }
    });
  }

  save = async () => {
    const { comment } = this.state;
    Alert.alert('Imagem adicionada!', comment);
  }

  render() {
    const { image, comment } = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Compartilhe uma imagem</Text>
          <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
          </View>
          <TouchableOpacity onPress={this.pickImage} style={styles.buttom}>
            <Text style={styles.buttomText}>Escolha a foto</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Algum comentário para a foto?"
            style={styles.input}
            value={comment}
            onChangeText={comments => this.setState({ comment: comments })}
          />
          <TouchableOpacity onPress={this.save} style={styles.buttom}>
            <Text style={styles.buttomText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default AddPhoto;
