import React from 'react';
import {Link} from 'react-router-dom';
//import'./App.css';

function Nav(){
    const navStyle=
        {
            color:'white'
        };
    return(
        
        
            <nav>
            
            <ul className="nav-links">
             <Link style={navStyle} to="/about">   
            <li>Add Friends</li>
            </Link>
            <Link style={navStyle} to="/Login" >
            <li >Yours Friends</li>
            </Link>
            </ul>

            </nav>
            
         

        
    );
}
export default Nav;