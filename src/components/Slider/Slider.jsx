import './Slider.scss'

function Slider({images}){
return (
    <div className='slider'>
      <div className="bigImage">
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image,index) => (
          <img src={image} key={index}/>
        ))}
      </div>
    </div>
  )
}
export default Slider