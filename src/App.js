import React, { useState, useEffect } from 'react';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import axios from 'axios';
import Navbar from './Components/NavBar/NavBar';
import CreateSong from './Components/CreateSong/CreateSong';
import SearchBar from './Components/SearchBar/SearchBar';
import "./App.css"





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
      <div className='body-background-color'>
      <Navbar />
      <div className='body-container'>
      <SearchBar songs={songs} setSongs={setSongs}/>
      </div>
      <div className='body-container'>
      <DisplayMusic parentSongs={songs}/></div>
      <div className='body-container container'>
      <CreateSong createNewSong={createSong}/></div>
      </div>
    </div>
  );
}
export default App;
