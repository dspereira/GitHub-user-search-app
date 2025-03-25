import "./App.css"
import Main from "./components/layout/Main"
import Section from "./components/layout/Section"
import SearchBar from "./components/ui/SearchBar"
import ThemeSwitcher from "./components/ui/ThemeSwitcher"
import UserProfile from "./components/ui/UserProfile"
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
            <SearchBar onUserProfileUpdate={setUserProfileData}/>
          </section>
          <section>
            <UserProfile userProfileData={userProfileData}/>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
