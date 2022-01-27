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

class OrderTracking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: '',
    };
  }
  render() {
    const { orderNumber } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>

                <View style={Styles.mainHeadContainer}>
                  <View style={Styles.productInnerContainer1}>
                    <Image source={Images.orderTracking} style={Styles.trendProductPic3} />
                    <View style={{ marginLeft: hp(4), marginTop: hp(3) }}>
                      <Text style={Styles.productNameTrend1}>{"Order Tracking"}</Text>
                    </View>
                  </View>
                </View>

                <Text style={Styles.magzineHead}>{"Lorem ipsum dolor sit?"}</Text>
                <Text style={Styles.magzineArticalDes1}>{Constants.FAQ_1}</Text>


                <View style={Styles.orderContainer}>
                  <View style={Styles.emailWrapper}>
                    <TextInput
                      style={Styles.emailInput}
                      value={orderNumber}
                      placeholder={'Enter Order number'}
                      placeholderTextColor={Colors.emailColor}
                      autoCapitalize='none'
                      autoCorrect={false}
                      onChangeText={(value) => {
                        this.setState({ orderNumber: value })
                      }}

                    />
                  </View>
                  <TouchableOpacity style={Styles.cartButton}>

                    <Text style={Styles.cartText}>{"Track"}</Text>

                  </TouchableOpacity>

                </View>


                {/* List 1 */}
                <View style={Styles.listContainer}>
                  <View style={Styles.listInnerContainer}>

                    <View style={Styles.verticalSeperator} />
                    <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                      <Text style={Styles.listHeadText}>{"Packing & shipping"}</Text>
                      <Text style={Styles.listDesText}>{"Orders from our website will send to you in 1 – 4 business days. we will send you order by air shipping. "}</Text>
                      <Text style={Styles.listDesText}>{"please double check you Email and Mobile phone. we will send you SMS and Email with your tracking number after we will send your order."}</Text>
                    </View>

                  </View>
                </View>

                {/* List 2 */}

                <View style={Styles.listContainer}>
                  <View style={Styles.listInnerContainer}>

                    <View style={Styles.verticalSeperator1} />
                    <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                      <Text style={Styles.listHeadText}>{"Tracking number"}</Text>
                      <Text style={Styles.listDesText}>{"All your orders shipped with the Ukrainian shipping company"}</Text>
                      <Text style={Styles.listDesText}>{"No information will appear in your shipping company website until your local shipping company will scan the package"}</Text>
                      <Text style={Styles.listDesText}>{"With the Tracking number that you got from us you can track after you shipping. the shipping will includes the tracking details in Ukraine"}</Text>

                    </View>
                  </View>
                </View>

                {/* List 3 */}
                <View style={Styles.listContainer}>
                  <View style={Styles.listInnerContainer}>

                    <View style={Styles.verticalSeperator2} />
                    <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                      <Text style={Styles.listHeadText}>{"Customs protecion "}</Text>
                      <Text style={Styles.listDesText}>{"When you order from our website you will get a Customs protection for free!"}</Text>
                      <Text style={Styles.listDesText}>{"If your order will stop at the customs you need to contact with us. we will full refund you with points to use in our website. Attention! you must to ask the customs to send us the package back to us."}</Text>
                    </View>
                  </View>
                </View>


              </View>
            </ScrollView>
            <TouchableOpacity
              style={Styles.trendProductContainer1}>
              <View style={Styles.productInnerContainer2}>
                <View style={Styles.trendProductPic}>

                  <Image source={Images.faq} style={Styles.trendProductPic1} />
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

export default OrderTracking;