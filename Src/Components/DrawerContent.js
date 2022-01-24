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
      selectedValue: null,
      modelLogout: false,
      settingsData: [],
      titles: [
        {
          name: 'My Account',
          des: 'Everything in one place',
          pic: Images.profile,
        },
        {
          name: 'Home',
          des: 'Everything in one place',
          pic: Images.home,
        },
        {
          name: 'All Categories',
          des: 'Everything in one place',
          pic: Images.category,
        },
        {
          name: 'Search',
          des: 'Everything in one place',
          pic: Images.search,
        },
        {
          name: 'Favorites',
          des: 'Everything in one place',
          pic: Images.heart,
        },
        {
          name: 'The Magazin',
          des: 'Everything in one place',
          pic: Images.magzine,
        },
        {
          name: 'Service Center',
          des: 'Everything in one place',
          pic: Images.serviceCenter,
        },
        {
          name: 'Contact Us',
          des: 'you can contact us by WhatsApp, email, facebook, call or contact form..',
          pic: Images.contactUs,
        },
      ],
      socialData: [
        {
          pic: Images.socialWhatsapp
        },
        {
          pic: Images.socialMessanger
        },
        {
          pic: Images.socialFacebook
        },
        {
          pic: Images.socialInstagram
        },
      ]
    };
    this.navigates = [
      "",
      "Home",
      "",
      "",
      "",
      "Magazine",
      "ServiceCenter",
      ""
    ]
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
    this.props.navigation.navigate(this.navigates[index]);
    this.props.navigation.closeDrawer();


  };

  _renderItem = (value, index) => {
    const { selectedValue } = this.state
    return (
      <>
        <View style={{ width: '100%', height: hp(0.2), backgroundColor: Colors.iconColor }} />
        <View style={{
          backgroundColor: selectedValue == index ? Colors.darkPink : Colors.White
        }}>


          <View key={index} style={{
            marginTop: hp(2), marginBottom: hp(2),
          }}>
            {/* {index !== 0 && this._renderSeparator()} */}
            <TouchableOpacity
              onPress={() => {
                this._onPress(value, index);
              }}>
              <View style={{
                flexDirection: 'row', width: '95%', alignSelf: 'center', justifyContent: 'space-between',
              }}>
                <View style={{ marginLeft: hp(2), flexDirection: 'row' }}>
                  {
                    index == 0 ?
                      <Image source={value.pic} style={{
                        width: hp(3.5),
                        height: hp(3.5),
                        borderRadius: hp(3.5),
                        alignSelf: 'center'
                      }} />
                      :
                      <Image source={value.pic} style={{
                        width: index == 1 ? hp(2.8) : index == 4 ? hp(3.1) : index == 7 ? hp(3.1) : hp(3),
                        height: index == 4 ? hp(2.5) : index == 6 ? hp(2.4) : hp(3),
                        tintColor: selectedValue == index ? Colors.White : Colors.black,
                        alignSelf: 'center'
                      }} />
                  }

                  <View style={{ marginLeft: hp(2) }}>
                    <Text style={[{
                      fontSize: hp(2),
                      color: selectedValue == index ? Colors.White : Colors.black, fontWeight: '700'
                    }]}>{value.name}</Text>
                    <Text style={[{
                      fontSize: hp(1.2),
                      width: hp(20),
                      color: selectedValue == index ? Colors.White : Colors.black, fontWeight: '400'
                    }]}>{value.des}</Text>
                  </View>
                </View>
                {
                  index == 7 ?
                    <Image source={Images.chevron} style={styles.chevronTrend1} />
                    :
                    <Image source={Images.chevron} style={styles.chevronTrend} />
                }
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  render() {
    const { titles, socialData } = this.state
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.White }}>

        <View
          style={{
            marginTop: Platform.OS == 'ios' ? hp(3) : hp(4),
            backgroundColor: Colors.White,
            width: "100%",
            paddingHorizontal: Metrics.padding,
          }}>
          <TouchableOpacity onPress={() => { this.props.navigation.closeDrawer() }}>
            <Image source={Images.close} style={{
              width: hp(3),
              height: hp(3),
              marginLeft: hp(1),
              alignSelf: 'flex-start',
              tintColor: Colors.darkPink
            }} />
          </TouchableOpacity>

        </View>

        {
          <ScrollView>
            <View style={styles.container1}>
              <View>
                {titles.map(this._renderItem)}
              </View>
              <View style={{ width: '100%', height: hp(0.2), backgroundColor: Colors.iconColor }} />
              <View style={styles.bottomWrapper}>
                {
                  socialData?.map((val, index) => {
                    return (
                      <>
                        {
                          index == 2 ?
                            <TouchableOpacity>
                              <Image source={val?.pic} style={styles.socialPic1} />
                            </TouchableOpacity> :
                            <TouchableOpacity>
                              <Image source={val?.pic} style={styles.socialPic} />
                            </TouchableOpacity>
                        }
                      </>
                    )
                  })
                }
              </View>
            </View>


          </ScrollView>
        }

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
    marginTop: hp(3),
    marginBottom: hp(3),
    backgroundColor: Colors.drawerColor
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: "black"
  },
  chevronTrend: {
    width: hp(1),
    height: hp(1.5),
    marginTop: hp(1.5),
    tintColor: Colors.darkPink,
    marginRight: hp(1.3)
  },
  chevronTrend1: {
    width: hp(1),
    height: hp(1.5),
    marginTop: hp(2.3),
    tintColor: Colors.darkPink,
    marginRight: hp(1.3)
  },
  bottomWrapper: {
    marginTop: hp(3),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  socialPic: {
    width: hp(3),
    height: hp(3)
  },
  socialPic1: {
    width: hp(2),
    height: hp(3.3)
  }
});

export default DrawerContent
