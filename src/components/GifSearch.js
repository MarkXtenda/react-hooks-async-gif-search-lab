import React from "react";

function GifSearch({search}) {
    return(
        <form>
            <input onChange={search} type = "text"></input>
            <input onClick={search} type="submit" name="Submit"></input>
        </form>
    )
}

export default GifSearch