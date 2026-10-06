import { useState } from "react";
function SearchBar({ onSearch, onReset }) {
  const [searchInput, setSearchInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput, locationInput);
  };

  const handleResetClick = () => {
    setSearchInput("");
    setLocationInput("");
    onReset();
  };

  return (
    <section className="search-banner">
      <div className="search-banner-content">
        <h1>Find Your Dream Job Today</h1>
        <p>Explore thousands of job opportunities from top companies</p>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <div className="input-group">
            <span className="input-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by company or skill"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <div className="input-group">
            <span className="input-icon">📍</span>
            <input
              type="text"
              placeholder="Enter location"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
          </div>
          <div className="search-buttons">
            <button type="submit" className="search-btn">Search Jobs</button>
            <button type="button" onClick={handleResetClick} className="reset-btn">Reset</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchBar;
