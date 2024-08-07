import { MapContainer, TileLayer } from 'react-leaflet'
import './Map.scss'
import "leaflet/dist/leaflet.css"
import PinPoint from '../PinPoint/PinPoint'

function Map({items}){
  return (
    <MapContainer center={[51.528607, -1.90269]} zoom={6} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
        <PinPoint key={item.id} item={item}></PinPoint>
    ))}
  </MapContainer>
  )
}

export default Map