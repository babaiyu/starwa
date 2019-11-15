import { combineReducers } from 'redux';

// List State
import moviesReducer from './movies/reducer';
import charactersReducer from './characters/reducer';
import planetsReducer from './planets/reducer';
import starshipsReducer from './starships/reducer';
import vehiclesReducer from './vehicles/reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  characters: charactersReducer,
  planets: planetsReducer,
  starships: starshipsReducer,
  vehicles: vehiclesReducer
});

// AutoComplete Type the Redux State
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
