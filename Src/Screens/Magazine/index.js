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

class Magazine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,

      slides: [
        {
          title: "Title for lorem ipsum dolor",
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.'
        },
        {
          title: "Title for lorem ipsum dolor",
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.'
        },
        {
          title: "Title for lorem ipsum dolor",
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.'
        },
        {
          title: "Title for lorem ipsum dolor",
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.'
        },
        {
          title: "Title for lorem ipsum dolor",
          des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo unt ut lab  et dolore magna aliqua.'
        },
      ],
      titleStyle: [
        '1',
        '2',
        '3'
      ],
      titleItem: 0,
      ticketColums: 3,
      ProdutList: [
        {
          name: 'News',
          des: '12 Articles',
          pic: Images.Image2
        },
        {
          name: 'Category',
          des: '12 Articles',
          pic: Images.Image3
        },
        {
          name: 'Trends',
          des: '112 Articles',
          pic: Images.Image4
        },
        {
          name: 'News',
          des: '12 Articles',
          pic: Images.Image6
        },
        {
          name: 'Category',
          des: '12 Articles',
          pic: Images.Image5
        },
        {
          name: 'Trends',
          des: '112 Articles',
          pic: Images.Image4
        },
        {
          name: 'News',
          des: '12 Articles',
          pic: Images.Image2
        },
        {
          name: 'Category',
          des: '12 Articles',
          pic: Images.Image6
        },
        {
          name: 'Trends',
          des: '112 Articles',
          pic: Images.Image4
        },
      ],
      trendColums: 2,
      ProdutTrend: [
        {
          name: 'Title for lorem ipsum dolor aelit sed do ',
          des: 'Lorem ipsum dolor sit aelit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.Image3
        },
        {
          name: 'Title for lorem ipsum dolor aelit sed do ',
          des: 'Lorem ipsum dolor sit aelit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.Image2
        },
        {
          name: 'Title for lorem ipsum dolor aelit sed do ',
          des: 'Lorem ipsum dolor sit aelit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.Image4
        },
        {
          name: 'Title for lorem ipsum dolor aelit sed do ',
          des: 'Lorem ipsum dolor sit aelit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.Image6
        }
      ]
    };
    this.moved = false;
  }

  slideNext = (index) => {
    this.setState({ activeSlide: index + 1 })
  }

  _renderItem = ({ item }) => {
    const { slides, activeSlide } = this.state
    return (
      <ImageBackground
        source={Images.ImageSlider}
        style={{
          width: widthScreen,
          height: hp(26),
          alignSelf: "center",
        }}>
        <View style={Styles.boxTab}>
          <Text style={Styles.textDate}>{"04 JUN"}</Text>
        </View>
        <View style={Styles.bottomContainer}>

          <View style={Styles.bottomContainerWrapper}>
            <View style={Styles.insideWrapper}>
              <View>
                <Text style={Styles.textTitle}>{item?.title}</Text>
                <Text style={Styles.textDes}>{item?.des}</Text>

                <View style={{ flexDirection: 'row', marginTop: hp(2) }}>
                  {
                    slides.map((val, index) => {
                      return (
                        <>
                          <View style={[Styles.lineStyle, { backgroundColor: activeSlide == index ? Colors.black : Colors.grey }]} />
                        </>
                      )
                    })
                  }
                </View>
              </View>
              <TouchableOpacity onPress={() => this.slideNext(activeSlide)}>
                <Image source={Images.chevron} style={Styles.chevronStyle} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }

  productTicketList = (item) => {
    return (
      <>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('MagzineCategory') }}
          style={Styles.productContainer}>
          <View style={Styles.productInnerContainer}>
            <Image source={item?.pic} style={Styles.productPic} />
            <View style={{ marginLeft: hp(1), marginTop: hp(1.3) }}>
              <Text style={Styles.productName}>{item?.name}</Text>
              <Text style={Styles.productArticle}>{item?.des}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }

  productTrendList = (item) => {
    return (
      <>
        <TouchableOpacity style={Styles.trendProductContainer}>
          <View style={Styles.productInnerContainer}>
            <ImageBackground source={item?.pic} style={Styles.trendProductPic}>
              <View style={Styles.boxTabTrend}>
                <Text style={Styles.textDateTrend}>{"04 JUN"}</Text>
              </View>
            </ImageBackground>
            <View style={{ marginLeft: hp(1), marginTop: hp(2.7) }}>
              <Text style={Styles.productNameTrend}>{item?.name}</Text>
              <Text style={Styles.productArticleTrend}>{item?.des}</Text>
            </View>
            <TouchableOpacity>
              <Image source={Images.chevron} style={Styles.chevronTrend} />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  render() {
    const { slides, titleStyle, titleItem, ticketColums, ProdutList, ProdutTrend, trendColums } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Magazine"}/>
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
                {/* Magzine Topics */}
                <View style={Styles.magazineContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.magazineText}>{"Magazine Topics"}</Text>
                    <View style={{ flexDirection: 'row', marginTop: hp(1.5), marginLeft: hp(1) }}>
                      {
                        titleStyle.map((val, index) => {
                          return (
                            <>
                              <View style={[Styles.lineStyle, { backgroundColor: titleItem == index ? Colors.darkPink : Colors.grey }]} />
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

                {/* Trends */}
                <View style={Styles.magazineContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.trendsText}>{"Trends"}</Text>
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
                        key={trendColums}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={ProdutTrend}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.productTrendList(item, index)}
                        numColumns={trendColums}
                      />
                    </View>
                  </ScrollView>
                </View>


                {/* Category name */}
                <View style={Styles.magazineContainer}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.trendsText}>{"Category name"}</Text>
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
                        key={trendColums}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={ProdutTrend}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.productTrendList(item, index)}
                        numColumns={trendColums}
                      />
                    </View>
                  </ScrollView>
                </View>


              </View>
            </ScrollView>
            <BottomWrapper
              navigation={this.props.navigation}
              page={2}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default Magazine;