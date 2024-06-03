//? components ==> views ==> App.js ==> index.js ==> Browser renders 

//HOME JS
/*

WELCOME/Welcome

<<<image>>>

"This is a small passion project dedicated to The Elder Scrolls games
to keep my skills sharp and learn more about TES universe and making
a resource for others to learn as well.

:)

Look around, learn, explore, and let me know what you think!"
*/

import React from "react";

export const Home =()=>{

    return(
        <section>
            <div>
                <h1>Welcome!</h1>

                <br/>
                <br/>
                <img src="https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg"/>
                <br/>
                <br/>
                <h5>This is a small passion project dedicated to The Elder Scrolls games to keep my skills sharp and learn more about TES universe while making a resource for others to learn as well.

Look around, learn, explore, and let me know what you think! -Ely</h5>
            </div>
        </section>
    )
}