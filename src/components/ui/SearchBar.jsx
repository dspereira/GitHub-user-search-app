import "./SearchBar.css";
import icon from "../../assets/icon-search.svg";
import { useEffect, useState } from "react";
import processApiData from "../utils/dataUtils";


const apiUrl = "https://api.github.com/users/";

function SearchBar({ className, onUserProfileUpdate }) {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasNoData, setHasNoData] = useState(false);

  async function handleCallApi(url) {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok)
        setHasNoData(true);
      else {
        setHasNoData(false);
        onUserProfileUpdate(processApiData(data));
      }
    }
    catch(e) {
      console.log("error: ", e);
      onUserProfileUpdate("error");
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleCallApi(`${apiUrl}octocat`);
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    handleCallApi(`${apiUrl}${username}`);
  };


  return (
    <div className={`search-bar-container ${className}`}>
      <form 
        onSubmit={handleSubmit}
      >
        <input 
          className= {`search-bar ${hasNoData ? "no-result-padding-adjustment" : "" }`}
          type="text"
          placeholder="Search GitHub username…"
          aria-label="Search"
          onChange={e => {
              setUsername(e.target.value);
              setHasNoData(false);
            }
          }
          maxLength="50"
          ></input>
        <button
          disabled={isLoading}
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
        <span className="no-results">
          {!hasNoData || "No Results"}
        </span>
      </form>
    </div>
  );
}

export default SearchBar;