import { NavigationScreenProp, NavigationState } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  actionSelectedMovies: () => void;
  selectedMovies: any;
}

export interface State {
  hideStory: boolean;
  detailMovie: Array<object>;
  detail: Array<object>;
}
