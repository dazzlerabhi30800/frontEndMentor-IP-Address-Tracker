import React from 'react';

const InfoCard = ({ ip, location, timezone, isp }) => {
    return (
        <div className="card--wrapper">
            <div className="card">
                <h2>IP ADDRESS</h2>
                <span>{ip ? ip : 'Your IP Here'}</span>
            </div>
            <hr />
            <div className="card">
                <h2>Your location</h2>
                <span className='result'>{location.country ? location.country : 'Country'}, {location.city ? location.city : 'City'}</span>
            </div>
            <hr />
            <div className="card">
                <h2>timezone</h2>
                <span className='result'>UTC{timezone ? timezone : ' timezone'}</span>
            </div>
            <hr />
            <div className="card">
                <h2>ISP</h2>
                <span className='result'>{isp ? isp : "Your ISP Here"}</span>
            </div>
        </div>
    )
}

export default InfoCard;