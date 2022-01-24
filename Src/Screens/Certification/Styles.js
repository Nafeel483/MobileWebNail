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
    // justifyContent: 'space-between'
  },
  trendProductPic3: {
    height: hp(10),
    width: hp(9)
  },
  productNameTrend1: {
    fontSize: hp(2.9),
    fontWeight: '700',
    color: Colors.darkPink,
  },
  magzineArticalDes1: {
    fontSize: hp(1.2),
    fontWeight: '400',
    color: Colors.darkGrey,
    marginTop: hp(4)
  },
  magzineArticalDes: {
    fontSize: hp(1.2),
    fontWeight: '400',
    color: Colors.darkGrey,
    marginTop: hp(2)
  },
  magzineArticaltext: {
    fontSize: hp(1.2),
    fontWeight: '600',
    color: Colors.black,
    marginTop: hp(2)
  },
  tabContainer: {
    marginTop: hp(3.5),
    width: widthScreen / 1.12,
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
    width: hp(3),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  fullCertification: {
    marginTop: hp(4),
    width: hp(35),
    height: hp(50),
    alignSelf: 'center'
  }
});
export default styles;