import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback as TWF,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const $captionColor = '#CCC';

const styles = StyleSheet.create({
  caption: {
    color: $captionColor,
    fontSize: 12,
    marginLeft: 10,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  input: {
    width: '90%',
  },
  package: {
    flex: 1,
  },
});

class AddComment extends Component {
  state = {
    comment: '',
    editMode: false,
  }

  handleAddComment = () => {
    const { comment } = this.state;
    Alert.alert('Adicionado!', comment);
  }

  render() {
    let commentArea = null;
    const autoFocus = true;
    const { editMode, comment } = this.state;
    if (editMode) {
      commentArea = (
        <View style={styles.container}>
          <TextInput
            placeholder="Pode Comentar..."
            style={styles.input}
            autoFocus={autoFocus}
            value={comment}
            onChangeText={comments => this.setState({ comment: comments })}
            onSubmitEditing={this.handleAddComment}
          />
          <TWF onPress={() => this.setState({ editMode: false })}>
            <Icon name="times" size={15} color="#555" />
          </TWF>
        </View>
      );
    } else {
      commentArea = (
        <TWF onPress={() => this.setState({ editMode: true })}>
          <View style={styles.container}>
            <Icon name="comment-o" size={25} color="#555" />
            <Text style={styles.caption}>
              Adicione um comentário...
            </Text>
          </View>
        </TWF>
      );
    }
    return (
      <View style={styles.package}>
        {commentArea}
      </View>
    );
  }
}

export default AddComment;
