export const CHARACTERS: string = 'CHARACTERS';
export const CHARACTERS_SUCCESS: string = 'CHARACTERS_SUCCESS';
export const CHARACTERS_FAILED: string = 'CHARACTERS_FAILED';

export interface Action {
  type: string;
  data: any;
  message?: string;
}

export interface State {
  data: any;
  isLoading: boolean;
}
