import React, { useState } from "react";

function TrackList({ track, setPlayMe }){
    const [index, setIndex] = useState([]);

    function handleAdd() {
        console.log(track.artists[0].id, track.name, track.uri)
        setIndex([...index, {
            songName: track.name,
            songUri: track.uri,
        }])
        const songData = {songs:[index]}
        fetch(`http://localhost:3001/artists/${track.artists[0].id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(songData),
        })
            .then(res => res.json())
            .then(updatedArtist => console.log(updatedArtist))
    }

    function playIt() {
        setPlayMe(track.album.uri)
    }

    return (
        <div>
            <img onClick={playIt} src={track.album.images[2].url}/> {track.name} {track.artists[0].name} <button onClick={handleAdd}>Add Song</button>
        </div>
    )
}

export default TrackList;