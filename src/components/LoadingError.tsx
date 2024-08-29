import React from "react";

interface LoadingErrorProps {
  loading: boolean;
  error: string | null;
}

const LoadingError: React.FC<LoadingErrorProps> = ({ loading, error }) => {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default LoadingError;
