import React from "react";

function Search({searchTerm, onChangeSearch}) {

function handleSearch(event){
  onChangeSearch(event.target.value)
}

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearch} value={searchTerm} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
