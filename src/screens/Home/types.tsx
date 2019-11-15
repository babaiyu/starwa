import { NavigationScreenProp, NavigationState } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  actionMovies: () => void;
  actionSelectedMovies: (payload: object) => Promise<void>;
  movies: any;
  loadMovies: boolean;
  data: Array<object>;
}
