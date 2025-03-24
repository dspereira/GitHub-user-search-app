import "./SearchBar.css";
import icon from "../../assets/icon-search.svg";
import { useEffect, useState } from "react";
import processApiData from "../utils/dataUtils";


const apiUrl = "https://api.github.com/users/";

function SearchBar({ onUserProfileUpdate  }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch(`${apiUrl}octocat`);
        //const res = await fetch(`${apiUrl}jonasschmedtmann`);
        //const res = await fetch(`${apiUrl}luis-prates`);
        
        const data = await res.json();
        const new_data = processApiData(data);
        if (!new_data.bio) 
          new_data.bio = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.";
        onUserProfileUpdate(new_data);
      }
      catch(e) {
        console.log("error: ", e);
      }
    }
    fetchUserData();
  }, []);


  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch(`${apiUrl}${username}`);
    const data = await res.json();
    onUserProfileUpdate (processApiData(data));
  }
  catch(e) {
    console.log("error: ", e);
  }


  };


  return (
    <div className="search-bar-container">
      <form 
        onSubmit={handleSubmit}
      >
        <input 
          className="search-bar" 
          type="text"
          placeholder="Search GitHub username…"
          aria-label="Search"
          onChange={e => setUsername(e.target.value)}
        ></input>
        <button 
          className="btn"
          type="submit"
        >
            Search
        </button>
        <img
          className="icon-search"
          src={icon}
          alt="Search icon"
        />
      </form>
    </div>
  );
}

export default SearchBar;