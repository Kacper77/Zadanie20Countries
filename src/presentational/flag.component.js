import React from 'react';

const CountryFlag = (props) => (
    <div className="country-logo-wrapper">
        <img className="country-logo" src={props.country.flag} alt="country photo" />
    </div>
);

export default CountryFlag;