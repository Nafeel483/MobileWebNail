import React, { Component } from "react";
import {
  Image,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
  ScrollView
} from "react-native";
import Images from '../Styles/Images';
import Colors from '../Styles/Colors';
import Styles from '../Styles/Styles';
import Metrics from '../Styles/Metrices';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-community/async-storage';

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true,
      selectedValue: 1,
      modelLogout: false,
      settingsData: [],
    };

  }

  filterByReference = (arr1, arr2) => {
    let res = [];
    res = arr1.filter(el => {
      return !arr2.find(element => {
        return element.id === el.id;
      });
    });
    return res;
  }

  _onPress = (value, index) => {
    // let navigates = this.props?.setting?.navigationDrawrList

    this.setState({ selectedValue: index })
    this.props.navigation.navigate(navigates[index].name);
    this.props.navigation.closeDrawer();


  };

  _renderItem = (value, index) => {
    const { selectedValue } = this.state
    return (
      <View key={index} style={{ height: hp(12), }}>
        {/* {index !== 0 && this._renderSeparator()} */}
        <TouchableOpacity
          onPress={() => {
            this._onPress(value, index);
          }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ height: hp(5), width: 10, backgroundColor: selectedValue == index ? "#FFA958" : Colors.drawerColor }} />
            <View style={{ marginLeft: hp(2), width: 100 }}>
              <Image source={value.image} style={{
                width: hp(3),
                height: hp(3),
                tintColor: selectedValue == index ? "#FFA958" : Colors.White,
                alignSelf: 'center'
              }} />
              <Text style={[{
                marginTop: 5, fontSize: hp(1.4), textAlign: 'center',
                color: selectedValue == index ? "#FFA958" : Colors.White, fontWeight: '600'
              }]}>{value.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    // let titles = this.props?.setting?.titleDrawrList


    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>

        <View
          style={{
            marginTop: Platform.OS == 'ios' ? hp(5) : hp(6),
            backgroundColor: Colors.White,
            width: "100%",
            justifyContent: 'center',
            paddingHorizontal: Metrics.padding,
            alignItems: "center"
          }}
        >
          {/* <View style={{ flexDirection: 'row', width: "90%", alignSelf: 'center', justifyContent: 'space-between' }}> */}


          {/* <TouchableOpacity onPress={() => { this.props.navigation.closeDrawer() }}>
            <Image source={Images.cross} style={{
              width: hp(3),
              height: hp(3),
              marginTop: 5,
              alignSelf: 'center'
            }} />
          </TouchableOpacity> */}


          {/* </View> */}
          {/* 2nd */}

        </View>

        {/* {
          <ScrollView>
            <View style={styles.container1}>
              {titles.map(this._renderItem)}
            </View>
          </ScrollView>
        } */}
        {/* <View style={{ flex: 0.1, flexDirection: "row", width: '85%', alignSelf: 'center' }}>

          <TouchableOpacity
            onPress={() => { this.props.navigation.closeDrawer() }}
          >
            <Image source={Images.back} style={{
              width: 30,
              height: 30,
              tintColor: Colors.appHeaderColor
            }} />
          </TouchableOpacity>
          <Text style={[{ marginLeft: 15, fontSize: 17, color: Colors.appHeaderColor, marginTop: 2, fontWeight: '500' }]}>{'Back'}</Text>
        </View> */}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS == 'ios' ? 20 : 40,
    backgroundColor: Colors.drawerColor
  },
  container1: {
    marginTop: '25%',
    marginBottom: 20,
    backgroundColor: Colors.drawerColor
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  }
});

export default DrawerContent
