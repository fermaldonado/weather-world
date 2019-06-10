const axios = require('axios');

const getPlaceLatLng = async(address) => {
	const addressEncoded = encodeURI(address);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ addressEncoded }`,
		headers: {'X-RapidAPI-Key':'d3b3e25a0emsh223ab168dac0d2dp151027jsn1c372da59033'}
	});
	
	const resp = await instance.get();

	if ( resp.data.Results.length === 0 ) {
		throw new Error(`No results for ${addressEncoded }`);
	}

	const data = resp.data.Results[0];
	const dir = data.name;
	const lat = data.lat;
	const lng = data.lon;

	return {
		dir,
		lat,
		lng
	}

	/* let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}&key=AIzaSyD-er6_YEnx0IXDPyGpyWFr6hS4FfjSnGE`);

	let location = resp.data.results[0];
	let coords = location.geometry.location;

	return {
		address: location.formatted_address,
		lat: coords.lat,
		lng: coords.lng
	} */
}

module.exports = {
	getPlaceLatLng
}


