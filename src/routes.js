import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Nuconta from './pages/Nuconta';

const Routes = createAppContainer(createStackNavigator(
  {
    Main,
    Nuconta,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
));

export default Routes;
