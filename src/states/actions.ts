export type Action =
  | { type: "SET_SAGAS"; payload: string[] }
  | { type: "SET_FILTERS"; payload: string[] }
  | { type: "SET_SEARCH"; payload: string }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

export const setSagas = (sagas: string[]): Action => ({
  type: "SET_SAGAS",
  payload: sagas,
});

export const setFilters = (filters: string[]): Action => ({
  type: "SET_FILTERS",
  payload: filters,
});

export const setSearch = (search: string): Action => ({
  type: "SET_SEARCH",
  payload: search,
});

export const setLoading = (loading: boolean): Action => ({
  type: "SET_LOADING",
  payload: loading,
});

export const setError = (error: string | null): Action => ({
  type: "SET_ERROR",
  payload: error,
});
