import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry,
  FlatList,
  ImageBackground,
} from 'react-native';
import logo from '../assets/images/logo.png';
import healthy from '../assets/images/healthy.jpg';
import title from '../assets/images/title.png'

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTintColor: '#000000',
    headerStyle: { backgroundColor: '#f96f00', height: 5, shadowColor: 'transparent', borderBottomWidth: 0},
    title: 'Home',
  };
    render() {
      return (
        <View style={styles.container}>

            <Image source = {logo} style={styles.btnImage} />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    welcome: {
      color: 'orange',
      fontWeight: 'bold',
      fontSize: 30,
      //justifyContent:'center',
    },
  
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null,
      borderColor: "#f96f00",
      borderWidth: 10,
    },
    btnImage:
    {
      height: 400,
      width: 350,
    },

    backgroundImage: {
      flex: 1,
      alignSelf: 'stretch',

    }
  });