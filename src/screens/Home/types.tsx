import { NavigationScreenProp, NavigationState } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  actionMovies: () => void;
  movies: any;
  loadMovies: boolean;
}
