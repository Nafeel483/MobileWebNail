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
    marginBottom: hp(2)
  },
  accountWrapper: {
    marginTop: hp(5),
    alignSelf: 'center',
    width: widthScreen / 1.12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accountWrapper1: {
    marginTop: hp(2),
    alignSelf: 'center',
    width: widthScreen / 1.12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  accountListWrapper: {
    width: hp(12),
    height: hp(12),
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  accountPic: {
    width: hp(3.5),
    height: hp(3.5),
    tintColor: "#18191C"
  },
  accountCardPic: {
    width: hp(3.5),
    height: hp(2.4)
  },
  accountServicePic: {
    width: hp(3.5),
    height: hp(2.6)
  },
  accountLocPic: {
    width: hp(2.4),
    height: hp(3.5)
  },
  accountLogoutPic: {
    width: hp(3.8),
    height: hp(2.4)
  },
  accountName: {
    textAlign: 'center',
    width: hp(10),
    alignSelf: 'center',
    fontSize: hp(1.5),
    fontWeight: '500',
    marginTop: hp(1),
    color: Colors.emailColor
  },
  languageWrapper: {
    width: hp(19.2),
    height: hp(8),
    backgroundColor: Colors.lightGrey,
  },
  languageName: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: Colors.emailColor
  },
  languageHeadName: {
    fontSize: hp(2.2),
    fontWeight: '500',
    color: Colors.emailColor
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
    width: hp(6),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  seperator1: {
    marginTop: hp(1),
    width: hp(8.5),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  seperator2: {
    marginTop: hp(1),
    width: hp(12),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  allProductList: {
    marginTop: hp(3),
    marginBottom: hp(2),
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