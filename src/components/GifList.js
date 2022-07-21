import React from "react";

function GifList({gifs}) {
    const gifList = gifs.map((gif, index)=>(
        <li><img key={index} src = {gif.images.fixed_width.url}></img></li>
    ))
    return(
        <ul>
            {gifList}
        </ul>
    )
}

export default GifList