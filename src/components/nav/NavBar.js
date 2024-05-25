import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul>
            <li> <Link to="/"> Home </Link> </li>
            {/* <li> <Link to="/Games"> Resume </Link> </li> {/*No Folder/view yet*/ }
            {/* <li> <Link to="/Gallery"> About </Link> </li>
            <li> <Link to="/History"> Projects </Link> </li> */}
            {/* <li> <Link to="/Quiz"> Quiz </Link> </li> */}
            {/* <li> <Link to="/Contact"> Contact </Link> </li> */}
        </ul>
    )
}