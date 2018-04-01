import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// Highlighter import
import Highlighter from 'react-native-highlight-words';
// Textbox import
import { AppRegistry, TextInput } from 'react-native';
// Button import
import { Button } from 'react-native';
// Search filter import


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this._handlePress1 = this._handlePress1.bind(this);
    this._handlePress2 = this._handlePress2.bind(this);

    this.state = {
      food: 'Enter food to search',
      nextpref: 'Enter preference'
    }

    this.prefcount = 1
    this.allprefs = ['']
    this.matches = ['']
  }

  render() {
    return (
        <View style={styles.container}>
          <Text>***Tiger Meals***</Text>

          <Highlighter
            highlightStyle={{backgroundColor: 'yellow'}}
            searchWords={[this.state.food]}
            textToHighlight='MENUS GO HERE test vegetables hummus grains broccoli'
          />

          
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(food) => this.setState({food})}
            value={this.state.food}
          />

          
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(nextpref) => this.setState({nextpref})}
            value={this.state.nextpref}
          />

          <Button
            style={{borderWidth: 1, borderColor: 'blue'}}
            onPress={this._handlePress1}
            title="Submit Preference"
          >
          </Button>

          
          <Button
            style={{borderWidth: 1, borderColor: 'blue'}}
            onPress={this._handlePress2}
            title="Check for Matches"
          >
          </Button>

        </View>
    );
  }

  _handlePress1() {
    console.log('Pressed1!')
    this.allprefs.push(this.state.nextpref)
    console.log(this.allprefs[this.prefcount])
    console.log(this.prefcount)
    this.prefcount++
  }

  _handlePress2() {
    console.log('Pressed2!')
    let textToSearchThru=['SCRAPED TEXT GOES HERE','hi','this','is','mashad','wut']
    for (let i = 0; i < this.prefcount; i++) {
      for (let j = 0; j < 5; j++) {
        if (this.allprefs[i] == textToSearchThru[j]) {
          this.matches.push(textToSearchThru[j])
        }
      }
    }
    console.log(this.matches)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
