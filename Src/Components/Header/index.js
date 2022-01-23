import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  Platform
} from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }


  render() {
    return (
      <>
        <View style={Styles.mainHeader}>
          <View style={Styles.mainIneer}>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate(this.props.screen) }}>
              <Image source={Images.logo} style={Styles.logoStyle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate(this.props.screen) }}>
              <Image source={Images.mainlogo} style={Styles.mainlogoStyle} />
            </TouchableOpacity>
            <View style={Styles.rightContainer}>
              <Image source={Images.search} style={Styles.searchStyle} />
              <TouchableOpacity onPress={() => {
                this.props.navigation.toggleDrawer();
              }}>
                <Image source={Images.menu} style={Styles.menuStyle} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default Header;