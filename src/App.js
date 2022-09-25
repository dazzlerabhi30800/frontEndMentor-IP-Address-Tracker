import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Components/Main';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import Map from './Components/Map';

function App() {
  const [info, setInfo] = useState([])
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');

  const fetchLocation = async (ip) => {
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_cbFrRvCQf8x7PL9FASi1jvf3LomDr&ipAddress=${ip}`;
    const data = await fetch(url);
    let parsedData = await data.json();
    setIp(parsedData.ip)
    setIsp(parsedData.isp);
    setLocation(parsedData.location)
    setTimezone(parsedData.location.timezone)
  }

  // useEffect(() => {
  //   fetchLocation('103.49.59.243');
  // }, [isp])

  const handleIpInput = async (input) => {
    if (input !== "" && input !== null) {
      fetchLocation(input);
    }
    else {
      alert('Please input valid IP Address');
    }
  }

  return (
    <div className="App">
      <Main ip={ip} location={location} timezone={timezone} isp={isp} handleIpInput={handleIpInput} />
      <Map />
    </div>
  );
}

export default App;
