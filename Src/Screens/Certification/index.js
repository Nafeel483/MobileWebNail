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
import BottomWrapper from '../../Components/BottomNavigator'
import Header from '../../Components/Header';
import * as Constants from '../../Constants';


class Certification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authTab: 0,
    };
  }
  changeAuthTab = (num) => {
    this.setState({ authTab: num })
  }
  render() {
    const { authTab } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>

                <View style={Styles.mainHeadContainer}>
                  <View style={Styles.productInnerContainer1}>
                    <Image source={Images.certification} style={Styles.trendProductPic3} />
                    <View style={{ marginLeft: hp(4), marginTop: hp(3) }}>
                      <Text style={Styles.productNameTrend1}>{"Certifications"}</Text>
                    </View>
                  </View>
                </View>

                {/* Tabs */}
                <View style={Styles.tabContainer}>
                  <View style={Styles.tabInnerContainer}>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(0) }}>
                      <Text style={[Styles.authText, { fontWeight: authTab == 0 ? '700' : '500' }]}>{"KOMILFO"}</Text>
                      {
                        authTab == 0 ?
                          <View style={Styles.seperator} /> : null
                      }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(1) }}>
                      <Text style={[Styles.authText, { fontWeight: authTab == 1 ? '700' : '500' }]}>{"PNB"}</Text>
                      {
                        authTab == 1 ?
                          <View style={Styles.seperator1} /> : null
                      }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(2) }}>
                      <Text style={[Styles.authText, { fontWeight: authTab == 2 ? '700' : '500' }]}>{"KODI"}</Text>
                      {
                        authTab == 2 ?
                          <View style={Styles.seperator1} /> : null
                      }
                    </TouchableOpacity>
                  </View>
                </View>


                <Image source={Images.showCertification} style={Styles.fullCertification} />

              </View>
            </ScrollView>
            <BottomWrapper
              navigation={this.props.navigation}
              page={4}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default Certification;