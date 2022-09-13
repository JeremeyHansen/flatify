import MusicCard from './MusicCard';


function MusicContainer({ artist, token }){
    // console.log(artist)
    // if(artist.images.length > 0){
    //     console.log(artist.images[0].url)
    // }


    function handleClick() {
        const artistData = {
            id: artist.id,
            name: artist.name,
            image: artist.images[0].url,
        }
        fetch("http://localhost:3001/artists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(artistData),
        })
            .then(res => res.json())
            .then(likedArtist => console.log(likedArtist))
    }

    function handleAlbums() {
        fetch(`https://api.spotify.com/v1/search?q=${artist.name}&type=album`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => console.log(data))
      }

    function handleSongs() {
        fetch(`https://api.spotify.com/v1/search?q=${artist.name}&type=track`, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        })
          .then(res => res.json())
          .then(data => console.log(data))
    }


    return (
    <div>
        <ul onClick={handleClick}>
           <h1>{artist.name}</h1>
           <img src={artist.images.length > 0 ? artist.images[0].url : null} />
        </ul>
        <button onClick={handleAlbums}>Get Albums</button>
        <button onClick={handleSongs}>Get Songs</button>
    </div>
    )
};

export default MusicContainer;