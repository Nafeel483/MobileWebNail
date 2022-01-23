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
    width: widthScreen / 1.18,
    alignSelf: 'center',
    marginTop: hp(3),
  },
  closeIcon: {
    width: hp(2.5),
    height: hp(2.5),
    alignSelf: 'flex-end'
  },
  mainlogoStyle: {
    width: hp(11),
    height: hp(3.4),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  tabContainer: {
    marginTop: hp(10),
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  authText: {
    fontSize: hp(2),
    fontWeight: '500',
    color: Colors.black
  },
  seperator: {
    marginTop: hp(1),
    width: hp(5.5),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  seperator1: {
    marginTop: hp(1),
    width: hp(8),
    height: hp(0.3),
    backgroundColor: Colors.darkPink
  },
  socialButton: {
    width: hp(17),
    height: hp(12),
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  socialIcon: {
    width: hp(4),
    height: hp(4)
  },
  socialText: {
    fontSize: hp(1.5),
    fontWeight: '400',
    textAlign: 'center',
    marginTop: hp(1.5)
  },
  socialTextHead: {
    fontSize: hp(1.5),
    fontWeight: '400',
    textAlign: 'center',
    marginTop: hp(5)
  },
  emailWrapper: {
    marginTop: hp(3),
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: Colors.darkPink,
    backgroundColor: Colors.lightGrey,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen / 1.18,
    alignSelf: 'center',
  },
  emailInput: {
    flex: 1,
    marginLeft: hp(2),
    color: Colors.emailColor
  },
  cartButton: {
    marginTop: hp(3),
    height: hp(6),
    backgroundColor: Colors.darkPink,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen / 1.18,
    alignSelf: 'center',
  },
  cartButtonInner: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cartText: {
    fontSize: hp(2),
    color: Colors.White,
    fontWeight: "600",
  },
  chevronTrend: {
    width: hp(1.2),
    height: hp(1.7),
    marginTop: hp(0.5),
    tintColor: Colors.White,
  },
});
export default styles;