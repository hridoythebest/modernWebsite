import { Footer, Hero, LeftDetails, Navbar, RightDetails } from "./components"

function App() {

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <div className="bg-gradient-to-b from-black via-blue-500 to-black h-[1000px]">
      <LeftDetails/>
      <RightDetails/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
