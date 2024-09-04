// src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css'; // Ensure you create this file for styling

function SearchBar({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar mb-5">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          placeholder="Search for jobs or companies..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
