import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { zoomIn } from 'react-navigation-transitions';

import Home from '../screens/Home';
import Detail from '../screens/Detail';

const routes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => zoomIn()
  }
);

export default createAppContainer(routes);
