import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: hp(3),
    justifyContent: 'space-between'
  },
  cartProductName: {
    fontSize: hp(1.5),
    fontWeight: '400',
    color: Colors.emailColor,
  },
  cartProductName1: {
    fontSize: hp(1.5),
    fontWeight: '600',
    color: Colors.emailColor,
  },
  priceTotal: {
    fontSize: hp(1.8),
    fontWeight: '600',
    color: Colors.darkPink,
  },
  tickImage: {
    width: hp(2.5),
    height: hp(2.5),
    marginTop: hp(3)
  },
  seperatorCart: {
    marginTop: hp(2),
    width: widthScreen,
    alignSelf: 'center',
    height: hp(0.05),
    backgroundColor: Colors.darkGrey
  },
  orderContainer: {
    width: widthScreen / 1.12,
    marginTop: hp(4),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  emailWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: Colors.darkPink,
    backgroundColor: Colors.iconColor,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    alignSelf: 'center',
  },
  emailInput: {
    flex: 1,
    marginLeft: hp(2),
    color: Colors.emailColor,
    fontWeight: '600'
  },
  emailWrapper1: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: Colors.darkPink,
    backgroundColor: Colors.iconColor,
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(3),
  },

  cartButton: {
    height: hp(6),
    backgroundColor: Colors.darkPink,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(4),
  },
  cartText: {
    fontSize: hp(2),
    color: Colors.White,
    fontWeight: "600",
  },
  orderCheckContainer: {
    width: widthScreen / 1.12,
    marginTop: hp(4),
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
export default styles;