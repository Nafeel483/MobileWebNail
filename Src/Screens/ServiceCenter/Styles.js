import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  sliderProducts: {
    justifyContent: 'center'
  },
  mainContainer: {
    marginTop: hp(3),
    marginBottom: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center'
  },
  mainHeader: {
    textAlign: 'center',
    fontSize: hp(3.2),
    fontWeight: '700'
  },
  mainHeaderDes: {
    textAlign: 'center',
    fontSize: hp(2),
    fontWeight: '400',
    color: Colors.darkPink,
    marginTop: hp(0.5),
    marginBottom: hp(5)
  },
  trendProductContainer1: {
    marginTop: hp(2),
    marginBottom: hp(1),
    width: widthScreen / 1.07,
    alignSelf: 'center',
    height: hp(11),
    backgroundColor: Colors.lightGrey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  productInnerContainer1: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  productNameTrend1: {
    fontSize: hp(1.5),
    fontWeight: '600',
    color: Colors.black,
    width: hp(20)
  },
  productArticleTrend1: {
    fontSize: hp(1),
    fontWeight: '500',
    color: Colors.darkGrey,
    marginTop: hp(1),
    width: hp(21.5)
  },
  chevronTrend1: {
    width: hp(1.3),
    height: hp(1.8),
    tintColor: Colors.darkPink,
    // marginRight: hp(0.2),
    marginLeft: hp(0.3),
    marginTop: hp(4.2),
  },
  trendProductPic: {
    height: hp(10),
    width: hp(15),
    justifyContent: 'center',
    alignItems: 'center'
  },
  trendProductPic1: {
    height: hp(8),
    width: hp(8)
  },
  trendProductPic2: {
    height: hp(8),
    width: hp(9)
  },
  trendProductPic3: {
    height: hp(7),
    width: hp(6)
  },
});
export default styles;