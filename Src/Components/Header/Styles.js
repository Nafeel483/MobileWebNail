import { StyleSheet, Dimensions } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainHeader: {
    height: hp(12),
    backgroundColor: Colors.headerColor,
    width: widthScreen,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  mainIneer: {
    marginTop: hp(3.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  logoStyle: {
    width: hp(3),
    height: hp(3.5),
  },
  mainlogoStyle: {
    width: hp(11),
    height: hp(3.4),
  },
  rightContainer: {
    flexDirection: 'row'
  },
  searchStyle: {
    width: hp(3),
    height: hp(3),
  },
  menuStyle: {
    width: hp(0.95),
    height: hp(3),
    marginLeft: hp(1.5)
  }

});
export default styles;