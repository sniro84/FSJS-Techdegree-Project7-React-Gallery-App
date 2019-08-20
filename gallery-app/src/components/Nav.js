import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => (
    <div>
        <ul>
            <li> 
                <NavLink
                     to="/sunsets" 
                     onClick={ () => props.performSearch("sunsets")} > Sunsets 
                </NavLink>
            </li>

            <li>
                <NavLink 
                     to="/waterfalls"
                     onClick={ () => props.performSearch("waterfalls")} > Waterfalls 
                </NavLink> 
            </li>

            <li>
                <NavLink
                     to="/rainbows"
                     onClick={ () => props.performSearch("rainbows")} > Rainbows
                </NavLink> 
            </li>
        </ul>   
    </div>    
);

export default Nav;