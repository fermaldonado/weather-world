const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
	address: {
		alias: 'd',
		desc: 'Address of the city to get weather',
		demmand: true
	}
})
.help()
.argv;

let getInfo = async({address}) => {
	try{
		let coords = await place.getPlaceLatLng(address);
		let temp = await weather.getWeather(coords.lat, coords.lng);

		return `Weather in ${ coords.dir } is ${ temp } `;
	}catch(e){
		return `Can't get weather in ${ address }`;
	}
}

getInfo(argv)
	.then(console.log)
	.catch(console.log);
