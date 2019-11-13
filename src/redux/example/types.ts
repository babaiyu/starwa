// Generate Variable | For Action & Reducer
export const EXAMPLE: string = 'EXAMPLE';
export const EXAMPLE_SUCCESS: string = 'EXAMPLE_SUCCESS';
export const EXAMPLE_FAILED: string = 'EXAMPLE_FAILED';

// Generate Action Reducer
export interface Action {
  type: string;
  data: any[];
  message?: string;
}

// Generate State Reducer
export interface State {
  data: any[];
  isLoading: boolean;
}
