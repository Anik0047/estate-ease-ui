import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import HomePage from "./Routes/HomePage/HomePage"

function App() {
  

  return (
    <div className="layout">
      <Navbar></Navbar>
      <HomePage></HomePage>
    </div>
  )
}

export default App
