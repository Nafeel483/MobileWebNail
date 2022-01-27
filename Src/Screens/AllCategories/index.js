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

class AllCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftData: [
        "Shop",
        "Gel Polish",
        "Acrylic Gel",
        "Liquids",
        "Building Gel",
        "Brushes",
        "Decorations",
        "Equipment",
        "Manicure",
        "Pedicure"
      ],
      selectTab: null,
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
        {
          name: 'Equipment',
          pic: Images.Equipment
        },
        {
          name: 'Manicure',
          pic: Images.Manicure
        },
        {
          name: 'Pedicure',
          pic: Images.pedicure
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
      this.props.navigation.navigate('SingleCategory')
    }
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
                    <Image source={item?.pic} style={Styles.productPicGel} /> :
                    index == 6 ?
                      <Image source={item?.pic} style={Styles.productPicEqu} />
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

                </View>
                <View style={Styles.rightContainer}>

                  <Image source={Images.categoryImage} style={Styles.headerImage} />
                  {/* Categories */}
                  <View style={Styles.magazineContainer}>
                    <Text style={Styles.magazineText}>{"Choose Categories"}</Text>
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

export default AllCategories;