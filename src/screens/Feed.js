import React, { Component } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import Header from '../components/Header';
import Post from '../components/Post';

const $bgColorContainer = '#F5FCFF';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: $bgColorContainer,
    flex: 1,
    justifyContent: 'center',
  },
});

class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickname: 'Esmael de Freitas',
      email: 'esmael23@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'Joana Elena',
        comment: 'Very Cool',
        index: 1,
      },
      {
        nickname: 'Jessica Mendes',
        comment: 'Mandou bem!',
        index: 2,
      },
      {
        nickname: 'Ana Julia',
        comment: 'Foto linda, da proxima me convida!',
        index: 3,
      },
      ],
    },
    {
      id: Math.random(),
      nickname: 'Davi Mattos',
      email: 'dmattos340@gmail.com',
      image: require('../../assets/imgs/boat.jpg'),
      comments: [{
        nickname: 'Daniel Marcondes',
        comment: 'Deve ser muito frio ai...',
        index: 4,
      },
      {
        nickname: 'Jessica Mendes',
        comment: 'Deu até vontade de pescar!',
        index: 5,
      },
      ],
    },
    ],
  }

  render() {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => <Post key={item.id} {...item} />
          }
        />
      </View>
    );
  }
}

export default Feed;
