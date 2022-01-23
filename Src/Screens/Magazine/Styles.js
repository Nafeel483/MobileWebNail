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
  boxTab: {
    width: hp(7),
    height: hp(3),
    backgroundColor: Colors.White,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: hp(1.5),
    marginLeft: hp(1.5)
  },
  textDate: {
    fontSize: hp(1.5),
    fontWeight: '600',
    color: Colors.black
  },
  textTitle: {
    fontSize: hp(1.8),
    fontWeight: '700',
    color: Colors.black
  },
  textDes: {
    fontSize: hp(1),
    fontWeight: '400',
    color: Colors.black,
    width: hp(30),
    marginTop: hp(0.7)
  },
  bottomContainer: {
    marginTop: hp(6.5)
  },
  bottomContainerWrapper: {
    height: hp(15),
    backgroundColor: Colors.White,
    width: '100%',
    opacity: 0.8,
    justifyContent: 'center'
  },
  insideWrapper: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  chevronStyle: {
    width: hp(1.5),
    height: hp(2),
    marginTop: hp(1.7)
  },
  chevronTrend: {
    width: hp(1),
    height: hp(1.5),
    marginTop: hp(5.5),
    tintColor: Colors.darkPink,
    marginLeft: hp(1.3)
  },
  lineStyle: {
    width: hp(3),
    height: hp(0.4),
    marginRight: hp(1)
  },
  magazineContainer: {
    marginTop: hp(5),
    marginLeft: hp(3)
  },
  magazineText: {
    fontSize: hp(2.4),
    fontWeight: '700',
    color: Colors.darkPink
  },
  trendsText: {
    fontSize: hp(2.4),
    fontWeight: '700',
    color: Colors.black
  },
  allProductList: {
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  productContainer: {
    marginTop: hp(1),
    marginBottom: hp(1),
    marginRight: hp(1.5),
    width: hp(15),
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
  productPic: {
    height: hp(6),
    width: hp(6)
  },
  productName: {
    fontSize: hp(1.5),
    fontWeight: '500',
    color: Colors.black
  },
  productArticle: {
    fontSize: hp(1),
    fontWeight: '500',
    color: Colors.darkGrey,
    marginTop: hp(0.5)
  },
  trendProductContainer: {
    marginTop: hp(1),
    marginBottom: hp(1),
    marginRight: hp(1.5),
    width: hp(35),
    height: hp(15),
    backgroundColor: Colors.lightGrey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  trendProductPic: {
    height: hp(15),
    width: hp(15)
  },
  productNameTrend: {
    fontSize: hp(1.1),
    fontWeight: '500',
    color: Colors.black,
    width: hp(15)
  },
  productArticleTrend: {
    fontSize: hp(1),
    fontWeight: '500',
    color: Colors.darkGrey,
    marginTop: hp(1),
    width: hp(15)
  },
  boxTabTrend: {
    width: hp(4.8),
    height: hp(1.6),
    backgroundColor: Colors.White,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginTop: hp(1),
    marginLeft: hp(1)
  },
  textDateTrend: {
    fontSize: hp(1),
    fontWeight: '600',
    color: Colors.black
  },
  headImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScreen,
    height: hp(15),
    backgroundColor: Colors.black,
    opacity: 0.7
  },
  headImageArticalContainer: {
    justifyContent: 'flex-end',
    width: widthScreen,
    height: hp(15),
    backgroundColor: Colors.black,
    opacity: 0.7
  },
  titleNews: {
    color: Colors.White,
    fontSize: hp(3.5),
    fontWeight: '700'
  },
  trendProductContainer1: {
    marginTop: hp(1.5),
    marginBottom: hp(1),
    width: widthScreen / 1.07,
    alignSelf: 'center',
    height: hp(15),
    backgroundColor: Colors.lightGrey,
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
  productNameTrend1: {
    fontSize: hp(1.5),
    fontWeight: '600',
    color: Colors.black,
    width: hp(20)
  },
  productArticleTrend1: {
    fontSize: hp(1),
    fontWeight: '500',
    color: Colors.darkGrey,
    marginTop: hp(1),
    width: hp(21.5)
  },
  chevronTrend1: {
    width: hp(0.5),
    height: hp(1),
    tintColor: Colors.darkPink,
    marginLeft: hp(0.5),
    marginTop: hp(0.3)
  },
  readMoreText: {
    fontSize: hp(1.3),
    fontWeight: '500',
    color: Colors.darkPink,
  },
  bottomCategoryStyle: {
    flexDirection: 'row',
    marginTop: hp(2.5),
    alignSelf: 'flex-end',
    marginRight: hp(-3)
  },
  headImageArticalInner: {
    marginBottom: hp(1.5),
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between'
  },
  articalText: {
    fontSize: hp(1.2),
    fontWeight: '400',
    color: Colors.White
  },
  socialStyle: {
    width: hp(1.5),
    height: hp(1.5),
  },
  socialStylePin: {
    width: hp(1.5),
    height: hp(1.5),
    marginLeft: hp(0.8)
  },
  magzineArticalContainer: {
    marginBottom: hp(3),
    marginTop: hp(3),
    width: widthScreen / 1.1,
    alignSelf: 'center',
  },
  magzineArticalTitle: {
    fontWeight: '700',
    fontSize: hp(2.8),
    width: '85%'
  },
  magzineArticalDes: {
    fontSize: hp(1.2),
    fontWeight: '400',
    color: Colors.darkGrey,
    marginTop: hp(2)
  }
});
export default styles;