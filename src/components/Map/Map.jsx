import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import './Map.scss'
import "leaflet/dist/leaflet.css"

function Map(){
    const position = [22.344009, 91.832913]
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  )
}

export default Map