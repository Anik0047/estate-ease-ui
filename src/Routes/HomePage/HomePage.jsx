import SearchBar from '../../components/SearchBar/SearchBar'
import './HomePage.scss'

function HomePage(){
  return (
    <div className='homePage'>
        <div className='textContainer'>
            <div className="wrapper">
                <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                <p>EstateEase suggests a smooth and hassle-free experience in     dealing with real estate. The name combines Estate, referring to    property, and Ease, indicating simplicity and convenience.</p>
                <SearchBar></SearchBar>
                <div className="boxes">
                  <div className="box">
                    <h1>16+</h1>
                    <h2>Years of Experience</h2>
                  </div>
                  <div className="box">
                    <h1>200</h1>
                    <h2>Award Gained</h2>
                  </div>
                  <div className="box">
                    <h1>1200+</h1>
                    <h2>Property Ready</h2>
                  </div>
                </div>
            </div>
        </div>
        <div className='imgContainer'>
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}

export default HomePage