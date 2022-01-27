import { createStackNavigator } from 'react-navigation-stack';
import Magazine from '../Screens/Magazine';
import MagzineCategory from '../Screens/Magazine/MagzineCategory';
import MagzineArtical from '../Screens/Magazine/MagzineArtical';
import Home from '../Screens/Home';
import Authentication from '../Screens/Authentication';
import ServiceCenter from '../Screens/ServiceCenter';
import Privacy from '../Screens/Privacy';
import Certification from '../Screens/Certification';
import FAQ from '../Screens/FAQ';
import ContactUs from '../Screens/ContactUs';
import OrderTracking from '../Screens/OrderTracking';
import AboutUs from '../Screens/AboutUs';
import MyAccount from '../Screens/MyAccount';
import AllCategories from '../Screens/AllCategories';
import SingleCategory from '../Screens/AllCategories/SingleCategory';
import AddToCart from '../Screens/AddToCart';

const AuthNavigation = createStackNavigator(
  {
    Home: { screen: Home },
    Magazine: { screen: Magazine },
    MagzineCategory: { screen: MagzineCategory },
    MagzineArtical: { screen: MagzineArtical },
    Authentication: { screen: Authentication },
    ServiceCenter: { screen: ServiceCenter },
    Privacy: { screen: Privacy },
    Certification: { screen: Certification },
    FAQ: { screen: FAQ },
    ContactUs: { screen: ContactUs },
    OrderTracking: { screen: OrderTracking },
    AboutUs: { screen: AboutUs },
    MyAccount: { screen: MyAccount },
    AllCategories: { screen: AllCategories },
    SingleCategory: { screen: SingleCategory },
    AddToCart: { screen: AddToCart },

  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },

    },
    headerMode: 'none',
    mode: 'modal',

  },
);
export default AuthNavigation;
