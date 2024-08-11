import Slider from '../../components/Slider/Slider'
import './SinglePage.scss'
import {singlePostData} from '../../lib/dummydata'

function SinglePage(){
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />
          <div className="top">
            <div className="post">
              <h1>{singlePostData.title}</h1>
              <div className="address">
                <img src="/pin.png" alt="" />
                <span>{singlePostData.address}</span>
              </div>
              <div className="price">${singlePostData.price}</div>
            </div>
            <div className="user"></div>
          </div>
          <div className="bottom"></div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">

        </div>
      </div>
    </div>
  )
}

export default SinglePage