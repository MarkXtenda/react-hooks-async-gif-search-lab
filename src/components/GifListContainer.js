import React, {useEffect, useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifArray, setGifArray] = useState([])
    const [search, setSeach] = useState("animals")

    function handleSearch(event) {
        event.preventDefault()
        if (event.target.type === "submit") {
            setSeach(event.target.previousElementSibling.value)
        }
    }
    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=ySee3GgGR006E5e29HXkO96cI5nBMVfo&rating=g`)
        .then(j=>j.json()).then(d=>{
            setGifArray(d.data)
            console.log(d)
        })
    },[search])

    const gifRender = gifArray.filter((gif, index)=>{
        if (index < 3) {
            return true
        }
    })
    return(<div>
        <GifSearch search = {handleSearch}></GifSearch>
        <GifList gifs={gifRender}></GifList>
    </div>)
}

export default GifListContainer