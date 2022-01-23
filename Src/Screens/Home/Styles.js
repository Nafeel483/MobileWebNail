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
  homeContent: {
    height: hp(8),
    backgroundColor: Colors.black,
    width: widthScreen,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  homeContentInner: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-around',
    alignSelf: 'center'
  },
  giftStyle: {
    width: hp(2),
    height: hp(2),
    marginTop: hp(0.7)
  },
  homeIconText: {
    fontSize: hp(1.3),
    fontWeight: '500',
    color: Colors.White,
    marginLeft: hp(1),
    width: hp(14)
  },
  homeIconText1: {
    fontSize: hp(1.3),
    fontWeight: '500',
    color: Colors.White,
    marginLeft: hp(1),
    width: hp(14)
  },
  seperator: {
    width: hp(0.2),
    height: hp(3),
    backgroundColor: Colors.White,
  },
  homeCheckInContent: {
    height: hp(6),
    backgroundColor: Colors.darkPink,
    width: widthScreen,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row'
  },
  checkStyle: {
    width: hp(2),
    height: hp(2)
  },
  checkInText: {
    fontSize: hp(1.9),
    fontWeight: '700',
    color: Colors.black,
    marginLeft: hp(1),
  },
  sliderProducts: {
    justifyContent: 'center'
  },
  lineStyle: {
    width: hp(3),
    height: hp(0.4),
    marginRight: hp(1)
  },
  productContainer: {
    marginTop: hp(1),
    marginBottom: hp(1),
    marginRight: hp(1.5),
    width: hp(20),
    height: hp(6),
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
  productInnerContainer: {
    flexDirection: 'row',
  },
  productPicMain: {
    height: hp(6),
    width: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey
  },
  productPic: {
    height: hp(4),
    width: hp(4)
  },
  productPicGel: {
    height: hp(4),
    width: hp(5)
  },
  productPicLiquid: {
    height: hp(4),
    width: hp(1.8)
  },
  productName: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: Colors.black
  },
  magazineContainer: {
    marginTop: hp(5),
    marginLeft: hp(3)
  },
  magazineText: {
    fontSize: hp(2.4),
    fontWeight: '700',
    color: Colors.black
  },
  allProductList: {
    marginTop: hp(2),
    marginBottom: hp(2),
    marginLeft: hp(0.3)

  },
  bestSellersText: {
    fontSize: hp(2.4),
    fontWeight: '700',
    color: Colors.darkPink
  },
  nailPolishContainer: {
    marginTop: hp(2),
    marginBottom: hp(1),
    width: hp(20),
    height: hp(26),
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
  }
});
export default styles;