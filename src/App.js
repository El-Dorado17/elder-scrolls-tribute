//? components ==> views ==> App.js ==> index.js ==> Browser renders 



//This module will have a function that holds the nav bar and the app views



import { ApplicationViews } from "./components/views/ApplicationViews.js";
import "./App.css"
import { NavBar } from "./components/nav/NavBar.js";


export const App = () => (
  <>
    <NavBar/>
    <ApplicationViews />
  </>
)
