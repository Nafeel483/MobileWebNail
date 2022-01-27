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

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountList1: [
        {
          name: "Orders",
          pic: Images.orders
        },
        {
          name: "Account details",
          pic: Images.accountCards
        },
        {
          name: "Addresses",
          pic: Images.location
        }
      ],
      accountList2: [
        {
          name: "My Points",
          pic: Images.ternPoint
        },
        {
          name: "Service Center",
          pic: Images.serviceCenter
        },
        {
          name: "Logout",
          pic: Images.logout
        }
      ],
      authTab: 0,
      allProductList: [
        "13.55",
        "13.55",
        "13.55",
        "13.55",
        "13.55",
        "13.55",
        "13.55",
        "13.55",
        "13.55",
        "13.55",
      ],
      ticketColums: 2
    };
  }
  changeAuthTab = (num) => {
    this.setState({ authTab: num })
  }
  productTicketList = (item, index) => {
    return (
      <>
        <View style={Styles.nailPolishContainer}>
          <Image source={Images.heart} style={Styles.heartStyle} />
          <Image source={Images.nailPolish} style={Styles.nailPolishStyle} />
          <Text style={Styles.desText}>{"CND Creative Play Gel Polish #491 Candycade ,15 ML"}</Text>
          <View style={Styles.bottomNailWrapper}>
            <Text style={Styles.priceText}>{"$13.77"}</Text>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate("AddToCart") }}
              style={Styles.cartButton}>
              <Text style={Styles.cartText}>{"Add To Cart"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    )
  }

  render() {
    const { accountList1, accountList2, authTab, allProductList, ticketColums } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>

                <Text style={Styles.mainHeader}>{"My Account"}</Text>
                <Text style={Styles.mainHeaderDes}>{"Everything in one place"}</Text>


                <View style={Styles.accountWrapper}>
                  {
                    accountList1?.map((val, index) => {
                      return (
                        <>
                          <TouchableOpacity style={Styles.accountListWrapper}>
                            {
                              index == 1 ?
                                <Image source={val.pic} style={Styles.accountCardPic} />
                                :
                                index == 2 ?
                                  <Image source={val.pic} style={Styles.accountLocPic} />
                                  :
                                  <Image source={val.pic} style={Styles.accountPic} />
                            }
                            <Text style={Styles.accountName}>{val.name}</Text>
                          </TouchableOpacity>
                        </>
                      )
                    })
                  }
                </View>
                <View style={Styles.accountWrapper1}>
                  {
                    accountList2?.map((val, index) => {
                      return (
                        <>
                          <TouchableOpacity style={Styles.accountListWrapper}>
                            {
                              index == 1 ?
                                <Image source={val.pic} style={Styles.accountServicePic} />
                                :
                                index == 2 ?
                                  <Image source={val.pic} style={Styles.accountLogoutPic} />
                                  :
                                  <Image source={val.pic} style={Styles.accountPic} />
                            }
                            <Text style={Styles.accountName}>{val.name}</Text>
                          </TouchableOpacity>
                        </>
                      )
                    })
                  }
                </View>

                <View style={Styles.accountWrapper}>
                  <TouchableOpacity style={Styles.languageWrapper}>
                    <Text style={Styles.languageName}>{"Language"}</Text>
                    <View style={Styles.mainLanguage}>
                      <Text style={Styles.languageHeadName}>{"English"}</Text>
                      <Image source={Images.dropDown} style={Styles.imageDrop} />
                    </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={Styles.languageWrapper}>
                    <Text style={Styles.languageName}>{"Currency"}</Text>
                    <View style={Styles.mainLanguage}>
                      <Text style={Styles.languageHeadName}>{"Dollar"}</Text>
                      <Image source={Images.dropDown} style={Styles.imageDrop} />
                    </View>
                  </TouchableOpacity>
                </View>


                {/* Tabs */}
                <View style={Styles.tabContainer}>
                  <View style={Styles.tabInnerContainer}>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(0) }}>
                      <Text style={[Styles.authText, { fontWeight: authTab == 0 ? '700' : '500' }]}>{"Wishlist"}</Text>
                      {
                        authTab == 0 ?
                          <View style={Styles.seperator} /> : null
                      }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(1) }}>
                      <Text style={[Styles.authText, { fontWeight: authTab == 1 ? '700' : '500' }]}>{"Recommend"}</Text>
                      {
                        authTab == 1 ?
                          <View style={Styles.seperator1} /> : null
                      }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(2) }}>
                      <Text style={[Styles.authText, { fontWeight: authTab == 2 ? '700' : '500' }]}>{"Recently Viewed"}</Text>
                      {
                        authTab == 2 ?
                          <View style={Styles.seperator2} /> : null
                      }
                    </TouchableOpacity>
                  </View>
                </View>


                <View style={Styles.allProductList}>
                  <FlatList
                    key={ticketColums}
                    scrollEnabled={false}
                    showsVerticalScrollIndicator={false}
                    data={allProductList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => this.productTicketList(item, index)}
                    numColumns={ticketColums}
                  />
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

export default MyAccount;