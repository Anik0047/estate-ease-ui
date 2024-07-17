import Navbar from "./components/Navbar/Navbar"
import "./layout.scss"
import HomePage from "./Routes/HomePage/HomePage"

function App() {
  

  return (
    <div className="layout">
      <div className="navbar">
        <Navbar></Navbar>
      </div>
      <div className="content">
        <HomePage></HomePage>
      </div>
    </div>
  )
}

export default App
