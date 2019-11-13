import { NavigationScreenProp, NavigationState } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>; // Type for Navigation
  actionExample: () => void; // Redux Action
  example: any;
  isLoading: boolean;
}
