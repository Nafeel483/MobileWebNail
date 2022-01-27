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

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authTab: 0,
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
                    <Image source={Images.contactUs} style={Styles.trendProductPic3} />
                    <View style={{ marginLeft: hp(4), marginTop: hp(3) }}>
                      <Text style={Styles.productNameTrend1}>{"Contact Us"}</Text>
                    </View>
                  </View>
                </View>

                <Text style={Styles.magzineArticalDes1}>{Constants.FAQ_1}</Text>

                <View style={Styles.seperator} />
                <View style={Styles.listWrapper}>
                  <Image source={Images.time} style={Styles.timeStyle} />
                  <View style={{ marginLeft: hp(3) }}>
                    <Text style={Styles.headText}>{"Service Center Activity Hours"}</Text>
                    <Text style={Styles.desHeadText}>{"Sunday - Thursday "}</Text>
                    <Text style={Styles.desHeadText}>{"9:00 AM - 5:00 PM"}</Text>
                  </View>
                </View>

                <View style={Styles.seperator} />
                <View style={Styles.listWrapper}>
                  <Image source={Images.email} style={Styles.emailStyle} />
                  <View style={{ marginLeft: hp(3) }}>
                    <Text style={Styles.headText}>{"E-mail"}</Text>
                    <Text style={Styles.desHeadText}>{"Customer Servic"}</Text>
                    <Text style={Styles.desHeadText1}>{"info@webnail.com.ua"}</Text>
                  </View>
                </View>

                <View style={Styles.seperator} />
                <View style={Styles.listWrapper}>
                  <Image source={Images.socialMessanger} style={Styles.messangerStyle} />
                  <View style={{ marginLeft: hp(3) }}>
                    <Text style={Styles.headText}>{"Messenger"}</Text>
                    <Text style={Styles.desHeadText}>{"Send us a message on Messenger"}</Text>
                    <Text>
                      <Text style={Styles.desHeadText}>{"English: "}</Text>
                      <Text style={Styles.desHeadText1}>{"@Webnail"}</Text>
                    </Text>
                    <Text>
                      <Text style={Styles.desHeadText}>{"Arabic: "}</Text>
                      <Text style={Styles.desHeadText1}>{"@WebnailArabic"}</Text>
                    </Text>
                  </View>
                </View>


                <View style={Styles.seperator} />
                <View style={Styles.listWrapper}>
                  <Image source={Images.socialWhatsapp} style={Styles.messangerStyle} />
                  <View style={{ marginLeft: hp(3) }}>
                    <Text style={Styles.headText}>{"Whats App"}</Text>
                    <Text style={Styles.desHeadText}>{"Send us a message on"}</Text>
                    <Text>
                      <Text style={Styles.desHeadText}>{"WhatsApp English:  "}</Text>
                      <Text style={Styles.desHeadText1}>{"+380990188703"}</Text>
                    </Text>
                    <Text>
                      <Text style={Styles.desHeadText}>{"Arabic:  "}</Text>
                      <Text style={Styles.desHeadText1}>{"+380505467948"}</Text>
                    </Text>
                  </View>
                </View>



                <View style={Styles.seperator} />
                <View style={Styles.listWrapper}>
                  <Image source={Images.socialInstagram} style={Styles.messangerStyle} />
                  <View style={{ marginLeft: hp(3) }}>
                    <Text style={Styles.headText}>{"Instagram"}</Text>
                    <Text style={Styles.desHeadText}>{"Send us a message to Instagram"}</Text>
                    <Text>
                      <Text style={Styles.desHeadText}>{"English:  "}</Text>
                      <Text style={Styles.desHeadText1}>{"+@Webnail_en"}</Text>
                    </Text>
                    <Text>
                      <Text style={Styles.desHeadText}>{"Arabic:  "}</Text>
                      <Text style={Styles.desHeadText1}>{"@Webnail_ar"}</Text>
                    </Text>
                  </View>
                </View>


                <View style={Styles.seperator} />
                <View style={Styles.listWrapper}>
                  <Image source={Images.location} style={Styles.pinStyle} />
                  <View style={{ marginLeft: hp(3) }}>
                    <Text style={Styles.headText}>{"Our address"}</Text>
                    <Text style={Styles.desHeadText}>{"Obolonskiy pr 1b, Kiev 04205, "}</Text>
                    <Text style={Styles.desHeadText}>{"Ukraine"}</Text>
                  </View>
                </View>


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

export default ContactUs;