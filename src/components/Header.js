import { Link } from "react-router-dom";
import OneClick from "../assets/OneClick.png"

const Title= () =>{
    return (
        <img 
        className="logo"
        alt="logo"
        src={OneClick}
        />   
         );
};

const Header=() => {
return (
    <div className="header">
    <Title />
    <div className="nav-items">
    <ul className="list">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link>Contact Us</Link></li>
    </ul>
    </div>
    </div>
);
};

export default Header;