import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import Author from './Author';
import Comments from './Commets';
import AddComment from './AddComment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: Dimensions.get('window').width * 3 / 4,
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
  },
});


const Post = (props) => {
  const {
    image,
    email,
    nickname,
    comments,
  } = props;

  Post.propTypes = {
    image: PropTypes.number,
    email: PropTypes.string,
    nickname: PropTypes.string,
    comments: PropTypes.node,
  };

  Post.defaultProps = {
    image: '',
    email: 'example@example.com',
    nickname: 'Your name',
    comments: [],
  };

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={email} nickname={nickname} />
      <Comments comments={comments} />
      <AddComment />
    </View>
  );
};

export default Post;
