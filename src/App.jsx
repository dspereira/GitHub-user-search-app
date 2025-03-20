import "./App.css"
import Main from "./components/layout/Main"
import Section from "./components/layout/Section"
import SearchBar from "./components/ui/SearchBar"
import UserProfile from "./components/ui/UserProfile"





function App() {
  return (
    <>
      <div className="container">
        <Main>
          <Section>
            <SearchBar />
          </Section>
        </Main>
        {/* <UserProfile /> */}
      </div>
    </>
  )
}

export default App


// function App() {
//   return (
//     <>
//     <Header>
//       <Head />
//     </Header>
//     <Main>
//       <Section>
//         <SearchBar />
//       </Section>
//       <Section>
//       <UserProfile />
//       </Section>
//     </Main>
//     </>
//   )
// }