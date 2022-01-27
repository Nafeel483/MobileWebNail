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
  mainHeadImage: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    height: hp(25),
    marginTop: hp(3),
  },
  seperate: {
    width: widthScreen,
    alignSelf: 'center',
    height: hp(0.2),
    backgroundColor: Colors.iconColor,
    marginTop: hp(5)
  },
  seperate1: {
    width: widthScreen,
    height: hp(0.2),
    alignSelf: 'center',
    backgroundColor: Colors.grey,
    marginTop: hp(3)
  },
  seperate2: {
    width: widthScreen,
    height: hp(0.2),
    alignSelf: 'center',
    backgroundColor: Colors.grey,
    marginTop: hp(2)
  },
  headWrapper: {
    marginTop: hp(3),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  headTextWrapper: {
    color: Colors.emailColor,
    fontSize: hp(1.8),
    width: hp(30)
  },
  accountWrapper: {
    marginTop: hp(5),
    alignSelf: 'center',
    width: widthScreen / 1.12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  languageWrapper: {
    width: hp(19.2),
    height: hp(8),
    backgroundColor: Colors.lightGrey,
  },
  languageName: {
    fontSize: hp(1.5),
    fontWeight: '600',
    color: Colors.darkPink
  },
  languageHeadName: {
    fontSize: hp(2.2),
    fontWeight: '700',
    color: Colors.emailColor
  },
  languageHeadName1: {
    fontSize: hp(2.2),
    fontWeight: '700',
    color: Colors.emailColor
  },
  signsHeadName: {
    fontSize: hp(2.2),
    fontWeight: '700',
    color: Colors.emailColor,
    borderWidth: 1,
    width: hp(3),
    textAlign: 'center'
  },

  mainLanguage: {
    flexDirection: 'row',
    marginTop: hp(1.5),
    justifyContent: 'center'
  },
  imageDrop: {
    width: hp(1.5),
    height: hp(1.5),
    marginTop: hp(0.7),
    marginLeft: hp(1.5)
  },
  messageWrapper: {
    marginTop: hp(2),
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  protectStyle: {
    width: hp(2),
    height: hp(2.5),
  },
  protectStyle1: {
    width: hp(2.8),
    height: hp(3),
    tintColor: Colors.emailColor
  },
  protectName: {
    fontSize: hp(1.4),
    fontWeight: '600',
    color: Colors.emailColor,
    marginLeft: hp(2.5),
    marginTop: hp(0.4)
  },
  protectName1: {
    fontSize: hp(1.4),
    fontWeight: '600',
    color: Colors.darkPink,
    marginLeft: hp(2.5),
    marginTop: hp(0.4)
  },
  trendProductContainer1: {
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
  heartStyle1: {
    width: hp(3.8),
    height: hp(3.0),
    tintColor: Colors.darkPink,
  },
  cartText11: {
    fontSize: hp(2.5),
    color: Colors.White,
    fontWeight: "500",
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
  }
});
export default styles;