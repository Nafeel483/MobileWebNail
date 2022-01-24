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


class ServiceCenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listColums: 1,
      ProdutTrend: [
        {
          name: 'Contact Us',
          des: 'here you can contact us by WhatsApp, email, facebook, call or contact form.',
          pic: Images.contactUs
        },
        {
          name: 'About  Us',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.aboutUs
        },
        {
          name: 'FAQ',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.faq
        },
        {
          name: 'Order  Tracking',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.orderTracking
        },
        {
          name: 'Shipping and Payment',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.paymentCard
        },
        {
          name: 'Certifications',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.certification
        },
        {
          name: 'Privacy policy ',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.privacy
        },
        {
          name: 'Terms of point',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.ternPoint
        },
        {
          name: 'Terms of use',
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.ternUse
        },
      ]
    };
  }
  goNavigate = (index) => {
    if (index == 6) {
      this.props.navigation.navigate('Privacy')
    }
    else if (index == 5) {
      this.props.navigation.navigate('Certification')
    }
    else if (index == 2) {
      this.props.navigation.navigate('FAQ')
    }
  }

  productTicketList = (item, index) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => { this.goNavigate(index) }}
          style={Styles.trendProductContainer1}>
          <View style={Styles.productInnerContainer1}>
            <View style={Styles.trendProductPic}>
              {
                index == 3 ?
                  <Image source={item?.pic} style={Styles.trendProductPic2} />
                  :
                  index == 5 ?
                    <Image source={item?.pic} style={Styles.trendProductPic3} />
                    :
                    <Image source={item?.pic} style={Styles.trendProductPic1} />
              }
            </View>
            <View style={{ marginLeft: hp(1.5), marginTop: hp(3) }}>
              <Text style={Styles.productNameTrend1}>{item?.name}</Text>
              <Text style={Styles.productArticleTrend1}>{item?.des}</Text>
            </View>
            <TouchableOpacity>
              <Image source={Images.chevron} style={Styles.chevronTrend1} />
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
      </>
    )
  }

  render() {
    const { listColums, ProdutTrend } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>

              <View style={Styles.mainContainer}>
                <Text style={Styles.mainHeader}>{"Service Center"}</Text>
                <Text style={Styles.mainHeaderDes}>{"Let us to help you"}</Text>


                <FlatList
                  key={listColums}
                  scrollEnabled={false}
                  showsVerticalScrollIndicator={false}
                  data={ProdutTrend}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item, index }) => this.productTicketList(item, index)}
                  numColumns={listColums}
                />

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

export default ServiceCenter;