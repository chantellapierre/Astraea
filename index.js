'use strict';

//Global variables

const APIKey = '644dec4c49bc4684aa8b3125f927cc13';

const geoLocationAstronomyUrl = 'https://api.ipgeolocation.io/astronomy';

//Get sunrise, sunset
function getSun(latitude, longitude, date) {
	const params = {
		key: APIKey,
		lat: latitude,
		long: longitude,
		date: date
	};

    const sunQueryString = formatQuery(params);
    
    const url = 
}
