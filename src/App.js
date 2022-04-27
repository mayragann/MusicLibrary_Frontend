import React, { useState, useEffect } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import axios from 'axios';



function App() {
  const [songs, setSongs] = useState ([])
  useEffect(() => {
    getAllSongs();
  }, []); 
  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/music/')
    setSongs(response.data)
  }
  return (
    <div>
      <h1>Hello!</h1>
      <DisplayMusic parentSongs={songs}/>
    </div>
  );
}
export default App;
