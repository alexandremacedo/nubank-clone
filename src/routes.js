import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Nuconta from './pages/Nuconta';
import Transfer from './pages/Transfer';

import Tabs from '~/components/Nuconta/Tabs';

const Routes = createAppContainer(createStackNavigator(
  {
    Main,
    Nuconta,
    Transfer,
    Tabs,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
));

export default Routes;
