const axios = require('axios');

const getPlaceLatLng = async(address) => {
	let addressEncoded = encodeURI(address);


	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressEncoded}&key=AIzaSyD-er6_YEnx0IXDPyGpyWFr6hS4FfjSnGE`);

	let location = resp.data.results[0];
	let coords = location.geometry.location;

	return {
		address: location.formatted_address,
		lat: coords.lat,
		lng: coords.lng
	}
}

module.exports = {
	getPlaceLatLng
}
