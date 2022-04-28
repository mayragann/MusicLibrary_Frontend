import React, { useState } from 'react';
import "./CreateSong.css"

const CreateSong = (props) => {
    const [title, setTitle] = useState(0)
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [genre, setGenre] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
            likes: 0
        }
        console.log(newSong)
        props.createNewSong(newSong)

    }

    return (
        <form onSubmit={handleSubmit}>
            <div >
                <label>Title: </label>
                <input className='create-bar-input' type='text' onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist: </label>
                <input className='create-bar-input' type='text' onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div>
                <label>Album: </label>
                <input className='create-bar-input' type='text' onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div>
                <label>Release Date: </label>
                <input className='create-bar-input' type='date' onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div>
                <label>Genre: </label>
                <input className='create-bar-input' type='text' onChange={(event) => setGenre(event.target.value)} />
            </div>
            <button className='submit-button'>Create</button><button  className='submit-button reset-button' type='reset'>Reset</button>
        </form>
    );

}
export default CreateSong;