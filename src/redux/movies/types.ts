export const MOVIES: string = 'MOVIES';
export const MOVIES_SUCCESS: string = 'MOVIES_SUCCESS';
export const MOVIES_FAILED: string = 'MOVIES_FAILED';

export interface Action {
  type: string;
  data: any;
  message?: string;
}

export interface State {
  data: any;
  isLoading: boolean;
}
