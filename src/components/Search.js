import React from "react";

const Search = ({ label }) => {
  return (
    <div className="d-flex flex-column p-3 search-form bg-light rounded shadow-sm my-3">
      <label htmlFor="search" className="form-label mb-2 fw-bold text-primary">
        {label}
      </label>
      <div className="input-group">
        <input
          id="search"
          type="text"
          className="form-control"
          placeholder="Type to search..."
          style={{ borderRadius: "0.5rem" }}
        />
      </div>
    </div>
  );
};

export default Search;
