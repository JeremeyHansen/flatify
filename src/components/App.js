import React, { useEffect, useState } from 'react';
import MusicContainer from './MusicContainer';
import NavBar from './NavBar';
import Search from './Search';
import SavedMusicContainer from './SavedMusicContainer';



function App() {
  const CLIENT_ID = "b9cd3b08f037434b98664895837ca0e0"
  const REDIRECT_URI = "http://localhost:3000"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");
  const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const hash = window.location.hash     //set hash equal to information in url
    let token = window.localStorage.getItem("token")

    //If there is no token and there is a url, then get the token from the url
    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

      window.location.hash = ""
      window.localStorage.setItem("token", token)
    }

    setToken(token)

  }, [])

  function searchArtists(e) {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=artist&include_external=audio`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => setArtists(data.artists.items))
  }


  const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
  }

  return (
    <div>
      <NavBar />
      {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login to Spotify</a>
        : 
        <button onClick={logout}>Logout</button>}

      {token ?
        <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={"submit"}>Search</button>
        </form>

        : <h2>Please login</h2>
        }

  
        <Search />
        {artists.map((artist) => <MusicContainer key={artist.id} artist={artist} token={token} />)}
        <SavedMusicContainer />
      
    </div>
  );
}

export default App;
