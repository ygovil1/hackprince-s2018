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
  Animated,
} from 'react-native';
import { WebBrowser } from 'expo';
import { SearchBar } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class NotificationsScreen extends React.Component {
  constructor(props) {
    super();

    this.state = {
      disabled: false,
      nextpref: ''
    }

    this.animatedValue = new Animated.Value(0);
    this.prefcount = 1;

	// This lets us access the global variables from the below methods
    this.render = this.render.bind(this);
    this.addMore = this.addMore.bind(this);

    // Fake data for now
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

  // add an element to the array 
  addMore = () =>
  {
    this.wilson1 = [];
    this.cjl1 = [];
    this.whitman1 = [];
    this.roma1 = [];
    this.forbes1 = [];

    this.animatedValue.setValue(0);
 
    this.setState({ disabled: true }, () =>
    {
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start(() =>
        {
            // Find matches with your preferences
		    for (let i = 0; i < global.prefArray.length; i++) {
		      for (let j = 0; j < 5; j++) {
		        if (global.prefArray[i] == this.wilson[j]) {
		          this.wilson1.push(this.wilson[j])
		        }
		      }
		    }

		    for (let i = 0; i < global.prefArray.length; i++) {
		      for (let j = 0; j < 5; j++) {
		        if (global.prefArray[i] == this.cjl[j]) {
		          this.cjl1.push(this.cjl[j])
		        }
		      }
		    }

		    for (let i = 0; i < global.prefArray.length; i++) {
		      for (let j = 0; j < 5; j++) {
		        if (global.prefArray[i] == this.whitman[j]) {
		          this.whitman1.push(this.whitman[j])
		        }
		      }
		    }

		    for (let i = 0; i < global.prefArray.length; i++) {
		      for (let j = 0; j < 5; j++) {
		        if (global.prefArray[i] == this.roma[j]) {
		          this.roma1.push(this.roma[j])
		        }
		      }
		    }

		    for (let i = 0; i < global.prefArray.length; i++) {
		      for (let j = 0; j < 5; j++) {
		        if (global.prefArray[i] == this.forbes[j]) {
		          this.forbes1.push(this.forbes[j])
		        }
		      }
		    }

            this.setState({ disabled: false });
        }); 
    });       
  }

  render() {
    const animationValue = this.animatedValue.interpolate(
    {
        inputRange: [ 0, 1 ],
        outputRange: [ -59, 0 ]
    });

    return (
      <View style={styles.container}>

            <Button
              style={{borderWidth: 1, borderColor: 'blue'}}
              onPress={this.addMore}
              title="Refresh Notifications"
            >
            </Button>

            <ScrollView>
	            <SectionList
	              sections={[
	                {title: 'Wilson+Butler', data: this.wilson1},
	                {title: 'CJL', data: this.cjl1},
	                {title: 'Whitman', data: this.whitman1},
	                {title: 'RoMa', data: this.roma1},
	                {title: 'Forbes', data: this.forbes1},
	              ]}

	              renderItem={({item}) => <Text style={styles.item}> {item}</Text>}
	              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
	              keyExtractor={(item, index) => index}
	            />
	        </ScrollView>

      </View>
    );

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
