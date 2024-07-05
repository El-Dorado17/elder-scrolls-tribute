import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = () =>{

    return(
        <ul className="list">
            <li className="list-item"> <Link to="/"> Home </Link> </li>
            <li className="list-item"> <Link to="/Games"> Games </Link> </li> 
            <li className="list-item"> <Link to="/History"> History </Link> </li>
            <li className="list-item"> <Link to="/Gallery"> Gallery </Link> </li>
            {/* <li className="list-item"> <Link to="/Quiz"> Quiz </Link> </li>  */}
            <li className="list-item"> <Link to="/Contact"> Contact </Link> </li> 
        </ul>
    )
}