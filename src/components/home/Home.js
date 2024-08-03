//? components ==> views ==> App.js ==> index.js ==> Browser renders 

//HOME JS
/*

WELCOME/Welcome

<<<image>>>

"This is a small passion project dedicated to The Elder Scrolls games
to keep my skills sharp and learn more about TES universe and making
a resource for others to learn as well.

:)
:D
Will work on this soon; promise! 
Following steps are to install tailwind and keep building home page

Look around, learn, explore, and let me know what you think!"
*/

import React from "react";
import "./Home.css"

export const Home =()=>{

    return(
        <section>
            <div className="body">
                <h1>Welcome! <br /> Drem Yol Lok</h1>

                <br/>
                <br/>
                <div className="image-contaner">
                    <img className="image1" src="https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg" alt="Skyrim-cover"/>
                </div>
                <br/>
                <br/>
                <h5>Thank you for checking out my passion project dedicated to The Elder Scrolls games!
This nook of the internet's purpose is to keep my coding skills sharp while also learning more about The Elder Scrolls Universe. Read & explore as long as you'd like, or just gander at the pretty pictures in the Gallery.

Feedback, Gallery contributions, & Blades slander are always welcome! 
    Talos guide you,
        -Ely</h5>
            </div>
        </section>
    )
}