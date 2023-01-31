import "./navbar.css";
import{Link} from"react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarConatainer">
        <Link className="logo" to='/'>
          <span>MuneTravel.com</span>
        </Link>
        <div className="navitems">
          <button className="navButton">Register</button>
          <button className="navButton">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
