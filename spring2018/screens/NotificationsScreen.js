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
  Button,
  SectionList,
  Array,
} from 'react-native';
import { WebBrowser } from 'expo';
import { SearchBar } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.render = this.render.bind(this);
    this._handlePress = this._handlePress.bind(this);

    this.state = {}

    this.wilson = ['Fried Chicken & Waffles with Sausage', 'Grilled Tofu with Pico di Gallo', 'OBrien Potatoes', 'Grapefruit Half','Bacon'];
    this.wilson1 = [];

    this.cjl = ['French Toast', 'Moroccan Beef Tagine', 'Roast Chicken', 'Vegetable Quinoa Bake', 'Butternut Squash Soup'];
    this.cjl1 = [];

    this.whitman = ['Grilled Pork Chop', 'Cannellini Beans with Spinach', 'Carrot Ginger Soup', 'Thai Chicken Coconut Soup', 'Red Bliss Potato Salad'];
    this.whitman1 = [];

    this.roma = ['Roast Beef Au Jus', 'Scrambled Tofu', 'Italian Wedding Soup', 'Manhattan Clam Chowder', 'Cheese Lasagna'];
    this.roma1 = [];

    this.forbes = ['Pasta with Pesto', 'Sunday Brunch Bar B Que Chicken', 'Kale Salad', 'Bacon', 'Eggs Any Style & Omelets Made to Order'];
    this.forbes1 = [];
  }

  static navigationOptions = {
    title: 'Notifications',
    headerTintColor: '#000000',
    headerheight: 100,
    headerStyle: { backgroundColor: '#f96f00', height: 50, borderBottomWidth: 0},
    headerTitleStyle: { fontWeight: 'bold' },
  };

  render() {
    return (
      <View style={styles.container}>

            <Button
              style={{borderWidth: 1, borderColor: 'blue'}}
              onPress={this._handlePress}
              title="Refresh Notifications"
            >
            </Button>

            <SectionList
              sections={[
                {title: 'Wilson+Butler', data: this.wilson1},
                {title: 'CJL', data: this.cjl1},
                {title: 'Whitman', data: this.whitman1},
                {title: 'RoMa', data: this.roma1},
                {title: 'Forbes', data: this.forbes1},
              ]}

              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />

      </View>
    );
  }

  _handlePress() {
    console.log('Pressed1!')
    console.log(global.valueArray)

    for (let i = 0; i < global.valueArray.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (global.valueArray[i] == this.wilson[j]) {
          this.wilson1.push(this.wilson[j])
        }
      }
    }
    console.log("Wilson + Wilson Matches")
    console.log(this.wilson)
    console.log(this.wilson1)

    for (let i = 0; i < global.valueArray.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (global.valueArray[i] == this.cjl[j]) {
          this.cjl1.push(this.cjl[j])
        }
      }
    }
    console.log("CJL + CJL Matches:")
    console.log(this.cjl)
    console.log(this.cjl1)

    for (let i = 0; i < global.valueArray.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (global.valueArray[i] == this.whitman[j]) {
          this.whitman1.push(this.whitman[j])
        }
      }
    }
    console.log("Whitman + Whitman Matches:")
    console.log(this.whitman)
    console.log(this.whitman1)

    for (let i = 0; i < global.valueArray.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (global.valueArray[i] == this.roma[j]) {
          this.roma1.push(this.roma[j])
        }
      }
    }
    console.log("RoMa + RoMa Matches:")
    console.log(this.roma)
    console.log(this.roma1)

    for (let i = 0; i < global.valueArray.length; i++) {
      for (let j = 0; j < 5; j++) {
        if (global.valueArray[i] == this.forbes[j]) {
          this.forbes1.push(this.forbes[j])
        }
      }
    }
    console.log("Forbes + Forbes Matches:")
    console.log(this.forbes)
    console.log(this.forbes1)

  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
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
});
