import React from "react";

interface SagaListProps {
  sagas: string[];
}

const SagaList: React.FC<SagaListProps> = ({ sagas }) => {
  return (
    <div className="card">
      {sagas.length > 0 ? (
        sagas.map((saga, index) => <ul key={index}>{saga}</ul>)
      ) : (
        <p>No sagas found</p>
      )}
    </div>
  );
};

export default SagaList;
