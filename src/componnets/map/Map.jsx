import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

const position = [35.7064, 51.3734];

export default function Map({items}) {
  return (
    <MapContainer center={position} zoom={12} scrollWheelZoom={true} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map((item) => (
        <Pin key={item.id} item={item}/>
    ))}
  </MapContainer>
  )
}
