import { Action } from "./actions";

export type State = {
  sagas: string[];
  filters: string[];
  search: string;
  loading: boolean;
  error: string | null;
};

export const initialState: State = {
  sagas: [],
  filters: [],
  search: "",
  loading: false,
  error: null,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_SAGAS":
      return { ...state, sagas: action.payload };
    case "SET_FILTERS":
      return { ...state, filters: action.payload };
    case "SET_SEARCH":
      return { ...state, search: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
