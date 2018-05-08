export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRY = 'GET_COUNTRY';
export const DELETE_COUNTRY = 'DELETE_COUNTRY';
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
export const SET_CONTINENT = 'SET_CONTINENT';


export function getCountries() {
    return {
        type: GET_COUNTRIES
    }
}

export function deleteCountry(alpha2Code) {
    return {
        type: DELETE_COUNTRY,
        alpha2Code
    };
}

export function getCountry(alpha2Code) {
    return {
        type: GET_COUNTRY,
        alpha2Code
    }
}

export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}