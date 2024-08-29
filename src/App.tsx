import { useEffect, useRef, useReducer, useMemo, useCallback } from "react";
import "./App.css";
import SearchInput from "./components/SearchInput";
import SagaList from "./components/SagaList";
import LoadingError from "./components/LoadingError";
import { reducer, initialState } from "./states/reducer";
import {
  setSagas,
  setFilters,
  setSearch,
  setLoading,
  setError,
} from "./states/actions";

const URL = "https://api.api-onepiece.com/v2/sagas/en";

type Saga = {
  title: string;
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const fetchData = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const response = await fetch(
        state.search ? `${URL}/search?title=${state.search}` : URL
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data: Saga[] = await response.json();
      const titles = data.map((saga) => saga.title);

      if (state.search) {
        dispatch(setSagas(titles.filter((title) => title !== undefined)));
      } else {
        dispatch(setFilters(titles));
        dispatch(setSagas(titles));
      }
    } catch (err) {
      dispatch(setError(`Failed to load data, ${err}`));
    } finally {
      dispatch(setLoading(false));
    }
  }, [state.search]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredSagas = useMemo(() => {
    return state.sagas.filter((saga) =>
      saga.toLowerCase().includes(state.search.toLowerCase())
    );
  }, [state.sagas, state.search]);

  return (
    <div>
      <h1>One Piece Sagas</h1>

      <select
        onChange={(e) => dispatch(setSearch(e.target.value))}
        value={state.search}
      >
        <option value="">Select a Saga</option>
        {state.filters.map((filter, index) => (
          <option key={index} value={filter}>
            {filter}
          </option>
        ))}
      </select>

      <LoadingError loading={state.loading} error={state.error} />

      <SearchInput
        ref={inputRef}
        search={state.search}
        onChange={(value) => dispatch(setSearch(value))}
      />

      <SagaList sagas={filteredSagas} />
    </div>
  );
}

export default App;
