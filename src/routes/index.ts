import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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
    initialRouteName: 'Home'
  }
);

export default createAppContainer(routes);
