import './Header.css';
import download from '../../assets/images/download.jpg';
import { Link } from "react-router-dom";

const Header=()=>{
    return(<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand"><img width="100" height="50" src={download}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link">  <Link to="/register">Home</Link><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className="nav-link">  <Link to="/about">About Library</Link><span className="sr-only">(current)</span></a>
              </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
          
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to="/">Login</Link></button>
          </form>
        </div>
      </nav>
    </>)
}

export default Header;