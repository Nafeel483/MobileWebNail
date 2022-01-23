import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Platform,
  ImageBackground,
  FlatList
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authTab: 0,
      email: '',
      password: ''
    };
  }
  changeAuthTab = (num) => {
    this.setState({ authTab: num })
  }
  render() {
    const { authTab, email, password } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle}>
            <View style={Styles.mainContainer}>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }}>
                <Image source={Images.close} style={Styles.closeIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={Images.mainlogo} style={Styles.mainlogoStyle} />
              </TouchableOpacity>

              <View style={Styles.tabContainer}>
                <TouchableOpacity onPress={() => { this.changeAuthTab(0) }}>
                  <Text style={[Styles.authText, { fontWeight: authTab == 0 ? '700' : '500' }]}>{"Login"}</Text>
                  {
                    authTab == 0 ?
                      <View style={Styles.seperator} /> : null
                  }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.changeAuthTab(1) }}>
                  <Text style={[Styles.authText, { fontWeight: authTab == 1 ? '700' : '500' }]}>{"Register"}</Text>
                  {
                    authTab == 1 ?
                      <View style={Styles.seperator1} /> : null
                  }
                </TouchableOpacity>
              </View>
              <View style={Styles.tabContainer}>
                <TouchableOpacity style={Styles.socialButton}>
                  <Image source={Images.google} style={Styles.socialIcon} />
                  <Text style={Styles.socialText}>{"Login with Google"}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.socialButton}>
                  <Image source={Images.facebook} style={Styles.socialIcon} />
                  <Text style={Styles.socialText}>{"Login with Facebook"}</Text>
                </TouchableOpacity>

              </View>
              <Text style={Styles.socialTextHead}>{"Login with  username and password"}</Text>

              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={email}
                  placeholder={'Enter Email'}
                  placeholderTextColor={Colors.emailColor}
                  autoCapitalize='none'
                  autoCorrect={false}
                  onChangeText={(value) => {
                    this.setState({ email: value })
                  }}

                />
              </View>

              <View style={Styles.emailWrapper}>
                <TextInput
                  style={Styles.emailInput}
                  value={email}
                  placeholder={'Password'}
                  placeholderTextColor={Colors.emailColor}
                  autoCapitalize='none'
                  secureTextEntry={true}
                  autoCorrect={false}
                  onChangeText={(value) => {
                    this.setState({ email: value })
                  }}

                />
              </View>

              <TouchableOpacity style={Styles.cartButton}>
                <View style={Styles.cartButtonInner}>
                  <View />
                  <Text style={Styles.cartText}>{"Subscribed"}</Text>
                  <Image source={Images.chevron} style={Styles.chevronTrend} />
                </View>
              </TouchableOpacity>

            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default Authentication;