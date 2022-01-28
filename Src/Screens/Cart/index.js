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
import Checkout from '../../Components/Checkout';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authTab: 0,
      dataList: [
        "first",
        "second",
        'Third'
      ],
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
    const { authTab, dataList, allProductList, ticketColums } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>
                <Text style={Styles.mainHeader}>{"Cart"}</Text>
                <Text style={Styles.mainHeaderDes}>{"Lorem ipsum dolor"}</Text>

                {/* Tabs */}
                <View style={Styles.tabContainer}>
                  <View style={Styles.tabInnerContainer}>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(0) }}>
                      <Text style={[Styles.authText, {
                        fontWeight: authTab == 0 ? '700' : '500',
                        color: authTab == 0 ? Colors.darkPink : Colors.emailColor
                      }]}>{"Cart"}</Text>
                      {
                        authTab == 0 ?
                          <View style={Styles.seperator} /> : null
                      }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(1) }}>
                      <Text style={[Styles.authText, {
                        fontWeight: authTab == 1 ? '700' : '500',
                        color: authTab == 1 ? Colors.darkPink : Colors.emailColor
                      }]}>{"Checkout"}</Text>
                      {
                        authTab == 1 ?
                          <View style={Styles.seperator1} /> : null
                      }
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => { this.changeAuthTab(2) }}>
                      <Text style={[Styles.authText, {
                        fontWeight: authTab == 2 ? '700' : '500',
                        color: authTab == 2 ? Colors.darkPink : Colors.emailColor
                      }]}>{"Order Tracking"}</Text>
                      {
                        authTab == 2 ?
                          <View style={Styles.seperator2} /> : null
                      }
                    </TouchableOpacity>
                  </View>
                </View>

                {
                  authTab == 0 ?
                    <>


                      {/* Product List */}
                      <View style={Styles.cartProduct}>
                        <Text style={Styles.cartProductName}>{"Product"}</Text>
                        <Text style={Styles.cartProductName1}>{"Price"}</Text>
                        <Text style={[Styles.cartProductName1, { marginLeft: hp(1) }]}>{"Quantity"}</Text>
                        <Text style={[Styles.cartProductName1, { marginLeft: hp(2.5) }]}>{"Subtotal"}</Text>
                      </View>
                      <View style={Styles.seperatorCart} />
                      {
                        dataList.map((val, index) => {
                          return (
                            <>
                              <View style={Styles.cartProduct}>

                                <View style={{ flexDirection: 'row', width: '45%' }}>
                                  <TouchableOpacity>
                                    <Image source={Images.cross} style={Styles.crossPic} />
                                  </TouchableOpacity>
                                  <Image source={Images.nailPolish} style={Styles.nailPolishStyle1} />
                                  <Text style={Styles.cartProductItem}>{"CND Creative Play Gel Polish #491 Candycade, 15 ML"}</Text>
                                </View>
                                <Text style={Styles.cartProductName1}>{"13.77$"}</Text>
                                <View style={{ flexDirection: 'row', width: '15%', marginLeft: hp(1) }}>

                                  <TouchableOpacity>
                                    <Text style={Styles.signsHeadName}>{"-"}</Text>
                                  </TouchableOpacity>
                                  <Text style={[Styles.languageHeadName1, { marginLeft: hp(1.5) }]}>{"1"}</Text>
                                  <TouchableOpacity>
                                    <Text style={[Styles.signsHeadName, { marginLeft: hp(1.5) }]}>{"+"}</Text>
                                  </TouchableOpacity>

                                </View>
                                <Text style={[Styles.cartProductName1, { marginLeft: hp(3) }]}>{"$13.77"}</Text>

                              </View>
                              <View style={Styles.seperatorCart} />
                            </>
                          )
                        })
                      }
                      <Text style={Styles.magzineHead1}>{"Cart Total:"}</Text>
                      <View style={Styles.seperatorCart} />
                      <View style={Styles.cartProduct1}>
                        <Text>
                          <Text style={Styles.cartProductName2}>{"Subtotal for "}</Text>
                          <Text style={Styles.cartProductName3}>{"6 product"}</Text>
                        </Text>
                        <Text style={Styles.cartProductName2}>{"$140.00"}</Text>
                      </View>
                      <View style={Styles.seperatorCart} />
                      <View style={Styles.cartProduct1}>
                        <Text>
                          <Text style={Styles.cartProductName2}>{"Shipping "}</Text>
                          <Text style={Styles.cartProductName3}>{"to Israel "}</Text>
                          <Text style={Styles.cartProductName2}>{"(753 gr)"}</Text>
                        </Text>
                        <Text style={Styles.cartProductName2}>{"$13.77"}</Text>
                      </View>
                      <View style={Styles.seperatorCart} />
                      <View style={Styles.cartProduct1}>
                        <Text style={Styles.cartProductName2}>{"Total"}</Text>
                        <Text style={Styles.priceTotal}>{"$153.77"}</Text>
                      </View>
                      <View style={Styles.seperatorCart1} />

                      <View style={Styles.magazineContainer}>
                        <Text style={Styles.magazineText}>{"You may be interested in…"}</Text>
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
                    </>
                    :
                    authTab == 2 ?
                      <>
                        <Text style={Styles.orderNameHead}>{"Order  Number: 1533264"}</Text>
                        {/* List 1 */}
                        <View style={Styles.listContainer}>
                          <View style={Styles.listInnerContainer}>

                            <View style={Styles.verticalSeperator} />
                            <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                              <Text style={Styles.listHeadText}>{"1. Order received"}</Text>
                              <Text style={Styles.listDesText}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "}</Text>
                              <Text style={Styles.listGreenText}>{"Completed:  25.05.21 11:37"}</Text>
                            </View>

                          </View>
                        </View>

                        {/* List 2 */}
                        <View style={Styles.listContainer}>
                          <View style={Styles.listInnerContainer}>

                            <View style={Styles.verticalSeperator} />
                            <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                              <Text style={Styles.listHeadText}>{"2. Order in packaging"}</Text>
                              <Text style={Styles.listDesText}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "}</Text>
                              <Text style={Styles.listGreenText}>{"Completed:  25.05.21 11:37"}</Text>
                            </View>

                          </View>
                        </View>

                        {/* List 3 */}
                        <View style={Styles.listContainer}>
                          <View style={Styles.listInnerContainer}>

                            <View style={Styles.verticalSeperator} />
                            <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                              <Text style={Styles.listHeadText}>{"3. Order sent"}</Text>
                              <Text style={Styles.listDesText}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "}</Text>
                              <Text style={Styles.listGreenText}>{"In process.."}</Text>
                            </View>

                          </View>
                        </View>

                        {/* List 4 */}
                        <View style={Styles.listContainer}>
                          <View style={Styles.listInnerContainer}>

                            <View style={[Styles.verticalSeperator, { backgroundColor: Colors.darkGrey }]} />
                            <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                              <Text style={Styles.listHeadText}>{"4. Package in Israel."}</Text>
                              <Text style={Styles.listDesText}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "}</Text>
                            </View>

                          </View>
                        </View>
                        {/* List 5 */}

                        <View style={Styles.listContainer}>
                          <View style={Styles.listInnerContainer}>

                            <View style={[Styles.verticalSeperator, { backgroundColor: Colors.darkGrey }]} />
                            <View style={{ marginLeft: hp(1.2), width: hp(30) }}>
                              <Text style={Styles.listHeadText}>{"5. Package delivered"}</Text>
                              <Text style={Styles.listDesText}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and "}</Text>
                            </View>

                          </View>
                        </View>


                        <Text style={Styles.orderNameBottom}>{"Thank You"}</Text>


                        <TouchableOpacity
                          style={Styles.trendProductContainer9}>
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
                      </>
                      :
                      <Checkout />
                }
              </View>
            </ScrollView>
            {
              authTab == 0 ?
                <>
                  <TouchableOpacity
                    style={Styles.trendProductContainer1}>
                    <Text style={Styles.cartText11}>{"Proceed to checkout"}</Text>
                    <Text style={Styles.cartDes}>{" Get 10 points "}</Text>
                  </TouchableOpacity>
                </>
                :
                authTab == 1 ?
                  <>
                    <View style={Styles.trendProductContainer3}>
                      <View style={Styles.productInnerContainer2}>

                        <View style={Styles.innerHeartButton}>
                          <Text style={Styles.priceTotal1}>{"$153.77"}</Text>
                        </View>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("Cart") }}
                          style={Styles.innerCartButton}>
                          <Text style={Styles.cartText11}>{"Complete Oreder"}</Text>
                          <Text style={Styles.cartDes}>{"Get 10 Points"}</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  </> :
                  null
            }
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

export default Cart;