# One Piece Sagas

A React application that allows users to explore and search through the various sagas of the popular anime and manga series, One Piece. The app fetches data from an external API and provides an interactive interface for users to search, filter, and view the list of sagas.

## Features

- **Search and Filter:** Search for specific sagas by title and filter the results dynamically.
- **Data Fetching:** Fetch saga data from an external API with real-time loading indicators.
- **Error Handling:** Display error messages if data fails to load.
- **Reusable Components:** Structured code with reusable components like `SearchInput`, `SagaList`, and `LoadingError`.
- **Performance Optimization:** Optimized rendering using hooks such as `useMemo` and `useCallback`.

## Technologies Used

- **React**: Frontend library for building interactive user interfaces.
- **TypeScript**: Strongly typed JavaScript for improved code quality.
- **Hooks**: Including `useState`, `useReducer`, `useEffect`, `useRef`, `useCallback`, and `useMemo` for state management and performance optimization.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/josmel/react-app-one-piece.git
   ```

2. Install dependencies:

   ```bash
    cd one-piece-sagas
    npm install
   ```

3. Start the development server::

   ```bash
    npm start
   ```

4. Open your browser and visit http://localhost:3000 to see the app in action.

Future Enhancements
Add pagination for large data sets.
Improve the UI/UX with animations and better styles.
Implement dark mode.
