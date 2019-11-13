import { combineReducers } from 'redux';

// List State
import exampleReducer from './example/reducer';
import moviesReducer from './movies/reducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  movies: moviesReducer
});

// AutoComplete Type the Redux State
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
