function MusicCard() {

  const song = 
    {
      "id": 1,
      "name": "Dsnt Rlly Mttr",
      "artist": "Luxage",
      "genre": "Future Bass",
      "pictureUrl": "https://lastfm.freetls.fastly.net/i/u/ar0/1805564160a5ea26eed7a3f563162f7f.jpg",
      "instagram": "luxagemusic",
      "spotifyUrl": "https://open.spotify.com/artist/1ZUN1O63nFh4ajvR294QMW?si=GSS3_lLHTVyqmFQCRASrTQ"
    }

  return (
    <li className="cards__item">
      <div className="card">
        <img
        //   onClick = {handleClick}
          src={song.pictureUrl}
          alt={song.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{song.name}</div>
          <div className="card__detail">
            <p>{song.instagram}</p>
            <a href={song.spotiifyUrl}>Spotify</a>
          </div>
        </div>
      </div>
    </li>
  );
}

export default MusicCard;
