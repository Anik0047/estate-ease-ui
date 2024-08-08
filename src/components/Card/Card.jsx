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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente quis exercitationem veritatis debitis laborum voluptatibus iste cupiditate, voluptatem nemo aut vel hic labore non voluptates nihil numquam libero laudantium ratione error? Alias nostrum soluta id eaque, exercitationem, obcaecati ab commodi, perspiciatis fuga voluptate deleniti enim? At modi numquam reiciendis accusamus ipsam quasi amet sequi corporis soluta optio, minus perspiciatis ad nesciunt ipsum esse officia officiis. Eius dolor nemo placeat possimus doloremque dolorum ipsum recusandae. Aperiam nostrum facilis earum modi quisquam. Expedita dolorem porro qui modi nisi, voluptatum perferendis doloremque at voluptatem, minus rerum maxime sit culpa eum quisquam accusamus deleniti tempora praesentium nulla adipisci fuga excepturi. Nemo necessitatibus quis fugiat adipisci perspiciatis placeat in dignissimos voluptate voluptatem quos quasi, minima non alias facilis nulla corrupti totam repellat expedita, provident odit aliquam, ullam soluta quae. Dolor illum, ipsa quisquam repellendus, ad illo cumque ratione quidem ex vel, eaque nobis? Mollitia omnis ab enim, doloribus fugiat placeat asperiores delectus sequi laudantium quasi quam recusandae, quo quaerat neque odio expedita eius commodi deleniti minus! Quo expedita dolor atque recusandae odit inventore eum molestias fugiat autem molestiae, tenetur incidunt amet, quam consectetur est ea dolore nulla tempore maiores laborum blanditiis quasi placeat? Minima!</p>
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente quis exercitationem veritatis debitis laborum voluptatibus iste cupiditate, voluptatem nemo aut vel hic labore non voluptates nihil numquam libero laudantium ratione error? Alias nostrum soluta id eaque, exercitationem, obcaecati ab commodi, perspiciatis fuga voluptate deleniti enim? At modi numquam reiciendis accusamus ipsam quasi amet sequi corporis soluta optio, minus perspiciatis ad nesciunt ipsum esse officia officiis. Eius dolor nemo placeat possimus doloremque dolorum ipsum recusandae. Aperiam nostrum facilis earum modi quisquam. Expedita dolorem porro qui modi nisi, voluptatum perferendis doloremque at voluptatem, minus rerum maxime sit culpa eum quisquam accusamus deleniti tempora praesentium nulla adipisci fuga excepturi. Nemo necessitatibus quis fugiat adipisci perspiciatis placeat in dignissimos voluptate voluptatem quos quasi, minima non alias facilis nulla corrupti totam repellat expedita, provident odit aliquam, ullam soluta quae. Dolor illum, ipsa quisquam repellendus, ad illo cumque ratione quidem ex vel, eaque nobis? Mollitia omnis ab enim, doloribus fugiat placeat asperiores delectus sequi laudantium quasi quam recusandae, quo quaerat neque odio expedita eius commodi deleniti minus! Quo expedita dolor atque recusandae odit inventore eum molestias fugiat autem molestiae, tenetur incidunt amet, quam consectetur est ea dolore nulla tempore maiores laborum blanditiis quasi placeat? Minima!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card