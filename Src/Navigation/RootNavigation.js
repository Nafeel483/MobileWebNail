import { createAppContainer } from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';
import React from 'react';

import DrawerNavigation from './DrawerNavigation';

const AppNavigator = createAnimatedSwitchNavigator(
  {
    
    DrawerNavigation: DrawerNavigation
  },
  {
    initialRouteName: 'DrawerNavigation',
    transition: (
      <Transition.Together>
        {/* <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        /> */}
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);
export default createAppContainer(AppNavigator);
