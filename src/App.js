import React, { useState, useEffect } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import axios from 'axios';
import Navbar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';



function App() {
  const [songs, setSongs] = useState ([])
  const baseURL = 'http://127.0.0.1:8000/music/'
  useEffect(() => {
    getAllSongs();
  }, []); 
  async function getAllSongs(){
    let response = await axios.get(`${baseURL}`)
    setSongs(response.data)
  }
  async function createSong(newSong){
    let response = await axios.post(`${baseURL}`, newSong)
    if(response.status === 201){
      await getAllSongs();
    }
  }
  return (
    <div>
      <Navbar />
      <DisplayMusic parentSongs={songs}/>
      <CreateSong createNewSong={createSong}/>
    </div>
  );
}
export default App;
