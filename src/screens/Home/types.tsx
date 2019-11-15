import { NavigationScreenProp, NavigationState } from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  
  // From Redux
  actionMovies: () => void;
  actionSelectedMovies: (payload: object) => Promise<void>;
  actionCharacters: () => void;
  actionPlanets: () => void;
  actionStarships: () => void;
  actionVehicles: () => void;
  movies: any;
  loadMovies: boolean;
  characters: any;
  loadCharacters: boolean;
  planets: any;
  loadPlanets: boolean;
  starships: any;
  loadStarships: boolean;
  vehicles: any;
  loadVehicles: boolean;

  // From Parse Props
  data: Array<object>;
}

export interface State {
  dataMovie: Array<object>;
  modal: boolean;
  contentModal: object;
}
