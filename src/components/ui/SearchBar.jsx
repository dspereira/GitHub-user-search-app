import "./SearchBar.css";
import icon from "../../assets/icon-search.svg";
import { useEffect, useState } from "react";
import processApiData from "../utils/dataUtils";


const apiUrl = "https://api.github.com/users/";

function SearchBar({ className, onUserProfileUpdate }) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch(`${apiUrl}octocat`);
        const data = await res.json();
        onUserProfileUpdate (processApiData(data));
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
    <div className={`search-bar-container ${className}`}>
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