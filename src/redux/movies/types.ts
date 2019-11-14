// Movies
export const MOVIES: string = 'MOVIES';
export const MOVIES_SUCCESS: string = 'MOVIES_SUCCESS';
export const MOVIES_FAILED: string = 'MOVIES_FAILED';

// Selected Movies
export const SELECTED_MOVIES: string = 'SELECTED_MOVIES';

export interface Action {
  type: string;
  data: any;
  message?: string;
}

export interface State {
  data: any;
  selectedMovies: any;
  isLoading: boolean;
}
