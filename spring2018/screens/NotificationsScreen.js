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
} from 'react-native';
import { WebBrowser } from 'expo';
import { SearchBar } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
    headerTintColor: '#000000',
    headerheight: 100,
    headerStyle: { backgroundColor: '#f96f00', height: 50, borderBottomWidth: 0},
    headerTitleStyle: { fontWeight: 'bold' },
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  render() {
    return (
      <View style={styles.container}>
        console.log(LinksScreen.state.valueArray)

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <FlatList
          data={[
            {key: 'Chicken in Whitman Dining Hall for Dinner!'},
            {key: 'Tofu in Wilson for Lunch!'},
            {key: 'Lettuce in Forbes for Dinner!'},
          ]}
          
          renderItem={({item}) => <Text style={styles.preferences}>{item.key}</Text>}
          ItemSeparatorComponent={this.renderSeparator}
        />

        </ScrollView>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  notificationTitle: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    justifyContent:'center',
    flex:1,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    //paddingTop: 30,
  },

  preferences: {
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(247,247,247,1.0)',
  }
});
