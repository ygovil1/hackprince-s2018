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
import Icon from 'react-native-vector-icons/FontAwesome';

// global preferences array

export default class PreferencesScreen extends React.Component {
  static navigationOptions = {
    title: 'Preferences',
    headerheight: 100,
    headerStyle: { backgroundColor: '#f96f00', height: 50, borderBottomWidth: 0},
  };

  // Create a new preferences list 
  constructor()
  {
    super();
    this.state = {
      disabled: false,

      // next preference to be typed
      pref: ''
    }
    global.prefArray = [];

    this.animatedValue = new Animated.Value(0);
    this.prefcount = 1;
  }

  // add a preference to the list
  addMore = () =>
  {
      // set animation value
    this.animatedValue.setValue(0);
 
    // get the string to add
    let item = this.state.pref;

    // push the preference
    prefArray.push( item );

    // set the next state
    this.setState({ disabled: true }, () =>
    {
        // animation of adding
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

  deletePref = (item) =>
  {
    // Get the index of the element
    let index = global.prefArray.indexOf(item);

    // Remove the preference fromt the preference array
    global.prefArray.splice(index,1);

    this.setState({ disabled: true }, () =>
    {
        // Animation
        Animated.timing(
            this.animatedValue,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }
        ).start(() =>
        {
            this.prefcount = this.prefcount - 1;
            this.setState({ disabled: false });
        }); 
    }); 
  }

  // Separator between preferences
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

  // Action!
  render()
{
    const animationValue = this.animatedValue.interpolate(
    {
        inputRange: [ 0, 1 ],
        outputRange: [ -59, 0 ]
    });
 
    // present items in the array
    let newArray = prefArray.map(( item, key ) =>
    {
        if(( key ) == this.prefcount)
        {
            // name of the preference
            return(
                <Animated.View key = { key } style = {[ styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
                    <Text style = { styles.text }> { item }</Text>
                </Animated.View>
            );
        }
        else
        {
            return(
                <View style={{flex: 1, height: 55, flexDirection: 'row', justifyContent:'space-evenly',margin: 4,backgroundColor: "#f96f00"}} key = {key} >
                    <View style={{width: 300, backgroundColor: "#f96f00",alignItems:'center',
                            justifyContent:'center',}}>
                        <Text style = { styles.text }> { item }</Text>/>
                    </View>
                    <View style={{width: 50, backgroundColor: "#f96f00",  justifyContent:'center', alignItems: 'center'}}>
                    <TouchableOpacity 
                            onPress={() => this.deletePref(item)}
                            style={{
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.2)',
                            alignItems:'center',
                            justifyContent:'center',
                            width:40,
                            height:40,
                            backgroundColor:'#fff',
                            borderRadius:100 
                            }}> 
                            <Icon name="minus"  size={30} color="rgba(0,0,0,0.5)" />
                            </TouchableOpacity>
                    </View>
                  </View>
    
                );
        }
    });
 
    // Searchbar and add preference button
    return(
      <View style = { styles.container }>
        <SearchBar
        ref = {search => this.search = search}
          lightTheme
          placeholder='Add a preference' 
          onChangeText={(pref) => this.setState({pref})}
          clearIcon
          value={this.state.pref}
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
    // background for page
  container:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        //paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    // preference rectangle
    viewHolder:
    {
        height: 55,
        backgroundColor: '#f96f00',
        margin: 4,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
 
    text:
    {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center'
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
        backgroundColor: 'orange',
    },
    
    deleteText:
    {
        textAlign: 'right',
        textAlignVertical: 'center',
    },

    // button to delete
    deleteButton:
    {
        width: 55,
        height: 55,
    },

    stretch:
    {
        flex: 1,
        alignSelf: 'stretch',
        width: undefined,
        height: undefined
    }
});
