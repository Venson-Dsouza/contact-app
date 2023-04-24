import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type Country = {
  countryInfo: any;
  lat: number;
  long: number;
  country: string;
  active: number;
  deaths: number;
  recovered: number;
};

const ChartMap = () => {
  const { data, isLoading, error } = useQuery<Country[]>(
    "countries",
    async () => {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
      if (!response.ok) {
        throw new Error("Failed to fetch countries data");
      }
      const data: Country[] = await response.json();
      return data;
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  var myIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
    iconSize: [15, 22],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });
  return (
    <>
      <MapContainer
        center={[33, 65]}
        zoom={3}
        scrollWheelZoom={false}
        style={{
          height: "50vh",
          borderColor: "ButtonShadow",
          borderWidth: 10,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data?.map((country) => (
          <Marker
            icon={myIcon}
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup maxWidth={500}>
              <h1 style={{ fontWeight: "bold", fontSize: 20 }}>
                {country.country}
              </h1>
              <br></br>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>Active Cases:</h3>
                <p style={{ color: "purple", paddingLeft: 5 }}>
                  {country.active.toLocaleString()}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>Deaths:</h3>
                <p style={{ color: "red", paddingLeft: 5 }}>
                  {country.deaths.toLocaleString()}
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>Recovered:</h3>
                <p style={{ color: "green", paddingLeft: 5 }}>
                  {country.recovered.toLocaleString()}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default ChartMap;
