import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from 'leaflet';
import { useApp } from '../context/AppContext';


const Mapx = () => {
    const { theme } = useApp();
    const isLight = theme === 'light';
    const tileUrl = isLight
        ? "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.webp"
        : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.webp";
    const mapFilter = isLight
        ? "sepia(0.5) hue-rotate(320deg) saturate(0.7) brightness(0.97)"
        : "sepia(0.55) hue-rotate(320deg) saturate(1.1) brightness(1.1)";
    const pinFill = isLight ? '#b8977e' : '#1a1a1a';
    const pinStroke = isLight ? '#8a6a58' : '#555';
    const pinCenter = isLight ? '#fff' : '#888';
    const icon = L.divIcon({
        className: '',
        html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 41" width="25" height="41">
            <path d="M12.5 0C5.596 0 0 5.596 0 12.5c0 9.375 12.5 28.5 12.5 28.5S25 21.875 25 12.5C25 5.596 19.404 0 12.5 0z" fill="${pinFill}" stroke="${pinStroke}" stroke-width="1"/>
            <circle cx="12.5" cy="12.5" r="4.5" fill="${pinCenter}"/>
        </svg>`,
        iconSize: [10, 16],
        iconAnchor: [5, 16],
        popupAnchor: [0, -16],
    });

    return (
        <MapContainer center={[40.13490802902217, 26.405510194048688]} zoom={12} scrollWheelZoom={false} style={{ height: "100%", width: "100%", filter: mapFilter }}>
            <TileLayer
                url={tileUrl}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <Marker
                icon={icon}
                position={[40.109646, 26.404162]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Lotus
        </Popup>
            </Marker>
            <Marker
                icon={icon}
                position={[40.103496, 26.404525]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Prestige
        </Popup>
            </Marker>
            <Marker
                icon={icon}
                position={[40.104182, 26.404752]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Nova
        </Popup>
            </Marker>
            <Marker
                icon={icon}
                position={[40.165648, 26.412886]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar İdil Evleri
        </Popup>
            </Marker>
            <Marker
                icon={icon}
                position={[40.164592, 26.422446]}
                draggable={true}
                animate={true}
            >
                <Popup>
                    Postacılar Nilüfer Evleri
        </Popup>
            </Marker>
            <Marker
                icon={icon}
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