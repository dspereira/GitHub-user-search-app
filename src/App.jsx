import "./App.css"
import SearchBar from "./components/SearchBar"
import ThemeSwitcher from "./components/ThemeSwitcher"
import UserProfile from "./components/UserProfile"
import { useState } from "react";

function App() {
  const [userProfileData, setUserProfileData] = useState(null);

  return (
    <>
      <div className="container">
        
        <header>
          <h1 className="main-title">devfinder</h1>
          <ThemeSwitcher />
        </header>
        <main>
          <section>
            <SearchBar className="shadow" onUserProfileUpdate={setUserProfileData}/>
            <UserProfile className="shadow" userProfileData={userProfileData}/>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
