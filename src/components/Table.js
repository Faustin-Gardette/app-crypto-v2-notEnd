import React from "react";

const Table = () => {
  const tableHeader = ["Crypto", "Prix", "Volume", "ATH"];

  return (
    <section className="table">
      <div className="table-section">
        <h1>{tableHeader}</h1>
      </div>
    </section>
  );
};

export default Table;
