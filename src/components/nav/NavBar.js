import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () =>{

    return(
        <ul>
            <li> <Link to="/"> Home </Link> </li>
            <li> <Link to="/Games"> Games </Link> </li> 
            <li> <Link to="/History"> History </Link> </li>
            <li> <Link to="/Gallery"> Gallery </Link> </li>
            <li> <Link to="/Quiz"> Quiz </Link> </li> 
            <li> <Link to="/Contact"> Contact </Link> </li> 
        </ul>
    )
}