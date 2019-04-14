import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const $containerColor = '#BBB';
const $titleColor = '#000';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: $containerColor,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
    padding: 10,
  },
  rowContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: $titleColor,
    fontFamily: 'shelter',
    fontSize: 28,
    height: 30,
  },
});

const Header = () => (
  <View style={[styles.container]}>
    <View style={styles.rowContainer}>
      <Icon name="instagram" size={30} />
      <Text style={styles.title}>Instagram</Text>
    </View>
  </View>
);

export default Header;
