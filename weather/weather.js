const axios = require('axios');

const getWeather = async(lat, lng) => {

	let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5723cdd0ee75c3fed614195a958503e4`);

	return resp.data.main.temp;
}

module.exports = {
	getWeather
}