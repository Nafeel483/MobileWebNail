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
    marginBottom: hp(2)
  },
  tabContainer: {
    marginTop: hp(3.5),
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.lightGrey,
    height: hp(6),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabInnerContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  authText: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: Colors.black
  },
  seperator: {
    marginTop: hp(1),
    width: hp(3),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  seperator1: {
    marginTop: hp(1),
    width: hp(7),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  seperator2: {
    marginTop: hp(1),
    width: hp(11),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  cartProduct: {
    width: widthScreen / 1.1,
    alignSelf: 'center',
    marginTop: hp(3),
    flexDirection: 'row'
  },
  cartProduct1: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartProductName: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: Colors.black,
    width: '45%'
  },
  cartProductName1: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: Colors.black,
    width: '15%'
  },
  cartProductName2: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: Colors.black,
  },
  cartProductName3: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: Colors.darkPink,
  },
  priceTotal: {
    fontSize: hp(1.6),
    fontWeight: '600',
    color: Colors.darkPink,
  },
  priceTotal1: {
    fontSize: hp(2),
    fontWeight: '600',
    color: Colors.darkPink,
  },
  seperatorCart: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    height: hp(0.05),
    backgroundColor: Colors.darkGrey
  },
  seperatorCart1: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    height: hp(0.05),
    backgroundColor: Colors.darkPink
  },
  crossPic: {
    width: hp(2),
    height: hp(2)
  },
  nailPolishStyle1: {
    width: hp(5),
    height: hp(5),
    marginTop: hp(-1.5)
  },
  cartProductItem: {
    fontSize: hp(1),
    fontWeight: '400',
    color: Colors.black,
    width: hp(10),
    marginTop: hp(-0.5)
  },
  signsHeadName: {
    fontSize: hp(1.3),
    fontWeight: '600',
    color: Colors.emailColor,
    borderWidth: 1,
    width: hp(1.5),
    textAlign: 'center'
  },
  languageHeadName1: {
    fontSize: hp(1.8),
    fontWeight: '700',
    color: Colors.darkPink,
    marginTop: hp(-0.5)
  },
  magzineHead1: {
    fontSize: hp(2.4),
    fontWeight: '600',
    color: Colors.black,
    marginTop: hp(4),
  },
  trendProductContainer1: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    height: hp(10),
    backgroundColor: Colors.darkPink,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartText11: {
    fontSize: hp(2.5),
    color: Colors.White,
    fontWeight: "600",
  },
  cartDes: {
    fontSize: hp(1.3),
    color: Colors.White,
    fontWeight: "500",
    marginTop: hp(0.5)
  },


  magazineContainer: {
    width: widthScreen / 1.12,
    marginTop: hp(4),
    alignSelf: 'center',
  },
  magazineText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.black
  },
  nailPolishContainer: {
    marginTop: hp(2),
    marginBottom: hp(1),
    width: hp(20),
    height: hp(26),
    marginRight: hp(0.4),
    marginLeft: hp(0.4),
    backgroundColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  heartStyle: {
    width: hp(2.5),
    height: hp(2.0),
    alignSelf: 'flex-end',
    tintColor: Colors.darkGrey,
    marginTop: hp(1),
    marginRight: hp(1),
  },
  nailPolishStyle: {
    alignSelf: 'center',
    width: hp(15),
    height: hp(15)
  },
  desText: {
    width: hp(15),
    alignSelf: 'center',
    fontSize: hp(1),
    color: Colors.darkGrey,
    textAlign: 'center'
  },
  bottomNailWrapper: {
    marginTop: hp(1.5),
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  priceText: {
    fontSize: hp(1.5),
    color: Colors.black,
    fontWeight: '500',
    marginTop: hp(0.8)
  },
  cartButton: {
    width: hp(10),
    height: hp(3),
    backgroundColor: Colors.darkPink,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartText: {
    fontSize: hp(1.5),
    color: Colors.White,
    fontWeight: "500",
  },
  allProductList1: {
    marginTop: hp(2),
    marginBottom: hp(2),
    flexDirection: 'row',
    marginLeft: hp(0.3)
  },
  allProductList: {
    marginTop: hp(2),
    marginBottom: hp(2),
  },
  brandLogoContainer: {
    marginTop: hp(2),
    marginBottom: hp(1),
    width: hp(8),
    height: hp(8),
    marginRight: hp(2),
    backgroundColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  brandPic: {
    height: hp(5),
    width: hp(5)
  },

  trendProductContainer3: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    height: hp(9),
    backgroundColor: Colors.White,
    borderTopWidth: 1.5,
    borderTopColor: Colors.darkPink,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent: 'center',

  },
  productInnerContainer2: {
    flexDirection: 'row',
    // justifyContent: 'space-between'
  },
  innerCartButton: {
    width: '70%',
    alignSelf: 'center',
    height: hp(9),
    backgroundColor: Colors.darkPink,
    justifyContent: 'center',
    alignItems: "center"
  },
  innerHeartButton: {
    width: '30%',
    alignSelf: 'center',
    height: hp(9),
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: "center"
  },
  orderNameHead: {
    fontSize: hp(2.3),
    fontWeight: '700',
    color: Colors.black,
    marginTop: hp(3)
  },
  orderNameBottom:{
    fontSize: hp(2.3),
    fontWeight: '700',
    color: Colors.darkPink,
    marginTop: hp(4)
  },
  listContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.iconColor,
    marginTop: hp(4)
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
  verticalSeperator1: {
    backgroundColor: Colors.darkPink,
    height: hp(13),
    width: hp(0.2)
  },
  verticalSeperator2: {
    backgroundColor: Colors.darkPink,
    height: hp(10),
    width: hp(0.2)
  },

  listHeadText: {
    fontSize: hp(1.5),
    fontWeight: '700',
    color: Colors.emailColor
  },
  listDesText: {
    fontSize: hp(1.15),
    fontWeight: '400',
    color: Colors.emailColor,
    marginTop: hp(0.2)
  },
  listGreenText: {
    fontSize: hp(1.15),
    fontWeight: '400',
    color: '#089212',
    marginTop: hp(0.2)
  },
  trendProductContainer9: {
    marginTop: hp(6),
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

});
export default styles;