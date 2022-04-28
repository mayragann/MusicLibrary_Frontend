import React, { useState } from "react";
import "./SearchBar.css"

const SearchBar = (props) => {
  const [songSearch, setSongSearch, ] = useState("");

  function searchResults(event) {
    event.preventDefault();
    let response = props.songs.filter((song) => {
      if (song.album.includes(songSearch) || song.artist.includes(songSearch) || song.title.includes(songSearch) 
      || song.genre.includes(songSearch) || song.release_date.includes(songSearch)){ 
        return true;
      }
  });
    console.log(response)
    props.setSongs(response);
  }

  return (
    <div >

      <form onSubmit={searchResults}>
        <div>
          <input className="search-bar-input"
            type="text"
            value={songSearch}
            onChange={(e) => setSongSearch(e.target.value)}
            placeholder="Search by: Title, Artist, Album, Release Date and Genre"
          />{" "}
          <button className="submit-button" type="submit">Search</button>
        </div>  
      </form>
    </div>
  );
};

export default SearchBar;