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

const widthScreen = Dimensions.get('window').width;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const sliderWidth = viewportWidth;
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
const itemWidth = widthScreen;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,

      slides: [
        {
          title: "Title for lorem ipsum dolor",
        },
        {
          title: "Title for lorem ipsum dolor",
        },
        {
          title: "Title for lorem ipsum dolor",
        },
      ],
      ticketColums: 2,
      ProdutList: [
        {
          name: 'Gel Polish',
          pic: Images.gel
        },
        {
          name: 'Acrylic Gel',
          pic: Images.polybase
        },
        {
          name: 'Liquids',
          pic: Images.Liquids
        },
        {
          name: 'Building Gel',
          pic: Images.BuildingGel
        },
        {
          name: 'Brushes',
          pic: Images.Brushes
        },
        {
          name: 'Decorations',
          pic: Images.Decorations
        },
      ],
      titleStyle: [
        '1',
        '2',
        '3'
      ],
      titleItem: 0,
      bestSellerStyle: [
        '1',
        '2',
        '3',
        '4',
        '5',
      ],
      bestSelleItem: 0,
      cartList: [
        {
          price: '$13.77'
        },
        {
          price: '$14.77'
        },
        {
          price: '$16.77'
        },
        {
          price: '$19.77'
        }
      ],
      brandList: [
        {
          pic: Images.brands1
        },
        {
          pic: Images.brands2
        },
        {
          pic: Images.brands3
        },
        {
          pic: Images.brands4
        },
        {
          pic: Images.brands5
        },
        {
          pic: Images.brands6
        },
        {
          pic: Images.brands7
        },
      ]
    };
  }
  _renderItem = ({ item }) => {
    const { slides, activeSlide } = this.state
    return (
      <ImageBackground
        source={Images.homeMain}
        style={{
          width: widthScreen,
          height: hp(30),
          alignSelf: "center",
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
        <View style={{ flexDirection: 'row', marginBottom: hp(1) }}>
          {
            slides.map((val, index) => {
              return (
                <>
                  <View style={[Styles.lineStyle, { backgroundColor: activeSlide == index ? Colors.black : Colors.White }]} />
                </>
              )
            })
          }
        </View>
      </ImageBackground>
    );
  }
  productTicketList = (item, index) => {
    return (
      <>
        <TouchableOpacity
          // onPress={() => { this.props.navigation.navigate('MagzineCategory') }}
          style={Styles.productContainer}>
          <View style={Styles.productInnerContainer}>
            <View style={Styles.productPicMain}>
              {
                index == 2 ?
                  <Image source={item?.pic} style={Styles.productPicLiquid} /> :
                  index == 1 ?
                    <Image source={item?.pic} style={Styles.productPicGel} />
                    :
                    <Image source={item?.pic} style={Styles.productPic} />
              }
            </View>
            <View style={{ marginLeft: hp(1), marginTop: hp(2) }}>
              <Text style={Styles.productName}>{item?.name}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  render() {
    const { slides, ProdutList, ticketColums,
      titleStyle, titleItem, cartList, brandList,
      bestSellerStyle, bestSelleItem } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <View style={Styles.homeContent}>
              <View style={Styles.homeContentInner}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={Images.gift} style={Styles.giftStyle} />
                  <Text style={Styles.homeIconText1}>{"Custom Protection Inclouded"}</Text>
                </View>
                <View style={Styles.seperator} />
                <View style={{ flexDirection: 'row', marginLeft: hp(2) }}>
                  <Image source={Images.tags} style={Styles.giftStyle} />
                  <Text style={Styles.homeIconText}>{"Get Point Lorem ipsom"}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Authentication') }}
              style={Styles.homeCheckInContent}>
              <Image source={Images.Check_In} style={Styles.checkStyle} />
              <Text style={Styles.checkInText}>{"Check in"}</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ marginBottom: hp(3) }}>
                <View style={Styles.sliderProducts}>
                  <Carousel
                    ref={(c) => { this._carousel = c; }}
                    layout={'default'}
                    data={slides}
                    renderItem={this._renderItem}
                    sliderWidth={sliderWidth}
                    itemWidth={itemWidth}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                  />
                </View>

                {/* Categories */}
                <View style={Styles.magazineContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.magazineText}>{"Categories"}</Text>
                    <View style={{ flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(1) }}>
                      {
                        titleStyle.map((val, index) => {
                          return (
                            <>
                              <View style={[Styles.lineStyle, { backgroundColor: titleItem == index ? Colors.black : Colors.grey }]} />
                            </>
                          )
                        })
                      }
                    </View>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={Styles.allProductList}>
                      <FlatList
                        key={ticketColums}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={ProdutList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.productTicketList(item, index)}
                        numColumns={ticketColums}
                      />
                    </View>
                  </ScrollView>
                </View>


                {/* Best sellers */}
                <View style={Styles.magazineContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.bestSellersText}>{"Best sellers"}</Text>
                    <View style={{ flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(1) }}>
                      {
                        bestSellerStyle.map((val, index) => {
                          return (
                            <>
                              <View style={[Styles.lineStyle, { backgroundColor: bestSelleItem == index ? Colors.darkPink : Colors.grey }]} />
                            </>
                          )
                        })
                      }
                    </View>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={Styles.allProductList1}>
                      {
                        cartList.map((val) => {
                          return (
                            <>
                              <View style={Styles.nailPolishContainer}>
                                <Image source={Images.heart} style={Styles.heartStyle} />
                                <Image source={Images.nailPolish} style={Styles.nailPolishStyle} />
                                <Text style={Styles.desText}>{"CND Creative Play Gel Polish #491 Candycade ,15 ML"}</Text>
                                <View style={Styles.bottomNailWrapper}>
                                  <Text style={Styles.priceText}>{"$13.77"}</Text>
                                  <TouchableOpacity style={Styles.cartButton}>
                                    <Text style={Styles.cartText}>{"Add To Cart"}</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </>
                          )
                        })
                      }
                    </View>
                  </ScrollView>
                </View>

                {/* Brands */}
                <View style={Styles.magazineContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.magazineText}>{"Brands"}</Text>
                    <View style={{ flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(1) }}>
                      {
                        titleStyle.map((val, index) => {
                          return (
                            <>
                              <View style={[Styles.lineStyle, { backgroundColor: bestSelleItem == index ? Colors.black : Colors.grey }]} />
                            </>
                          )
                        })
                      }
                    </View>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={Styles.allProductList1}>
                      {
                        brandList.map((val) => {
                          return (
                            <>
                              <View style={Styles.brandLogoContainer}>
                                <Image source={val?.pic} style={Styles.brandPic} />
                              </View>
                            </>
                          )
                        })
                      }
                    </View>
                  </ScrollView>
                </View>



                {/* New in Store */}
                <View style={Styles.magazineContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.magazineText}>{"New in Store"}</Text>
                    <View style={{ flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(1) }}>
                      {
                        bestSellerStyle.map((val, index) => {
                          return (
                            <>
                              <View style={[Styles.lineStyle, { backgroundColor: bestSelleItem == index ? Colors.black : Colors.grey }]} />
                            </>
                          )
                        })
                      }
                    </View>
                  </View>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={Styles.allProductList1}>
                      {
                        cartList.map((val) => {
                          return (
                            <>
                              <View style={Styles.nailPolishContainer}>
                                <Image source={Images.heart} style={Styles.heartStyle} />
                                <Image source={Images.nailPolish} style={Styles.nailPolishStyle} />
                                <Text style={Styles.desText}>{"CND Creative Play Gel Polish #491 Candycade ,15 ML"}</Text>
                                <View style={Styles.bottomNailWrapper}>
                                  <Text style={Styles.priceText}>{"$13.77"}</Text>
                                  <TouchableOpacity style={Styles.cartButton}>
                                    <Text style={Styles.cartText}>{"Add To Cart"}</Text>
                                  </TouchableOpacity>
                                </View>
                              </View>
                            </>
                          )
                        })
                      }
                    </View>
                  </ScrollView>
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

export default Home;