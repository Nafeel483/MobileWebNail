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


class Privacy extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>

                <View style={Styles.mainHeadContainer}>
                  <View style={Styles.productInnerContainer1}>
                    <Image source={Images.privacy} style={Styles.trendProductPic3} />
                    <View style={{ marginLeft: hp(3.7), marginTop: hp(3) }}>
                      <Text style={Styles.productNameTrend1}>{"Privacy Policy"}</Text>
                    </View>
                  </View>
                </View>


                <Text style={Styles.magzineArticalDes1}>{Constants.PRIVACY_1}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_2}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_3}</Text>

                <Text style={Styles.magzineArticaltext}>{"General"}</Text>

                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_4}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_5}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_6}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_7}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_8}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_9}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_10}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.PRIVACY_11}</Text>



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

export default Privacy;