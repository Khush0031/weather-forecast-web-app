import { useState } from "react";

/* eslint-disable react/prop-types */

function Search({ query, setQuery, search }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [citySuggestions, setCitySuggestions] = useState([]);

  const allCitySuggestions = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Varanasi",
  ]; // All city names

  // Handle key press for "Enter" key
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      search(e);
      e.target.value = ""; // Clear input after searching
      setShowDropdown(false); // Close dropdown
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setShowDropdown(true); // Show dropdown when typing

    if (value) {
      setLoading(true); // Start loading
      
      // Simulate an API call
      setTimeout(() => {
        const filteredCities = allCitySuggestions.filter((city) =>
          city.toLowerCase().includes(value.toLowerCase())
        );
        setCitySuggestions(filteredCities);
        setLoading(false); // End loading
      }, 500); // Simulate loading time
    } else {
      setCitySuggestions([]); // Clear suggestions if input is empty
      setLoading(false);
    }
  };

  // Handle city selection
  const handleCitySelect = (city) => {
    setQuery(city);
    setShowDropdown(false); // Close dropdown after selection
  };

  // Prevent dropdown from closing too early when selecting a city
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevents blur until after selection
  };

  // Handle input blur to hide dropdown
  const handleBlur = () => {
    setTimeout(() => {
      setShowDropdown(false); // Delayed closing of the dropdown
    }, 200);
  };

  return (
    <div className="search">
      <input
        id="search"
        type="text"
        className="city-search"
        placeholder="Enter city name"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onFocus={() => setShowDropdown(true)} // Open dropdown on focus
        onClick={()=>setShowDropdown(true)}
        onBlur={handleBlur} // Hide dropdown on blur
      />
      <button onClick={search}>🔎</button>

      {showDropdown && (
        <div className="dropdown">
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            citySuggestions.map((city, index) => (
              <div
                key={index}
                className="dropdown-item"
                onMouseDown={handleMouseDown} // Prevent blur before selection
                onClick={() => handleCitySelect(city)} // Select city on click
              >
                {city}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
