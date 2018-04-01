import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import Highlighter from 'react-native-highlight-words';

import { 
  AppRegistry, 
  SectionList, 
  StyleSheet, 
  FlatList, 
  Text, 
  View,
} from 'react-native';
import { List, ListItem } from 'react-native-elements'

export default class MenusScreen extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);

    this.state = {
      food: ''
    }
  }

  static navigationOptions = {
    title: 'Menus',
    headerheight: 100,
    headerStyle: { backgroundColor: '#f96f00', height: 50, borderBottomWidth: 0},
  };

  render() {
    return (
      // justify horizontal center
      <View style={styles.container}>
        <SearchBar
          lightTheme
          placeholder='Search'
          onChangeText={(food) => this.setState({food})}
          value={this.state.food}
        />

        <SectionList
          sections={[
            {title: 'Wilson+Butler', data: ['Fried Chicken & Waffles with Sausage', 'Grilled Tofu with Pico di Gallo', 'OBrien Potatoes', 'Grapefruit Half','Bacon']},
            {title: 'CJL', data: ['French Toast', 'Moroccan Beef Tagine', 'Roast Chicken', 'Vegetable Quinoa Bake', 'Butternut Squash Soup']},
            {title: 'Whitman', data: ['Grilled Pork Chop', 'Cannellini Beans with Spinach', 'Carrot Ginger Soup', 'Thai Chicken Coconut Soup', 'Red Bliss Potato Salad']},
            {title: 'Rocky+Mathey', data: ['Roast Beef Au Jus', 'Scrambled Tofu', 'Italian Wedding Soup', 'Manhattan Clam Chowder', 'Cheese Lasagna']},
            {title: 'Forbes', data: ['Pasta with Pesto', 'Sunday Brunch Bar B Que Chicken', 'Kale Salad', 'Bacon', 'Eggs Any Style & Omelets Made to Order']}
          ]}

          renderItem={({item}) => 
            <Text style={styles.item}> {
              <Highlighter
                highlightStyle={{backgroundColor: 'yellow'}}
                searchWords={[this.state.food]}
                textToHighlight={item}
              />
            }
            </Text>
          }
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