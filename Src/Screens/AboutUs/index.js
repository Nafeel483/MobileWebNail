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

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: '',
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
                    <Image source={Images.aboutUs} style={Styles.trendProductPic3} />
                    <View style={{ marginLeft: hp(4), marginTop: hp(3) }}>
                      <Text style={Styles.productNameTrend1}>{"About Us"}</Text>
                    </View>
                  </View>
                </View>


                <Text style={Styles.magzineHead}>{"WebNail is one of the largest Internet stores in Ukraine."}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.ABOUT_1}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.ABOUT_2}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.ABOUT_3}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.ABOUT_4}</Text>

                <Text style={Styles.magzineHead1}>{"Where can I buy?"}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.ABOUT_5}</Text>

                <Image source={Images.earthPic} style={Styles.earthPicStyle} />


                <Text style={Styles.magzineHead1}>{"Customer service"}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.ABOUT_6}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.ABOUT_7}</Text>


                <Text style={Styles.magzineHead1}>{"Shipping and Payments"}</Text>
                <Text style={Styles.magzineArticalDes2}>{Constants.ABOUT_8}</Text>
                <Text style={Styles.magzineArticalDes2}>{Constants.ABOUT_9}</Text>
                <Text style={Styles.magzineArticalDes2}>{Constants.ABOUT_10}</Text>


              </View>
            </ScrollView>
            <TouchableOpacity
              style={Styles.trendProductContainer1}>
              <View style={Styles.productInnerContainer2}>
                <View style={Styles.trendProductPic}>

                  <Image source={Images.contactUs} style={Styles.trendProductPic1} />
                </View>
                <View style={{ marginLeft: hp(1), marginTop: hp(3) }}>
                  <Text style={Styles.productNameTrend2}>{"DO YOU HAVE MORE QUESTION?"}</Text>
                  <Text style={Styles.productArticleTrend1}>{"you can contact us by WhatsApp, email, facebook, call or contact form.."}</Text>
                </View>
                <TouchableOpacity>
                  <Image source={Images.chevron} style={Styles.chevronTrend1} />
                </TouchableOpacity>

              </View>
            </TouchableOpacity>
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

export default AboutUs;