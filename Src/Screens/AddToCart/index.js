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

class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.state = {

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
    const { authTab, allProductList, ticketColums } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Home"} />
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.mainContainer}>

                <Image source={Images.nailPolish} style={Styles.mainHeadImage} />

                <View style={Styles.seperate} />
                <View style={Styles.headWrapper}>
                  <Text style={Styles.headTextWrapper}>{"CND Creative Play Gel Polish #491 Candycade ,15 ML "}</Text>
                </View>

                {/* Pricing Tabs */}
                <View style={Styles.accountWrapper}>
                  <View style={Styles.languageWrapper}>
                    <Text style={Styles.languageName}>{"PRICE:"}</Text>
                    <View style={Styles.mainLanguage}>
                      <Text style={Styles.languageHeadName}>{"$13.77"}</Text>
                    </View>
                  </View>

                  <View style={Styles.languageWrapper}>
                    <Text style={Styles.languageName}>{"QUANTITY:"}</Text>
                    <View style={Styles.mainLanguage}>
                      <TouchableOpacity>
                        <Text style={Styles.signsHeadName}>{"-"}</Text>
                      </TouchableOpacity>
                      <Text style={[Styles.languageHeadName1, { marginLeft: hp(1.5) }]}>{"1"}</Text>
                      <TouchableOpacity>
                        <Text style={[Styles.signsHeadName, { marginLeft: hp(1.5) }]}>{"+"}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <View style={Styles.seperate1} />
                <View style={Styles.messageWrapper}>
                  <Image source={Images.protect} style={Styles.protectStyle} />
                  <Text style={Styles.protectName}>{"Custom Protection Inclouded"}</Text>
                </View>
                <View style={Styles.seperate2} />
                <View style={Styles.messageWrapper}>
                  <Image source={Images.ternPoint} style={Styles.protectStyle1} />
                  <Text style={{
                    marginLeft: hp(2),
                    marginTop: hp(0.4)
                  }}>
                    <Text style={Styles.protectName}>{"Purchase this product now and earn "}</Text>
                    <Text style={Styles.protectName1}>{" 19.75 Points!"}</Text>
                  </Text>
                </View>
                <View style={Styles.seperate2} />


                <View style={Styles.magazineContainer}>
                  <Text style={Styles.magazineText}>{"Similar Products"}</Text>

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


              </View>
            </ScrollView>
            <View style={Styles.trendProductContainer1}>
              <View style={Styles.productInnerContainer2}>

                <TouchableOpacity style={Styles.innerHeartButton}>
                  <Image source={Images.heart} style={Styles.heartStyle1} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Cart") }}
                  style={Styles.innerCartButton}>
                  <Text style={Styles.cartText11}>{"Add To Cart"}</Text>
                  <Text style={Styles.cartDes}>{"Get 10 Points"}</Text>
                </TouchableOpacity>
              </View>

            </View>
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

export default AddToCart;
