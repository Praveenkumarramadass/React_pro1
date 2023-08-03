import React from "react";
import "./Moose.css"

export default function Moose(){
    return(
        <div>
            <div id="main">
                <h1>Sarah's Favorite Animal</h1>
                <img src="https://cdn.pixabay.com/photo/2012/05/07/12/32/elk-48320_640.png" height="300" width="300"></img>
                <p>My name is Sarah,and my favorite animal is the mosse.<br></br>They can be up to 6.5 feet tall and weight 1200 Pounds.</p>
                <p>If you want to learn more about the moose,check out 
                <a href="https://en.wikipedia.org/wiki/Moose"> its Wikipedia page.</a>
                </p>
                <h2>Moose are awesome because...</h2>
                <ol>
                    <li>They can Swim really well</li>
                    <li>They can make really funny noises</li>
                    <li>They can close their nostrils</li>
                </ol>
                <h2>If I were a moose,I would...</h2>
                <ul>
                    <li>Eat lots of lettuce</li>
                    <li>Carry little animals on my antlers</li>
                    <li>Swim to Alaska</li>
                </ul>

                <h2>Moose Video</h2>
                <iframe width="500" height="300" src="https://www.youtube.com/embed/RHz-i6biCiU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <br></br><hr></hr><br></br>
        </div>
    );
}
