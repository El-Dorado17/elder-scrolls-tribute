//? components ==> views ==> App.js ==> index.js ==> Browser renders 



// This module holds the routes. /, /history, /games, etc

import React from "react"
import { Home } from "../home/Home.js"
import { Games } from "../games/Games.js"
import { History } from "../history/History.js"

// import { Contact } from "../contact/Contact.js"
import { Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {
    return <>
        <Routes>        
            <Route path="/" element={<Home/>}/>
            <Route path="/Resume" element={<Games/>}/>
            <Route path="/About" element={<History/>}/>
            <Route path="/Projects" element={<Gallery/>}/>
            <Route path="/Photos" element={<Quiz/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    </>
}