import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: Colors.White
  },
  sliderProducts: {
    justifyContent: 'center'
  },
  mainContainer: {
    // marginTop: hp(3),
    marginBottom: hp(3),
    width: widthScreen,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  leftContainer: {
    width: '25%',
    backgroundColor: Colors.lightWhite,
    height: heightScreen
  },
  rightContainer: {
    width: '75%',
  },
  leftListText: {
    marginLeft: hp(1.4),
    marginTop: hp(2),
    fontSize: hp(1.5),
    fontWeight: '500'
  },
  leftListText1: {
    marginLeft: hp(1.4),
    marginTop: hp(2),
    marginBottom: hp(2),
    fontSize: hp(1.5),
    fontWeight: '500'
  },
  leftBackText1: {
    marginLeft: hp(1.4),
    marginTop: hp(2),
    marginBottom: hp(2),
    fontSize: hp(1.5),
    fontWeight: '600'
  },
  leftListdesText: {
    marginLeft: hp(1.4),
    marginTop: hp(0.3),
    marginBottom: hp(2),
    fontSize: hp(1),
    fontWeight: '500'
  },
  seperator: {
    backgroundColor: Colors.emailColor,
    width: '100%',
    height: hp(0.05)
  },
  headerImage: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(2.5),
    height: hp(10)
  },
  magazineContainer: {
    marginTop: hp(4),
    width: '90%',
    alignSelf: 'center',
  },
  magazineText: {
    fontSize: hp(2),
    fontWeight: '700',
    color: Colors.black
  },
  productContainerSingle:{
    marginTop: hp(1),
    marginBottom: hp(1),
    marginRight: hp(1.5),
    width: hp(14.7),
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
  productContainer: {
    marginTop: hp(1),
    marginBottom: hp(1),
    marginRight: hp(1.5),
    width: hp(14.7),
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
    width: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightGrey
  },
  productPicMainSingle: {
    height: hp(6),
    width: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.White
  },
  productPicEqu: {
    height: hp(3),
    width: hp(2)
  },
  productPic: {
    height: hp(3),
    width: hp(3)
  },
  productPicGel: {
    height: hp(2),
    width: hp(3)
  },
  productPicLiquid: {
    height: hp(3),
    width: hp(1.2)
  },
  productName: {
    fontSize: hp(1.2),
    fontWeight: '500',
    color: Colors.black
  },
  productNameDes: {
    fontSize: hp(0.8),
    fontWeight: '500',
    color: Colors.darkGrey,
    marginTop: hp(0.3)
  },
  allProductList: {
    marginTop: hp(2),
    marginBottom: hp(2),
  },


  nailPolishContainer: {
    marginTop: hp(2),
    marginBottom: hp(1),
    width: hp(14.7),
    height: hp(22),
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
    width: hp(1.5),
    height: hp(1.2),
    alignSelf: 'flex-end',
    tintColor: Colors.darkGrey,
    marginTop: hp(1),
    marginRight: hp(1),
  },
  nailPolishStyle: {
    alignSelf: 'center',
    width: hp(10),
    height: hp(10)
  },
  desText: {
    width: hp(9),
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
    fontSize: hp(1),
    color: Colors.black,
    fontWeight: '500',
    marginTop: hp(0.8)
  },
  cartButton: {
    width: hp(7),
    height: hp(3),
    backgroundColor: Colors.darkPink,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cartText: {
    fontSize: hp(1),
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
  },

  mainRightUpper: {
    width: '100%',
    backgroundColor: Colors.White,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    height: hp(7.4)
  }
});
export default styles;