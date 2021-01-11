import React from 'react'
import "./menu.css";
import {Link} from 'react-router-dom';
const Menu=()=>{
return(<React.Fragment>
    <div>
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            
        </ul>
    </div>
</React.Fragment>)
}
export default Menu;