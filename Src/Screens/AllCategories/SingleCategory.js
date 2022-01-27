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

class SingleCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftData: [
        "Shop",
        "Komilfo",
        "Kodi Professional",
        "CND",
        "FOX",
        "Leo",
        "Oxxi Professional",
        "PNB Professional",
      ],
      selectTab: 0,
      ticketColums: 2,
      ProdutList: [
        {
          name: 'KOMILFO',
          prod: '259 Products',
          pic: Images.brands1
        },
        {
          name: 'LEO',
          prod: '376 Products',
          pic: Images.brands2
        },
        {
          name: 'PNB',
          prod: '126 Products',
          pic: Images.brands3
        },
        {
          name: 'KODI',
          prod: '126 Products',
          pic: Images.brands4
        },
        {
          name: 'CND',
          prod: '73 Products',
          pic: Images.brands5
        },
        {
          name: 'FOX',
          prod: '53 Products',
          pic: Images.brands6
        },

      ],
      ProductColums: 2,
      specialList: [
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
      ]
    };
  }

  selectCategory = (num) => {
    if (this.state.selectTab == num) {
      this.setState({ selectTab: null })
    } else {
      this.setState({ selectTab: num })
    }
  }

  productTicketList = (item, index) => {
    return (
      <>
        <TouchableOpacity
          // onPress={() => { this.props.navigation.navigate('MagzineCategory') }}
          style={Styles.productContainerSingle}>
          <View style={Styles.productInnerContainer}>
            <View style={Styles.productPicMainSingle}>
              {
                index == 1 ?
                  <Image source={item?.pic} style={Styles.productPicGel} /> :
                  index == 6 ?
                    <Image source={item?.pic} style={Styles.productPicEqu} />
                    :
                    <Image source={item?.pic} style={Styles.productPic} />
              }
            </View>
            <View style={{ marginLeft: hp(1), marginTop: hp(2) }}>
              <Text style={Styles.productName}>{item?.name}</Text>
              <Text style={Styles.productNameDes}>{item?.prod}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    )
  }
  productItemList = (item, index) => {
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
    const { leftData, selectTab, ProdutList, ticketColums, ProductColums, specialList } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>

                <View style={Styles.leftContainer}>

                  {
                    leftData?.map((val, index) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => { this.selectCategory(index) }}
                            style={{ backgroundColor: selectTab == index ? Colors.emailColor : Colors.lightWhite }}>
                            {
                              index == 0 ?
                                <>
                                  <Text style={[Styles.leftListText, { color: selectTab == index ? Colors.lightWhite : Colors.emailColor }]}>{val}</Text>
                                  <Text style={[Styles.leftListdesText, { color: selectTab == index ? Colors.lightWhite : Colors.emailColor }]}>{"2365 products"}</Text>
                                </>
                                :
                                <Text style={[Styles.leftListText1, { color: selectTab == index ? Colors.lightWhite : Colors.emailColor }]}>{val}</Text>
                            }
                          </TouchableOpacity>
                          <View style={Styles.seperator} />
                        </>
                      )
                    })
                  }
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('AllCategories') }}>
                    <Text style={[Styles.leftBackText1, { color: Colors.emailColor }]}>{"<< Back"}</Text>
                  </TouchableOpacity>
                </View>
                <View style={Styles.rightContainer}>
                  <TouchableOpacity
                    style={Styles.mainRightUpper}>

                    <Text style={[Styles.leftListText, { color: Colors.emailColor }]}>{"Gel Polish"}</Text>
                    <Text style={[Styles.leftListdesText, { color: Colors.emailColor }]}>{"735 products"}</Text>
                  </TouchableOpacity>

                  <Image source={Images.categoryImage} style={Styles.headerImage} />
                  {/* Choose Brand */}
                  <View style={Styles.magazineContainer}>
                    <Text style={Styles.magazineText}>{"Choose Brand"}</Text>
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
                  </View>

                  {/* Special  For you */}
                  <View style={Styles.magazineContainer}>
                    <Text style={Styles.magazineText}>{"Special  For you"}</Text>
                    <View style={Styles.allProductList}>
                      <FlatList
                        key={ProductColums}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        data={specialList}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => this.productItemList(item, index)}
                        numColumns={ProductColums}
                      />
                    </View>
                  </View>


                </View>

              </View>
            </ScrollView>
            <BottomWrapper
              navigation={this.props.navigation}
              page={3}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default SingleCategory;