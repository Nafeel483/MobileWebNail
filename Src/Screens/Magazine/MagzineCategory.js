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

class MagzineCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listColums: 1,
      ProdutTrend: [
        {
          name: 'Title for lorem ipsum dolor aelit sed do ',
          des: 'Lorem ipsum dolor sit aelit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.Image1
        },
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
        },
        {
          name: 'Title for lorem ipsum dolor aelit sed do ',
          des: 'Lorem ipsum dolor sit aelit, sed do eiusmo unt ut lab  et dolore magna aliqua.',
          pic: Images.Image5
        }
      ]
    };
  }

  productTicketList = (item) => {
    return (
      <>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('MagzineArtical') }}
        style={Styles.trendProductContainer1}>
          <View style={Styles.productInnerContainer1}>
            <ImageBackground source={item?.pic} style={Styles.trendProductPic}>
              <View style={Styles.boxTabTrend}>
                <Text style={Styles.textDateTrend}>{"04 JUN"}</Text>
              </View>
            </ImageBackground>
            <View style={{ marginLeft: hp(1.5), marginTop: hp(3) }}>
              <Text style={Styles.productNameTrend1}>{item?.name}</Text>
              <Text style={Styles.productArticleTrend1}>{item?.des}</Text>
              <View style={Styles.bottomCategoryStyle}>
                <Text style={Styles.readMoreText}>{"Read more"}</Text>
                <TouchableOpacity>
                  <Image source={Images.chevron} style={Styles.chevronTrend1} />
                </TouchableOpacity>
              </View>
            </View>

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
            <Header navigation={this.props.navigation} screen={"Magazine"}/>

            <ImageBackground
              source={Images.Image2}
              style={{
                width: widthScreen,
                height: hp(15),
                alignSelf: "center",
              }}>
              <View style={Styles.headImageContainer}>
                <Text style={Styles.titleNews}>{"News"}</Text>
              </View>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ marginBottom: hp(3) }}>
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
              page={2}
            />
          </SafeAreaView>
        </SafeAreaProvider>
      </>
    );
  }
}

export default MagzineCategory;