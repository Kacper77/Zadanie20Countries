import React from 'react';

const CountryDetails = (props) => (
    <div className="country-wrapper">
        <header>
            <img className="country-photo" src={props.country.flag} alt="country photo" />
        </header>
        <div className="country-info">
            <h1>{props.country.name}</h1>
            <h2>Kontynent: {props.country.region}</h2>

            <div className="info">
                <div>
                    <span>{props.country.population}</span>
                    <span>Ludność[mln]</span>
                </div>

                <div>
                    <span>{props.country.capital}</span>
                    <span>Stolica</span>
                </div>

                <div>
                    <span>{props.country.currencies}</span>
                    <span>Waluta</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;