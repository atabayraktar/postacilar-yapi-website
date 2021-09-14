import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
const Mapx = () => {
    return (
        <MapContainer center={[40.13490802902217, 26.405510194048688]} zoom={12} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYnJ0a3RsIiwiYSI6ImNrdGp1ZTM0MDFmdDcybm51ZHpvaTVkMXIifQ.haX99p2i7tzIU8YoIIuNyA`}
                attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
            />
            <Marker
                position={[40.109646, 26.404162]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Lotus
        </Popup>
            </Marker>
            <Marker
                position={[40.103496, 26.404525]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Prestij
        </Popup>
            </Marker>
            <Marker
                position={[40.104182, 26.404752]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Nova
        </Popup>
            </Marker>
            <Marker
                position={[40.165648, 26.412886]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar İdil Evleri
        </Popup>
            </Marker>
            <Marker
                position={[40.164592, 26.422446]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Nilüfer Evleri
        </Popup>
            </Marker>
            <Marker
                position={[40.13490802902217, 26.405510194048688]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Yakamoz Evleri
        </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Mapx