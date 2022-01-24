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
