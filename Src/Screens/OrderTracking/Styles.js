import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  mainContainer: {
    marginTop: hp(3),
    marginBottom: hp(4),
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
    // justifyContent: 'space-between'
  },
  trendProductPic3: {
    height: hp(9),
    width: hp(10)
  },
  productNameTrend1: {
    fontSize: hp(2.9),
    fontWeight: '700',
    color: Colors.darkPink,
  },
  magzineHead: {
    fontSize: hp(1.5),
    fontWeight: '600',
    color: Colors.black,
    marginTop: hp(4),
    alignSelf: 'center'
  },
  magzineArticalDes1: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: Colors.emailColor,
    marginTop: hp(1.5),
    marginBottom: hp(4),
    width: '85%',
    alignSelf: 'center',
    textAlign: 'center'
  },
  orderContainer: {
    marginTop: hp(4),
    flexDirection: 'row',
    alignSelf: 'center'
  },
  emailWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: Colors.darkPink,
    backgroundColor: Colors.iconColor,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%',
    alignSelf: 'center',
  },
  emailInput: {
    flex: 1,
    marginLeft: hp(2),
    color: Colors.emailColor
  },
  cartButton: {
    height: hp(6),
    backgroundColor: Colors.darkPink,
    justifyContent: 'center',
    alignItems: 'center',
    width: hp(10),
    marginLeft: hp(2)
  },
  cartText: {
    fontSize: hp(2),
    color: Colors.White,
    fontWeight: "600",
  },

  trendProductContainer1: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    height: hp(12),
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
    fontSize: hp(1.3),
    fontWeight: '600',
    color: Colors.White,
    width: hp(24)
  },
  productArticleTrend1: {
    fontSize: hp(1),
    fontWeight: '500',
    color: Colors.White,
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
  listContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.iconColor,
    marginTop: hp(5)
  },
  listInnerContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    width: '90%',
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  verticalSeperator: {
    backgroundColor: Colors.darkPink,
    height: hp(10),
    width: hp(0.2)
  },
  verticalSeperator1:{
    backgroundColor: Colors.darkPink,
    height: hp(13),
    width: hp(0.2)
  },
  verticalSeperator2:{
    backgroundColor: Colors.darkPink,
    height: hp(10),
    width: hp(0.2)
  },
  listHeadText: {
    fontSize: hp(1.4),
    fontWeight: '600',
    color: Colors.emailColor
  },
  listDesText: {
    fontSize: hp(1.15),
    fontWeight: '400',
    color: Colors.emailColor,
    marginTop: hp(0.2)
  }
});
export default styles;