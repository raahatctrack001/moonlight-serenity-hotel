import { Country, State, City } from 'country-state-city';

export const useCountryStateCity = ()=>{
    const getCountryByCode = (countryCode: string) => {
        return Country.getAllCountries().find(country => country.isoCode === countryCode);        
    }
    console.log("get country by code:", getCountryByCode);

    const getStateByCode = (countryCode: string, stateCode: string) => {
        return State.getAllStates().find(state => state.countryCode == countryCode && state.isoCode === stateCode)
    }
    console.log("get state by code: ", getStateByCode);

    const getCountryStates = (countryCode: string)=>{
        return State.getAllStates().filter(state=>state.countryCode === countryCode);
    }
    console.log("get country states", getCountryStates);
    
    const getStateCity = (countryCode: string, stateCode: string) => {
        return City.getAllCities().filter(city => city.countryCode === countryCode && city.stateCode == stateCode);
    }
    console.log("get state by city", getStateCity);
    
    return {
        getAllCountries: Country.getAllCountries(),
        getCountryByCode,
        getStateByCode,
        getCountryStates,
        getStateCity,
    }
}

export default useCountryStateCity;
