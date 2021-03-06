import "./DisplayMusic.css"

const DisplayMusic = (props) => {

    return (
        <table className="table table-striped">
            <thead className="dark-header">
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Release Date</th>
                    <th>Genre</th>
                    <th>Likes</th>
                </tr>
            </thead>
            <tbody>
                {props.parentSongs.map((song) => {
                    return (
                        <tr scope="row" key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.release_date}</td>
                            <td>{song.genre}</td>
                            <td>{song.likes}</td>
                        </tr>
                    );
                    })}
                    
            </tbody>
        </table>
    )
}

export default DisplayMusic;