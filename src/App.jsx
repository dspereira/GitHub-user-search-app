import "./App.css"
import Main from "./components/layout/Main"
import Section from "./components/layout/Section"
import SearchBar from "./components/ui/SearchBar"
import UserProfile from "./components/ui/UserProfile"
import { useState } from "react";

function App() {
  const [userProfileData, setUserProfileData] = useState(null);

  return (
    <>
      <div className="container">
        <Main>
          <Section>
            <SearchBar onUserProfileUpdate={setUserProfileData}/>
          </Section>
          <Section>
            <UserProfile userProfileData={userProfileData}/>
          </Section>
        </Main>
      </div>
    </>
  )
}

export default App
