import { Footer, Hero, LeftDetails, Navbar, RightDetails } from "./components"

function App() {

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <LeftDetails/>
      <RightDetails/>
      <Footer/>
    </div>
  )
}

export default App
