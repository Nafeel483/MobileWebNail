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


class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderCheck: false,
      paypalCheck: false,
      shippingCheck: false,
      paymentCheck: false
    };
  }
  orderList = () => {
    this.setState({ orderCheck: !this.state.orderCheck })
  }
  paypalList = () => {
    this.setState({ paypalCheck: !this.state.paypalCheck })
  }
  paymentList = () => {
    this.setState({ paymentCheck: !this.state.paymentCheck })
  }
  shippingList = () => {
    this.setState({ shippingCheck: !this.state.shippingCheck })
  }

  render() {
    const { orderCheck, paypalCheck, shippingCheck, paymentCheck } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>

                <View style={Styles.mainHeadContainer}>
                  <View style={Styles.productInnerContainer1}>
                    <Image source={Images.faq} style={Styles.trendProductPic3} />
                    <View style={{ marginTop: hp(3) }}>
                      <Text style={Styles.productNameTrend1}>{"FAQ"}</Text>
                    </View>
                    <View style={{ width: hp(3.5) }} />
                  </View>
                </View>

                <Text style={Styles.magzineArticalDes1}>{Constants.FAQ_1}</Text>


                <View style={Styles.seperator} />
                <TouchableOpacity onPress={this.orderList}
                  style={Styles.listWrapper} >
                  {
                    orderCheck == true ?
                      <>
                        <Image source={Images.dropUp} style={Styles.imageDrop} />
                        <Text style={[Styles.magzineArticalDes, { fontWeight: '700' }]}>{"When i will get my order?"}</Text>
                      </>
                      :
                      <>
                        <Image source={Images.dropDown} style={Styles.imageDrop} />
                        <Text style={Styles.magzineArticalDes}>{"When i will get my order?"}</Text>
                      </>
                  }

                </TouchableOpacity>
                <View style={Styles.seperator} />

                <TouchableOpacity onPress={this.paypalList}
                  style={Styles.listWrapper} >
                  {
                    paypalCheck == true ?
                      <>
                        <Image source={Images.dropUp} style={Styles.imageDrop} />
                        <Text style={[Styles.magzineArticalDes, { fontWeight: '700' }]}>{"Can I pay with my PayPal account?"}</Text>
                      </>
                      :
                      <>
                        <Image source={Images.dropDown} style={Styles.imageDrop} />
                        <Text style={Styles.magzineArticalDes}>{"Can I pay with my PayPal account?"}</Text>
                      </>
                  }


                </TouchableOpacity>
                {
                  paypalCheck == true ?
                    <>
                      <Text style={Styles.magzineArticalDes3}>{Constants.FAQ_2}</Text>
                      <Text style={Styles.magzineArticalDes3}>{Constants.FAQ_3}</Text>
                    </>
                    : null}
                <View style={Styles.seperator} />
                <TouchableOpacity onPress={this.paymentList}
                  style={Styles.listWrapper} >
                  {
                    paymentCheck == true ?
                      <>
                        <Image source={Images.dropUp} style={Styles.imageDrop} />
                        <Text style={[Styles.magzineArticalDes, { fontWeight: '700' }]}>{"What are the Payments Options?"}</Text>
                      </>
                      :
                      <>
                        <Image source={Images.dropDown} style={Styles.imageDrop} />
                        <Text style={Styles.magzineArticalDes}>{"What are the Payments Options?"}</Text>
                      </>
                  }

                </TouchableOpacity>
                <View style={Styles.seperator} />
                <TouchableOpacity onPress={this.shippingList}
                  style={Styles.listWrapper} >
                  {
                    shippingCheck == true ?
                      <>
                        <Image source={Images.dropUp} style={Styles.imageDrop} />
                        <Text style={[Styles.magzineArticalDes, { fontWeight: '700' }]}>{"What is the Shipping Price?"}</Text>
                      </>
                      :
                      <>
                        <Image source={Images.dropDown} style={Styles.imageDrop} />
                        <Text style={Styles.magzineArticalDes}>{"What is the Shipping Price?"}</Text>
                      </>
                  }

                </TouchableOpacity>
                <View style={Styles.seperator} />

              </View>
            </ScrollView>
            <TouchableOpacity
              style={Styles.trendProductContainer1}>
              <View style={Styles.productInnerContainer2}>
                <View style={Styles.trendProductPic}>

                  <Image source={Images.contactUs} style={Styles.trendProductPic1} />
                </View>
                <View style={{ marginLeft: hp(1.5), marginTop: hp(3) }}>
                  <Text style={Styles.productNameTrend2}>{"You didn't find your answer?"}</Text>
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

export default FAQ;