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
    height: hp(0.1),
    backgroundColor: Colors.darkPink,
    marginTop: hp(1.5)
  },
  listWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(2)
  },
  timeStyle: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(1.5)
  },
  emailStyle: {
    width: hp(2.5),
    height: hp(2.6),
    marginTop: hp(1.5)
  },
  messangerStyle: {
    width: hp(2.5),
    height: hp(2.6),
    marginTop: hp(2),
  },
  pinStyle:{
    width: hp(2),
    height: hp(2.8),
    marginTop: hp(1.6),
  },
  headText: {
    fontWeight: '600',
    fontSize: hp(1.8)
  },
  desHeadText: {
    fontWeight: '400',
    fontSize: hp(1.4),
    marginTop: hp(0.2),
    color: Colors.darkGrey
  },
  desHeadText1: {
    fontWeight: '400',
    fontSize: hp(1.4),
    marginTop: hp(0.2),
    color: "#0D04FC",
    textDecorationLine: 'underline'
  }
});
export default styles;