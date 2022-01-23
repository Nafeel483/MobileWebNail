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

const widthScreen = Dimensions.get('window').width;

class MagzineArtical extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { } = this.state
    return (
      <>
        <SafeAreaProvider>
          <SafeAreaView style={Styles.safeViewStyle} forceInset={{ top: 'never', bottom: 'never' }}>
            <Header navigation={this.props.navigation} screen={"Magazine"}/>

            <ImageBackground
              source={Images.ImageSlider}
              style={{
                width: widthScreen,
                height: hp(15),
                alignSelf: "center",
              }}>
              <View style={Styles.headImageArticalContainer}>
                <View style={Styles.headImageArticalInner}>

                  <Text style={Styles.articalText}>{"26 comments "}</Text>
                  <Text style={Styles.articalText}>{"11 March 2020"}</Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Image source={Images.fbIcon} style={Styles.socialStyle} />
                    <Image source={Images.pinsertIcon} style={Styles.socialStylePin} />
                  </View>
                </View>
              </View>
            </ImageBackground>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.magzineArticalContainer}>
                <Text style={Styles.magzineArticalTitle}>{"Title for lorem ipsum dolor sit aelit sed do "}</Text>

                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_1}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_2}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_3}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_4}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_5}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_6}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_7}</Text>
                <Text style={Styles.magzineArticalDes}>{Constants.ARTICLE_8}</Text>

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

export default MagzineArtical;