import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const $commentColor = '#555';
const $nicknameColor = '#444';

const styles = StyleSheet.create({
  comment: {
    color: $commentColor,
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  container: {
    flex: 1,
    margin: 10,
  },
  nickname: {
    color: $nicknameColor,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

const Comments = (props) => {
  let view = null;
  const { comments } = props;

  Comments.propTypes = {
    comments: PropTypes.node,
  };

  Comments.defaultProps = {
    comments: [],
  };

  if (comments) {
    view = comments.map((item) => {
      return (
        <View style={styles.commentContainer} key={item.index}>
          <Text style={styles.nickname}>{`${item.nickname}: `}</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      );
    });
  }
  return (
    <View style={styles.container}>
      {view}
    </View>
  );
};

export default Comments;
