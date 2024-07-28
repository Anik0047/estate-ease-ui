import { useState } from 'react'
import './SearchBar.scss'


const types = ["buy", "rent"];

function SearchBar(){

    const [query,setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:0,
        maxPrice:0,
    });


    const switchType = (value) =>{
        console.log(value);
        setQuery((prev) => ({ ...prev, type: value}));
    }

  return (
    
  )
}

export default SearchBar