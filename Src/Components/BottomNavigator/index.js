import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Platform, ImageBackground } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import styles from './Styles';
import Colors from "../../Styles/Colors";
import Images from '../../Styles/Images';

class Bottom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigatinUpdate: 1
    };
  }
  componentDidMount() {
    this.setState({ navigatinUpdate: this.props.page })
  }
  updateValue = (value) => {
    if (value === 1) {
      this.setState({ navigatinUpdate: value })
      // this.props.navigation.navigate('Home')
    }
    else if (value === 2) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('Magazine')
    }
    else if (value === 3) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('AllCategories')
    }
    else if (value === 4) {
      this.setState({ navigatinUpdate: value })
      this.props.navigation.navigate('Home')
    }
  }
  render() {
    const { navigatinUpdate } = this.state
    return (
      <>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContainerWrapper}>
            <TouchableOpacity onPress={() => this.updateValue(1)}>
              <View>

                <Image source={Images.profile} style={{
                  width: hp(2.5), height: hp(2.5),
                  // marginTop: 14,
                  borderRadius: hp(2.5),
                  borderWidth: 1.3,
                  borderColor: navigatinUpdate == 1 ? Colors.White : Colors.iconColor,
                  alignSelf: 'center',
                  // tintColor: navigatinUpdate == 1 ? Colors.White : Colors.iconColor
                }} />
                <Text style={{
                  fontSize: hp(1), color: navigatinUpdate == 1 ? Colors.White : Colors.iconColor,
                  marginTop: 5, textAlign: 'center'
                }}>{'Gal'}</Text>
              </View>

            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.updateValue(2)}>
              <View>
                <Image source={Images.heart} style={{
                  width: hp(2.5), height: hp(2.0),
                  alignSelf: 'center',
                  tintColor: navigatinUpdate == 2 ? Colors.White : Colors.iconColor
                }} />

                <Text style={{
                  fontSize: hp(1), color: navigatinUpdate == 2 ? Colors.White : Colors.iconColor,
                  marginTop: 5, textAlign: 'center'
                }}>{'Favorites'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.updateValue(3)}>
              <View>
                <Image source={Images.category} style={{
                  width: hp(2.5), height: hp(2.5),
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor: navigatinUpdate == 3 ? Colors.White : Colors.iconColor
                }} />
                <Text style={{
                  fontSize: hp(1), color: navigatinUpdate == 3 ? Colors.White : Colors.iconColor,
                  marginTop: 5, textAlign: 'center'
                }}>{'Categories'}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => this.updateValue(4)}>
              <View>
                <Image source={Images.home} style={{
                  width: hp(2.5), height: hp(2.5),
                  // marginTop: 14,
                  alignSelf: 'center',
                  tintColor: navigatinUpdate == 4 ? Colors.White : Colors.iconColor
                }} />
                <Text style={{
                  fontSize: hp(1), color: navigatinUpdate == 4 ? Colors.White : Colors.iconColor,
                  marginTop: 5, textAlign: 'center'
                }}>{'Home'}</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </>
    )
  }
}

export default Bottom; 