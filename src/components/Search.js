import React from "react";

const Search = ({ label, handleSearch }) => {
  return (
    <div className="d-flex flex-column p-3 search-form bg-light rounded shadow-sm my-3">
      <label htmlFor="search" className="form-label mb-2 fw-bold text-primary">
        {label}
      </label>
      <div className="input-group form-control">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          onClick={(e) => (e.target.value = "")}
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
