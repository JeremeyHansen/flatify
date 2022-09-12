import MusicContainer from './MusicContainer';
import NavBar from './NavBar';
import Search from './Search';
import SavedMusicContainer from './SavedMusicContainer';



function App() {
  return (
    <div>
      <NavBar />
      <Search />
      <MusicContainer />
      <SavedMusicContainer />
    </div>
  );
}

export default App;
