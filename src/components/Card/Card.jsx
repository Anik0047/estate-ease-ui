import { Link } from 'react-router-dom'
import './Card.scss'

function Card({item}){
  return (
    <div className='card'>
      <Link to={`/${item.id}`} className='imageContainer'>
        <img src={item.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className='title'>
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className='address'>
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className='price'>${item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, veritatis impedit. Impedit harum officia enim sit debitis culpa earum voluptatibus ad, velit a alias nulla quod deleniti cupiditate vel. Quia doloremque eaque adipisci. Porro quos nesciunt tempore fugit suscipit laborum doloribus animi, dolorum esse voluptatibus tempora alias consectetur vero dignissimos vel fuga officia delectus a repellat labore ad quasi iure temporibus. Vitae, autem? Dolor, dolore autem! Impedit in animi tempora suscipit totam quod dignissimos adipisci doloribus excepturi nam quasi perferendis commodi est consequatur, repudiandae sit corporis esse mollitia dolore possimus! Odio distinctio earum deleniti, doloribus dolorem quidem alias et reprehenderit!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card