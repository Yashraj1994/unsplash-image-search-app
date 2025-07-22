import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  // const handleClick = () => {
  //   onSubmit("car");
  // };
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
    // console.log(term);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  return (
    <div className="searchbar-container">
      <form onSubmit={handleFormSubmit} className="searchbar-form">
        <input
          value={term}
          type="text"
          onChange={handleChange}
          className="searchbar-input"
          placeholder="Search for images..."
        />
      </form>
      {/* onSubmit is form event here & onSubmit at top is a prop with call back function in parent that transports data to parent */}
      {/* <button onClick={handleClick}>Click to Search</button> */}
      {/* if input is taken inside form element..no need of onClick, bcoz, enter after typing in input will trigger onSubmit */}
    </div>
  );
};

export default SearchBar;
