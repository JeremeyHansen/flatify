import FlatifyLogo from '../assets/FlatifyLogo.jpg';


function NavBar(){
    return (
    <div>
        <img src={FlatifyLogo} alt='Flatify'/>
        <h2>Home</h2>
        <h2>All Music</h2>
        <h2>Saved Music</h2>
    </div>
    )
};

export default NavBar;