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
} from 'react-native';
import add from '../assets/images/add.png';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Preferences',
    headerheight: 100,
    headerStyle: { backgroundColor: 'white', height: 60},
  };

  constructor()
  {
    super();
    this.state = {valueArray: [], disabled: false}
    this.animatedValue = new Animated.Value(0);

    this.prefcount = 1;
    this.matches = ['']
  }

  // add an element to the array 
  addMore = () =>
  {
    this.animatedValue.setValue(0);
 
    let newlyAddedValue = { prefcount: this.prefcount }
 
    this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
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
 
    let newArray = this.state.valueArray.map(( item, key ) =>
    {
        if(( key ) == this.prefcount)
        {
            return(
                <Animated.View key = { key } style = {[ styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
                    <Text style = { styles.text }>Row { item.prefcount }</Text>
                </Animated.View>
            );
        }
        else
        {
            return(
                <View key = { key } style = { styles.viewHolder }>
                    <Text style = { styles.text }>Row { item.prefcount }</Text>
                </View>
            );
        }
    });
 
    return(
      <View style = { styles.container }>
      <ScrollView>
          <View style = {{ flex: 1, padding: 4 }}>
          {
              newArray
          }
          </View>
      </ScrollView>

      <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } disabled = { this.state.disabled } onPress = { this.addMore }>
          <Image source = {add} style = { styles.btnImage }/>
      </TouchableOpacity>
  </View>
    );
}

  /*render() {

    return (
      <ScrollView style={styles.container}>
        <FlatList
          data={[
            {key: 'Chicken'},
            {key: 'Broccoli'},
            {key: 'Lettuce'},
            {key: 'Beans'},
            {key: 'Quinoa'},
            {key: 'Rice'},
            {key: 'Burger'},
            {key: 'Cheese'},
          ]}
          
          renderItem={({item}) => <Text style={styles.preferences}>{item.key}</Text>}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </ScrollView>
    );
  }*/
}

const styles = StyleSheet.create({
  container:
    {
        flex: 1,
        backgroundColor: '#eee',
        justifyContent: 'center',
        paddingTop: (Platform.OS == 'ios') ? 20 : 0
    },
 
    viewHolder:
    {
        height: 55,
        backgroundColor: '#26A69A',
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
    }
});
