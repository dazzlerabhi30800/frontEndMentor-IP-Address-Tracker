import React, { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Map from './Components/Map';

function App() {
  const [ip, setIp] = useState('');
  const [location, setLocation] = useState('');
  const [timezone, setTimezone] = useState('');
  const [isp, setIsp] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  // const apiKey = 'at_cbFrRvCQf8x7PL9FASi1jvf3LomDr';
  const apiKey = process.env.REACT_APP_IP_API_KEY;

  const fetchLocation = async (ip) => {
    const url = `https://geo.ipify.org/api/v2/country,city,vpn?apiKey=${apiKey}&ipAddress=${ip}`;
    const data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setIp(parsedData.ip)
    setIsp(parsedData.isp);
    setLocation(parsedData.location)
    setTimezone(parsedData.location.timezone)
    setLatitude(parsedData.location.lat)
    setLongitude(parsedData.location.lng)
  }



  const handleIpInput = async (input) => {
    const ipFormat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    if (input !== "" && ipFormat.test(input)) {
      fetchLocation(input);
    }
    else {
      alert('Please input valid IP Address');
    }
  }

  return (
    <div className="App">
      <Main ip={ip} location={location} timezone={timezone} isp={isp} handleIpInput={handleIpInput} />
      <Map latitudeCoords={latitude} longitudeCoords={longitude} />
    </div>
  );
}

export default App;
