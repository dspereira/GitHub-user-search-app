import "./SearchBar.css";
import icon from "../../assets/icon-search.svg";
import { useState } from "react";


const apiUrl = "https://api.github.com/users/";

function SearchBar() {
    const [username, setUsername] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${apiUrl}${username}`);
            const data = await res.json();
            console.log(data);
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