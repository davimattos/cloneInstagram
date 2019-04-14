import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gravatar } from 'react-native-gravatar';
import PropTypes from 'prop-types';

const $nicknameColor = '#444';

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 15,
    height: 30,
    marginHorizontal: 10,
    width: 30,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  nickname: {
    color: $nicknameColor,
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

const Author = (props) => {
  const { email, nickname } = props;

  Author.propTypes = {
    email: PropTypes.string,
    nickname: PropTypes.string,

  };

  Author.defaultProps = {
    email: 'example@example.com',
    nickname: 'Your name',
  };

  return (
    <View style={styles.container}>
      <Gravatar
        options={{
          email,
          secure: true,
        }}
        style={styles.avatar}
      />
      <Text style={styles.nickname}>{nickname}</Text>
    </View>
  );
};

export default Author;
