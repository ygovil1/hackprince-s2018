import React from 'react';
import { 
  ScrollView, 
  FlatList, 
  Text, 
  View, 
  StyleSheet,
  Platform, 
  TouchableOpacity,
  Animated,
  Image,
  Button,
} from 'react-native';
import add from '../assets/images/add.png';
import { SearchBar } from 'react-native-elements';

export default class PreferencesScreen extends React.Component {
  static navigationOptions = {
    title: 'Preferences',
    headerheight: 100,
    headerStyle: { backgroundColor: '#f96f00', height: 50, borderBottomWidth: 0},
  };

  constructor()
  {
    super();
    this.state = {
      disabled: false,
      nextpref: ''
    }
    global.valueArray = [];

    this.animatedValue = new Animated.Value(0);
    this.prefcount = 1;
  }

  // add an element to the array 
  addMore = () =>
  {
    this.animatedValue.setValue(0);
 
    global.valueArray.push(this.state.nextpref)
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
            this.prefcount = this.prefcount + 1;
            this.setState({ disabled: false });
        }); 
    });       
  }

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

  render()
{
    const animationValue = this.animatedValue.interpolate(
    {
        inputRange: [ 0, 1 ],
        outputRange: [ -59, 0 ]
    });
 
    let newArray = global.valueArray.map(( item, key ) =>
    {
        if(( key ) == this.prefcount)
        {
            return(
                <Animated.View key = { key } style = {[ styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
                    <Text style = { styles.text }> { item }</Text>
                </Animated.View>
            );
        }
        else
        {
            return(
                <View key = { key } style = { styles.viewHolder }>
                    <Text style = { styles.text }> { item }</Text>
                </View>
            );
        }
    });
 
    return(
      <View style = { styles.container }>
      <SearchBar
          lightTheme
          placeholder='Add a preference' 
          onChangeText={(nextpref) => this.setState({nextpref})}
          value={this.state.nextpref}
          />

          <Button
            onPress={this.addMore}
            title="Add preference"
            style = {styles.buttonStyle}
        />

      <ScrollView>
          <View style = {{ flex: 1, padding: 4 }}>
          {
              newArray
          }
          </View>
      </ScrollView>
  </View>
    );
}

}

const styles = StyleSheet.create({
  container:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        //paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    viewHolder:
    {
        height: 55,
        backgroundColor: '#f96f00',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4
    },
 
    text:
    {
        color: 'white',
        fontSize: 25
    },
 
    btn:
    {
        position: 'absolute',
        right: 25,
        bottom: 25,
        borderRadius: 30,
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: 15
    },
 
    btnImage:
    {
        resizeMode: 'contain',
        width: '100%',
        tintColor: 'white'
    },
    buttonStyle: 
    {
        backgroundColor: 'orange'
    }
});
