import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

import { 
  AppRegistry, 
  SectionList, 
  StyleSheet, 
  FlatList, 
  Text, 
  View,
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Menus',
  };

  render() {
    return (
      // justify horizontal center
      <View style={styles.container}>
        <SearchBar
          lightTheme
          placeholder='Search' />

        <SectionList
        sections={[
          {title: 'Wilson', data: ['Chicken Parmesan']},
          {title: 'Butler', data: ['Salad Bar', 'Rice']},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    textAlign: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

