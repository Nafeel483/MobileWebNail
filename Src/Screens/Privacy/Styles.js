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
    height: hp(9),
    width: hp(9)
  },
  productNameTrend1: {
    fontSize: hp(2.9),
    fontWeight: '700',
    color: Colors.darkPink,
  },
  magzineArticalDes1:{
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
  magzineArticaltext:{
    fontSize: hp(1.2),
    fontWeight: '600',
    color: Colors.black,
    marginTop: hp(2)
  }
});
export default styles;