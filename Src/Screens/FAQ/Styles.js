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
  mainHeadContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    height: hp(10),
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
    justifyContent: 'space-between'
  },
  trendProductPic3: {
    height: hp(8),
    width: hp(9)
  },
  productNameTrend1: {
    fontSize: hp(2.9),
    fontWeight: '700',
    color: Colors.darkPink,
  },
  magzineArticalDes1: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: Colors.emailColor,
    marginTop: hp(4),
    marginBottom: hp(4)
  },
  magzineArticalDes: {
    fontSize: hp(1.7),
    fontWeight: '400',
    color: Colors.emailColor,
    marginLeft: hp(2),
  },
  magzineArticalDes3: {
    fontSize: hp(1.3),
    fontWeight: '400',
    color: Colors.darkGrey,
    marginTop: hp(1.3),
    marginBottom: hp(1)
  },
  magzineArticaltext: {
    fontSize: hp(1.2),
    fontWeight: '600',
    color: Colors.black,
    marginTop: hp(2)
  },
  seperator: {
    width: '100%',
    height: hp(0.2),
    backgroundColor: Colors.iconColor,
  },
  listWrapper: {
    marginTop: hp(1.5),
    marginBottom: hp(1.5),
    flexDirection: 'row'
  },
  imageDrop: {
    width: hp(1.5),
    height: hp(1.5),
    marginTop: hp(0.2)
  },
  trendProductContainer1: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    height: hp(11),
    backgroundColor: Colors.darkPink,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  productInnerContainer2: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  productNameTrend2: {
    fontSize: hp(1.5),
    fontWeight: '600',
    color: Colors.White,
    width: hp(22)
  },
  productArticleTrend1: {
    fontSize: hp(1),
    fontWeight: '500',
    color:  Colors.White,
    marginTop: hp(1),
    width: hp(23.5)
  },
  chevronTrend1: {
    width: hp(1.3),
    height: hp(1.8),
    tintColor: Colors.White,
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
    width: hp(8),
    tintColor: Colors.White,
  },
  trendProductPic2: {
    height: hp(8),
    width: hp(9)
  },
 
});
export default styles;