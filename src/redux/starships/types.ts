export const STARSHIPS: string = 'STARSHIPS';
export const STARSHIPS_SUCCESS: string = 'STARSHIPS_SUCCESS';
export const STARSHIPS_FAILED: string = 'STARSHIPS_FAILED';

export interface Action {
  type: string;
  data: any;
  message?: string;
}

export interface State {
  data: any;
  isLoading: boolean;
}
