import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Corriger les icônes Leaflet dans React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function App() {
  useEffect(() => {
    document.title = "SIG_TF_Eljadida";
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <h2 style={{ textAlign: "center" }}>🗺️ SIG Titres Fonciers El Jadida</h2>
      <MapContainer center={[33.25, -8.5]} zoom={13} style={{ height: "90%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={[33.25, -8.5]}>
          <Popup>Centre d'El Jadida</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}