import React, { useState } from 'react';
import InfoCard from './InfoCard';
import './style.scss';

const Main = ({ ip, location, timezone, isp, handleIpInput }) => {
    const [ipValue, setIpValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        handleIpInput(ipValue);
        console.log(ipValue);
    }
    const buttonValue = ">";
    return (
        <main>
            <h1 className="heading">IP Address Tracker</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ip"></label>
                <input value={ipValue} onChange={(e) => setIpValue(e.target.value)} type="text" id="ip" name="ip" placeholder='search for any IP address or any domain' />
                <button type="submit">{buttonValue}</button>
            </form>
            <InfoCard ip={ip} location={location} timezone={timezone} isp={isp} />
        </main>
    )
}

export default Main;